type Props = {
  message: string;
};

export default function Alert({ message }: Props) {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <span className="block text-sm font-bold sm:inline">{message}</span>
    </div>
  );
}
