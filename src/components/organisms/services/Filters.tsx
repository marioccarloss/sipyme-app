import { useState } from 'react';
import useFilters from 'hooks/services/useFilters';
import Label from 'components/atoms/Label';
import Input from 'components/atoms/Input';
import IconFilter from 'components/atoms/icons/IconFilter';
import IconTools from 'components/atoms/icons/IconTools';
import IconCopy from 'components/atoms/icons/IconCopy';

export default function Filters() {
  const { filtersForm } = useFilters();
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenAction, setIsOpenAction] = useState(false);
  const FilterToggle = () => setIsOpenFilter(!isOpenFilter);
  const ActionsToggle = () => setIsOpenAction(!isOpenAction);
  const CopyToggle = () => console.log('Copy');

  return (
    <div
      id="servicesFilter"
      className="lg:flex items-center justify-end mb-4 relative"
    >
      <div className="flex items-center w-60 lg:w-auto gap-2 my-2 ml-auto">
        <button
          type="button"
          className="bg-white text-gray-500 py-2.5 px-3 font-semibold items-center justify-center flex gap-1 rounded-lg ring-2 ring-gray-300 hover:text-gray-900 hover:bg-gray-100"
          onClick={FilterToggle}
        >
          <IconFilter />
          Filtros
        </button>
        <button
          type="button"
          className="bg-white text-gray-500 py-2.5 px-3 font-semibold items-center justify-center flex gap-1 rounded-lg ring-2 ring-gray-300 hover:text-gray-900 hover:bg-gray-100"
          onClick={ActionsToggle}
        >
          <IconTools />
          Acciones
        </button>
        <button
          type="button"
          className="bg-white text-gray-500 py-2.5 px-3 font-semibold items-center justify-center flex gap-1 rounded-lg ring-2 ring-gray-300 hover:text-gray-900 hover:bg-gray-100"
          onClick={CopyToggle}
        >
          <IconCopy />
          Copiar
        </button>
      </div>

      <div
        className={`lg:grid-cols-[repeat(5,minmax(0,1fr))] gap-3 items-center w-full -order-1 my-2 ${
          isOpenFilter ? 'grid' : 'hidden'
        }`}
      >
        {filtersForm
          .filter((input) => input.type === 'text')
          .map((input) => (
            <div key={input.id}>
              <Label htmlFor={input.id} className="text-sx hidden">
                {input.label}
              </Label>
              <Input
                type={input.type}
                className="py-2.5 px-3 rounded-md bg-gray-100 w-full"
                name={input.name}
                id={input.id}
                placeholder={input.placeholder}
                required
                value={input.value}
                onChange={input.onChange}
              />
            </div>
          ))}
        {filtersForm
          .filter((input) => input.type === 'select')
          .map((input) => (
            <div key={input.id}>
              <Label htmlFor={input.id} className="text-sx hidden">
                {input.label}
              </Label>
              <select
                className="border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block p-3.5 py-2.5 px-3 rounded-md bg-gray-100 w-full"
                name={input.name}
                id={input.id}
                placeholder={input.placeholder}
                required
                value={input.value}
                onChange={input.onChange}
              >
                <option value="">{input.placeholder}</option>
                {input.options.map((option: any) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          ))}
      </div>

      <div
        className={`z-50 my-4 w-56 text-base list-none bg-white divide-y divide-gray-100 shadow-xl rounded-xl absolute top-[3.25rem] right-3 ${
          isOpenAction ? 'block' : 'hidden'
        }`}
      >
        <ul className="py-1 text-gray-700">
          <li className="hover:bg-gray-100">
            <button
              type="button"
              className="px-3 py-2 text-sm hover:bg-gray-100 flex items-center gap-2 w-full"
            >
              Nuevo
            </button>
          </li>
          <li className="hover:bg-gray-10">
            <button
              type="button"
              className="px-3 py-2 text-sm hover:bg-gray-100 flex items-center gap-2 w-full"
            >
              Importar
            </button>
          </li>
          <li className="hover:bg-gray-10">
            <button
              type="button"
              className="px-3 py-2 text-sm hover:bg-gray-100 flex items-center gap-2 w-full"
            >
              Exportar PDF
            </button>
          </li>
          <li className="hover:bg-gray-10">
            <button
              type="button"
              className="px-3 py-2 text-sm hover:bg-gray-100 flex items-center gap-2 w-full"
            >
              Exportar Excel
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
