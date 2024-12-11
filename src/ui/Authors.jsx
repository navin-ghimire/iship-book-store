import React from "react";

const Authors = () => {
  return (
    <div className="mt-52 ml-12 h-[610px] w-[1420px]">
      <div className="pt-6 pl-96">
        <div className="h-[200px] w-[650px] text-center space-y-2">
          <h3 className="text-gray-500 text-lg font-serif">OUR SERVICES</h3>
          <h4 className="text-4xl">Authors of the month</h4>
          <p className="text-gray-700 text-2xl font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Nobis
            delectus ipsum rem tenetur quis sequi beatae dolores.
          </p>
        </div>
      </div>

      <div className="flex pl-28 gap-16">
        <div className="h-96 w-64 pt-5 text-center space-y-1">
          <div className="h-48 w-48 rounded-full ">
            <img
              src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/08/author-img-1-300x300.png"
              alt="pp"
            />
          </div>

          <h5 className="text-gray-600 text-sm font-serif">AUTHOR</h5>
          <h5 className="text-2xl font-serif">Adam Strass</h5>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            hic corporis.
          </p>
        </div>
        <div className="h-96 w-64 pt-5 text-center space-y-1">
          <div className="h-48 w-48 rounded-full">
            <img
              src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/team-2.png"
              alt="pp"
            />
          </div>

          <h5 className="text-gray-600 text-sm font-serif">DESIGNER</h5>
          <h5 className="text-2xl font-serif">Jennifer Doe</h5>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit, amet cons adipisicing elit. Exercitationem
            magni!
          </p>
        </div>
        <div className="h-96 w-64 pt-5 text-center space-y-1">
          <div className="border h-48 w-48 rounded-full">
            <img
              src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/team-3.png"
              alt="pp"
            />
          </div>

          <h5 className="text-gray-600 text-sm font-serif">CONSULTANT</h5>
          <h5 className="text-2xl font-serif">James Coleman</h5>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing. Hic ipsa ullam.
          </p>
        </div>
        <div className="h-96 w-64 pt-5 text-center space-y-1">
          <div className="h-48 w-48 rounded-full">
            <img
              src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/team-4.png"
              alt="pp"
            />
          </div>

          <h5 className="text-gray-600 text-sm font-serif">SUPPORT</h5>
          <h5 className="text-2xl font-serif">Linda Heyes</h5>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            placeat ill!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authors;
