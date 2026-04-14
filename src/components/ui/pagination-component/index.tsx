import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import type { pagination } from "@/modules/product/apis/types";

type PaginationProps = {
  // totalPages: number;
  // currentPage: number;
  // setCurrentPage: (page: number) => void;

  pagination: pagination,
  onPageChange: (page: number) => void;
  updatePagination: (page: number) => void;
};

const PagginationComponent = ({ pagination, onPageChange, updatePagination }: PaginationProps) => {

  const { page, totalPages, isPrevPage, isNextPage, totalItems } = pagination

  const handlePageChange = (newPage: number) => {
    onPageChange(newPage)
    updatePagination(newPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getVisiblePages = (): number[] => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    if (page === 1) {
      return [1, 2, 3]
    }

    if (page === totalPages) {
      return [totalPages - 2, totalPages - 1, totalPages]
    }

    return [page - 1, page, page + 1]
  }


  if (totalItems === 0) return null;

  const visiblePages = getVisiblePages()
  const showStartEllipsis = visiblePages[0] > 1
  const showEndEllipsis = visiblePages[visiblePages.length - 1] < totalPages


  return (
    <div className="flex justify-center items-center mx-auto space-x-2 text-sm font-medium">
      {totalPages > 1 && (
        <Pagination className="justify-end w-auto mx-0">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => isPrevPage && handlePageChange(page - 1)}
                className={!isPrevPage ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>

            {showStartEllipsis && (
              <>
                <PaginationItem>
                  <PaginationLink
                    onClick={() => handlePageChange(1)}
                    className='cursor-pointer'
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              </>
            )}

            {visiblePages.map((pageNum) => (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  onClick={() => handlePageChange(pageNum)}
                  isActive={page === pageNum}
                  className='cursor-pointer'
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            ))}

            {showEndEllipsis && (
              <>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    onClick={() => handlePageChange(totalPages)}
                    className='cursor-pointer'
                  >
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}

            <PaginationItem>
              <PaginationNext
                onClick={() => isNextPage && handlePageChange(page + 1)}
                className={!isNextPage ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default PagginationComponent;
