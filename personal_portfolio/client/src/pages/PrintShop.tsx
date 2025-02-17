import { useState } from "react";
import { useCart } from "@/lib/cart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { photos } from "@/lib/photos";

interface PrintOption {
  size: string;
  price: number;
}

const printOptions: PrintOption[] = [
  { size: "8x10", price: 25 },
  { size: "11x14", price: 35 },
  { size: "16x20", price: 50 },
  { size: "20x24", price: 75 },
];

export default function PrintShop() {
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({});
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (photoId: number) => {
    const photo = photos.find((p) => p.id === photoId);
    const selectedSize = selectedSizes[photoId];
    const option = printOptions.find((opt) => opt.size === selectedSize);

    if (!photo || !option) return;

    addItem(photo, option.size, option.price);
    setSelectedSizes((prev) => {
      const newSizes = { ...prev };
      delete newSizes[photoId];
      return newSizes;
    });

    toast({
      title: "Added to Cart",
      description: `${photo.alt} (${option.size}) has been added to your cart.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Print Shop</h1>

      <div className="mb-8">
        <p className="text-lg text-muted-foreground">
          Each photograph is printed on premium archival paper, ensuring stunning quality and longevity.
          Choose from various sizes to perfectly fit your space.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <Card key={photo.id} className="overflow-hidden">
            <div className="aspect-square relative">
              <img
                src={photo.url}
                alt={photo.alt}
                className="object-cover w-full h-full"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{photo.alt}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Select
                  value={selectedSizes[photo.id]}
                  onValueChange={(value) => 
                    setSelectedSizes((prev) => ({ ...prev, [photo.id]: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select print size" />
                  </SelectTrigger>
                  <SelectContent>
                    {printOptions.map((option) => (
                      <SelectItem key={option.size} value={option.size}>
                        {option.size} - ${option.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button 
                  className="w-full"
                  disabled={!selectedSizes[photo.id]}
                  onClick={() => handleAddToCart(photo.id)}
                >
                  Add to Cart - ${printOptions.find(
                    (opt) => opt.size === selectedSizes[photo.id]
                  )?.price || 0}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}