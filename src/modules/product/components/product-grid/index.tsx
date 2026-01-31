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
import { cn } from "@/lib/utils";

interface ProductGridProps {
  columns?: number;   // how many cards per row
  rows?: number;      // how many rows to show
  className?: string;
  children: React.ReactNode;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  columns,
  rows,
  className,
  children
}) => {

  const maxItems = rows && columns ? rows * columns : undefined;

  const childrenArray = React.Children.toArray(children);

  const visibleChildrenArray = maxItems ? childrenArray.slice(0, maxItems) : childrenArray;

  return (
    <div className={cn(
      "w-full grid",
      columns ? `grid-cols-${columns}` : "grid-cols-1",
      rows && `grid-rows-${rows}`,
      className,
    )}>
      {/* {children} */}
      {visibleChildrenArray}
    </div>
  );
};

export default ProductGrid;
