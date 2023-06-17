import Menu from 'components/organisms/Menu';
import IconStatistic from 'components/atoms/icons/IconStatistic';
import IconFiles from 'components/atoms/icons/IconFiles';
import Header from 'components/organisms/Header';
import Table from 'components/molecules/Table';

export default function Dashboard() {
  return (
    <div className="antialiased bg-gray-50">
      <Header />
      <Menu />
      <main className="p-4 md:ml-56 h-auto pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="rounded-lg h-32">
            <article className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white text-black">
              <div className="p-5">
                <div className="flex justify-between">
                  <IconStatistic />
                </div>
                <div className="w-full flex-1 justify-end text-right">
                  <div>
                    <div className="mt-3 text-3xl font-bold leading-8">
                      1349
                    </div>
                    <div className="text-base">New feedbacks</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="rounded-lg h-32">
            <article className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y  bg-white text-black">
              <div className="p-5">
                <div className="flex justify-between">
                  <IconFiles />
                </div>
                <div className="w-full flex-1 justify-end text-right">
                  <div>
                    <div className="mt-3 text-3xl font-bold leading-8">
                      12,5M$
                    </div>
                    <div className="text-base">Total Profit</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="rounded-lg h-32">
            <article className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white text-black">
              <div className="p-5">
                <div className="flex justify-between">
                  <IconFiles />
                </div>
                <div className="w-full flex-1 justify-end text-right">
                  <div>
                    <div className="mt-3 text-3xl font-bold leading-8">549</div>
                    <div className="text-base">New Orders</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="rounded-lg h-32">
            <article className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white text-black">
              <div className="p-5">
                <div className="flex justify-between">
                  <IconFiles />
                </div>
                <div className="w-full flex-1 justify-end text-right">
                  <div>
                    <div className="mt-3 text-3xl font-bold leading-8">
                      +89%
                    </div>
                    <div className="text-base">Brand Popularity</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="rounded-lg mb-4">
          <Table />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72" />
          <div className="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72" />
          <div className="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72" />
          <div className="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72" />
        </div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 h-96 mb-4" />
        <div className="grid grid-cols-2 gap-4">
          <div className="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72" />
          <div className="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72" />
          <div className="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72" />
          <div className="border-2 border-dashed rounded-lg border-gray-300 h-48 md:h-72" />
        </div>
      </main>
    </div>
  );
}
