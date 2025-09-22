import Icon from "@/components/ui/icons"
import BrandTypeStyle from "@/modules/filter/components/brand_type_style";
import ClothPrice from "@/modules/filter/components/cloth_price";
import ClothSize from "@/modules/filter/components/cloth_size";
import { getFilters } from "@/store/slices/productSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";


interface Filters {
  size: string[];
  brand: string[];
  type: string[];
  style: string[];
  price: [number, number];
}



const lala = [

  {
    "brand": ["Puma", "Adidas", "Nike", "Kappa"],
  },
  {
    "type": ["T-Shirts", "Jeans", "Dresses", "Jackets"],
  },
  {
    "style": ["Party Wear", "Activewear", "Formal Wear", "Casual Wear"]
  }
]



const FilterLayout = () => {

  const [filters, setFilters] = useState<Filters>({
    size: [],
    brand: [],
    type: [],
    style: [],
    price: [0, 30000],
  });

  const disPatch = useDispatch()


  const toggleOption = (category: keyof typeof filters, value: string) => {
    setFilters((prev) => {
      const selected = prev[category] as string[];
      const updated = selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value];

      const newFilters = { ...prev, [category]: updated };

      disPatch(getFilters(newFilters));
      return newFilters;
    });
  };



  return (
    <>
      <div className=" h-fit w-1/3 mx-5 md:mx-5 lg:mx-5 xl:mx-5 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-auto h-[100%] bg-white p-4 border-[var(--color-border)] border rounded-2xl">

        <div className="flex flex-row w-full justify-between">
          <h2 className="text-xl font-bold mb-6 ">Filter</h2>
          <Icon name="filterIcon" width={23} height={23} />
        </div>

        <ClothSize filters={filters} toggleOption={toggleOption} />

        {
          lala.map((cureEle, index) => {
            const [category, value] = Object.entries(cureEle)[0] as [keyof Filters, string[]];

            return (
              <BrandTypeStyle
                key={index}
                filters={filters}
                toggleOption={toggleOption}
                type={{ category, value }}
              />
            )
          })
        }

        <ClothPrice filters={filters} setFilters={setFilters} />

      </div>
    </>
  )
}

export default FilterLayout