import React from "react";
import Minus from "../../assets/minus.png";
import Plus from "../../assets/plus.png";

function QuantityBtn({ state, dispatch }) {
  return (
    <>
      <div className="w-[157px] h-[56px] rounded-[10px] bg-[#F6F8FD] flex justify-evenly items-center">
        <button
          onClick={() => {
            if (state.count > 0) {
              dispatch({ type: "-" });
            }
          }}
          className="h-[15px] cursor-pointer w-[15px] flex items-center justify-center "
        >
          <img src={Minus} className="w-[12px] h-[3px] " alt="minus" />
        </button>
        <h1 className="text-[#1D2026] text-[16px]">{state.count}</h1>
        <button
          onClick={() => {
            dispatch({ type: "+" });
          }}
          className="h-[15px] cursor-pointer w-[15px] flex items-center justify-center "
        >
          <img src={Plus} className=" w-[12px] h-[12px] " alt="plus" />
        </button>
      </div>
    </>
  );
}

export default QuantityBtn;
