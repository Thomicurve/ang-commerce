import { Category } from "./category.interface";
import { Product } from "./products.interface";

export interface ApiResponse {
  products: Product[];
  categories: Category[];
}