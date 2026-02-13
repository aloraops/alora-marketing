/**
 * =============================================================================
 * PASSWORD PROTECTION PAGE
 * =============================================================================
 *
 * This page is shown to visitors when password protection is enabled.
 *
 * HOW TO TOGGLE PASSWORD PROTECTION ON/OFF:
 * ------------------------------------------
 * See instructions in src/proxy.ts or .env.local
 *
 * This page will only be enforced when ENABLE_PASSWORD_PROTECTION=true
 * When disabled, this page is still accessible but not required for site access
 *
 * =============================================================================
 */

'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, ArrowRight } from 'lucide-react';

function PasswordForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get the return URL from query params (where to redirect after successful auth)
  const returnTo = searchParams.get('returnTo') || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/verify-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        // Password correct - redirect to original destination
        router.push(returnTo);
        router.refresh();
      } else {
        // Password incorrect
        setError('Incorrect password. Please try again.');
        setPassword('');
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-focus password input on mount
  useEffect(() => {
    const input = document.getElementById('password-input');
    if (input) input.focus();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Background gradient matching Alora brand */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            'linear-gradient(145deg, #1a3a28 0%, #2b553c 35%, #3d6b4f 65%, #4d8060 100%)',
        }}
      />

      {/* Subtle pattern overlay */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Card className="w-full max-w-md bg-white/95 backdrop-blur shadow-2xl border-0">
        <CardHeader className="space-y-3 text-center pb-4">
          {/* Lock icon */}
          <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
            <Lock className="w-8 h-8 text-emerald-700" />
          </div>

          <CardTitle className="text-2xl font-bold text-gray-900">
            This Site is Currently Private
          </CardTitle>
          <CardDescription className="text-base text-gray-600">
            Enter the password to continue
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password-input" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <Input
                id="password-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="h-11"
                disabled={isLoading}
                autoComplete="off"
              />
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                <p className="text-sm text-red-700 font-medium">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-11 text-base font-semibold"
              disabled={isLoading || !password}
            >
              {isLoading ? (
                <>
                  <span className="inline-block animate-spin mr-2">⏳</span>
                  Verifying...
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          {/* Help text */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-center text-gray-500">
              This is a password-protected preview. <br />
              Contact your administrator if you need access.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function PasswordPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    }>
      <PasswordForm />
    </Suspense>
  );
}
