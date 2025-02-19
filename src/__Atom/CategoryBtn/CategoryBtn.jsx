import React from "react";

function CategoryBtn({ categoryName, onClick, isActive }) {
  return (
    <>
      <button
        onClick={onClick}
        className={`w-auto h-[110px]  text-[15px]  border-b-[4px] cursor-pointer ${
          isActive ? "border-b-[#FF7E1B]" : "border-b-transparent"
        }  ${isActive ? "text-[#1D2026]" : "text-[#69707D]"}`}
      >
        {categoryName}
      </button>
    </>
  );
}

export default CategoryBtn;
