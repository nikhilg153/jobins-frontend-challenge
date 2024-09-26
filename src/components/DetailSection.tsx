import React from "react";
import Icon from "../app/images/Avatar (1).svg";
import Image from "next/image";

const DetailSection = () => {
  return (
    <div className="mx-5 py-6 px-10 bg-gray-50 rounded-2xl shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Profile Section */}
        <div className="flex items-center gap-4">
          <Image src={Icon} alt="icon" />
          <div>
            <h3 className="text-lg font-semibold">Robert Fox</h3>
            <p className="text-sm text-gray-500">robert@gmail.com</p>
          </div>
        </div>

        {/* Personal Information */}
        <div className="flex flex-col text-gray-700">
          <h4 className="text-sm text-gray-600 mb-4">PERSONAL INFORMATION</h4>
          <p className="text-sm mb-3">
            Contact Number <strong className="ml-5">(201) 555-0124</strong>
          </p>
          <p className="text-sm mb-3">
            Date of Birth <strong className="ml-5">1 Jan, 1985</strong>
          </p>
          <p className="text-sm">
            Member Since <strong className="ml-5">3 March, 2023</strong>
          </p>
        </div>

        {/* Shipping Address & Order Info */}
        <div className="flex flex-col text-gray-700">
          <h4 className="text-gray-600 text-sm mb-4">SHIPPING ADDRESS</h4>
          <p className="text-xs">3517 W. Gray St. Utica, Pennsylvania 57867</p>

          <div className="flex justify-between mt-4 text-sm">
            <div>
              <p className="font-bold text-2xl">150</p>
              <p className="text-xs text-gray-600">Total Orders</p>
            </div>
            <div>
              <p className="font-semibold text-2xl">140</p>
              <p className="text-xs text-gray-600">Completed</p>
            </div>
            <div>
              <p className="font-semibold text-2xl">10</p>
              <p className="text-xs text-gray-600">Canceled</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6  pt-4 flex gap-6 text-sm text-blue-600">
        <button className="border-b-2 border-blue-600 pb-2">All Orders</button>
        <button className="text-gray-500">Completed</button>
        <button className="text-gray-500">Canceled</button>
      </div>
    </div>
  );
};

export default DetailSection;
