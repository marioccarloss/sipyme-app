type Props = {
  className?: string;
};

export default function IconArrow({ className = '', ...props }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ${className !== undefined ? className : ''}`}
      {...props}
    >
      <path d="M10.294 9.698a.988.988 0 010-1.407 1.01 1.01 0 011.419 0l2.965 2.94a1.09 1.09 0 010 1.548l-2.955 2.93a1.01 1.01 0 01-1.42 0 .988.988 0 010-1.407l2.318-2.297-2.327-2.307z" />
    </svg>
  );
}

IconArrow.defaultProps = {
  className: undefined,
};
