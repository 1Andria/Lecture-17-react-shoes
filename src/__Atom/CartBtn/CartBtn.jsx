import React from "react";
import WhiteCart from "../../assets/whiteCart.png";

function CartBtn({ Change, btnTxt, hidden }) {
  return (
    <>
      <button
        onClick={Change}
        className="w-[272px] h-[56px] cursor-pointer gap-[15px] rounded-[10px] bg-[#FF7E1B] flex justify-center items-center hover:opacity-[0.8]"
      >
        <img src={WhiteCart} className={`${hidden}`} alt="cart" />
        <h1 className="text-white text-[16px]">{btnTxt}</h1>
      </button>
    </>
  );
}

export default CartBtn;
