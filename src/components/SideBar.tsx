"use client";
import React, { useState } from "react";
import Logo from "../app/images/logo.svg";
import Side from "../app/images/side-bar.svg";
import DashboardIcon from "../app/images/smart-home.svg";
import OrderManagementIcon from "../app/images/shopping-cart.svg";
import StarIcon from "../app/images/star.svg";
import PlusIcon from "../app/images/circle-plus.svg";
import BoxIcon from "../app/images/box.svg";
import AvatarIcon from "../app/images/Avatar.svg";
import NotificationIcon from "../app/images/Notification.svg";
import Image from "next/image";
import HeroSection from "./HeroSection";
import DetailSection from "./DetailSection";
import Table from "./Table";
import TableSection from "./Table";
import TableList from "./TableList";
import StickyHeadTable from "./TableList";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className={`flex h-full`}>
      <div
        className={`bg-white border-r border-gray-300 p-4 ${
          isCollapsed ? "w-16" : "w-64"
        } duration-300`}
      >
        <div className="flex justify-between items-center mb-6">
          {!isCollapsed && (
            <span className="text-2xl font-bold flex gap-2">
              <Image src={Logo} alt="logo" />
              JoBins
            </span>
          )}
          <button onClick={() => setIsCollapsed(!isCollapsed)}>
            <Image src={Side} alt="logo" />
          </button>
        </div>

        <div>
          <div className="mb-4">
            <h4
              className={`uppercase text-xs text-gray-400 mb-2 ${
                isCollapsed && "hidden"
              }`}
            >
              Main Menu
            </h4>
            <ul>
              <li className="flex items-center gap-4 mb-2 cursor-pointer bg-gray-100 font-medium  hover:bg-gray-100 p-2 rounded-lg">
                <Image src={DashboardIcon} alt="logo" />
                {!isCollapsed && <span>Dashboard</span>}
              </li>
              <li className="flex items-center gap-4 mb-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                <Image src={OrderManagementIcon} alt="logo" />
                {!isCollapsed && <span>Order Management</span>}
              </li>
              <li className="flex items-center gap-4 mb-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                <Image src={StarIcon} alt="logo" />
                {!isCollapsed && <span>Brand</span>}
              </li>
            </ul>
          </div>

          <div>
            <h4
              className={`uppercase text-xs text-gray-400 mb-2 ${
                isCollapsed && "hidden"
              }`}
            >
              Products
            </h4>
            <ul>
              <li className="flex items-center gap-4 mb-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                <Image src={PlusIcon} alt="logo" />
                {!isCollapsed && <span>Add Products</span>}
              </li>
              <li className="flex items-center gap-4 mb-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                <Image src={BoxIcon} alt="logo" />
                {!isCollapsed && <span>Product List</span>}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 bg-gray-100">
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium">Dashboard</h1>
          <div className="flex gap-3 items-center">
            <Image src={NotificationIcon} alt="logo" />
            <Image src={AvatarIcon} alt="logo" />
          </div>
        </div>
        <HeroSection />
        <DetailSection />
        <TableSection />
        <StickyHeadTable />
      </div>
    </div>
  );
};

export default SideBar;
