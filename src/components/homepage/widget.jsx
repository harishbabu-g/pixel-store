import ProductCard from "@/components/productCard";

const Widget = ({ widget }) => {
  return (
    widget?.products?.length && (
      <div className="mt-12">
        {/* Widget Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">
            {widget?.title}
          </h2>
          <button className="cursor-pointer text-sm font-medium text-blue-600 hover:underline">
            View all
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {widget?.products?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      </div>
    )
  );
};

export default Widget;
