import useSteps from 'hooks/useSteps';
import IconApproved from '../atoms/icons/IconApproved';

type Props = {
  stepNumber: number;
};

export default function Steps(props: Props) {
  const { stepNumber } = props;
  const { stepsSignup } = useSteps(stepNumber);

  return (
    <ol
      id="steps"
      className="w-full sm:max-w-2xl sm:mx-auto py-4 px-6 flex gap-1 justify-center text-center text-gray-400 text-base font-medium leading-5 sm:px-20"
    >
      {stepsSignup.map((step) => (
        <li
          key={step.id}
          className="flex items-center after:w-10 after:md:w-12 after:h-1 after:mx-1 after:md:mx-5 after:border-b after:border-b-slate-300 last:after:hidden"
        >
          <div
            className={`flex flex-col gap-1 items-center ${
              step.active ? 'text-red-500' : ''
            }`}
          >
            {step.active ? <IconApproved /> : <span>{step.value}</span>}
            <span>{step.title}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}
