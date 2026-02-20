// translations.js - Add before your other scripts
const translations = {
    en: {
        // Navigation
        nav_logs: "Saio",
        nav_contact: "Contact",
        nav_download: "download",

        // Hero Section
        hero_title: "Never miss a beat. Or a brilliant idea. Or that thing Sarah said.",
        hero_subtitle: "Record your meetings, get instant summaries, and finally remember what actually happened in that 2-hour call.",

        // Mission Section
        mission_text: "You know the drill: Back-to-back meetings, frantic note-taking, and somehow you still can't remember who agreed to what. You're either scribbling notes like a mad scientist or you're fully present but walking out with zero actionable takeaways. And let's not even talk about those \"wait, what did we decide?\" Slack messages the next day. There's got to be a better way; and surprise, there is.",

        // Features
        feature1_title: "Getting Started Is Stupidly Simple",
        feature1_subtitle: "From zero to recording in 3 seconds flat",
        feature1_desc: "Tap once. That's it. No complicated setup, no connecting twelve different tools, no software engineering degree required. Open the app, hit record, and you're capturing your meeting. Your future self will thank you.",

        feature2_title: "Invisible Recording, Visible Results",
        feature2_subtitle: "We work in the background, you work in the room",
        feature2_desc: "Once you hit record, we disappear. No distracting interfaces, no red blinking lights, no robotic \"THIS MEETING IS BEING RECORDED\" voice. Just a discreet little indicator that we're catching every word while you stay locked in on the conversation. Because the best meetings happen when you're present, not panicking about your notes.",

        feature3_title: "Your Meeting Archive, Finally Organized",
        feature3_subtitle: "All your brilliance, in one beautiful place",
        feature3_desc: "Every recording lives here, neatly organized with its AI-powered summary, key highlights, and action items. Need to revisit that pricing discussion from last Tuesday? It's right here. Want to add notes? Go wild. Consider this your meeting memory palace, except you don't have to be Sherlock to use it.",

        feature4_title: "The Future Is Already Here (Almost)",
        feature4_subtitle: "Coming soon: Your meetings, on your wrist",
        feature4_desc: "We're cooking up some seriously cool features, starting with Apple Watch connectivity. Imagine starting and stopping recordings right from your wrist, getting quick summaries on the go, and never pulling out your phone during meetings. The future is hands-free, and we're bringing it to you.",

        // Benefits Section
        benefits_title: "Why your meetings are about to get a whole lot better",
        benefits_desc: "Stop splitting your attention between listening and note-taking. Stop asking \"can you repeat that?\" Stop losing brilliant ideas in the void. With automatic recordings, AI-powered summaries, and searchable highlights, you'll actually remember what happened, follow up on what matters, and maybe even enjoy your meetings a little more. (Okay, we can't promise miracles, but we're pretty close.)",
        benefit1: "🎯 Never miss important details again",
        benefit2: "🧠 Free up your brain to actually think",
        benefit3: "⚡ Get instant, actionable summaries",
        benefit4: "🔍 Search and find any meeting moment",
        benefit5: "🤝 Share key takeaways with your team",
        benefit6: "⏰ Save hours of \"wait, what did we say?\" time",

        // CTA Section
        cta_title: "Ready to <br /> remember everything?",
        cta_desc: "Download now and get 5 meetings free per month. No strings attached, no awkward commitments.",

        // Buttons
        btn_appstore_line1: "Get it on the",
        btn_appstore_line2: "App Store",

        // Footer
        footer_copyright: "Saio © 2026",
        footer_privacy: "Privacy Policy",

        // Privacy Policy
        pp_title: "Privacy Policy",
        pp_updated: "Last updated: February 19, 2026",
        pp_intro: "Saio (\"we\", \"our\", \"us\") operates the Saio mobile application. This Privacy Policy explains how we collect, use, and protect your information.",

        pp_collect_title: "Information We Collect",
        pp_collect_account: "Account Information: Email address and name when you create an account or sign in with Google.",
        pp_collect_audio: "Audio Recordings: When you record a meeting, audio is captured by your device microphone and sent to our secure servers for processing.",
        pp_collect_meeting: "Meeting Data: Transcripts and AI-generated summaries are stored in your personal account.",
        pp_collect_sub: "Subscription Data: Purchase and subscription status managed through Apple's App Store.",

        pp_use_title: "How We Use Your Information",
        pp_use_1: "To provide transcription and summarization services",
        pp_use_2: "To authenticate your account",
        pp_use_3: "To manage your subscription",
        pp_use_4: "To improve our services",

        pp_audio_title: "Audio Data",
        pp_audio_desc: "Audio recordings are sent to our secure servers exclusively for transcription. Audio files are deleted immediately after processing. We do not store, share, or sell your audio recordings.",

        pp_storage_title: "Data Storage",
        pp_storage_desc: "Your account data, transcripts, and summaries are stored securely using Google Firebase infrastructure located in the European Union. Data is associated with your user account and accessible only by you.",

        pp_third_title: "Third-Party Services",
        pp_third_desc: "We use the following third-party services to operate the App:",
        pp_third_1: "Google Firebase (authentication, database, cloud functions)",
        pp_third_2: "OpenAI (audio transcription via Whisper)",
        pp_third_3: "Anthropic (meeting summarization via Claude)",
        pp_third_bound: "These services process data on our behalf and are bound by their respective privacy policies.",

        pp_sharing_title: "Data Sharing",
        pp_sharing_desc: "We do not sell, rent, or share your personal data with third parties for marketing purposes. Data is only shared with the third-party services listed above, solely to provide the App's functionality.",

        pp_rights_title: "Your Rights",
        pp_rights_desc: "You may:",
        pp_rights_1: "Access your data at any time through the App",
        pp_rights_2: "Delete your account and all associated data from the Settings page",
        pp_rights_3: "Request information about your data by contacting us",

        pp_children_title: "Children's Privacy",
        pp_children_desc: "Saio is not intended for children under 13. We do not knowingly collect data from children.",

        pp_changes_title: "Changes to This Policy",
        pp_changes_desc: "We may update this Privacy Policy from time to time. We will notify users of significant changes through the App.",

        pp_contact_title: "Contact Us",
        pp_contact_desc: "If you have questions about this Privacy Policy, contact us at support@saio-app.com.",

        // Support Page
        support_title: "Support",
        support_desc: "Need help with Saio? We're here to help.",
        support_contact_title: "Contact Us",
        support_contact_desc: "Send us an email at support@saio-app.com and we'll get back to you as soon as possible.",
        support_faq_title: "Frequently Asked Questions",
        support_faq_1_q: "How do I record a meeting?",
        support_faq_1_a: "Open the app and tap the record button on the home screen. Saio will start capturing audio immediately. Tap stop when you're done, and we'll generate a transcript and summary automatically.",
        support_faq_2_q: "Is my audio stored?",
        support_faq_2_a: "No. Audio files are deleted immediately after transcription. Only the text transcript and AI-generated summary are saved to your account.",
        support_faq_3_q: "How do I cancel my subscription?",
        support_faq_3_a: "Go to your iPhone Settings > Apple ID > Subscriptions > Saio, and tap Cancel Subscription. Your Pro features will remain active until the end of the current billing period.",
        support_faq_4_q: "How do I delete my account?",
        support_faq_4_a: "Go to Settings in the app, scroll to the bottom, and tap \"Delete account\". This will permanently remove all your data including meeting logs, transcripts, and summaries.",
        support_back: "Back to home",

        // Images (specify different images per language)
        images: {
            logo_sassy: "img/logo-sassy-en.jpg",
            logo_text: "img/logo-text-en.svg",
            header_1: "img/header-1-en.png",
            header_4: "img/header-4-en.png",
            ui_home_video: "img/ui_home_fr.mp4",
            ui_home_img: "img/ui_home_en.jpg",
            ui_logs_video: "img/ui_logs_fr.mp4",
            ui_logs_img: "img/ui_logs_en.jpg",
            ui_rec_video: "img/ui_rec_fr.mp4",
            ui_rec_img: "img/ui_rec.jpg",
            ui_future: "img/ui_future.jpg",
            get_it: "img/get-it-en.png",
        }
    },

    fr: {
        // Navigation
        nav_logs: "Saio",
        nav_contact: "Contact",
        nav_download: "télécharger",

        // Hero Section
        hero_title: "Ne ratez plus jamais une idée. Ni une suggestion brillante. Ni ce que Sarah a dit.",
        hero_subtitle: "Enregistrez vos réunions, obtenez des résumés instantanés, et souvenez-vous enfin de ce qui s'est vraiment passé dans cet appel de 2 heures.",

        // Mission Section
        mission_text: "Vous connaissez la chanson : enchaîner les réunions, prise de notes frénétique, et pourtant vous ne vous souvenez toujours pas de qui a accepté quoi. Soit vous griffonnez comme un savant fou, soit vous êtes pleinement présent mais vous sortez sans aucune action concrète. Et ne parlons même pas des messages Slack \"attends, on a décidé quoi hier déjà ?\" le lendemain. Il doit bien y avoir une meilleure façon—et surprise, elle existe.",

        // Features
        feature1_title: "Démarrer est ridiculement simple",
        feature1_subtitle: "De zéro à l'enregistrement en 3 secondes chrono",
        feature1_desc: "Un seul tap. C'est tout. Pas de configuration compliquée, pas besoin de connecter douze outils différents, pas de diplôme d'ingénieur requis. Ouvrez l'app, appuyez sur enregistrer, et vous capturez votre réunion. Votre moi du futur vous remerciera.",

        feature2_title: "Enregistrement invisible, résultats visibles",
        feature2_subtitle: "On bosse en arrière-plan, vous bossez dans la salle",
        feature2_desc: "Une fois que vous lancez l'enregistrement, on disparaît. Pas d'interface distrayante, pas de lumière rouge clignotante, pas de voix robotique qui annonce \"CETTE RÉUNION EST ENREGISTRÉE\". Juste un petit indicateur discret qui montre qu'on capte chaque mot pendant que vous restez concentré sur la conversation. Parce que les meilleures réunions arrivent quand vous êtes présent, pas paniqué par vos notes.",

        feature3_title: "Vos archives de réunions, enfin organisées",
        feature3_subtitle: "Toute votre brillance, au même endroit",
        feature3_desc: "Chaque enregistrement vit ici, bien organisé avec son résumé généré par IA, ses points clés et ses actions à mener. Besoin de revoir cette discussion sur les tarifs de mardi dernier ? C'est juste là. Envie d'ajouter des notes ? Lâchez-vous. Considérez ça comme votre palais de mémoire pour réunions—sauf que vous n'avez pas besoin d'être Sherlock pour l'utiliser.",

        feature4_title: "Le futur est déjà là (enfin, presque)",
        feature4_subtitle: "Bientôt : vos réunions, sur votre poignet",
        feature4_desc: "On prépare des fonctionnalités vraiment cool, en commençant par la connectivité Apple Watch. Imaginez démarrer et arrêter vos enregistrements directement depuis votre poignet, obtenir des résumés rapides en déplacement, et ne jamais sortir votre téléphone pendant les réunions. Le futur est mains-libres, et on vous l'apporte.",

        // Benefits Section
        benefits_title: "Pourquoi vos réunions vont devenir bien meilleures",
        benefits_desc: "Arrêtez de partager votre attention entre écouter et prendre des notes. Arrêtez de demander \"tu peux répéter ça ?\". Arrêtez de perdre des idées brillantes dans le vide. Avec des enregistrements automatiques, des résumés générés par IA, et des points clés recherchables, vous vous souviendrez vraiment de ce qui s'est passé, suivrez ce qui compte, et apprécierez peut-être même un peu plus vos réunions. (Ok, on ne peut pas promettre de miracles, mais on en est pas loin.)",
        benefit1: "🎯 Ne ratez plus jamais les détails importants",
        benefit2: "🧠 Libérez votre cerveau pour vraiment réfléchir",
        benefit3: "⚡ Obtenez des résumés instantanés et actionnables",
        benefit4: "🔍 Recherchez et retrouvez n'importe quel moment",
        benefit5: "🤝 Partagez les points clés avec votre équipe",
        benefit6: "⏰ Économisez des heures de \"attends, on a dit quoi ?\"",

        // CTA Section
        cta_title: "Prêt à impressionner <br /> tes collègues bavards ?",
        cta_desc: "Téléchargez maintenant et obtenez 5 réunions gratuites par mois. Sans engagement, sans complications.",

        // Buttons
        btn_appstore_line1: "Télécharger sur",
        btn_appstore_line2: "App Store",

        // Footer
        footer_copyright: "Saio © 2026",
        footer_privacy: "Politique de Confidentialité",

        // Privacy Policy
        pp_title: "Politique de Confidentialité",
        pp_updated: "Dernière mise à jour : 19 février 2026",
        pp_intro: "Saio (« nous », « notre ») exploite l'application mobile Saio. Cette Politique de Confidentialité explique comment nous collectons, utilisons et protégeons vos informations.",

        pp_collect_title: "Informations collectées",
        pp_collect_account: "Informations de compte : Adresse email et nom lors de la création de votre compte ou de la connexion via Google.",
        pp_collect_audio: "Enregistrements audio : Lorsque vous enregistrez une réunion, l'audio est capturé par le microphone de votre appareil et envoyé à nos serveurs sécurisés pour traitement.",
        pp_collect_meeting: "Données de réunion : Les transcriptions et résumés générés par IA sont stockés dans votre compte personnel.",
        pp_collect_sub: "Données d'abonnement : Statut d'achat et d'abonnement géré via l'App Store d'Apple.",

        pp_use_title: "Utilisation de vos informations",
        pp_use_1: "Pour fournir les services de transcription et de résumé",
        pp_use_2: "Pour authentifier votre compte",
        pp_use_3: "Pour gérer votre abonnement",
        pp_use_4: "Pour améliorer nos services",

        pp_audio_title: "Données audio",
        pp_audio_desc: "Les enregistrements audio sont envoyés à nos serveurs sécurisés exclusivement pour la transcription. Les fichiers audio sont supprimés immédiatement après le traitement. Nous ne stockons, ne partageons ni ne vendons vos enregistrements audio.",

        pp_storage_title: "Stockage des données",
        pp_storage_desc: "Vos données de compte, transcriptions et résumés sont stockés en toute sécurité via l'infrastructure Google Firebase située dans l'Union européenne. Les données sont associées à votre compte utilisateur et accessibles uniquement par vous.",

        pp_third_title: "Services tiers",
        pp_third_desc: "Nous utilisons les services tiers suivants pour faire fonctionner l'application :",
        pp_third_1: "Google Firebase (authentification, base de données, cloud functions)",
        pp_third_2: "OpenAI (transcription audio via Whisper)",
        pp_third_3: "Anthropic (résumé de réunion via Claude)",
        pp_third_bound: "Ces services traitent les données en notre nom et sont liés par leurs politiques de confidentialité respectives.",

        pp_sharing_title: "Partage des données",
        pp_sharing_desc: "Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers à des fins marketing. Les données ne sont partagées qu'avec les services tiers listés ci-dessus, uniquement pour fournir les fonctionnalités de l'application.",

        pp_rights_title: "Vos droits",
        pp_rights_desc: "Vous pouvez :",
        pp_rights_1: "Accéder à vos données à tout moment via l'application",
        pp_rights_2: "Supprimer votre compte et toutes les données associées depuis la page Paramètres",
        pp_rights_3: "Demander des informations sur vos données en nous contactant",

        pp_children_title: "Confidentialité des enfants",
        pp_children_desc: "Saio n'est pas destiné aux enfants de moins de 13 ans. Nous ne collectons pas sciemment de données auprès des enfants.",

        pp_changes_title: "Modifications de cette politique",
        pp_changes_desc: "Nous pouvons mettre à jour cette Politique de Confidentialité de temps en temps. Nous informerons les utilisateurs des changements importants via l'application.",

        pp_contact_title: "Nous contacter",
        pp_contact_desc: "Si vous avez des questions concernant cette Politique de Confidentialité, contactez-nous à support@saio-app.com.",

        // Support Page
        support_title: "Support",
        support_desc: "Besoin d'aide avec Saio ? Nous sommes là pour vous.",
        support_contact_title: "Contactez-nous",
        support_contact_desc: "Envoyez-nous un email à support@saio-app.com et nous vous répondrons dans les plus brefs délais.",
        support_faq_title: "Questions fréquentes",
        support_faq_1_q: "Comment enregistrer une réunion ?",
        support_faq_1_a: "Ouvrez l'application et appuyez sur le bouton d'enregistrement sur l'écran d'accueil. Saio commencera à capturer l'audio immédiatement. Appuyez sur stop quand vous avez terminé, et nous générerons automatiquement une transcription et un résumé.",
        support_faq_2_q: "Mon audio est-il conservé ?",
        support_faq_2_a: "Non. Les fichiers audio sont supprimés immédiatement après la transcription. Seuls la transcription textuelle et le résumé généré par IA sont sauvegardés dans votre compte.",
        support_faq_3_q: "Comment annuler mon abonnement ?",
        support_faq_3_a: "Allez dans les Réglages de votre iPhone > Identifiant Apple > Abonnements > Saio, puis appuyez sur Annuler l'abonnement. Vos fonctionnalités Pro resteront actives jusqu'à la fin de la période de facturation en cours.",
        support_faq_4_q: "Comment supprimer mon compte ?",
        support_faq_4_a: "Allez dans Paramètres dans l'application, faites défiler vers le bas et appuyez sur « Supprimer le compte ». Cela supprimera définitivement toutes vos données, y compris les journaux de réunion, les transcriptions et les résumés.",
        support_back: "Retour à l'accueil",

        // Images (French versions)
        images: {
            logo_sassy: "img/logo-sassy-en.jpg",
            logo_text: "img/logo-text-en.svg",
            header_1: "img/header-1-fr.png",
            header_4: "img/header-4-fr.png",
            ui_home_video: "img/ui_home_fr.mp4",
            ui_home_img: "img/ui_home_fr.jpg",
            ui_logs_video: "img/ui_logs_fr.mp4",
            ui_logs_img: "img/ui_logs_fr.jpg",
            ui_rec_video: "img/ui_rec_fr.mp4",
            ui_rec_img: "img/ui_rec.jpg",
            ui_future: "img/ui_future.jpg",
            get_it: "img/get-it-fr.png",
        }
    }
};
