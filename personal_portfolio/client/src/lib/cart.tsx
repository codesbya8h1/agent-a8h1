import { createContext, useContext, useState, ReactNode } from "react";
import { Photo } from "./photos";

interface CartItem {
  photo: Photo;
  size: string;
  price: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (photo: Photo, size: string, price: number) => void;
  removeItem: (photo: Photo, size: string) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (photo: Photo, size: string, price: number) => {
    setItems((current) => [...current, { photo, size, price }]);
  };

  const removeItem = (photo: Photo, size: string) => {
    setItems((current) =>
      current.filter(
        (item) => !(item.photo.id === photo.id && item.size === size)
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
