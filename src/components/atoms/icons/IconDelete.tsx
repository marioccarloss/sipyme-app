type Props = {
  className?: string;
};

export default function IconDelete({ className = '', ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`w-5 h-5 ${className !== undefined ? className : ''}`}
      {...props}
    >
      <defs />
      <path
        className="cls-1"
        d="M13,0H11A3,3,0,0,0,8,3V4H2A1,1,0,0,0,2,6H3V20a4,4,0,0,0,4,4H17a4,4,0,0,0,4-4V6h1a1,1,0,0,0,0-2H16V3A3,3,0,0,0,13,0ZM10,3a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V4H10Zm9,17a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6H19Z"
      />
      <path
        fill="currentColor"
        d="M12,9a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V10A1,1,0,0,0,12,9Z"
      />
      <path className="cls-1" d="M15,18a1,1,0,0,0,2,0V10a1,1,0,0,0-2,0Z" />
      <path
        fill="currentColor"
        d="M8,9a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V10A1,1,0,0,0,8,9Z"
      />
    </svg>
  );
}

IconDelete.defaultProps = {
  className: undefined,
};
