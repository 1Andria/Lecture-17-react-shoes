import React from "react";
import Data from "../../data.json";
import Header from "../../__Molecule/Header/Header";

function Container() {
  const ProductData = Data.find((item) => item.id === 1);
  return (
    <>
      <div className="w-full h-scree flex justify-center">
        <Header ProductData={ProductData} />
      </div>
    </>
  );
}

export default Container;
