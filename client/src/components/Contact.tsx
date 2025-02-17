import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertMessageSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const mutation = useMutation({
    mutationFn: (data: any) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  return (
    <section id="contact" className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        
        <form 
          onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
          className="max-w-lg mx-auto space-y-4"
        >
          <div>
            <Input
              placeholder="Name"
              {...form.register("name")}
              className="w-full"
            />
            {form.formState.errors.name && (
              <p className="text-destructive text-sm mt-1">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>

          <div>
            <Input
              type="email"
              placeholder="Email"
              {...form.register("email")}
              className="w-full"
            />
            {form.formState.errors.email && (
              <p className="text-destructive text-sm mt-1">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Textarea
              placeholder="Message"
              {...form.register("message")}
              className="w-full"
              rows={5}
            />
            {form.formState.errors.message && (
              <p className="text-destructive text-sm mt-1">
                {form.formState.errors.message.message}
              </p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
}
