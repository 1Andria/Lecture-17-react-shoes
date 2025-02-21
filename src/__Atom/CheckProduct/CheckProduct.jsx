import React from "react";
import Trash from "../../assets/trash.svg";
import CartBtn from "../CartBtn/CartBtn";

function CheckProduct({ ProductData, quantity, setQuantity, state }) {
  function Delete() {
    setQuantity(0);
    state.count = 0;
  }
  const Sum = 125 * quantity;
  return (
    <>
      <div className="flex pl-[24px] pr-[24px] justify-between pt-[24px]">
        <img
          src={ProductData.firstPicture}
          alt="shoes"
          className="h-[50px] w-[50px] rounded-[4px]"
        />
        <div className="flex flex-col ">
          <h4 className="text-[16px] text-[#69707D]">{ProductData.name}</h4>
          <div className="flex gap-[5px]">
            <p className="text-[16px] text-[#69707D]">
              {ProductData.newPrice} x {quantity}
            </p>
            <h3 className="text-[16px] text-black">${Sum}.00</h3>
          </div>
        </div>
        <button>
          <img
            src={Trash}
            alt="trash"
            onClick={Delete}
            className="cursor-pointer hover:opacity-[0.7]"
          />
        </button>
      </div>
      <div className="w-full flex justify-center pt-[24px]">
        <CartBtn hidden="hidden" btnTxt="Checkout" />
      </div>
    </>
  );
}

export default CheckProduct;
