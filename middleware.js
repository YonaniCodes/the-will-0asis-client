// import { NextResponse } from "next/server";

// // export default function middleWare(request) {
// //   console.log(request);
// //   return NextResponse.redirect(new URL("/about", request.url));
// // }
// // export const config = {
// //   matcher: ["/account", "/cabins"],
// // };

import { auth } from "@/app/_lib/auth";
export const middleware = auth;

export const config = {
  matcher: ["/account"], // this route is protected
};
