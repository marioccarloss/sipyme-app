import Label from 'components/atoms/Label';
import IconArrow from 'components/atoms/icons/IconArrow';
import IconSearch from 'components/atoms/icons/IconSearch';
import useSearch from 'hooks/useSearch';
import { Link } from 'react-router-dom';
import { Search as SearchType, Resoult, Item } from 'types/Search';
import Spinner from 'components/atoms/Spinner';
import { getIsShowSearchFromStore } from 'store/search';

export default function Search() {
  const { data, isLoading, handleSearchInput, searchTerm, typesNotPermitted } =
    useSearch();
  const isShowSearch = getIsShowSearchFromStore();

  return (
    <form
      action="#"
      method="GET"
      className={`grow md:block md:pl-2 max-w-md ml-0 mr-auto md:relative md:top-0 md:left-0 ${
        isShowSearch ? 'block absolute top-[4rem] left-0 w-full' : 'hidden'
      }`}
    >
      <Label htmlFor="topbarSearch" className="sr-only">
        Search
      </Label>
      <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <IconSearch className="w-[20px!important] h-[20px!important] text-gray-300" />
        </div>

        <input
          type="text"
          name="email"
          id="topbarSearch"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
          placeholder="Search"
          onChange={handleSearchInput}
        />
        {isLoading === true && searchTerm.length > 0 && (
          <div className="absolute top-2/4 right-2 -translate-y-1/2 text-sm">
            <Spinner />
          </div>
        )}
      </div>
      {!isLoading &&
        (data as SearchType)?.resoults?.length > 0 &&
        searchTerm !== '' && (
          <div className="overflow-auto max-h-[405px] absolute top-14 left-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            <ul>
              {(data as SearchType)?.resoults?.map((item: Resoult) => (
                <li
                  key={item.type}
                  className="border-b border-gray-200 last:border-b-0 bg-white"
                >
                  {item.items?.length > 0 && (
                    <h2 className="pt-3 pb-1 px-4 font-bold text-gray-600 border-b-slate-400">
                      {item.type}
                    </h2>
                  )}
                  <ul>
                    {item?.items?.map((i: Item) => (
                      <li key={i.direct_url}>
                        <Link
                          to={i.direct_url}
                          className="flex py-4 pr-4 pl-6 justify-between items-center text-gray-500 hover:bg-red-50 hover:border-red-200"
                        >
                          <span>
                            <p className="text-xs">
                              <b>Código:</b> {i.code}
                            </p>
                            {!typesNotPermitted.includes(i.type) && (
                              <p className="text-xs">
                                <b>Tipo:</b> {i.type}
                              </p>
                            )}
                            <p className="text-xs">
                              <b>Descripción:</b> {i.desc}
                            </p>
                          </span>
                          <IconArrow />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
    </form>
  );
}
