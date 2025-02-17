import { useQuery, useMutation } from "@tanstack/react-query";
import { Message } from "@shared/schema";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Loader2, Mail, MailOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { queryClient } from "@/lib/queryClient";

export default function Admin() {
  const { toast } = useToast();
  const { data: messages, isLoading } = useQuery<Message[]>({
    queryKey: ["/api/messages"],
    retry: false
  });

  const markAsReadMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/messages/${id}/read`, {
        method: "POST"
      });
      if (!response.ok) throw new Error("Failed to mark message as read");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/messages"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to mark message as read",
        variant: "destructive"
      });
    }
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Messages</h1>
      <div className="grid gap-4">
        {messages?.map((message) => (
          <Card key={message.id} className={message.read ? "opacity-70" : ""}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="font-semibold">{message.name}</div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => markAsReadMutation.mutate(message.id)}
                disabled={message.read || markAsReadMutation.isPending}
              >
                {message.read ? (
                  <MailOpen className="h-4 w-4" />
                ) : (
                  <Mail className="h-4 w-4" />
                )}
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                {message.email} • {format(new Date(message.createdAt), "PPp")}
              </p>
              <p className="whitespace-pre-wrap">{message.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
