import React from "react";

const ServiceDetail = () => {
  return (
    <div class="h-[460px] w-[1420px] ml-12 pt-24">
      <figure class="relative w-full h-[480px]">
        <img
          className="object-cover object-center w-full h-full"
          src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/09/home-2-parallax-image-1.jpg"
          alt="bg"
        />
        <div className="">
          <figcaption className="absolute bottom-1/4 left-2/4 -translate-x-2/4 text-white text-center ">
            <div className="space-y-7">
              <div>
                <h5 className="text-lg font-serif ">OUR SERVICES</h5>
                <p className="mt-2 text-3xl font-serif ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia cum alias ullam maiores laborum cumque ipsam tempore
                  eveniet nulla magnam!
                </p>
              </div>

              <button
                className="border h-12 w-44 text-lg hover:text-black hover:bg-white text-white font-serif"
                type="button"
              >
                READ MORE
              </button>
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default ServiceDetail;
