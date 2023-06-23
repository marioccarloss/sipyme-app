import { ColumnDef } from '@tanstack/react-table';
import Table from 'components/molecules/Table';
import useSearch from 'hooks/useSearch';
import { Item, Search } from 'types/Search';
import SkeletonTable from 'components/molecules/SkeletonTable';

export default function Home() {
  const {
    dataSearchTable,
    isLoadingSearchTable,
    columns,
    pagination,
    setPagination,
  } = useSearch();

  return (
    <div className="rounded-lg mb-10">
      {!isLoadingSearchTable ? (
        dataSearchTable && (
          <Table
            data={(dataSearchTable as Search)?.resoults}
            columns={columns as ColumnDef<Item>[]}
            paginate
            pageCount={dataSearchTable?.total_pages}
            pagination={pagination}
            setPagination={setPagination}
          />
        )
      ) : (
        <SkeletonTable />
      )}
    </div>
  );
}
