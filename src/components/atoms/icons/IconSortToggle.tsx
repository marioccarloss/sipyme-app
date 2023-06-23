type Props = {
  className?: string;
};

export default function IconSortToggle({ className = '', ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 8 12"
      className={`w-3 h-3 ${className !== undefined ? className : ''}`}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.49946 9.565L6.21946 7.705C6.28871 7.63458 6.37127 7.57865 6.46235 7.54048C6.55344 7.5023 6.65121 7.48264 6.74996 7.48264C6.84872 7.48264 6.94649 7.5023 7.03757 7.54048C7.12865 7.57865 7.21122 7.63458 7.28046 7.705C7.4213 7.84826 7.50022 8.04111 7.50022 8.242C7.50022 8.44289 7.4213 8.63574 7.28046 8.779L4.54546 11.667C4.44183 11.7728 4.31814 11.8568 4.18163 11.9142C4.04512 11.9715 3.89854 12.0011 3.75046 12.0011C3.60239 12.0011 3.45581 11.9715 3.3193 11.9142C3.18279 11.8568 3.05909 11.7728 2.95546 11.667L0.219464 8.779C0.132283 8.69022 0.0680409 8.58154 0.0322936 8.46236C-0.00345382 8.34318 -0.0096304 8.21709 0.014298 8.09498C0.0382264 7.97288 0.0915394 7.85844 0.169626 7.76157C0.247713 7.6647 0.348223 7.58831 0.462464 7.539C0.599555 7.4818 0.750631 7.46695 0.896238 7.49635C1.04184 7.52576 1.17532 7.59808 1.27946 7.704L2.99946 9.564V0.75C2.99946 0.551088 3.07848 0.360322 3.21913 0.21967C3.35979 0.0790176 3.55055 0 3.74946 0C3.94838 0 4.13914 0.0790176 4.27979 0.21967C4.42045 0.360322 4.49946 0.551088 4.49946 0.75V9.565Z"
        fill="currentColor"
      />
    </svg>
  );
}

IconSortToggle.defaultProps = {
  className: undefined,
};
