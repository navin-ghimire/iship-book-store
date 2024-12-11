import React from "react";

const Home = () => {
  return (
    <div className="bg-[#e2dacb] h-[450px] w-[1420px] mt-8 ml-12">
      <div className="flex">
        <div className="pl-24 pt-24 space-y-2.5">
          <h1 className="text-xl text-[#999999]">IT'S CHAPTERONE</h1>
          <p className="text-6xl font-serif">We love literature</p>
          <p className="text-2xl text-[#999999]">
            Lorem ipsum dolor sit, amet consectetur elit.
            <br />
            eveniet incidunt aspernatur ullam! Aut, atque odit!
          </p>
          <br />
          <button
            className="border h-12 w-44 bg-red-500 hover:bg-red-700 text-white font-serif"
            type="button"
          >
            READ MORE
          </button>
        </div>
        <div className="w-[900px] h-[900px] mt-6 pl-44">
          <img src={require("../assets/images/New_Paris.png")} alt="mark" />
        </div>
      </div>
    </div>
  );
};

export default Home;
