import React, { useState, useEffect, useRef } from "react";
import CheckProduct from "../../__Atom/CheckProduct/CheckProduct";

function CartCont({ ProductData, quantity, setQuantity, state }) {
  const [empty, setEmpty] = useState(quantity === 0);
  useEffect(() => {
    setEmpty(quantity === 0);
  }, [quantity]);

  return (
    <>
      <div className="h-[256px] rounded-[10px] bg-white border border-black w-[360px] max-[474px]:w-[340px] shadow-[ 0px 20px 50px -20px rgba(29, 32, 38, 0.50)]  ">
        <div className="pl-[24px] w-full h-[67px] border-b border-[#E4E9F2] flex items-center">
          <h2 className="text-black text-[16px]">Cart</h2>
        </div>
        {!empty ? (
          <CheckProduct
            ProductData={ProductData}
            quantity={quantity}
            setQuantity={setQuantity}
            state={state}
          />
        ) : (
          <div className="w-full h-[150px]  flex justify-center items-center">
            <h1 className="text-[16px] text-[#69707D]">Your cart is empty.</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default CartCont;
