import { NextResponse, type NextRequest } from "next/server";

/**
 * Host-based routing:
 *  - admin.<domain>      → serves the embedded Studio at the subdomain root
 *                          (e.g. admin.tiger.roadveer.com/structure/posts)
 *  - <domain>            → the website; /studio is redirected to the admin host
 *                          in production so the Studio never shows on the
 *                          primary domain.
 * Local dev is untouched: localhost has no "admin." host, so /studio works
 * directly at localhost:3000/studio.
 */
export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") || "").split(":")[0];
  const isAdmin = host.startsWith("admin.");
  const { pathname } = req.nextUrl;

  if (isAdmin) {
    // Let the Studio route, API and Next internals pass through untouched…
    if (
      pathname.startsWith("/studio") ||
      pathname.startsWith("/api") ||
      pathname.startsWith("/_next")
    ) {
      return NextResponse.next();
    }
    // …and map every other path on the admin host onto the Studio route.
    const url = req.nextUrl.clone();
    url.pathname = `/studio${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
  }

  // Primary domain in production: keep the Studio off /studio.
  if (
    process.env.NODE_ENV === "production" &&
    (pathname === "/studio" || pathname.startsWith("/studio/"))
  ) {
    const adminPath = pathname.replace(/^\/studio/, "") || "/";
    return NextResponse.redirect(`https://admin.${host}${adminPath}`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
