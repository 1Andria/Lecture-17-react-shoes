import React from "react";
import QuantityBtn from "../../__Atom/QuantityBtn/QuantityBtn";
import CartBtn from "../../__Atom/CartBtn/CartBtn";

function Informational({ ProductData, dispatch, state, Change }) {
  return (
    <>
      <div className="max-[474px]:pt-[20px] max-[474px]:gap-[12px] flex flex-col max-w-[445px] w-full gap-[25px] max-[474px]:pl-[20px] max-[474px]:pr-[20px]">
        <h4 className="text-[13px] text-[#FF7E1B] tracking-wide ">
          {ProductData.company.toUpperCase()}
        </h4>
        <h1 className="text-[44px] text-[#1D2026] max-[474px]:text-[28px]">
          {ProductData.name}
        </h1>
        <p className="text-[#69707D] text-[16px] max-[474px]:text-[15px]">
          {ProductData.overview}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[24px]">
            <div className="flex flex-col items-start">
              <h1 className="text-[#1D2026] text-[28px]">
                {ProductData.newPrice}
              </h1>
              <h3 className="text-[#B6BCC8] text-[16px] line-through max-[474px]:hidden">
                {ProductData.oldPrice}
              </h3>
            </div>
            <div className="w-[51px] h-[27px] bg-[#FFEEE2] rounded-[6px] flex justify-center items-center">
              <h3 className="text-[#FF7E1B] text-[16px]">
                {ProductData.discount}
              </h3>
            </div>
          </div>
          <h3 className="text-[#B6BCC8] text-[16px] line-through min-[474px]:hidden">
            {ProductData.oldPrice}
          </h3>
        </div>
        <div className=" flex gap-[16px] max-[474px]:flex-col">
          <QuantityBtn dispatch={dispatch} state={state} />
          <CartBtn
            Change={Change}
            btnTxt="Add to cart"
            width="max-[474px]:w-full"
          />
        </div>
      </div>
    </>
  );
}

export default Informational;
