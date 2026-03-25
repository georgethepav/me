import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Only protect /admin
  if (req.nextUrl.pathname.startsWith("/admin")) {
    const auth = req.headers.get("authorization");

    const password = process.env.ADMIN_PASSWORD;

    // If no auth header → ask for login
    if (!auth) {
      return new NextResponse("Auth required", {
        status: 401,
        headers: {
          "WWW-Authenticate": "Basic realm=\"Secure Area\"",
        },
      });
    }

    // Decode credentials
    const base64 = auth.split(" ")[1];
    const [user, pass] = atob(base64).split(":");

    // Check password (username can be anything)
    if (pass !== password) {
      return new NextResponse("Access denied", { status: 403 });
    }
  }

  return NextResponse.next();
}
