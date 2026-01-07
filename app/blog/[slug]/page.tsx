import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPostBySlug, getAllBlogSlugs, blogPostExists } from '@/lib/blog';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  if (!blogPostExists(slug)) {
    notFound();
  }

  const { data, content } = getBlogPostBySlug(slug);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Header */}
      <header className="relative z-10 pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back to Blog Link */}
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-6 transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Metadata badge */}
          <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-white/60">
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
              {data.date}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
              {data.readingTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              {data.title}
            </span>
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
              {data.author.split(' ').map((n: string) => n[0]).join('')}
            </div>
            <div>
              <p className="text-white font-medium">{data.author}</p>
              <p className="text-white/50 text-sm">Moby Labs Team</p>
            </div>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <article className="relative z-10 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-10 shadow-2xl">
            <div className="prose prose-lg prose-dark max-w-none">
              <MDXRemote source={content} />
            </div>
          </div>

          {/* Bottom navigation */}
          <div className="mt-8 flex justify-between items-center">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-xl text-white font-medium rounded-xl border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Posts
            </Link>

            <Link
              href="/signup"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              Join Waitlist
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
