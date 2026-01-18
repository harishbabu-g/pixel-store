import { calculateDiscountedAmount } from "@/utils/helper";

const ProductCard = ({ product }) => {
  return (
    <div className="group cursor-pointer rounded-lg border border-gray-200 bg-white p-3 transition hover:shadow-md">
      {/* Image */}
      <div className="relative mb-3 h-40 overflow-hidden rounded-md bg-gray-100">
        <img
          src={product?.thumbnail}
          alt={product?.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <h3 className="line-clamp-2 h-10 text-sm font-medium text-gray-800">
        {product?.title}
      </h3>

      {/* Rating */}
      <div className="mt-1 flex items-center text-xs text-yellow-500">
        ★★★★☆{" "}
        <span className="ml-1 text-gray-500">({product?.reviews?.length})</span>
      </div>

      {/* Price */}
      <div className="mt-2 flex items-center gap-2">
        <span className="text-base font-semibold text-gray-900">
          ₹
          {calculateDiscountedAmount(
            product?.price,
            product?.discountPercentage,
          ).toFixed(0)}
        </span>
        <span className="text-sm text-gray-400 line-through">
          ₹{product?.price.toFixed(0)}
        </span>
      </div>

      {/* CTA */}
      <button className="mt-3 w-full cursor-pointer rounded-md bg-gray-900 py-2 text-sm text-white transition hover:bg-gray-800">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
