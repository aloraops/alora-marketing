/**
 * =============================================================================
 * PASSWORD VERIFICATION API ENDPOINT
 * =============================================================================
 *
 * This API route verifies the password submitted from the password page.
 *
 * HOW IT WORKS:
 * -------------
 * 1. Receives password from POST request
 * 2. Compares against SITE_PASSWORD environment variable
 * 3. If correct: Sets a secure cookie and returns success
 * 4. If incorrect: Returns 401 error
 *
 * COOKIE DETAILS:
 * ---------------
 * - Name: site-password-verified
 * - Value: 'true'
 * - HttpOnly: Yes (not accessible via JavaScript)
 * - Secure: Yes in production (HTTPS only)
 * - SameSite: Strict (CSRF protection)
 * - Max Age: 7 days
 *
 * HOW TO TOGGLE PASSWORD PROTECTION ON/OFF:
 * ------------------------------------------
 * See instructions in src/middleware.ts or .env.local
 *
 * =============================================================================
 */

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the password from request body
    const { password } = await request.json();

    // Get the correct password from environment variable
    const correctPassword = process.env.SITE_PASSWORD;

    // If no password is configured, deny access (fail secure)
    if (!correctPassword) {
      console.error('SITE_PASSWORD environment variable is not set!');
      return NextResponse.json(
        { success: false, message: 'Password protection is not properly configured' },
        { status: 500 }
      );
    }

    // Compare submitted password with correct password
    if (password === correctPassword) {
      // Password is correct - create response with success
      const response = NextResponse.json({ success: true });

      // Set authentication cookie
      // This cookie will be checked by the middleware to allow access
      response.cookies.set('site-password-verified', 'true', {
        httpOnly: true, // Cookie not accessible via JavaScript (XSS protection)
        secure: process.env.NODE_ENV === 'production', // HTTPS only in production
        sameSite: 'strict', // CSRF protection
        maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
        path: '/', // Cookie valid for entire site
      });

      return response;
    } else {
      // Password is incorrect
      return NextResponse.json(
        { success: false, message: 'Incorrect password' },
        { status: 401 }
      );
    }
  } catch (error) {
    // Handle any errors (e.g., malformed JSON)
    console.error('Error in password verification:', error);
    return NextResponse.json(
      { success: false, message: 'Invalid request' },
      { status: 400 }
    );
  }
}

// Only allow POST requests to this endpoint
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed. Use POST to verify password.' },
    { status: 405 }
  );
}
