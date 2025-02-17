import { useState } from "react";
import { motion } from "framer-motion";
import { photos } from "@/lib/photos";
import ImageLightbox from "@/components/ImageLightbox";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadErrors, setLoadErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (photoId: number) => {
    console.error(`Failed to load image with id: ${photoId}`);
    setLoadErrors(prev => ({ ...prev, [photoId]: true }));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Photography Portfolio</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-square cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            {!loadErrors[photo.id] && (
              <img
                src={photo.url}
                alt={photo.alt}
                onError={() => handleImageError(photo.id)}
                className="object-cover w-full h-full rounded-lg hover:opacity-90 transition-opacity"
              />
            )}
            {loadErrors[photo.id] && (
              <div className="w-full h-full rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
                Failed to load image
              </div>
            )}
            {photo.category && (
              <div className="absolute bottom-2 right-2 bg-background/80 px-2 py-1 rounded text-sm">
                {photo.category}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {selectedImage !== null && (
        <ImageLightbox
          photos={photos}
          currentIndex={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNavigate={setSelectedImage}
        />
      )}
    </div>
  );
}