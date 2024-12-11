import React from "react";

const Testimon = () => {
  return (
    <div>
      <div className="h-[460px] w-[1420px] mt-32 ml-12 bg-[#FAF9F5] flex gap-20">
        <div className="pl-24 pt-24 space-y-3">
          <div className="h-[200px] w-[530px] space-y-2.5">
            <h5 className="text-lg font-serif text-[#999999]">AUTOBIOGRAPHY</h5>
            <h5 className="text-4xl font-serif">This month's guest host</h5>
            <p className="text-lg text-[#999999] font-serif">
              Lorem ipsum dolor amet adipisicing elit. Ea nesciunt libero iusto,
              iste quasi, culpa accusamus in sed consequatur praesentium dolerm
              placeat horrmn dicta.
            </p>
          </div>

          <div>
            <button
              className="border border-black h-12 w-44 text-lg hover:text-white hover:bg-blue-gray-900 text-black font-serif"
              type="button"
            >
              READ MORE
            </button>
          </div>
        </div>

        <div className="h-[670px] w-[480px] pl-40 m-[-70px]">
          <div className="">
            <img
              src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-rev-2-img-2.jpg"
              alt=""
            />

            <div className="pl-32 m-[-70px]">
              <div className="">
                <img
                  src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-rev-2-img-3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[500px] w-[1420px] mt-40 ml-12 flex">
        <div className="">
          <div className="pl-60 h-[300px] w-[650px]">
            <img
              className=""
              src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-rev-3-img-6.jpg"
              alt=""
            />
          </div>

          <div className="">
            <div className="pl-56 pt-16 m-[-87px]">
              <img
                className="size-56"
                src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-rev-3-img-5.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="pl-48 pt-24 space-y-3">
          <div className="h-[200px] w-[530px] space-y-2.5">
            <h5 className="text-lg font-serif text-[#999999]">AUTOBIOGRAPHY</h5>
            <h5 className="text-4xl font-serif">Travelogue of the year</h5>
            <p className="text-lg text-[#999999] font-serif">
              Lorem ipsum dolor amet adipisicing elit. Ea nesciunt libero iusto,
              iste quasi, culpa accusamus in sed consequatur praesentium dolerm
              placeat horrmn dicta.
            </p>
          </div>

          <div>
            <button
              className="border border-black h-12 w-44 text-lg hover:text-white hover:bg-blue-gray-900 text-black font-serif"
              type="button"
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>

      {/* photogallery */}

      <div className="mt-32 ml-12 mr-16">
        <div class="grid grid-cols-4 gap-4 md:grid-cols-4">
          <div class="grid gap-4">
            <div>
              <img
                class="pb-[-18px] h-[400px] max-w-full rounded-lg object-cover object-center"
                src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-gallery-1.jpg"
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                class="h-[430px] max-w-full rounded-lg object-cover object-center "
                src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-gallery-4.jpg"
                alt="gallery-photo"
              />
            </div>
          </div>
          <div class="grid gap-3">
            <div>
              <img
                class="h-[480px] max-w-full rounded-lg object-cover object-center"
                src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-gallery-5.jpg"
                alt="gallery-photo"
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-gallery-9.jpg"
                alt="gallery-photo"
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg object-cover object-center"
                src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-gallery-6.jpg"
                alt="gallery-photo"
              />
            </div>

            <div>
              <img
                class="h-[480px] max-w-full rounded-lg object-cover object-center"
                src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-gallery-7.jpg"
                alt="gallery-photo"
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-[450px] max-w-full rounded-lg object-cover object-center"
                src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-gallery-10.jpg"
                alt="gallery-photo"
              />
            </div>
            <div className="gap-3">
              <img
                class="h-[380px] max-w-full rounded-lg object-cover object-center"
                src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-gallery-2.jpg"
                alt="gallery-photo"
              />
            </div>
          </div>
        </div>
      </div>

      {/* events */}

      <div className="ml-16 pt-32 pl-96 items-center">
        <div className="h-[200px] w-[650px] text-center space-y-2">
          <h5 className="text-[#838282]">EVENTS</h5>
          <h5 className="text-5xl">Book promotions</h5>
          <p className="text-lg text-[#838282]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            inventore quae, aut minus voluptas dolor consectetur aperiam ex.
          </p>
        </div>
      </div>

      <div className="flex gap-16 pl-80">
        <div className="space-y-10 text-[#999999] text-center font-serif pt-2">
          <div className="h-12 w-64">21.07.2019 / LA, California</div>
          <div className="h-12 w-64">25.07.2019 / Paris, France</div>
          <div className="h-12 w-64">26.07.2019 / Washington, US</div>
          <div className="h-12 w-64">31.07.2019 / Madrid, Spain</div>
        </div>

        <div className="space-y-10 text-2xl text-center pt-2">
          <div className="h-12 w-64 hover:text-red-400 hover:cursor-pointer">
            Festival of Books
          </div>
          <div className="h-12 w-64 hover:text-red-400 hover:cursor-pointer">
            Book Signing
          </div>
          <div className="h-12 w-64 hover:text-red-400 hover:cursor-pointer">
            Book Fair
          </div>
          <div className="h-12 w-64 hover:text-red-400 hover:cursor-pointer">
            Promotion Book
          </div>
        </div>

        <div className="space-y-10 pl-9">
          <div>
            <button
              className="border border-black h-12 w-44 hover:text-white hover:bg-blue-gray-900 text-black font-serif"
              type="button"
            >
              SEE TICKETS
            </button>
          </div>
          <div>
            <button className="h-12 w-44 text-white bg-[#D9D9D9] font-serif hover:cursor-context-menu">
              SOLD OUT
            </button>
          </div>
          <div>
            <button
              className="border border-black h-12 w-44 hover:text-white hover:bg-blue-gray-900 text-black font-serif"
              type="button"
            >
              SEE TICKETS
            </button>
          </div>
          <div>
            <button
              className="border border-black h-12 w-44 hover:text-white hover:bg-blue-gray-900 text-black font-serif"
              type="button"
            >
              SEE TICKETS
            </button>
          </div>
        </div>
      </div>

      {/* logos */}

      <div className="pt-28 pl-12 pr-16">
        <div className="border h-28 flex gap-32">
          <div className="">
            <img
              className="h-32 w-36"
              src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-client-1.png"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="h-32 w-36"
              src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-client-2.png"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="h-32 w-36"
              src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-client-3.png"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="h-32 w-32"
              src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-client-4.png"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="h-32 w-36"
              src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-client-5.png"
              alt=""
            />
          </div>
          <div className="">
            <img
              className=" h-32 w-32"
              src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-client-6.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimon;
