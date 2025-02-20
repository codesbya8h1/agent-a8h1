import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/lib/blogData";
import { cn } from "@/lib/utils";

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

  const formatContent = (content: string) => {
    if (!content) return [];

    const lines = content.split('\n');
    const formattedContent: JSX.Element[] = [];
    let currentParagraph: string[] = [];
    let key = 0;

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        formattedContent.push(
          <p key={key++} className="text-muted-foreground my-4 leading-relaxed">
            {currentParagraph.join('\n')}
          </p>
        );
        currentParagraph = [];
      }
    };

    lines.forEach(line => {
      // Headers
      if (line.startsWith('# ')) {
        flushParagraph();
        formattedContent.push(
          <h1 key={key++} className="text-3xl font-bold mt-8 mb-4">
            {line.substring(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        flushParagraph();
        formattedContent.push(
          <h2 key={key++} className="text-2xl font-bold mt-8 mb-4">
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        flushParagraph();
        formattedContent.push(
          <h3 key={key++} className="text-xl font-bold mt-6 mb-3">
            {line.substring(4)}
          </h3>
        );
      }
      // Bullet points
      else if (line.startsWith('- ')) {
        formattedContent.push(
          <li key={key++} className="ml-6 my-2 text-muted-foreground">
            {line.substring(2)}
          </li>
        );
      }
      // Empty line - end of paragraph
      else if (line.trim() === '') {
        flushParagraph();
      }
      // Regular line - add to current paragraph
      else {
        currentParagraph.push(line);
      }
    });

    // Flush any remaining paragraph
    flushParagraph();

    return formattedContent;
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