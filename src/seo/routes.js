export const SITE_URL = "https://www.naxaralabs.com";

export const ROUTE_METADATA = {
  "/": {
    title: "Website, Web App & Mobile App Development | Naxara Labs",
    description:
      "Naxara Labs develops business websites, full-stack web applications, Android and iOS apps, and workflow automation for startups and small businesses.",
    indexable: true,
  },
  "/about": {
    title: "About Naxara Labs | Software Development",
    description:
      "Learn about Naxara Labs and our approach to building websites, web applications, mobile apps, and business software.",
    indexable: true,
  },
  "/contact": {
    title: "Discuss a Software Project | Contact Naxara Labs",
    description:
      "Discuss website development, custom web applications, mobile apps, or business automation with Naxara Labs. Tell us about your project.",
    indexable: true,
  },
  "/thank-you": {
    title: "Thank You | Naxara Labs",
    description: "Your project enquiry has been received by Naxara Labs.",
    indexable: false,
  },
};

export function getRouteMetadata(pathname) {
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  return ROUTE_METADATA[normalizedPath] ?? {
    title: "Page Not Found | Naxara Labs",
    description: "The page you requested could not be found.",
    indexable: false,
  };
}

export function getCanonicalUrl(pathname) {
  const normalizedPath = pathname.replace(/\/+$/, "");
  return `${SITE_URL}${normalizedPath || "/"}`;
}