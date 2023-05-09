import Link from "next/link"
import { NextResponse ,NextRequest } from "next/server" 

export function GET(request: Request) {
  return new Response('Hello, Next.js!')
}
