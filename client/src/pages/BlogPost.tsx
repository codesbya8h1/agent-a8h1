import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "./Blog";

export default function BlogPost() {
  const [location] = useLocation();
  const postId = location.split("/blog/")[1];
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return <div className="container mx-auto px-4 py-12">Post not found</div>;
  }

  // Function to process the content and add proper formatting
  const formatContent = (content: string) => {
    if (!content) return [];

    return content.split('\n\n').map((paragraph, index) => {
      // Format dialogue
      if (paragraph.includes(':')) {
        const [speaker, text] = paragraph.split(':');
        if (speaker === 'Manager' || speaker === 'Me') {
          return (
            <div key={index} className="my-4 pl-4 border-l-4 border-primary/20">
              <span className="font-bold">{speaker}:</span>
              <span className="italic">{text}</span>
            </div>
          );
        }
      }

      // Format section headers
      if (paragraph.match(/^\d+\.\s+[A-Za-z]+:/)) {
        return (
          <h3 key={index} className="text-2xl font-bold mt-8 mb-4 text-primary">
            {paragraph}
          </h3>
        );
      }

      // Format bullet points
      if (paragraph.startsWith('- ')) {
        return (
          <li key={index} className="ml-6 my-2">
            <span className="font-bold">{paragraph.substring(2)}</span>
          </li>
        );
      }

      // Format situation headers
      if (paragraph.startsWith('Situation ')) {
        return (
          <h4 key={index} className="text-xl font-semibold mt-6 mb-3">
            {paragraph}
          </h4>
        );
      }

      // Default paragraph formatting
      return <p key={index} className="my-4 leading-relaxed">{paragraph}</p>;
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