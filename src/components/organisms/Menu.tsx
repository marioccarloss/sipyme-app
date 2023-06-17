import IconSearch from 'components/atoms/icons/IconSearch';
import Navigation from 'components/molecules/Navigation';
import Label from 'components/atoms/Label';

export default function Menu() {
  return (
    <aside className="fixed top-0 left-0 z-40 w-56 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0">
      <div className="overflow-y-auto py-5 px-3 h-full bg-white">
        <form className="md:hidden mb-2">
          <Label htmlFor="sidebarSearch" className="sr-only">
            Search
          </Label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <IconSearch className="text-gray-500" />
            </div>
            <input
              type="text"
              name="search"
              id="sidebarSearch"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2"
              placeholder="Search"
            />
          </div>
        </form>
        <Navigation />
      </div>
    </aside>
  );
}
