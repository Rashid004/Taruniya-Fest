/** @format */

import { useState } from "react";

function usePagination(items, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedItems = items.slice(startIndex, endIndex);
  console.log(paginatedItems);

  return {
    currentPage,
    handlePageChange,
    paginatedItems,
  };
}

export default usePagination;
