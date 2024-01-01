import React from "react";
import { LucideIcon } from "lucide-react";

type IconPropsType = {
  Icon: LucideIcon;
  count?: number;
  stroke?: number;
};

const Icons = (props: IconPropsType) => {
  return (
    <div className=" w-6 h-6 relative before:block before:absolute before:bg-transparent before:w-6 before:h-6 before:-z-10 before:scale-100 before:rounded-sm hover:before:scale-150 before:duration-300 hover:before:bg-slate-200 cursor-pointer">
      {props.count !== 0 && (
        <span className=" text-white text-[10px] bg-red-500 absolute w-3 h-3 rounded-full flex justify-center items-center -top-1 -right-1 select-none cursor-pointer">
          {props.count}
        </span>
      )}
      <props.Icon strokeWidth={props.stroke} />
    </div>
  );
};

export default Icons;
