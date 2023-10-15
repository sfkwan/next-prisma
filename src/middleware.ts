import { NextResponse, NextRequest } from "next/server";

import { jwtVerify, createRemoteJWKSet } from "jose";

const hankoApiUrl = process.env.NEXT_PUBLIC_HANKO_API_URL;

export async function middleware(request: NextRequest) {
  const hanko = request.cookies.get("hanko")?.value;

  return NextResponse.redirect(new URL("/todo", request.url));
}

export const config = {
  matcher: ["/about/:path*"],
};
