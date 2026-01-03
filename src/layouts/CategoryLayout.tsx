import Banner from '@/modules/product/components/banner'
import NewArrivalsProducts from '@/modules/product/components/new-arrivals-products'
import ProrductCategoryGrid from '@/modules/product/components/product-category-grid'
import TrendingProducts from '@/modules/product/components/trending-products'
import React from 'react'
import { Outlet } from 'react-router-dom'

const CategoryLayout: React.FC = () => {
  return (
      <div className="w-full flex flex-col gap-8 py-8">
            <Banner />

            <Outlet/>

            <ProrductCategoryGrid />

            <NewArrivalsProducts />

            <TrendingProducts />
        </div>
  )
}

export default CategoryLayout