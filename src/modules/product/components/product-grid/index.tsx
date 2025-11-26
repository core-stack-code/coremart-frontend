// import React from "react";
// import type { ProductType } from "@/types/products";
// import ProductCard from "../product-card";

// interface ProductGridProps {
//   products: ProductType[];
//   columns?: number;   // desired columns (default responsive)
//   gap?: string;       // optional spacing
//   cardType?: "new" | "discount" | "ratting" | "normal";
// }

// const ProductGrid: React.FC<ProductGridProps> = ({
//   products,
//   columns,
//   gap = "gap-x-18 gap-y-15",
//   cardType = "normal",
// }) => {
//   return (
//     <div
//       className={`
//         grid
//         ${columns ? `grid-cols-${columns}` : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}
//         ${gap}
//         w-full
//       `}
//     >
//       {products.map((product) => (
//         <ProductCard key={product._id} product={product} cardType={cardType} />
//       ))}
//     </div>
//   );
// };

// export default ProductGrid;




import React from "react";
import type { ProductType } from "@/types/products";
import ProductCard from "../product-card";

interface ProductGridProps {
  products: ProductType[];
  columns?: number;   // how many cards per row
  rows?: number;      // how many rows to show
  gap?: string;
  cardType?: "new" | "discount" | "ratting" | "normal";
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  columns = 4,
  rows = 1, 
  gap = "gap-x-18 gap-y-15",
  cardType = "normal",
}) => {

  const maxItems = rows ? rows * columns : products.length;
  const visibleProducts = products.slice(0, maxItems);

  return (
    <div
      className={`
        grid 
        grid-cols-${columns}
        ${gap}
        w-full
      `}
    >
      {visibleProducts.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          cardType={cardType}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
