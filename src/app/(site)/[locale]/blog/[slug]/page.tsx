import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/data/blog';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, 'Vietnam', 'expat', 'guide'],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      <article className="py-12">
        <div className="container mx-auto px-4">
          {/* Back to Blog */}
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 font-medium"
          >
            ← Back to Blog
          </Link>

          {/* Article Header */}
          <header className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
              <span>{post.readTime}</span>
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-500">Immigration Specialist</p>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-blue max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h1:text-4xl prose-h1:mb-6
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-gray-700 prose-li:mb-2
              prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:pl-6 prose-blockquote:italic
              prose-code:text-primary-600 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-hr:my-12 prose-hr:border-gray-300"
            >
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Need Help with Your Work Permit or Visa?</h3>
              <p className="text-lg mb-6 opacity-90">
                Our expert team can guide you through the entire process and ensure everything is done correctly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/services/work-permit"
                  className="bg-primary-700 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors text-center"
                >
                  View Work Permit Service
                </Link>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-lg"
              >
                ← Back to All Articles
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
