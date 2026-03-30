/**
 * Legacy SEO helper (Vite/React Router).
 *
 * Le projet a migré vers Next.js (App Router) : SEO/OG est maintenant géré
 * via `metadata` / `generateMetadata` dans `src/app/**`.
 *
 * On garde ce composant en noop pour éviter les imports résiduels.
 */
export function SEOHead() {
  return null;
}
