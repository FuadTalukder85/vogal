// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";

// export function middleware(req) {
//   // Get token from cookies
//   const token = req.cookies.get("token");

//   // Check if the token is present
//   if (token) {
//     // Token is present, user is authenticated, allow access to the account page
//     return NextResponse.next();
//   } else {
//     // Token is not present, user is not authenticated, redirect to the login page
//     return NextResponse.redirect(new URL("/account/login", req.url));
//   }
// }

// // Specify the routes for which the middleware should run
// export const config = {
//   matcher: ["/account/:path*"],
// };
