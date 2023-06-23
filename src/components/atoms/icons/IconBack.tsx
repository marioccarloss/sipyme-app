type Props = {
  className?: string;
};

export default function IconBack({ className = '', ...props }: Props) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 512 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-4 h-4 ${className !== undefined ? className : ''}`}
      {...props}
    >
      <path d="M 512.00 254.56 L 512.00 257.56 C 509.85 269.10 502.35 272.00 491.50 272.00 Q 273.41 272.00 55.72 272.00 Q 54.65 272.00 55.41 272.76 Q 79.92 297.35 104.06 321.39 Q 109.01 326.31 110.54 329.77 C 116.14 342.47 103.48 356.05 90.32 350.85 Q 86.85 349.49 81.20 343.84 Q 42.64 305.26 4.07 266.69 Q 0.67 263.30 0.00 256.94 L 0.00 255.19 Q 0.54 248.85 4.07 245.32 Q 44.75 204.62 85.44 163.94 Q 87.24 162.14 90.30 161.05 C 104.20 156.10 116.98 170.44 110.07 183.46 Q 108.85 185.76 104.95 189.67 Q 80.02 214.63 55.07 239.53 Q 54.60 240.00 55.26 240.00 Q 273.37 240.00 491.42 240.00 C 502.38 240.00 509.94 242.85 512.00 254.56 Z" />
    </svg>
  );
}

IconBack.defaultProps = {
  className: undefined,
};
