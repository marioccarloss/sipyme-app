import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { createColumnHelper, PaginationState } from '@tanstack/react-table';
import serviceRequest, { serviceStatistics } from 'api/service';
import { Service } from 'types/Services';
import useServiceStore from 'store/filters';
import { Link } from 'react-router-dom';
import IconEdit from 'components/atoms/icons/IconEdit';
import IconShow from 'components/atoms/icons/IconShow';
import IconDelete from 'components/atoms/icons/IconDelete';

export default function useServices() {
  const { filters } = useServiceStore((state) => state);

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 1,
    pageSize: 10,
  });

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const { data } = useQuery(
    ['Services', filters],
    () =>
      serviceRequest(
        filters.order_by,
        pagination.pageSize,
        pagination.pageIndex,
        filters.product_barcode,
        filters.product_name,
        filters.product_ref,
        filters.product_status
      ),
    {
      staleTime: Infinity,
    }
  );

  const { data: dataStatistics } = useQuery(
    ['ServicesStatistics'],
    () => serviceStatistics(),
    {
      staleTime: Infinity,
    }
  );

  const columnHelper = createColumnHelper<Service>();
  const columns = [
    columnHelper.accessor('id', { header: 'Id' }),
    columnHelper.accessor('name', { header: 'Nombre' }),
    columnHelper.accessor('cost_price', { header: 'Costo' }),
    columnHelper.accessor('barcode', { header: 'Código de barras' }),
    columnHelper.accessor('price_sold', { header: 'Precio de venta' }),
    columnHelper.accessor('reference', { header: 'Referencia' }),
    columnHelper.accessor('status', { header: 'Estado' }),
    {
      id: 'option',
      header: () => 'Acciones',
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
            to={row.original.url_delete}
            className="font-medium text-gray-600 flex align-center gap-1 hover:text-blue-900"
          >
            <IconDelete />
            <span className="block leading-6">Eliminar</span>
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

  return { data, columns, pagination, setPagination, dataStatistics };
}
