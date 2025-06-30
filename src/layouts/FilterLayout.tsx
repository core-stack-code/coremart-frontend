import Icon from "@/components/ui/icons"
import ClothBrand from "@/modules/Filter/components/Cloth-Brand";
import ClothPrice from "@/modules/Filter/components/Cloth-Price";
import ClothSize from "@/modules/Filter/components/Cloth-Size";
import ClothStyle from "@/modules/Filter/components/Cloth-Style";
import ClothType from "@/modules/Filter/components/Cloth-Type";
import { useState } from "react";


interface Filters {
  size: string[];
  brand: string[];
  type: string[];
  style: string[];
  price: [number, number];
}


const FilterLayout = () => {

  const [filters, setFilters] = useState<Filters>({
    size: [],
    brand: [],
    type: [],
    style: [],
    price: [0, 30000],
  });

  const toggleOption = (category: keyof typeof filters, value: string) => {
    setFilters((prev) => {
      const selected = prev[category] as string[];
      const updated = selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value];
      return { ...prev, [category]: updated };
    });
  };

  return (
    <>
      <div className=" w-1/3 mx-5  md:mx-5 lg:mx-5 xl:mx-5 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-auto   h-[100%] bg-white p-4 border-[#E5E7EB] border-2 rounded-2xl">

        <div className="flex flex-row w-full justify-between">
          <h2 className="text-xl font-bold mb-6 ">Filter</h2>
          <Icon name="filterIcon" width={23} height={23} />
        </div>

        <ClothSize filters={filters} toggleOption={toggleOption} />
        <ClothBrand filters={filters} toggleOption={toggleOption} />
        <ClothType filters={filters} toggleOption={toggleOption} />
        <ClothStyle filters={filters} toggleOption={toggleOption} />
        <ClothPrice filters={filters} setFilters={setFilters} />

      </div>
    </>
  )
}

export default FilterLayout