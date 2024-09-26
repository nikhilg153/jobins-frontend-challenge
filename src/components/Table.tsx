import Image from "next/image";
import ArrowIcon from "../app/images/chevron-down.svg";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

const TableSection = () => {
  return (
    <div className="flex justify-between items-center p-4 rounded-lg ">
      <div className="flex gap-5 items-center">
        <div className="relative">
          <select className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 text-sm pr-8 rounded-md leading-tight focus:outline-none focus:shadow-outline">
            <option>Status: All</option>
            <option>Status: Active</option>
            <option>Status: Inactive</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <Image src={ArrowIcon} alt="Icon" />
          </div>
        </div>

        <div className="flex items-center border border-gray-300 rounded-lg bg-white px-2 py-2">
          <input
            type="text"
            className="focus:outline-none w-full"
            placeholder="Search..."
          />
          <button className="ml-2 text-gray-400">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative">
        <select className="block appearance-none w-full bg-white border border-gray-300 text-sm hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline">
          <option>Filter by date range</option>
          <option>Today</option>
          <option>This week</option>
          <option>This month</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <Image src={ArrowIcon} alt="Icon" />
        </div>
      </div>
    </div>
  );
};

export default TableSection;
