"use client";

import { ShoppingBag } from "lucide-react";
import Button from "./ui/Button";
import { useEffect, useState } from "react";
import { useCart } from "@/hooks/useCartStore";
import { useRouter } from "next/navigation";

export const NavbarAction = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-3">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium">{cart.items.length}</span>
      </Button>
    </div>
  );
};
