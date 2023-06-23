import { useCallback } from 'react';
import IconArrow from 'components/atoms/icons/IconArrow';

type Props = {
  handle: () => void;
};

export default function ButtonBack(props: Props) {
  const { handle } = props;
  const handleGoBack = useCallback(() => {
    handle();
    window.history.back();
  }, [handle]);

  return (
    <button
      type="button"
      className="w-full items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      onClick={handleGoBack}
    >
      <span className="flex items-center justify-center">
        <IconArrow className="rotate-180" />
        Retroceder
      </span>
    </button>
  );
}
