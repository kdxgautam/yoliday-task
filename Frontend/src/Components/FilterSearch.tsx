import { SearchContext } from "@/context/SearchContext";
import { Funnel, Search } from "lucide-react";
import { FC, useContext } from "react";


interface FilterSearchProps {
  isMobile?: boolean;
}

const FilterSearch: FC<FilterSearchProps> = ({ isMobile = false }) => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div
      className={
        isMobile
          ? "px-4 pt-4 pb-2 sm:hidden"
          : "hidden sm:flex sm:items-center sm:gap-4 sm:pr-6"
      }
    >
      {/* Mobile Layout */}
      {isMobile ? (
        <div className=" ">
          {/* Search Box */}
          <div className="relative mb-0">
            <input
              type="text"
              placeholder="Search a project"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full py-3 px-4 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
            />
            <div className="absolute top-1/2 -translate-y-1/2 right-3">
              <div className="w-8 h-8 flex items-center justify-center bg-[#DF5433] rounded-lg cursor-pointer">
                <Search className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Filter Button */}
          <div className="fixed bottom-0 -translate-y-20 left-1/2 -translate-x-[31%] z-10 ">
            <button className="flex items-center bg-[#DF5433] text-white px-6 py-2 rounded-full shadow-xl">
              <Funnel className="w-5 h-5" />
              <span className="ml-2">Filter</span>
            </button>
          </div>
        </div>
      ) : (
        // Desktop Layout
        <>
          <button className="flex items-center text-gray-700">
            <Funnel className="w-5 h-5" />
            <span className="ml-2">Filter</span>
          </button>

          <div className="relative sm:w-44 md:w-56 lg:w-64">
            <input
              type="text"
              placeholder="Search a project"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full py-2 px-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
            />
            <div className="absolute top-1/2 -translate-y-1/2 right-2">
              <div className="w-8 h-8 flex items-center justify-center bg-[#DF5433] rounded-lg cursor-pointer">
                <Search className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FilterSearch;