import React from 'react'
import type { ViewType } from '../../pages/ProductList'
import { PRODUCT_LIST } from '@/lib/helper/testData'

import ProductGrid from '../product-grid'
import ProductCard from '../product-card'
import ProductListCard from '../product-list-card'
import Paggination from '@/components/ui/pagination-component'

interface ProductGridListProps {
    view: ViewType
}


const ProductGridList: React.FC<ProductGridListProps> = ({ view }) => {
    const data = PRODUCT_LIST
    // here we call api for product list
    // have to get filtes somehow, if from URL prams or redux state

    return (
        <div className='w-full flex flex-col gap-15'>
            <div>
                {view === 'grid' ? (
                    <ProductGrid columns={3} className="gap-8">
                        {data.map((product) => (
                            <ProductCard key={product._id} product={product} cardType="normal" />
                        ))}
                    </ProductGrid>
                ) : (
                    <div className="w-full flex flex-col mx-auto gap-6">
                        {data.map((product) => (
                            <ProductListCard key={product._id} product={product} />
                        ))}
                    </div>
                )}
            </div>
            <Paggination
                totalPages={10}
                currentPage={1}
                setCurrentPage={() => {}}
            />
        </div>
    )
}

export default ProductGridList
