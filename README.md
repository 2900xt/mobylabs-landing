This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

This project uses Supabase for authentication and database management.

1. Create a new project at [https://supabase.com](https://supabase.com)
2. Once your project is created, go to **Project Settings** > **API**
3. Copy your **Project URL** and **anon/public key**
4. Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

5. Add your Supabase credentials to `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Run the Development Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Features

- **Authentication**: User signup and login powered by Supabase Auth
- **Real-time Database**: Supabase PostgreSQL database integration
- **Server-Side Rendering**: Next.js App Router with Server Components
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Type Safety**: Full TypeScript support

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   └── api/               # API routes
├── components/            # React components
├── contexts/              # React contexts (Auth)
├── lib/                   # Utility functions
│   ├── supabase/         # Supabase client configuration
│   └── blog.ts           # Blog utilities
└── middleware.ts          # Next.js middleware for auth
```

## Authentication

The project includes a complete authentication system:

- **Sign Up**: [/signup](http://localhost:3000/signup) - Create a new account
- **Login**: [/login](http://localhost:3000/login) - Access your account
- **Protected Routes**: Automatic session management via middleware

### Using the Auth Context

```tsx
import { useAuth } from '@/contexts/AuthContext';

function YourComponent() {
  const { user, signOut } = useAuth();

  return (
    <div>
      {user ? (
        <button onClick={signOut}>Logout</button>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
}
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Environment Variables for Production

Make sure to add your environment variables in your deployment platform:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `RESEND_API_KEY` (for contact form)

## Troubleshooting

### Supabase Authentication Issues

1. **Email confirmation required**: By default, Supabase requires email confirmation. You can disable this in **Authentication** > **Providers** > **Email** settings in your Supabase dashboard.
2. **CORS errors**: Make sure your site URL is added to the allowed URLs in Supabase project settings.
3. **Session not persisting**: Check that middleware is properly configured and the Supabase URL/key are correct.

---

# mobyglobal-website
