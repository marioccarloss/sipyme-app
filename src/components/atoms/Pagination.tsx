type Props = {
  table: any;
};

export default function Pagination(props: Props) {
  const { table } = props;
  const { pageIndex } = table.getState().pagination;
  const maxVisiblePages = 5;
  const totalPages = table.getPageCount();
  const pageButtons = [];

  pageButtons.push(
    <button
      key="prev"
      type="button"
      className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      onClick={() => table.setPageIndex(pageIndex - 1)}
      disabled={!table.getCanPreviousPage()}
    >
      <span className="sr-only">Previous</span>
      <svg
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );

  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i < totalPages; i++) {
      pageButtons.push(
        <button
          key={`${i * Math.random()}`}
          type="button"
          onClick={() => table.setPageIndex(i)}
          className={`px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 ${
            pageIndex === i ? 'active bg-red-500 text-white' : ''
          }`}
        >
          {i}
        </button>
      );
    }
  } else {
    const middlePageIndex = Math.floor(maxVisiblePages / 2);
    if (pageIndex <= middlePageIndex) {
      for (let i = 1; i < maxVisiblePages; i++) {
        pageButtons.push(
          <button
            key={i}
            type="button"
            onClick={() => table.setPageIndex(i)}
            className={`px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 ${
              pageIndex === i ? 'active bg-red-500 text-white' : ''
            }`}
          >
            {i}
          </button>
        );
      }
    } else if (pageIndex >= totalPages - middlePageIndex) {
      for (let i = totalPages - maxVisiblePages; i < totalPages; i++) {
        pageButtons.push(
          <button
            key={i}
            type="button"
            onClick={() => table.setPageIndex(i)}
            className={`px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 ${
              pageIndex === i ? 'active bg-red-500 text-white' : ''
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      for (
        let i = pageIndex - middlePageIndex;
        i <= pageIndex + middlePageIndex;
        i += 1
      ) {
        pageButtons.push(
          <button
            key={i}
            type="button"
            onClick={() => table.setPageIndex(i)}
            className={`px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 ${
              pageIndex === i ? 'active bg-red-500 text-white' : ''
            }`}
          >
            {i}
          </button>
        );
      }
    }
  }

  pageButtons.push(
    <button
      key="next"
      type="button"
      className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      onClick={() => table.setPageIndex(pageIndex + 1)}
      disabled={!table.getCanNextPage()}
    >
      <span className="sr-only">Next</span>
      <svg
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );

  return pageButtons;
}
