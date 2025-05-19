// hooks/useCart.ts
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  author: string;
  image_url: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const useCart = () => {
  const [cartItems, setCartItems] = useState<Project[]>([]);
  const [addingToCart, setAddingToCart] = useState<number | null>(null);

  const fetchCart = async () => {
    try {
      const resp = await axios.get<{ projects: Project[] }>(`${API_BASE_URL}/cart`);
      setCartItems(resp.data.projects);
    } catch (err) {
      console.error("Failed to fetch cart items:", err);
    }
  };

  const addToCart = async (projectId: number) => {
    setAddingToCart(projectId);
    try {
      await axios.post(`${API_BASE_URL}/cart`, { project_id: projectId });
      toast.success("Added to cart successfully!");
      fetchCart();
    } catch (err: any) {
      if (err.response?.status === 409) {
        toast.error("This item is already in your cart.");
      } else {
        toast.error("Failed to add item to cart.");
      }
      console.error("Error adding to cart:", err);
    } finally {
      setAddingToCart(null);
    }
  };

  const isInCart = (projectId: number) => {
    return cartItems.some((item) => item.id === projectId);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return { cartItems, addToCart, isInCart, addingToCart };
};
