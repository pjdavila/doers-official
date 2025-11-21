'use client'

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function BlogPagination({
  currentPage,
  totalPages,
  basePath,
}: BlogPaginationProps) {
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  const getPageUrl = (page: number) => {
    if (page === 1) return basePath;
    return `${basePath}?page=${page}`;
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-16">
      {/* Previous Button */}
      {hasPrevious ? (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="group flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-orange/10 border border-white/10 hover:border-orange/50 rounded-lg transition-all duration-300 font-space"
          data-testid="button-previous-page"
        >
          <ChevronLeft
            size={20}
            className="text-gray group-hover:text-orange transition-colors"
          />
          <span className="text-gray group-hover:text-orange transition-colors">
            Previous
          </span>
        </Link>
      ) : (
        <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg opacity-50 cursor-not-allowed font-space">
          <ChevronLeft size={20} className="text-gray" />
          <span className="text-gray">Previous</span>
        </div>
      )}

      {/* Page Numbers */}
      <div className="flex items-center gap-2 font-space">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          const isCurrentPage = page === currentPage;
          
          // Show first page, last page, current page, and pages around current
          const showPage =
            page === 1 ||
            page === totalPages ||
            Math.abs(page - currentPage) <= 1;

          // Show ellipsis
          const showEllipsis =
            (page === currentPage - 2 && currentPage > 3) ||
            (page === currentPage + 2 && currentPage < totalPages - 2);

          if (!showPage && !showEllipsis) return null;

          if (showEllipsis) {
            return (
              <span key={page} className="text-gray px-2">
                ...
              </span>
            );
          }

          return (
            <Link
              key={page}
              href={getPageUrl(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${
                isCurrentPage
                  ? 'bg-orange text-black font-bold'
                  : 'bg-white/5 text-gray hover:bg-purple/20 hover:text-purple border border-white/10 hover:border-purple/50'
              }`}
              data-testid={`button-page-${page}`}
            >
              {page}
            </Link>
          );
        })}
      </div>

      {/* Next Button */}
      {hasNext ? (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="group flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-purple/10 border border-white/10 hover:border-purple/50 rounded-lg transition-all duration-300 font-space"
          data-testid="button-next-page"
        >
          <span className="text-gray group-hover:text-purple transition-colors">
            Next
          </span>
          <ChevronRight
            size={20}
            className="text-gray group-hover:text-purple transition-colors"
          />
        </Link>
      ) : (
        <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg opacity-50 cursor-not-allowed font-space">
          <span className="text-gray">Next</span>
          <ChevronRight size={20} className="text-gray" />
        </div>
      )}
    </div>
  );
}
