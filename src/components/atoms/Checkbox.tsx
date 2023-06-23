type Props = {
  id: string;
  required?: boolean;
  className?: string;
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Checkbox({
  id = '',
  required = false,
  className = '',
  label = '',
  ...props
}: Props) {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={id}
          type="checkbox"
          className={`w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 ${
            className !== undefined ? className : ''
          } $}`}
          required={!!required}
          {...props}
        />
      </div>
      <div className="ml-1 text-sm">
        <label htmlFor="remember" className="text-gray-500">
          {label}
        </label>
      </div>
    </div>
  );
}

Checkbox.defaultProps = {
  className: undefined,
  required: false,
};
