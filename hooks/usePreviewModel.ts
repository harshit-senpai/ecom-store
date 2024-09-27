import { Product } from "@/types";
import { create } from "zustand";

interface PreviewModelStore {
  isOpen: boolean;
  data: Product | undefined;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

export const usePreviewModel = create<PreviewModelStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) => set({ data: data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
