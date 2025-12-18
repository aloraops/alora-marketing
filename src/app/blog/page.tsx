import { getAllPosts } from '@/lib/blog';
import { BlogList } from '@/components/blog/blog-list';

export const metadata = {
  title: 'Blog - Insights & Updates | Alora',
  description:
    'Thoughts on supply chain operations, AI in manufacturing, and building better procurement workflows.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-semibold text-foreground">Blog</h1>
          <p className="mt-1 text-muted-foreground">
            Insights on supply chain, AI, and procurement.
          </p>
        </div>
      </section>

      <BlogList posts={posts} categories={categories} />
    </main>
  );
}
