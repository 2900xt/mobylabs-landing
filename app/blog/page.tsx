import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Whale Education Blog
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Dive deep into the fascinating world of whales. Learn about their behavior, conservation, and the technology protecting them.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-blue-200 hover:border-blue-400 hover:-translate-y-2 hover:scale-[1.02] flex flex-col"
                >
                  {/* Card Content */}
                  <div className="p-8 flex-grow">
                    {/* Metadata */}
                    <div className="flex items-center gap-3 mb-4 text-sm text-gray-600">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readingTime}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-700 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        By {post.author}
                      </span>
                      <span className="text-blue-600 font-semibold group-hover:text-cyan-600 transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="h-1 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:h-2 transition-all duration-300 rounded-b-2xl" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
