# Naxara Labs SEO Audit and Implementation

Audit date: 2026-10-20

## Audit Scope and Findings

The repository is a Vite and React 19 single-page application using React Router 7, deployed on Vercel. Its public routes are `/`, `/about`, `/contact`, and `/thank-you`. The first three are useful public pages; `/thank-you` is a form-confirmation page and should not be indexed. No separate service pages were present or added.

Before implementation, the site had a shared title and description in `index.html`, with no route-specific canonical, robots, Open Graph, or structured-data metadata. Route content and headings were rendered by React after JavaScript loaded. A catch-all Vercel rewrite sent every URL to the SPA shell, so unknown URLs returned a homepage shell with HTTP 200. The live `robots.txt` and `sitemap.xml` also returned that HTML shell with HTTP 200 rather than their expected file formats.

The live hostname behavior was checked before deployment: `http://www.naxaralabs.com/` redirected to HTTPS with 308, `https://naxaralabs.com/` redirected to the www hostname with 307, and `/about/` remained a duplicate 200 URL. The canonical hostname is therefore set to `https://www.naxaralabs.com/`. DNS was not inspected or changed.

Homepage copy emphasized AI-led solutions but did not clearly describe static business websites, database-backed web applications/custom software, Android and iOS development, and business automation as four primary services. The existing page hierarchy uses one H1 followed by section H2s and card H3s. The logo was the only page image; it had alt text but its source PNG was approximately 1.26 MB despite being displayed at 60-70 CSS pixels. No analytics, Search Console verification, or tracking identifiers were found in the repository. There is no privacy page or portfolio evidence in the inspected site.

The contact form sends submissions to FormSubmit, asks for personal and project information, and states a 24-hour response time. That claim and the external form handling should be confirmed and covered by an appropriate privacy notice. The +91 WhatsApp number and India-first calling-code option are clues about contact setup, not confirmation of target geography.

## Changes Implemented

- Replaced the homepage hero and service descriptions with concise, accurate descriptions of the four stated service categories and intended small-business, startup, and entrepreneur audiences.
- Changed the main enquiry calls to action to crawlable internal links and kept the existing contact route.
- Added route-specific title, description, canonical, robots, Open Graph, and Twitter metadata from a shared route map. Route metadata is emitted into production HTML shells and updated during client-side navigation.
- Added build-time React rendering for all existing routes so their actual headings and content are present in the initial production HTML. The browser hydrates this markup; Vite development retains client-only rendering.
- Added Organization and WebSite JSON-LD using only the verified business name, canonical URL, and existing brand asset. No address, reviews, ratings, location, or other unsupported facts were added.
- Added `robots.txt` and a sitemap limited to `/`, `/about`, and `/contact`. Sitemap generation uses the same route metadata as page heads. `/thank-you` remains crawlable so search engines can process its `noindex` directive, but is omitted from the sitemap.
- Added a custom not-found page and narrowed Vercel rewrites to the three existing non-root routes. Added permanent redirects from their trailing-slash variants to the canonical paths.
- Added a 404 document for Vercel, a descriptive accessible name for the WhatsApp link, an operable/labelled mobile menu button, and accessible names for contact-form fields. Existing visual styling is retained for the changed CTA elements.
- Added an image conversion script and generated WebP brand/icon assets. The on-page logo is now about 15 KB and the icon about 5.6 KB; the original high-resolution image remains available for sharing metadata.
- Updated the locked dependency tree to resolve the reported React Router advisories. `npm audit fix` reported zero remaining vulnerabilities.

## Metadata and Indexing

| Route | Title | Indexing |
| --- | --- | --- |
| `/` | Website, Web App & Mobile App Development \| Naxara Labs | Index, follow; canonical `https://www.naxaralabs.com/` |
| `/about` | About Naxara Labs \| Software Development | Index, follow; canonical `https://www.naxaralabs.com/about` |
| `/contact` | Discuss a Software Project \| Contact Naxara Labs | Index, follow; canonical `https://www.naxaralabs.com/contact` |
| `/thank-you` | Thank You \| Naxara Labs | Noindex, nofollow; excluded from sitemap |

Unknown client-side paths receive a noindex page. Vercel's production handling of unknown URLs and the generated route shells must still be confirmed after deployment; local builds cannot prove the hosted HTTP status.

Production output now contains route-specific metadata and the rendered React page body before JavaScript executes, improving access for crawlers and social scrapers. The client hydrates that markup for navigation and interaction; Vite development still uses client rendering. This build-time rendering keeps the existing React components, URLs, and page structure.

## Homepage Keyword Map

The homepage should represent the overall business and its service range, not try to rank as four separate service landing pages. Search intent below is inferred from the terms themselves; it is not based on measured search volume or ranking data.

| Priority and theme | Relevant terminology | Intent | Existing page/section |
| --- | --- | --- | --- |
| Primary: business website and software development | Website development services; business website development; website development for small businesses | Commercial investigation / provider selection | Homepage title and hero; Business Website Development service card |
| Secondary: custom web software | Custom web application development; full-stack web development; business web applications; custom software development | Commercial investigation for a bespoke product or internal tool | Homepage Full-Stack Web Applications service card |
| Secondary: mobile products | Android app development; iOS app development; mobile app development services | Commercial investigation for app development | Homepage Mobile App Development service card |
| Secondary: process improvement | Business automation services; workflow automation; API and system integrations | Commercial investigation for automation or integration | Homepage Business Automation service card |

Target geography remains unconfirmed. Do not add city/country modifiers or local-business schema until the intended market and real business presence are confirmed. Automated access to Google search-result pages was challenged during this audit, so no competitor findings, search volumes, keyword difficulty, or ranking forecasts are claimed. Validate the map against Search Console query data after the property is available.

## Performance and Images

The final build reported a JavaScript bundle of approximately 246 KB (78 KB gzip) and CSS of approximately 10 KB (2.5 KB gzip). The brand image was converted from the 1.26 MB PNG to a 15 KB WebP for the page UI, with explicit display dimensions; a 5.6 KB WebP icon was generated. The source logo remains available for Open Graph previews.

No Lighthouse run, field Core Web Vitals data, or mobile-device performance measurement was available during this audit. LCP, INP, and CLS therefore remain unverified; a successful build is not evidence that real-user thresholds pass. Current reference thresholds are LCP <= 2.5 s, INP <= 200 ms, and CLS <= 0.1.

## Validation

| Check | Result |
| --- | --- |
| ESLint | Passed (`npm run lint`) |
| Production build | Passed after all edits (`npm run build`), including image optimization, sitemap generation, static React rendering, and client bundle output |
| `npm audit` | Passed; zero vulnerabilities reported |
| Sitemap contents | Parsed with `xmllint`; route canonical URLs and `/thank-you` exclusion assertions passed |
| Route metadata and content | All four route files passed title, canonical, robots, and rendered-heading assertions |
| Browser smoke test | Static About page hydrated, internal navigation to Contact updated content and metadata, form field names, logo image loading, mobile menu, and no horizontal overflow passed in the local Vite preview with no browser errors |
| Unknown route | Local preview displayed the noindex not-found UI without a hydration error; Vercel's production HTTP 404 response remains unverified until deployment |
| Direct route HTML shells | Generated route files contain route-specific page content. Vite preview's SPA fallback serves the root file for direct `/about` requests and does not execute Vercel rewrites; the prerender-path guard mounts the matching client route rather than hydrating mismatched HTML. Production route-shell rewrites still require post-deployment confirmation |
| robots.txt and sitemap responses | Local preview returned HTTP 200 with `text/plain` and `text/xml`, respectively |
| Vercel redirects and hosting behavior | Configuration verified locally; hosted redirects, route-shell rewrites, and 404 status require post-deployment HTTP checks |
| Form submission | Not submitted to the external FormSubmit endpoint; verify in staging/production |
| Lighthouse / Core Web Vitals | Not measured |
| Search Console indexing / sitemap submission | Not available from repository or external account access |

## Search Console and Analytics Actions

1. In Google Search Console, add a Domain property for `naxaralabs.com` and complete its DNS verification, or add the URL-prefix property `https://www.naxaralabs.com/` using a verification method you control.
2. Submit `https://www.naxaralabs.com/sitemap.xml` under Indexing > Sitemaps. Inspect the homepage, About, and Contact canonical URLs after deployment; do not submit `/thank-you`.
3. Confirm indexing and review Search Console Performance data for queries, clicks, impressions, CTR, landing pages, and country/device breakdowns.
4. No GA4 or other analytics ID was found. If analytics is wanted, create/select the property, add one tracking implementation, and explicitly configure SPA route page views and genuine enquiry events (successful form completion and WhatsApp contact) to avoid duplicate page views. Confirm privacy/consent requirements before tracking.

Neither Search Console verification nor sitemap submission has been claimed as completed.

## Future Roadmap (Approval Required)

1. Confirm target countries, customer segment, delivery model, and project types; then refine homepage targeting from actual Search Console and enquiry evidence.
2. Add a privacy notice appropriate to the data collected by the contact form and its FormSubmit processing. Confirm the stated response-time commitment.
3. Add a small number of dedicated service pages only when each can answer a distinct intent with useful original detail and credible examples. The best initial candidates are business website development and custom web applications/software; mobile app development and workflow automation can follow if demand and supporting evidence justify them. No pages are created in this phase.
4. Publish genuine case studies or portfolio examples with client permission and verifiable outcomes. Do not create fictional proof, mass-produced city pages, or thin keyword variants.
5. Measure mobile Lighthouse/Core Web Vitals after deployment and address any measured LCP, INP, or CLS bottlenecks.

## Business Facts Needed

- Primary target geography and whether work is local, regional, or remote.
- The most valuable customer types and projects; confirm whether the listed segments are priorities.
- Pricing approach and delivery/support model, if these should be public.
- Whether the 24-hour response claim and ongoing-support language are accurate.
- Approved public contact details and the intended use of the India-focused phone/WhatsApp details.
- Genuine projects, client permissions, measurable outcomes, qualifications, or certifications that may be published.
- Legal business name/address, only if appropriate to publish and applicable to a real local presence.
- Privacy terms for the contact form and its third-party processing.