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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Back to Blog Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors"
          >
            <span>←</span>
            <span>Back to Blog</span>
          </Link>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {data.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-white/90">
            <span>By {data.author}</span>
            <span>•</span>
            <span>{data.date}</span>
            <span>•</span>
            <span>{data.readingTime}</span>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg prose-blue max-w-none">
            <MDXRemote source={content} />
          </div>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Want to Learn More?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore more articles about whales and ocean conservation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              Read More Articles
            </Link>
            <Link
              href="/live-map"
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg border-2 border-blue-600 transition-all duration-300 hover:scale-105 hover:bg-blue-50"
            >
              View Demo Map
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
