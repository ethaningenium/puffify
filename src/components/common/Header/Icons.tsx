import React from "react";
import { LucideIcon } from "lucide-react";

const Icons: React.FC<{
  Icon: LucideIcon;
  count?: number;
  stroke?: number;
}> = ({ Icon, count, stroke }) => {
  return (
    <div className=" w-6 h-6 relative before:block before:absolute before:bg-transparent before:w-6 before:h-6 before:-z-10 before:scale-100 before:rounded-sm hover:before:scale-150 before:duration-300 hover:before:bg-slate-200 cursor-pointer">
      {count !== 0 && (
        <span className=" text-white text-[10px] bg-red-500 absolute w-3 h-3 rounded-full flex justify-center items-center -top-1 -right-1 select-none cursor-pointer">
          {count}
        </span>
      )}
      <Icon strokeWidth={stroke} />
    </div>
  );
};

export default Icons;
