// Central translation dictionary.
//
// The site runs fully in English for now. Every string the components
// render lives here instead of inline in the markup, so adding the
// language switch later is just: pick `lang` from the URL (see utils.ts)
// instead of hardcoding "en", and add a toggle in <Nav />.

export const languages = {
  en: 'English',
  fr: 'Français',
} as const;

export const defaultLang = 'en';

export const ui = {
  en: {
    meta: {
      title: 'Yamil Issa — Software Engineer',
      description:
        "Yamil Issa — Software engineer working in TypeScript, PHP and Rust, available for freelance work in the Paris region.",
    },
    nav: {
      status: 'available — freelance',
      links: {
        about: 'about',
        stack: 'stack',
        work: 'work',
        contact: 'contact',
      },
    },
    hero: {
      boot: [
        '> establishing connection...',
        '> identity: Yamil Issa',
        '> role: software engineer',
        '> status: available_freelance',
      ],
      role: 'Software Engineer',
      roleSub: 'TypeScript · PHP · Rust',
      pitch:
        "A sofware engineert committed to designing reliable solutions tailored to business needs, with a strong focus on the quality and maintainability of applications. Based in Villejuif, available for freelance work across the Paris region.",
      ctaWork: 'view my work',
      ctaContact: 'get in touch',
      scroll: 'scroll',
    },
    about: {
      fileLabel: 'file_01',
      eyebrow: 'about',
      lead: "Five years spent shipping the unglamorous work that keeps a product standing: multitenant architecture, internal tooling, APIs that hold up under real traffic.",
      body: [
        "I'm Yamil, a software engineer based in Villejuif. Over five years at Leaneous, I finalized and shipped the multitenant architecture behind an online art valuation platform, fixing every bug tied to the migration. I also built a NestJS API serving a 3,000+ reference product catalog, and automated supplier invoicing and lead qualification, cutting processing time by 70% and lifting qualification speed and quality by 80%.",
        "These days I work freelance, open to missions and full-time roles across the Paris region. Native French, professional English (C1).",
      ],
    },
    stack: {
      fileLabel: 'file_02',
      eyebrow: 'stack',
      groups: [
        { label: 'languages', items: ['JavaScript / TypeScript', 'PHP', 'Rust'] },
        { label: 'frontend', items: ['React', 'Next.js', 'Vue.js'] },
        { label: 'backend', items: ['Node.js / Express', 'NestJS', 'Symfony', 'GraphQL'] },
        { label: 'mobile', items: ['React Native', 'Flutter'] },
        { label: 'data', items: ['MySQL', 'MongoDB', 'Firebase'] },
        { label: 'infra / tooling', items: ['Docker', 'Git', 'GitLab CI/CD', 'Postman', 'Render'] },
      ],
    },
    projects: {
      fileLabel: 'file_03',
      eyebrow: 'work',
      items: [
        {
          id: '01',
          name: 'Kirby Samurai',
          status: 'deployed',
          description:
            'A real-time reflex duel playable as a Discord Activity. Vanilla TypeScript and the Canvas API on the client, a custom binary protocol on top of native WebSockets on the server (Bun).',
          tags: ['TypeScript', 'Canvas API', 'Bun', 'WebSockets', 'Discord SDK'],
          href: 'https://github.com/yamil-issa/kirby-samurai-web',
        },
        {
          id: '02',
          name: 'Messaging Platform',
          status: 'deployed',
          description:
            'A real-time messaging platform built entirely in TypeScript: NestJS, GraphQL and Redis on the backend, React on the front. Deployed continuously to Render with Docker Compose.',
          tags: ['TypeScript', 'NestJS', 'GraphQL', 'Redis', 'React', 'Docker'],
          href: 'https://react-app-latest-4tgy.onrender.com',
        },
        {
          id: '03',
          name: 'CRM Automation & Tooling',
          status: 'client work',
          description:
            'Custom PHP scripts and Dolibarr CRM modules built to automate supplier invoicing and track internal performance, with reporting dashboards tied into daily operations.',
          tags: ['PHP', 'Dolibarr', 'Automation'],
          href: null,
        },
        {
          id: '04',
          name: 'Fairfix.fr',
          status: 'client work',
          description:
            'Extensive WordPress development for Fairfix, a computer-repair shop: custom functionality and catalog integration on top of the CMS.',
          tags: ['WordPress', 'PHP'],
          href: 'https://www.fairfix.fr',
        },
        {
          id: '05',
          name: 'Self-hosted Music Server',
          status: 'personal',
          description:
            'A self-hosted music streaming setup built on Navidrome, running on a Hetzner VPS with an automated import pipeline via yt-dlp and a Rust API layer managing audio streams.',
          tags: ['Rust', 'Navidrome', 'Docker', 'VPS'],
          href: '#',
        },
      ],
    },
    contact: {
      fileLabel: 'file_04',
      eyebrow: 'contact',
      ctaLines: ["Got a mission, a project,", 'or just want to talk'],
      links: [
        { label: 'github', href: 'https://github.com/yamil-issa' },
        { label: 'linkedin', href: 'https://www.linkedin.com/in/yamil-issa-16b41939a/' },
        { label: 'email', href: 'mailto:issayamilrt@gmail.com' },
      ],
      systemStatus: 'system online',
    },
  },
  fr: {
    meta: {
      title: 'Yamil Issa — Ingénieur Logiciel',
      description:
        "Yamil Issa — Ingénieur logiciel TypeScript, PHP et Rust, disponible en freelance en Île-de-France.",
    },
    nav: {
      status: 'disponible — freelance',
      links: {
        about: 'à propos',
        stack: 'stack',
        work: 'projets',
        contact: 'contact',
      },
    },
    hero: {
      boot: [
        '> établissement de la connexion...',
        '> identité: Yamil Issa',
        '> fonction: ingénieur logiciel',
        '> statut: disponible_freelance',
      ],
      role: 'Ingénieur Logiciel',
      roleSub: 'TypeScript · PHP · Rust',
      pitch:
        "Développeur fullstack attaché à la conception de solutions fiables et adaptées aux besoins métiers, avec une exigence élevée sur la qualité et la maintenabilité des applications.",
      ctaWork: 'voir mes projets',
      ctaContact: 'me contacter',
      scroll: 'scroll',
    },
    about: {
      fileLabel: 'file_01',
      eyebrow: 'à propos',
      lead: "Cinq ans passés sur le travail qui fait tenir un produit debout : architecture multitenant, outillage interne, API qui tiennent sous une vraie charge.",
      body: [
        "Je m'appelle Yamil, ingénieur logiciel basé à Villejuif. En cinq ans chez Leaneous, j'ai finalisé et mis en production l'architecture multitenant d'une plateforme d'estimation d'œuvres d'art en environ deux mois, en corrigeant tous les bugs liés à la migration. J'ai aussi construit une API NestJS exposant un catalogue de plus de 3 000 références, et automatisé la facturation fournisseurs ainsi que la qualification de leads, réduisant le temps de traitement de 70 % et améliorant la vitesse et la qualité de qualification de 80 %.",
        "Aujourd'hui je travaille en freelance, ouvert aux missions comme aux postes en CDI sur l'Île-de-France. Français natif, anglais professionnel (C1).",
      ],
    },
    stack: {
      fileLabel: 'file_02',
      eyebrow: 'stack',
      groups: [
        { label: 'langages', items: ['JavaScript / TypeScript', 'PHP', 'Rust'] },
        { label: 'frontend', items: ['React', 'Next.js', 'Vue.js'] },
        { label: 'backend', items: ['Node.js / Express', 'NestJS', 'Symfony', 'GraphQL'] },
        { label: 'mobile', items: ['React Native', 'Flutter'] },
        { label: 'données', items: ['MySQL', 'MongoDB', 'Firebase'] },
        { label: 'infra / outils', items: ['Docker', 'Git', 'GitLab CI/CD', 'Postman', 'Render'] },
      ],
    },
    projects: {
      fileLabel: 'file_03',
      eyebrow: 'projets',
      items: [
        {
          id: '01',
          name: 'Kirby Samurai ',
          status: 'deployé',
          description:
            "Duel de réflexes en temps réel jouable en Discord Activity. Rendu Canvas en TypeScript vanilla côté client, protocole binaire maison au-dessus de WebSockets natifs côté serveur (Bun).",
          tags: ['TypeScript', 'Canvas API', 'Bun', 'WebSockets', 'Discord SDK'],
          href: 'https://github.com/yamil-issa/kirby-samurai-web',
        },
        {
          id: '02',
          name: 'Plateforme de messagerie',
          status: 'déployé',
          description:
            "Plateforme de messagerie en temps réel entièrement en TypeScript : NestJS, GraphQL et Redis côté serveur, React côté client. Déployée en continu sur Render avec Docker Compose.",
          tags: ['TypeScript', 'NestJS', 'GraphQL', 'Redis', 'React', 'Docker'],
          href: 'https://react-app-latest-4tgy.onrender.com',
        },
        {
          id: '03',
          name: 'Automatisation & outillage CRM',
          status: 'mission client',
          description:
            "Scripts PHP sur mesure et modules Dolibarr développés pour automatiser la facturation fournisseurs et suivre la performance interne, avec des tableaux de bord intégrés aux opérations quotidiennes.",
          tags: ['PHP', 'Dolibarr', 'Automatisation'],
          href: null,
        },
        {
          id: '04',
          name: 'Fairfix.fr',
          status: 'mission client',
          description:
            "Développement WordPress conséquent pour Fairfix, un magasin de réparation de matériel informatique : fonctionnalités sur mesure et intégration du catalogue au-dessus du CMS.",
          tags: ['WordPress', 'PHP'],
          href: 'https://www.fairfix.fr',
        },
        {
          id: '05',
          name: 'Serveur de musique self-hosted',
          status: 'perso',
          description:
            "Serveur de streaming musical self-hosted basé sur Navidrome, sur un VPS Hetzner, avec un pipeline d'import automatisé via yt-dlp et une couche API en Rust pour la gestion des flux audio.",
          tags: ['Rust', 'Navidrome', 'Docker', 'VPS'],
          href: '#',
        },
      ],
    },
    contact: {
      fileLabel: 'file_04',
      eyebrow: 'contact',
      ctaLines: ['Une mission, un projet,', "ou juste envie d'en discuter"],
      links: [
        { label: 'github', href: 'https://github.com/yamil-issa' },
        { label: 'linkedin', href: 'https://www.linkedin.com/in/yamil-issa-16b41939a/' },
        { label: 'email', href: 'mailto:issayamilrt@gmail.com' },
      ],
      systemStatus: 'système en ligne',
    },
  },
} as const;

export type Lang = keyof typeof ui;
