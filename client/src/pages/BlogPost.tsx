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

  return (
    <div className="container mx-auto px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{post.title}</CardTitle>
          <p className="text-sm text-muted-foreground">
            {new Date(post.pubDate).toLocaleDateString()}
          </p>
        </CardHeader>
        <CardContent>
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
