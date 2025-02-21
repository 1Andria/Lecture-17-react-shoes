import React from "react";
import WhiteCart from "../../assets/whiteCart.png";

function CartBtn({ Change }) {
  return (
    <>
      <button
        onClick={Change}
        className="w-[272px] h-[56px] cursor-pointer gap-[15px] rounded-[10px] bg-[#FF7E1B] flex justify-center items-center"
      >
        <img src={WhiteCart} alt="cart" />
        <h1 className="text-white text-[16px]">Add to cart</h1>
      </button>
    </>
  );
}

export default CartBtn;
