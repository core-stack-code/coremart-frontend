import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"




const Paggination = () => {
  return (
    <>
      <div className="flex justify-center items-center mx-auto space-x-2 mt-6 mb-6 text-sm font-medium">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">10</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>


















      {/* <div className="flex justify-center items-center mx-auto space-x-2 mt-6 mb-6 text-sm font-medium">
        <span className="text-gray-400 px-3 py-1.5 rounded">Prev</span>

        <button className="bg-purple-600 text-white px-3 py-1.5 rounded-lg">1</button>
        <button className="border border-gray-300 text-black px-3 py-1.5 rounded-lg">2</button>
        <button className="border border-gray-300 text-black px-3 py-1.5 rounded-lg">3</button>
        <span className="px-2 text-black">...</span>
        <button className="border border-gray-300 text-black px-3 py-1.5 rounded-lg">10</button>
        <button className="text-purple-600 px-3 py-1.5 rounded">Next</button>

      </div> */}
    </>
  )
}

export default Paggination