import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BLOCKED_REFERRERS = ["free-qr", "freeqr", "free-qr.com", "freeqr.com"];

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer") || "";
  const matched = BLOCKED_REFERRERS.some(d => referer.toLowerCase().includes(d));

  if (matched) {
    // 403으로 차단 응답 (원하면 페이지로 리다이렉트도 가능)
    return new NextResponse("Access blocked due to abusive referrer.", { status: 403 });
  }

  return NextResponse.next();
}

// 필요 시 제외/포함 경로 조정
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"
  ],
};
