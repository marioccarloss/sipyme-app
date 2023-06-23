import useServiceStore from 'store/filters';

export default function useFormFilters() {
  const { filters } = useServiceStore((state) => state);
  const setFilters = useServiceStore((state) => state.setFilters);

  return { setFilters, filters };
}
