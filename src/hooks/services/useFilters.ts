import { ChangeEvent } from 'react';
import useFormFilters from 'hooks/useFormFilters';

type FilterField = {
  index: number;
  label: string;
  type: string;
  name: string;
  id: string;
  value: string;
  placeholder: string;
  onChange: (event: any) => void;
  options?: any;
};

export default function useFilters() {
  const { setFilters, filters } = useFormFilters();

  const filtersForm: FilterField[] = [
    {
      index: 1,
      label: 'Nombre del producto',
      type: 'text',
      name: 'product_name',
      id: 'product_name',
      placeholder: 'Nombre del producto',
      value: filters.product_name ?? '',
      onChange: (event: ChangeEvent<HTMLInputElement>) =>
        setFilters({
          ...filters,
          product_name: event.target.value,
        }),
    },
    {
      index: 2,
      label: 'Referencia del producto',
      type: 'text',
      name: 'product_ref',
      id: 'product_ref',
      placeholder: 'Referencia',
      value: filters.product_ref ?? '',
      onChange: (event: ChangeEvent<HTMLInputElement>) =>
        setFilters({
          ...filters,
          product_ref: event.target.value,
        }),
    },
    {
      index: 3,
      label: 'Código de barras del producto',
      type: 'text',
      name: 'product_barcode',
      id: 'product_barcode',
      placeholder: 'Código de barras',
      value: filters.product_barcode ?? '',
      onChange: (event: ChangeEvent<HTMLInputElement>) =>
        setFilters({
          ...filters,
          product_barcode: event.target.value,
        }),
    },
    {
      index: 4,
      label: 'Estado del producto',
      type: 'select',
      name: 'product_status',
      id: 'product_status',
      placeholder: 'Estado',
      value: filters.product_status ?? '',
      onChange: (event: ChangeEvent<HTMLSelectElement>) =>
        setFilters({
          ...filters,
          product_status: event.target.value,
        }),
      options: [
        { value: '', label: 'Todos' },
        { value: 'Sin Stock', label: 'Sin Stock' },
        { value: 'Stock', label: 'Stock' },
        { value: 'Disponible', label: 'Disponible' },
        { value: 'No Disponible', label: 'No Disponible' },
      ],
    },
  ];

  return {
    filtersForm,
  };
}
