import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { LandingLink } from "@/components/landing-link";
import { blogPosts } from "@/data/blogs";
import blogOriginals from "@/data/blog-originals.json";
import { socialMetadata } from "@/lib/social-metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/blogs/${slug}` },
    ...socialMetadata(post.title, post.summary, `/blogs/${slug}`),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const original = blogOriginals.find((item) => item.id === post.id);
  if (!original) notFound();

  return (
    <article className="shell page blog-article">
      <LandingLink section="blogs" className="link">← All articles</LandingLink>
      <header>
        <time dateTime={post.date} className="label">{post.date}</time>
        <h1>{post.title}</h1>
      </header>

      <div className="blog-article__body">{original.text}</div>

      {post.images.length > 0 ? (
        <div className="blog-article__gallery" aria-label="Images from the original LinkedIn post">
          {post.images.map((image, index) => (
            <figure className="blog-article__image" key={`${post.id}-${index}`}>
              <Image
                src={`/images/blogs/${post.id}-${index + 1}.jpg`}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 560px"
              />
            </figure>
          ))}
        </div>
      ) : null}

      <a href={post.linkedinUrl} className="link-out" target="_blank" rel="noopener noreferrer">Read the original post on LinkedIn ↗</a>
    </article>
  );
}
