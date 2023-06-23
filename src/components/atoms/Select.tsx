import { ChangeEvent } from 'react';

type Props = {
  name: string;
  id: string;
  placeholder: string;
  required: boolean;
  value: string;
  className?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options?: any[];
};

export default function Select({
  name = '',
  id = '',
  placeholder = '',
  required = false,
  className = '',
  options = [],
  ...props
}: Props) {
  return (
    <select
      name={name}
      id={id}
      className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3.5 ${
        className !== undefined ? className : ''
      }`}
      placeholder={placeholder}
      required={required}
      {...props}
    >
      <option value="" hidden>
        {name}
      </option>
      {options?.map((option: any) => (
        <option key={option.id} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

Select.defaultProps = {
  className: undefined,
  options: [],
};
