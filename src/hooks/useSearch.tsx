import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { debounce } from 'lodash';
import searchRequest from 'api/search';
import { createColumnHelper, PaginationState } from '@tanstack/react-table';
import { Item } from 'types/Search';
import { Link } from 'react-router-dom';
import IconShow from 'components/atoms/icons/IconShow';
import IconEdit from 'components/atoms/icons/IconEdit';

export default function useSearch() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  });
  const typesNotPermitted = ['Producto/Servicio', 'Cliente', 'Proveedor'];

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const { data, isLoading, isError } = useQuery(
    ['Search', searchTerm],
    () => searchRequest(searchTerm, 20, 1, true),
    {
      enabled: !!(searchTerm?.length > 0),
      staleTime: Infinity,
    }
  );

  const { data: dataSearchTable, isLoading: isLoadingSearchTable } = useQuery(
    ['SearchTable', searchTerm, pagination],
    () =>
      searchRequest(
        undefined,
        pagination.pageSize,
        pagination.pageIndex,
        false
      ),
    {
      staleTime: Infinity,
    }
  );

  const columnHelper = createColumnHelper<Item>();
  const columns = [
    columnHelper.accessor('code', { header: 'Código' }),
    columnHelper.accessor('type', { header: 'Tipo' }),
    columnHelper.accessor('desc', { header: 'Descripción' }),
    {
      id: 'option',
      header: () => 'Url',
      cell: ({ row }: any) => (
        <div className="flex align-baseline justify-left gap-6">
          <Link
            to={row.original.url_edit}
            className="font-medium text-gray-600 flex align-center gap-1 hover:text-blue-900"
          >
            <IconEdit />
            <span className="block leading-6">Editar</span>
          </Link>

          <Link
            to={row.original.url_show}
            className="font-medium text-gray-600 flex align-center gap-1 hover:text-blue-900"
          >
            <IconShow />
            <span className="block leading-6">Mostrar</span>
          </Link>
        </div>
      ),
    },
  ];

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchInput = event.currentTarget.elements.namedItem(
      'search'
    ) as HTMLInputElement;
    setSearchTerm(searchInput.value);
  };

  const debouncedSearch = debounce(setSearchTerm, 1000);

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    debouncedSearch(event.target.value);
  };

  return {
    data,
    isLoading,
    isError,
    handleSearch,
    handleSearchInput,
    searchTerm,
    typesNotPermitted,
    dataSearchTable,
    isLoadingSearchTable,
    columns,
    pagination,
    setPagination,
  };
}
