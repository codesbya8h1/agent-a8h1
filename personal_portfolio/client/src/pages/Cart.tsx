import { useCart } from "@/lib/cart";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Cart() {
  const { items, removeItem, total, clearCart } = useCart();
  const { toast } = useToast();

  const handleCheckout = async () => {
    // TODO: Integrate with Stripe
    toast({
      title: "Coming Soon",
      description: "Checkout functionality will be available soon!",
    });
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
        <p className="text-muted-foreground">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          {items.map((item, index) => (
            <Card key={`${item.photo.id}-${item.size}-${index}`}>
              <div className="flex">
                <img
                  src={item.photo.url}
                  alt={item.photo.alt}
                  className="w-32 h-32 object-cover"
                />
                <div className="flex-1 p-4">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.photo.alt}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Size: {item.size}</p>
                    <p className="font-bold">${item.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.photo, item.size)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="sticky top-4 h-fit">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-4">
                <span>Total</span>
                <span className="font-bold">${total}</span>
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button className="w-full" onClick={handleCheckout}>
                Checkout
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
