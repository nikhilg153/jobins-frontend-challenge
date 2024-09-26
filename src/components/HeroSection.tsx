import Image from "next/image";
import BusinessIcon from "../app/images/business.svg";
import LineIcon from "../app/images/Line.svg";
import ArrowIcon from "../app/images/arrow.svg";
import YenIcon from "../app/images/yen.svg";
import UsIcon from "../app/images/us.svg";
import AuIcon from "../app/images/au.svg";
import BrIcon from "../app/images/br.svg";
import { LinearProgress } from "@mui/material";

const HeroSection = () => {
  return (
    <div className="p-6 bg-gray-100 ">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Total Sales & Costs */}
        <div className="flex space-x-8 bg-white rounded-2xl px-10 py-5 shadow-sm items-center">
          <div className="flex gap-10">
            <Image src={BusinessIcon} alt="icon" />
            <Image src={LineIcon} alt="icon" />
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="font-semibold text-lg">Total Sales & Costs</h1>
              <p className="text-sm text-gray-600">Last 7 days</p>
            </div>
            <div>
              <h1 className="text-4xl font-bold">$350K</h1>
              <div className="flex items-center">
                <Image src={ArrowIcon} alt="icon" />
                <span style={{ color: "#1EB564" }}>8.56K</span>
                <p className="text-gray-600 text-sm ml-3">vs last 7 days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Total Profit */}
        <div className="bg-white rounded-2xl px-10 py-5 shadow-sm items-center">
          <div className=" flex items-center gap-5 mb-4">
            <Image src={YenIcon} alt="icon" />
            <div>
              <div className="text-lg font-semibold">Total Profit</div>
              <div className="text-sm text-gray-500">Last 7 days</div>
            </div>
          </div>
          <div className="text-3xl font-bold">50K</div>
          <div className="text-green-500 mt-2">↑ 12% vs last 7 days</div>
        </div>

        {/* Country Sales */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex-1">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Image src={UsIcon} alt="icon" />
                <div className="text-left">
                  <p className="text-sm">30k</p>
                  <span className="text-xs text-gray-600 w-full">
                    United States
                  </span>
                </div>
              </div>
              <LinearProgress
                variant="determinate"
                value={50}
                sx={{ borderRadius: "10px", height: "5px", width: "50%" }}
              />
              <div className="flex items-center space-x-2">
                <div className="text-green-500">↑ 25.8%</div>
              </div>
            </div>
            {/* US Bar */}

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Image src={BrIcon} alt="icon" />
                <div className="text-left">
                  <p className="text-sm">26k</p>
                  <span className="text-xs text-gray-600 w-full">Brazil</span>
                </div>
              </div>
              <LinearProgress
                variant="determinate"
                value={50}
                sx={{ borderRadius: "10px", height: "5px", width: "50%" }}
              />
              <div className="flex items-center space-x-2">
                <div className="text-red-500">↓ 16.2%</div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Image src={AuIcon} alt="icon" />
                <div className="text-left">
                  <p className="text-sm">17k</p>
                  <span className="text-xs text-gray-600 w-full">
                    Australia
                  </span>
                </div>
              </div>
              <LinearProgress
                variant="determinate"
                value={50}
                sx={{ borderRadius: "10px", height: "5px", width: "50%" }}
              />
              <div className="flex items-center space-x-2">
                <div className="text-red-500">↓ 11.9%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
