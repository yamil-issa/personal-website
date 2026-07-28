import { ui, defaultLang, type Lang } from './ui';

// For now the whole site renders in one language, hardcoded here.
// Once routing is added (e.g. Astro's built-in i18n, or a /fr prefix),
// replace this with something like:
//
//   export function getLangFromUrl(url: URL): Lang {
//     const [, lang] = url.pathname.split('/');
//     if (lang in ui) return lang as Lang;
//     return defaultLang;
//   }
//
// ...and call it from each page with Astro.url, passing the result
// down to <Layout lang={lang} /> and every component.

export const currentLang: Lang = defaultLang;

export function getDict(lang: Lang = currentLang) {
  return ui[lang];
}
