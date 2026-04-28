# Saio templates feature — implementation plan

Drafted 2026-04-28. Implement when the Mac app source is available.

## Goal

Same audio, different AI lens. Saio analyzes a recording differently depending on what kind of meeting it is. The user picks a template at recording time; Saio's post-recording analysis follows that template's structure.

This is the most defensible feature Saio can have versus generic transcription tools (Granola, Otter, etc.). Generic transcription gets cheaper every year. A library of well-tuned domain-specific analysis prompts is durable.

## Concept

A **template** is:
- A name + icon + description
- A system prompt sent to Claude during analysis
- An expected output schema (sections like Action Items, Quotes, BANT, etc.)
- An "isActive" toggle controlled by the user

Built-in templates ship with the app and cannot be edited.
Free users can also add 1 custom template (full prompt control).
Pro users can add unlimited custom templates.

## Data model

```
Template {
  id: string                  // stable id, e.g. "builtin.one-on-one"
  name: string
  description: string
  icon: string                // SF Symbol name
  isBuiltIn: bool             // built-ins are read-only
  analysisPrompt: string      // sent to Claude as system prompt
  outputSections: Section[]   // structured output schema
  isActive: bool              // shows up in recording picker
  createdAt, updatedAt
}

Section {
  id: string
  title: string               // e.g. "Action Items"
  description: string         // for Claude: how to fill this section
  format: "list" | "paragraphs" | "table" | "quotes"
}

Recording {
  ...existing fields
  templateId: string          // captured at recording time
  analysisOutput: { sectionId: string; content: string }[]
}
```

## Built-in template library (v1)

Ship with these 8. Each has a curated analysis prompt and section list.

### 1. One-on-one
**For:** manager + direct report check-ins.
**Sections:** What was raised, Action items by person, Career and growth signals, Mood and blockers, Follow-ups for next time.
**Prompt focus:** Track action items by who owns them. Flag career growth conversations. Surface unspoken blockers (frustration, hesitation in the audio).

### 2. User research / interview
**For:** product discovery, usability testing.
**Sections:** Pain points by feature, Feature requests, Surprising behaviors, Direct quotes, Hypotheses to test next.
**Prompt focus:** Capture quotes verbatim with timestamp. Distinguish what users say from what they do. Flag any "I would pay for this" type signals.

### 3. Sales discovery call
**For:** qualifying prospects.
**Sections:** BANT (Budget, Authority, Need, Timeline), Objections raised, Decision-makers mentioned, Competition mentioned, Next step committed.
**Prompt focus:** Score each BANT dimension. Pull out specific objection language for sales rebuttal practice.

### 4. Sales demo / pitch
**For:** demos and pitches.
**Sections:** Questions asked, Reactions to features (positive/negative), Concerns raised, Buying signals, Follow-ups requested.
**Prompt focus:** Track the prospect's engagement throughout the call (which features got reactions, which got silence).

### 5. Hiring interview
**For:** candidate interviews.
**Sections:** Strengths demonstrated, Concerns / areas to probe, Fit signals (culture, role, level), Suggested next round questions, Recommendation (lean hire, lean no, strong hire, strong no).
**Prompt focus:** Avoid first-impression bias, weight concrete examples over claims.

### 6. Standup / team sync
**For:** daily standups.
**Sections:** Per-person update (yesterday, today, blockers), Cross-team handoffs, Action items, Decisions made.
**Prompt focus:** Short, structured. Identify each speaker.

### 7. Brainstorm / workshop
**For:** unstructured ideation sessions.
**Sections:** Ideas generated, Themes that emerged, Decisions made, Parking lot (deferred topics), Next steps.
**Prompt focus:** Don't filter ideas; capture the wild ones too. Group by theme.

### 8. Retrospective
**For:** team retros.
**Sections:** What went well, What didn't, What we learned, Action items with owners, Themes and patterns.
**Prompt focus:** Surface unspoken tension. Distinguish individual concerns from team-wide patterns.

### Worth considering for v2
- Coaching session
- Investor pitch
- Doctor appointment / medical encounter
- Lecture / class notes
- Voice memo / journaling
- Client status review

## Custom templates

Free tier: 1 custom template slot.
Pro tier: unlimited.

Custom template editor in Settings:
- Name, icon
- Description
- Analysis prompt (multi-line text area, with token counter)
- Sections (add/remove, set title + format)
- Live preview against a sample transcript

When the user hits the limit:
- Free user trying to add a 2nd custom: paywall modal with Pro upsell.
- Existing custom template can be edited or deleted, even on Free.

## Settings UX

New top-level section "Templates" alongside the existing settings sections.

Layout:
```
┌─────────────────────────────────────────┐
│ Templates                               │
│                                         │
│ Active templates appear when you start  │
│ a recording. Toggle the ones you use.   │
│                                         │
│ Built-in                                │
│   [✓] One-on-one         > details      │
│   [✓] User research      > details      │
│   [ ] Sales discovery    > details      │
│   [ ] Sales demo         > details      │
│   [ ] Hiring interview   > details      │
│   [ ] Standup            > details      │
│   [ ] Brainstorm         > details      │
│   [ ] Retrospective      > details      │
│                                         │
│ Custom (1/1 used — upgrade for more)    │
│   [✓] My custom template > edit         │
│   [+ New custom template] (locked)      │
└─────────────────────────────────────────┘
```

Click a built-in row > sheet showing description, sections, sample output. Read-only.
Click a custom row > full editor.

## Recording UX

Two cases:

### Case A: only one active template
Click "Start recording" > recording starts immediately. Template name shown in a subtle badge in the recording UI.

### Case B: 2+ active templates
Click "Start recording" > small chooser sheet appears. Cards for each active template, last-used pinned to top, keyboard shortcuts 1/2/3 to pick fast.

```
┌─────────────────────────────────────────┐
│ Choose template                         │
│                                         │
│  [1] One-on-one         (last used)     │
│  [2] User research                      │
│  [3] Sales discovery                    │
│                                         │
│  ESC to cancel                          │
└─────────────────────────────────────────┘
```

The keyboard-first pattern is important — users record several meetings a day, picking has to feel instant.

## Backward compatibility

Existing recordings (built before templates landed):
- Treated as if they used a default "Generic meeting" template
- Their existing analysis output stays
- "Re-analyze with template" action available in the recording detail view (re-runs Claude with a chosen template's prompt)

## Pricing tier rules

| Feature | Free | Pro |
|---|---|---|
| Built-in templates (use) | All available | All available |
| Custom templates | 1 | Unlimited |
| Re-analyze existing recording with different template | 5/month | Unlimited |

## Implementation order

1. Data model + persistence (Templates table, recordings.templateId).
2. Built-in template definitions + their analysis prompts. This is the most product-sensitive step; each prompt needs careful tuning. Test each on 2-3 real recordings of that meeting type before shipping.
3. Settings UI with the active toggle. Read-only detail sheet for built-ins.
4. Recording flow with template chooser when 2+ are active.
5. Custom template editor (with sections editor).
6. Re-analyze with different template (recording detail view).
7. Free/Pro tier gating + upsell modal.

## Open questions for when we have the source

1. Where does the analysis prompt live today (Swift constants, separate JSON, server-side)?
2. Is analysis run client-side in the Mac app via direct Anthropic API calls, or via your backend?
3. What persistent storage layer is used for recordings (Core Data, SwiftData, SQLite, JSON files)?
4. Is there already a notion of "recording metadata" the templates can hook into?
5. Does the Mac app already have a Pro tier check, or is everything free today?

Drop the source on GitHub (private repo is fine) and I can answer these from the code, then we plan the build commit by commit.

## Related

- Saio marketing site (this repo): branding, copy
- This plan: feature design only, not yet implemented
