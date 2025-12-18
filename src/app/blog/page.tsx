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
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Insights & Updates
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
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
