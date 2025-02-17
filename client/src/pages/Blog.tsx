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

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {feed?.items?.map((post: BlogPost) => (
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
