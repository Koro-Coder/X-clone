import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import { FaXTwitter } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { VscBell } from "react-icons/vsc";
import { GoMail } from "react-icons/go";
import { IoBookmarkOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import FeedCard from "@/components/Feedcard";
import { PiDotsThreeCircle } from "react-icons/pi";


const inter = Inter({ subsets: ["latin"] });

interface SideBarButtons{
  title:string,
  icon: React.ReactNode
};

const sideBarItems: SideBarButtons[] =[
  {
    title:"Home",
    icon:<GoHome />
  },
  {
    title:"Explore",
    icon:<IoSearchOutline />
  },
  {
    title:"Notifications",
    icon:<VscBell />
  },
  {
    title:"Messages",
    icon:<GoMail />
  },
  {
    title:"Bookmarks",
    icon:<IoBookmarkOutline />
  },
  {
    title:"Profile",
    icon:<HiOutlineUser />
  },
  {
    title:"More",
    icon:<PiDotsThreeCircle />
  }
];

export default function Home() {
  return (
    <div className="grid grid-cols-9 h-screen w-screen">
        <div className="flex flex-col col-span-2 pt-1 pl-12">
          <div className="text-3xl p-3 h-fit w-fit rounded-full hover:bg-gray-900 transition-all cursor-pointer">
            <FaXTwitter />
          </div>
          <div>
            <ul className="flex flex-col">
              {sideBarItems.map(item=>
                <li key={item.title} className="flex px-3 py-2 justify-start items-center h-fit w-fit rounded-full hover:bg-gray-800 transition-all cursor-pointer">
                <div className="text-3xl">
                  {item.icon}
                </div>
                <div className="text-[22px] mx-4">{item.title}</div>
              </li>
              )}  
            </ul>
          </div>
          <div className="flex items-center justify-center bg-[#1DA1F2] mt-3 rounded-full mr-10 py-3 hover:bg-blue-500 cursor-pointer transition-all">
            <button className="text-[18px] font-bold"> Post</button>
          </div>
        </div>
        <div className="col-span-4 border-l-[1px] border-r-[1px] border-gray-800 overflow-scroll no-scrollbar mr-1">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-1"></div>
    </div>
  );
}