import { create } from 'zustand';

type State = {
  filters: {
    order_by: string;
    per_page: number;
    product_barcode?: string | undefined;
    product_name?: string | undefined;
    product_ref?: string | undefined;
    product_status?: string | undefined;
  };
};

type Actions = {
  setFilters: (filters: Partial<State['filters']>) => void;
  clearFilters: () => void;
};

const useFiltersStore = create<State & Actions>((set) => ({
  filters: {
    order_by: 'id',
    per_page: 10,
    product_barcode: undefined,
    product_name: undefined,
    product_ref: undefined,
    product_status: undefined,
  },
  setFilters: ({
    order_by,
    per_page,
    product_barcode,
    product_name,
    product_ref,
    product_status,
  }: Partial<State['filters']>) =>
    set(() => ({
      filters: {
        order_by: order_by || 'id',
        per_page: per_page || 10,
        product_barcode,
        product_name,
        product_ref,
        product_status,
      },
    })),
  clearFilters: () =>
    set({
      filters: {
        order_by: 'id',
        per_page: 10,
        product_barcode: undefined,
        product_name: undefined,
        product_ref: undefined,
        product_status: undefined,
      },
    }),
}));

export default useFiltersStore;
