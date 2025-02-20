import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "wouter";
import { blogPosts, type BlogPost } from "@/lib/blogData";

interface MediumFeed {
  items: BlogPost[];
  status: string;
}

export default function Blog() {
  const { data: feed, isLoading } = useQuery<MediumFeed>({
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

  const posts = feed?.items?.length ? feed.items : blogPosts;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: BlogPost) => (
          <Link key={post.id} href={post.link}>
            <a className="block">
              <Card className="hover:shadow-lg transition-shadow h-full">
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
                    {post.description}
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    {new Date(post.pubDate).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}