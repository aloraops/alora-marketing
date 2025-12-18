'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Fuse from 'fuse.js';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image?: string;
  readingTime: string;
}

interface BlogListProps {
  posts: BlogPostMeta[];
  categories: string[];
}

const POSTS_PER_PAGE = 12;

// Get a subtle placeholder gradient
function getPlaceholderGradient(title: string): string {
  const gradients = [
    'from-emerald-50 to-teal-100',
    'from-blue-50 to-indigo-100',
    'from-slate-50 to-gray-100',
    'from-green-50 to-emerald-100',
    'from-sky-50 to-blue-100',
  ];
  const index = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return gradients[index % gradients.length];
}

export function BlogList({ posts, categories }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Configure Fuse.js for fuzzy search
  const fuse = useMemo(() => {
    return new Fuse(posts, {
      keys: ['title', 'description', 'author', 'category'],
      threshold: 0.4,
    });
  }, [posts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    let result = posts;

    if (searchQuery.trim()) {
      result = fuse.search(searchQuery).map((r) => r.item);
    }

    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    return result;
  }, [posts, searchQuery, selectedCategory, fuse]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
      {/* Filters Row */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 flex-1">
          <button
            onClick={() => handleFilterChange('All')}
            className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
              selectedCategory === 'All'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:text-foreground'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-9 h-9"
          />
        </div>
      </div>

      {/* Results info */}
      {(searchQuery || selectedCategory !== 'All') && (
        <p className="text-sm text-muted-foreground mb-6">
          {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''}
          {searchQuery && ` for "${searchQuery}"`}
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        </p>
      )}

      {/* Empty State */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-muted-foreground">No articles found.</p>
          <Button
            variant="link"
            className="mt-2"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
          >
            Clear filters
          </Button>
        </div>
      ) : (
        <>
          {/* Article Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="h-full rounded-lg p-3 -m-3 transition-colors hover:bg-muted/50">
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-3 bg-muted">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div
                        className={`w-full h-full bg-gradient-to-br ${getPlaceholderGradient(post.title)} group-hover:scale-105 transition-transform duration-300`}
                      />
                    )}
                    {/* Latest badge on first post */}
                    {index === 0 && currentPage === 1 && selectedCategory === 'All' && !searchQuery && (
                      <span className="absolute top-2 left-2 px-2 py-0.5 text-xs font-medium bg-primary text-primary-foreground rounded">
                        Latest
                      </span>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1.5">
                    <span>{post.category}</span>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Author and Date */}
                  <p className="mt-2 text-xs text-muted-foreground">
                    {post.author} · {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </article>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
              >
                <ChevronsLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <span className="text-sm text-muted-foreground px-3">
                {currentPage} / {totalPages}
              </span>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
              >
                <ChevronsRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
