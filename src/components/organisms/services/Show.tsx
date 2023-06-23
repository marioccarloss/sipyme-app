import { ColumnDef } from '@tanstack/react-table';
import Table from 'components/molecules/Table';
import SkeletonTable from 'components/molecules/SkeletonTable';
import useServices from 'hooks/useServices';
import { Service, Services } from 'types/Services';
import Filters from './Filters';
import Cards from './Cards';

export default function ServicesPage() {
  const { data, columns, pagination, setPagination } = useServices();

  return (
    <div className="rounded-lg mb-10">
      <h2 className="text-lg font-bold mb-5">Productos y Servicios</h2>
      <Cards />
      <Filters />
      {data ? (
        <Table
          data={(data as Services)?.services}
          columns={columns as ColumnDef<Service>[]}
          paginate
          pageCount={data?.total_pages}
          pagination={pagination}
          setPagination={setPagination}
        />
      ) : (
        <SkeletonTable />
      )}
    </div>
  );
}
