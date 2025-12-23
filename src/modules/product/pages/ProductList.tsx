import React, { useState } from "react";

import Icon from "@/components/ui/icons";
import CategoryPageHeader from "@/modules/product/components/category-header";
import ProductFilter from "../components/product-filter";
import ProductGridList from "../components/product-grid-list";
import { Button } from "@/components/ui/button";

export type ViewType = "grid" | "list";


const ProductList: React.FC = () => {
    const [view, setView] = useState<ViewType>('grid');

    return (
        <div className="w-full flex flex-col gap-8 pt-8">
            <div className="w-full flex items-center justify-end gap-4">
                <CategoryPageHeader productCount={200} />
                <div className="flex items-center gap-2">
                    <Button 
                        variant={view === "grid" ? "default" : "outline"}
                        size="icon"
                        type="button"
                        onClick={() => setView("grid")}
                    >
                        <Icon name="LayoutGrid"/>
                    </Button>
                    <Button 
                        variant={view === "list" ? "default" : "outline"}
                        size="icon"
                        type="button"
                        onClick={() => setView("list")}
                    >
                        <Icon name="List"/>
                    </Button>
                </div>
            </div>
            <div className="w-full grid grid-cols-4 gap-8">
                <div className="col-span-1">
                    <ProductFilter />
                </div>
                <div className="col-span-3">
                    <ProductGridList view={view} />
                </div>
            </div>
        </div>
    );
}

export default ProductList