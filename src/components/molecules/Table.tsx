import {
  Dispatch,
  Fragment,
  ReactElement,
  SetStateAction,
  useState,
} from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getExpandedRowModel,
  ColumnDef,
  Row,
  PaginationState,
} from '@tanstack/react-table';
import useFiltersStore from 'store/filters';
import IconSort from 'components/atoms/icons/IconSort';
import IconSortToggle from 'components/atoms/icons/IconSortToggle';
import Pagination from 'components/atoms/Pagination';

type CustomColumnDef<TData, TAccessorKey> = ColumnDef<TData> & {
  accessorKey?: TAccessorKey;
};

type HeaderProps = {
  column: {
    columnDef: CustomColumnDef<unknown, string>;
  };
};

type TableProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData>[];
  renderSubComponent?: (props: { row: Row<TData> }) => ReactElement;
  getRowCanExpand?: (row: Row<TData>) => boolean;
  paginate?: boolean;
  pageCount?: number;
  pagination?: PaginationState | undefined;
  setPagination?: Dispatch<SetStateAction<PaginationState>>;
  className?: string;
};

export default function Table({
  data,
  columns,
  renderSubComponent,
  getRowCanExpand,
  paginate,
  pageCount,
  pagination,
  setPagination,
  className,
}: TableProps<any>) {
  const [sortDirections, setSortDirections] = useState<{
    [key: string]: 'asc' | 'desc';
  }>({});

  const table = useReactTable({
    data,
    columns,
    pageCount: pageCount ?? 1,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand,
  });

  const { filters } = useFiltersStore.getState();
  const setFilters = useFiltersStore((state) => state.setFilters);

  const handleSorting = (header: {
    column: {
      columnDef: CustomColumnDef<unknown, string>;
    };
  }) => {
    const { accessorKey } = header.column.columnDef;
    const isAscending = sortDirections[accessorKey as string] === 'asc';

    const newSortDirections: { [key: string]: 'asc' | 'desc' } = {
      ...sortDirections,
      [accessorKey as string]: isAscending ? 'desc' : 'asc',
    };

    setFilters({
      ...filters,
      order_by: `${isAscending ? '-' : ''}${accessorKey}`,
    });

    setSortDirections(newSortDirections);
  };

  return (
    <div
      className={`relative border-t-[#e5ebed] overflow-x-auto shadow-xl rounded-lg ${className}`}
    >
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-sm text-gray-900 bg-[#f5f5fa]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="text-[#8484a7] px-6 py-4 border-b font-bold"
                  onClick={() => handleSorting(header as HeaderProps)}
                >
                  {header.isPlaceholder ? null : (
                    <div className="flex items-center gap-1">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {sortDirections[
                        (header.column.columnDef as { accessorKey: string })
                          ?.accessorKey
                      ] === 'asc' && <IconSortToggle className="rotate-180" />}
                      {sortDirections[
                        (header.column.columnDef as { accessorKey: string })
                          ?.accessorKey
                      ] === 'desc' && <IconSortToggle />}
                      {!sortDirections[
                        (header.column.columnDef as { accessorKey: string })
                          .accessorKey
                      ] && <IconSort />}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="table__body">
          {table.getRowModel().rows.map((row) => (
            <Fragment key={row.id}>
              <tr className="bg-white border-b hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
              {row.getIsExpanded() && (
                <tr className="bg-white border-b hover:bg-gray-50">
                  <td
                    colSpan={row.getVisibleCells().length}
                    className="px-6 py-4"
                  >
                    {renderSubComponent && renderSubComponent({ row })}
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
      {paginate && (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 items-center justify-between">
            <div className="flex items-center text-sm text-gray-700">
              Mostrar
              <select
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value));
                }}
                className="p-2 border rounded-md mx-2"
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
              <p>de {table.getPageCount()} páginas</p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <Pagination table={table} />
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Table.defaultProps = {
  paginate: true,
  pageCount: 1,
  pagination: null,
  setPagination: () => null,
  renderSubComponent: () => null,
  getRowCanExpand: () => false,
  className: '',
};
