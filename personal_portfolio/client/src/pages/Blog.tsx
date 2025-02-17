import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogPost {
  title: string;
  link: string;
  thumbnail: string;
  pubDate: string;
  description: string;
}

const sampleBlogPosts: BlogPost[] = [
  {
    title: "Getting Started with Generative AI: A Developer's Guide",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    pubDate: "2025-02-17",
    description: "Dive into the world of Generative AI and learn how to integrate these powerful tools into your development workflow. We'll explore practical applications, best practices, and common pitfalls to avoid when working with AI models.",
  },
  {
    title: "Building Scalable Full-Stack Applications: Lessons Learned",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3",
    pubDate: "2025-02-15",
    description: "Drawing from years of experience in both startup and enterprise environments, I share key insights about building and maintaining scalable full-stack applications. Topics include architecture decisions, testing strategies, and deployment best practices.",
  },
  {
    title: "The Future of Web Development: Trends to Watch in 2025",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1624996379697-f01d168b1a52",
    pubDate: "2025-02-10",
    description: "Explore the emerging trends shaping the future of web development. From AI-powered development tools to new frameworks and methodologies, stay ahead of the curve with these insights into where our industry is heading.",
  }
];

export default function Blog() {
  const { data: feed, isLoading } = useQuery({
    queryKey: ["/api/medium-feed"],
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-4 w-2/3" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-32 w-full mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  const posts = feed?.items?.length ? feed.items : sampleBlogPosts;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: BlogPost) => (
          <Card key={post.link} className="hover:shadow-lg transition-shadow">
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">
                  {post.description.replace(/<[^>]*>/g, '')}
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  {new Date(post.pubDate).toLocaleDateString()}
                </p>
              </CardContent>
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}