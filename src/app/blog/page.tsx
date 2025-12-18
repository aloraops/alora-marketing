import Link from 'next/link';
import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { getAllPosts } from '@/lib/blog';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights and updates from the Alora team on supply chain operations, AI, and manufacturing.',
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

      {/* Blog Posts */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="mx-auto max-w-2xl text-center py-12">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <Calendar className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="mt-6 text-xl font-semibold text-foreground">
                Coming soon
              </h2>
              <p className="mt-2 text-muted-foreground">
                We&apos;re working on some great content. Check back soon!
              </p>
            </div>
          ) : (
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <Card className="border-0 shadow-sm transition-shadow hover:shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readingTime}
                          </span>
                        </div>
                        <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        <p className="mt-2 text-muted-foreground line-clamp-2">
                          {post.description}
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="h-4 w-4" />
                            {post.author}
                          </span>
                          <span className="inline-flex items-center text-sm font-medium text-primary">
                            Read more
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
