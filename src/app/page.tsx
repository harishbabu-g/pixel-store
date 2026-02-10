import Homepage from "@/components/homepage";
import { ProductsApiResponse } from "@/types/api";
import { Widget } from "@/types/widget";
import axios from "axios";

type ProductTypes = Array<{ title: string; category: string }>;

export default async function Home() {
  const productTypes: ProductTypes = [
    { title: "Smartphones", category: "smartphones" },
    { title: "Laptops", category: "laptops" },
  ];

  const fetchProductWidgets = async (): Promise<Widget[]> => {
    const widgets = await Promise.all(
      productTypes.map(async ({ title, category }) => {
        const { data } = await axios.get<ProductsApiResponse>(
          `https://dummyjson.com/products/category/${category}?limit=5&skip=0`,
        );

        return {
          title,
          category,
          products: data.products,
        };
      }),
    );

    return widgets;
  };

  const widgetList = await fetchProductWidgets();

  return <Homepage widgetList={widgetList} />;
}
