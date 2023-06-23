type Props = {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  type = 'button',
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      className={`w-full bg-red-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm p-3.5 text-center ${
        className !== undefined ? className : ''
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  className: undefined,
};
