import { ReactNode } from 'react';
import Logo from 'components/atoms/Logo';

type Props = {
  type: string;
  image: string;
  form: ReactNode;
};

export default function Auth({ type, image, form }: Props) {
  return (
    <section className="bg-gray-50 mx-auto h-[100dvh] lg:grid lg:grid-cols-[repeat(2,minmax(0,1fr))]">
      <div className="hidden overflow-hidden w-full h-full lg:block">
        <img
          src={image}
          alt={type}
          className="min-w-full min-h-full object-cover"
        />
      </div>
      <div className="bg-white w-full h-full flex flex-col items-center justify-center">
        <div className="mb-6 flex justify-center">
          <Logo />
        </div>
        {form}
      </div>
    </section>
  );
}
