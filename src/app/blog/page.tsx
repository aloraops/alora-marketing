import { getAllPosts } from '@/lib/blog';
import { BlogList } from '@/components/blog/blog-list';

export const metadata = {
  title: 'Blog - Insights & Updates | Alora',
  description: 'Thoughts on supply chain operations, AI in manufacturing, and building better procurement workflows.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted/30 py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Insights & Updates
            </h1>
            <p className="mt-3 text-muted-foreground">
              Thoughts on supply chain operations, AI in manufacturing, and building
              better procurement workflows.
            </p>
          </div>
        </div>
      </section>

      <BlogList posts={posts} />
    </>
  );
}
