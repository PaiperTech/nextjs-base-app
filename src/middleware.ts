/* eslint-disable no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {}

export const config = {
  matcher: ['/'],
};
