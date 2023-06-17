type Props = {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  required: boolean;
  value: string;
  className?: string;
  autoComplete?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  type = 'text',
  name = '',
  id = '',
  placeholder = '',
  required = false,
  className = '',
  ...props
}: Props) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
        className !== undefined ? className : ''
      }`}
      placeholder={placeholder}
      required={!!required}
      {...props}
    />
  );
}

Input.defaultProps = {
  className: undefined,
  autoComplete: undefined,
};
