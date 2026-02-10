import { ProductCard } from "./product";

interface ProductsApiResponse {
  limit: number;
  products: ProductCard[];
  skip: number;
  total: number;
}