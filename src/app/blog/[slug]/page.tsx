import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LangProvider } from "@/lib/i18n";
import { getContent } from "@/sanity/getContent";
import { getPost, getPostSlugs } from "@/sanity/blog";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import BlogPostView from "@/components/BlogPostView";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: post ? `${post.title.en ?? "Post"} — Tiger Roadveer` : "Tiger Roadveer",
    description: post?.excerpt.en,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [content, post] = await Promise.all([getContent(), getPost(slug)]);
  if (!post) notFound();
  return (
    <LangProvider content={content}>
      <SiteNav />
      <BlogPostView post={post} />
      <Footer />
    </LangProvider>
  );
}
