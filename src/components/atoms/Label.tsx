type Props = {
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
};

export default function Label({
  htmlFor = '',
  className = '',
  children,
}: Props) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-2 text-sm font-medium text-gray-900 ${
        className !== undefined ? className : ''
      }`}
    >
      {children}
    </label>
  );
}

Label.defaultProps = {
  className: undefined,
};
