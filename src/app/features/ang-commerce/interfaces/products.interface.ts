import { Category } from "./category.interface";

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  categories: Category[];
}