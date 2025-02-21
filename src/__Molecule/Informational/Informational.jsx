import React from "react";
import QuantityBtn from "../../__Atom/QuantityBtn/QuantityBtn";
import CartBtn from "../../__Atom/CartBtn/CartBtn";

function Informational({ ProductData, dispatch, state, Change }) {
  return (
    <>
      <div className="flex flex-col max-w-[445px] w-full gap-[25px]">
        <h4 className="text-[13px] text-[#FF7E1B] tracking-wide ">
          {ProductData.company.toUpperCase()}
        </h4>
        <h1 className="text-[44px] text-[#1D2026]">{ProductData.name}</h1>
        <p className="text-[#69707D] text-[16px]">{ProductData.overview}</p>
        <div className="flex items-center gap-[24px]">
          <div className="flex flex-col items-start">
            <h1 className="text-[#1D2026] text-[28px]">
              {ProductData.newPrice}
            </h1>
            <h3 className="text-[#B6BCC8] text-[16px] line-through">
              {ProductData.oldPrice}
            </h3>
          </div>
          <div className="w-[51px] h-[27px] bg-[#FFEEE2] rounded-[6px] flex justify-center items-center">
            <h3 className="text-[#FF7E1B] text-[16px]">
              {ProductData.discount}
            </h3>
          </div>
        </div>
        <div className=" flex gap-[16px]">
          <QuantityBtn dispatch={dispatch} state={state} />
          <CartBtn Change={Change} btnTxt="Add to cart" />
        </div>
      </div>
    </>
  );
}

export default Informational;
