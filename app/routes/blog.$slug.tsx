import { useParams } from "react-router";
import { BlogPost, BlogPostNotFound } from "~/components/blog-post";
import { blogPosts } from "~/data/blog-posts";

export function meta({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  return [
    { title: post ? `${post.title} - echo Consulting` : "Blog Post - echo Consulting" },
    {
      name: "description",
      content: post?.excerpt || "Les våre artikler om konsulentvirksomhet og digitalisering.",
    },
  ];
}

export default function BlogSlug() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <BlogPostNotFound />;
  }

  return <BlogPost post={post} />;
}
