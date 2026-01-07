# Supabase Integration Guide

This document provides a comprehensive guide for the Supabase integration in this project.

## Overview

Supabase has been integrated to provide:
- User authentication (signup, login, logout)
- Session management
- Protected routes
- Server-side and client-side authentication

## Files Created

### Configuration Files

1. **`lib/supabase/client.ts`** - Browser client for client-side authentication
2. **`lib/supabase/server.ts`** - Server client for server-side operations
3. **`lib/supabase/middleware.ts`** - Session refresh logic
4. **`lib/supabase/actions.ts`** - Server actions for auth operations
5. **`middleware.ts`** - Next.js middleware for automatic session management

### Context & Authentication

6. **`contexts/AuthContext.tsx`** - React context providing auth state and methods

### Pages

7. **`app/login/page.tsx`** - Login page (NEW)
8. **`app/signup/page.tsx`** - Updated with real Supabase authentication

### Environment

9. **`.env.example`** - Environment variable template

## Quick Setup

### 1. Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Click "New Project"
3. Fill in project details and wait for setup to complete

### 2. Get API Credentials

1. Navigate to **Project Settings** (gear icon)
2. Click **API** in the sidebar
3. Copy the following:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (starts with `eyJ...`)

### 3. Configure Environment

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Update `.env.local` with your credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 4. Configure Email Settings (Optional)

By default, Supabase requires email confirmation for new signups.

**To disable email confirmation** (for testing):
1. Go to **Authentication** > **Providers** in Supabase dashboard
2. Click on **Email** provider
3. Toggle off "Confirm email"

**To customize email templates**:
1. Go to **Authentication** > **Email Templates**
2. Customize confirmation, reset password, and other emails

### 5. Set Site URL

1. Go to **Authentication** > **URL Configuration**
2. Add your site URL:
   - Development: `http://localhost:3000`
   - Production: `https://yourdomain.com`

## Usage Examples

### Client-Side Authentication

```tsx
"use client";
import { useAuth } from '@/contexts/AuthContext';

export default function MyComponent() {
  const { user, signOut, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={signOut}>Logout</button>
        </div>
      ) : (
        <a href="/login">Login</a>
      )}
    </div>
  );
}
```

### Server-Side Authentication

```tsx
import { createClient } from '@/lib/supabase/server';

export default async function ProtectedPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return <div>Welcome, {user.email}</div>;
}
```

### Using Server Actions

```tsx
import { requireAuth, signOut } from '@/lib/supabase/actions';

export default async function DashboardPage() {
  const user = await requireAuth(); // Redirects to login if not authenticated

  return (
    <div>
      <h1>Dashboard</h1>
      <p>User: {user.email}</p>
      <form action={signOut}>
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}
```

## API Reference

### AuthContext Methods

- **`user`**: Current user object or null
- **`session`**: Current session object or null
- **`loading`**: Boolean indicating if auth state is loading
- **`signUp(email, password, metadata?)`**: Create new account
- **`signIn(email, password)`**: Login with credentials
- **`signOut()`**: Logout current user

### Server Actions

- **`getUser()`**: Get current user (server-side)
- **`requireAuth()`**: Get user or redirect to login
- **`signOut()`**: Server action to logout

## Database Setup (Optional)

If you need to store additional user data:

### Create a Profile Table

```sql
-- Run this in Supabase SQL Editor
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  first_name text,
  last_name text,
  company text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table profiles enable row level security;

-- Create policies
create policy "Users can view own profile"
  on profiles for select
  using ( auth.uid() = id );

create policy "Users can update own profile"
  on profiles for update
  using ( auth.uid() = id );

-- Create trigger to auto-create profile on signup
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, first_name, last_name, company)
  values (
    new.id,
    new.raw_user_meta_data->>'firstName',
    new.raw_user_meta_data->>'lastName',
    new.raw_user_meta_data->>'company'
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

## Security Best Practices

1. **Never commit `.env.local`** - Already in .gitignore
2. **Use Row Level Security (RLS)** - Always enable RLS on tables
3. **Validate on server-side** - Don't trust client-side validation alone
4. **Use HTTPS in production** - Supabase requires it
5. **Rotate keys if exposed** - Can be done in Supabase dashboard

## Troubleshooting

### "Invalid API key" error
- Check that environment variables are set correctly
- Restart dev server after changing .env.local

### "Email not confirmed" error
- Either confirm email via link sent to user
- Or disable email confirmation in Supabase dashboard

### Session not persisting
- Check middleware.ts is properly configured
- Verify cookies are enabled in browser
- Check CORS settings in Supabase dashboard

### User redirected to login unexpectedly
- Session may have expired (default: 1 hour)
- Can adjust in **Authentication** > **Settings** > **JWT expiry**

## Deployment

### Vercel

Add environment variables in Vercel dashboard:
1. Go to Project Settings > Environment Variables
2. Add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Other Platforms

Similar process - add environment variables in your platform's dashboard.

### Update Redirect URLs

Add production URLs to Supabase:
1. **Authentication** > **URL Configuration**
2. Add production URL to:
   - Site URL
   - Redirect URLs

## Additional Resources

- [Supabase Docs](https://supabase.com/docs)
- [Supabase Auth Helpers](https://supabase.com/docs/guides/auth/auth-helpers/nextjs)
- [Next.js Authentication](https://nextjs.org/docs/app/building-your-application/authentication)
