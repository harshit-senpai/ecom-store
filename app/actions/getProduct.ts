"use server";

import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (productId: string): Promise<Product> => {
  const res = await fetch(`${URL}/${productId}`);

  return res.json();
};

export default getProduct;
