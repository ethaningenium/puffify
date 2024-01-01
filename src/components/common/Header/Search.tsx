"use client";

import React, { useRef, useState } from "react";
import { Search as MyCustomSearch, X } from "lucide-react";
import Link from "next/link";

const Search = () => {
  const [value, setValue] = useState("");
  const input = useRef<HTMLInputElement>(null);
  return (
    <div className="w-1/3 flex bg-slate-100 items-center h-12 rounded-xl relative">
      <input
        ref={input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="w-full bg-transparent focus:outline-none pl-4"
        placeholder="search..."
      />
      {!!value && (
        <button
          onClick={() => {
            setValue("");
            input.current?.focus();
          }}
          className="absolute right-16 text-gray-300 hover:text-gray-500 duration-200"
        >
          <X />
        </button>
      )}
      <Link href={!!value ? `/?search=${value}` : "/"}>
        <button className="h-full px-6 flex items-center">
          <MyCustomSearch className="text-gray-400" />
        </button>
      </Link>
    </div>
  );
};

export default Search;
