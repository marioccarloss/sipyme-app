import useStatistics from 'hooks/useServices';
import IconStatistic from 'components/atoms/icons/IconStatistic';

export default function Cards() {
  const { dataStatistics } = useStatistics();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {dataStatistics?.map((item: any) => (
        <div className="rounded-lg h-32" key={`${item.value}${item.name}`}>
          <article className="transform hover:scale-105 transition duration-300 shadow-lg rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white text-black">
            <div className="p-5">
              <div className="flex justify-between">
                <IconStatistic className="w-10 h-10 text-gray-400" />
              </div>
              <div className="w-full flex-1 justify-end text-right">
                <div>
                  <div className="mt-3 text-[2.5rem] font-bold leading-[1]">
                    {item.value}
                  </div>
                  <div className="text-base text-gray-500 font-semibold leading-[1]">
                    {item.name}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
