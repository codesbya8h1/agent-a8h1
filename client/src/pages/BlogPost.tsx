import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/lib/blogData";

interface BlogPost {
  id: string;
  title: string;
  link: string;
  thumbnail: string;
  pubDate: string;
  description: string;
  content?: string;
}

export default function BlogPost() {
  const [location] = useLocation();
  const postId = location.split("/blog/")[1];
  const post = blogPosts.find((p: BlogPost) => p.id === postId);

  if (!post) {
    return <div className="container mx-auto px-4 py-12">Post not found</div>;
  }

  // Function to process the content and add proper formatting
  const formatContent = (content: string) => {
    if (!content) return [];

    return content.split('\n\n').map((paragraph, index) => {
      // Format dialogue with quotes
      if (paragraph.includes(':')) {
        const [speaker, text] = paragraph.split(':');
        if (speaker === 'Manager' || speaker === 'Me') {
          return (
            <div key={index} className="my-4 pl-4 border-l-4 border-primary/20">
              <span className="font-semibold">{speaker}:</span>
              <span className="italic ml-1">{text}</span>
            </div>
          );
        }
      }

      // Format numbered section headers (e.g., "1. Empathy:")
      if (paragraph.match(/^\d+\.\s+[A-Za-z]+:/)) {
        return (
          <h3 key={index} className="text-2xl font-bold mt-8 mb-4 text-primary">
            {paragraph}
          </h3>
        );
      }

      // Format bullet points as regular text with proper indentation
      if (paragraph.startsWith('- ')) {
        return (
          <li key={index} className="ml-6 my-2 text-muted-foreground">
            {paragraph.substring(2)}
          </li>
        );
      }

      // Format situation headers
      if (paragraph.startsWith('Situation ')) {
        return (
          <h4 key={index} className="text-xl font-bold mt-6 mb-3 text-primary">
            {paragraph}
          </h4>
        );
      }

      // Default paragraph formatting (normal weight)
      return (
        <p key={index} className="my-4 leading-relaxed text-muted-foreground">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="space-y-4">
          <CardTitle className="text-4xl font-bold">{post.title}</CardTitle>
          <p className="text-sm text-muted-foreground">
            {new Date(post.pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </CardHeader>
        <CardContent>
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content && formatContent(post.content)}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}