import React from "react";
import { VscComment } from "react-icons/vsc";
import { BiRepost } from "react-icons/bi";
import { LuShare } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";

const FeedCard: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-12 p-2 gap-2 border-t-[1px] border-gray-800">
        <div className="col-span-1">
          <img
            src="https://imgs.search.brave.com/VtuLHgcddG8TLDGhaJKjTncbbvvSBk_shiTxgEnwGFs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mcmVl/c3ZnLm9yZy9pbWcv/YWJzdHJhY3QtdXNl/ci1mbGF0LTQucG5n"
            alt="User Image"
            className="border-2 border-green-700 rounded-full "
          />
        </div>
        <div className="col-span-11">
          <b>User#</b>
          <p>
            All is well and good. Even if it isn't, it will be. Just Smile.
            Don't take life to seriously, you will never get out of it
            alive.✨✨ #JustSmile
          </p>
          <div className="flex text-xl justify-between pr-8 mt-2">
            <div className="rounded-full p-2 hover:text-blue-500  hover:bg-indigo-600 hover:bg-opacity-15 transition-all cursor-pointer">
              <VscComment />
            </div>
            <div className="transition-all rounded-full p-2 hover:text-green-500  hover:bg-green-800 hover:bg-opacity-20 cursor-pointer">
              <BiRepost />
            </div>
            <div className="transition-all rounded-full p-2 hover:text-rose-500 hover:bg-rose-600 hover:bg-opacity-15 cursor-pointer">
              <LuHeart />
            </div>
            <div className="transition-all rounded-full p-2 hover:text-yellow-500 hover:bg-yellow-600 hover:bg-opacity-15 cursor-pointer">
              <LuShare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
