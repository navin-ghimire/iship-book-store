import React from "react";

const Category = () => {
  return (
    <div className="w-[900px] mt-32 ml-80">
      <div className="flex gap-2 text-xl font-serif text-center">
        <div className="border h-14 w-28  border-s-light-green-50 bg-white text-black hover:bg-black hover:text-white hover:cursor-pointer pt-3">
          All
        </div>
        <div className="border h-14 w-48 border-s-light-green-50 bg-white text-black hover:bg-black hover:text-white hover:cursor-pointer pt-3">
          Best Sellers
        </div>
        <div className="border h-14 w-40 border-s-light-green-50 bg-white text-black hover:bg-black hover:text-white hover:cursor-pointer pt-3">
          Fantasy
        </div>
        <div className="border h-14 w-36 border-s-light-green-50 bg-white text-black hover:bg-black hover:text-white hover:cursor-pointer pt-3">
          History
        </div>
        <div className="border h-14 w-32 border-s-light-green-50 bg-white text-black hover:bg-black hover:text-white hover:cursor-pointer pt-3">
          Art
        </div>
        <div className="border h-14 w-48 border-s-light-green-50 bg-white text-black hover:bg-black hover:text-white hover:cursor-pointer pt-3">
          Love Stories
        </div>
      </div>
    </div>
  );
};

export default Category;
