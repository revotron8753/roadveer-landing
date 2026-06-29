import type { Metadata } from "next";
import { LangProvider } from "@/lib/i18n";
import { getContent } from "@/sanity/getContent";
import { getPosts } from "@/sanity/blog";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog — Tiger Roadveer",
  description: "News, stories and updates from the Tiger Roadveer mission.",
};

export default async function BlogPage() {
  const [content, posts] = await Promise.all([getContent(), getPosts()]);
  return (
    <LangProvider content={content}>
      <SiteNav />
      <BlogList posts={posts} />
      <Footer />
    </LangProvider>
  );
}
