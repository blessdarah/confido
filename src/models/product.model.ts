export type Product = {
  name: string;
  categoryId: string | number;
  description: string;
  qty: number;
  dimensions: string;
  weight: number;
  ref: string;
};

export const emptyProduct: Product = {
  name: "",
  categoryId: "",
  description: "",
  qty: 0,
  dimensions: "",
  weight: 0,
  ref: "",
};
