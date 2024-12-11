import React from "react";
import { RxTwitterLogo } from "react-icons/rx";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoFacebook } from "react-icons/bi";
import { CiBasketball } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#282828] h-[370px] mt-32">
        <div className="flex pt-20 pl-36 gap-10">

        {/* publishers */}
          <div className="border-white h-60 w-60 space-y-6">
            <div>
              <h3 className="text-white font-serif text-2xl">Publishers</h3>
            </div>
            <div className="space-y-2 font-serif text-[#acabab]">
              <p className="cursor-pointer hover:text-white">Bestsellers</p>
              <p className="cursor-pointer hover:text-white">Interviews</p>
              <p className="cursor-pointer hover:text-white">Authors Story</p>
              <p className="cursor-pointer hover:text-white">Books Fairs</p>
              <p className="cursor-pointer hover:text-white">Help(FAQ)</p>
            </div>
          </div>
        {/* contact */}
          <div className="h-60 w-80 space-y-6">
            <div>
              <div className="text-white font-serif text-2xl">Contact</div>
            </div>
            <div className="space-y-5">
            <p className=" font-serif text-[#acabab]">Stay in touch with everything ChapterOne, follow us on social media and learn about new promotions.</p>
            <div className="flex gap-4 text-[#acabab] ">
            <RxTwitterLogo className="hover:text-white cursor-pointer" />
            <IoLogoInstagram className="hover:text-white cursor-pointer" />
            <BiLogoFacebook className="hover:text-white cursor-pointer" />
            <CiBasketball className="hover:text-white cursor-pointer" />

            </div>
            </div>
          </div>
          {/* newsletter */}
          <div className="h-60 w-80 space-y-6">
            <div>
              <div className="text-white font-serif text-2xl">News & Update</div>
            </div>
            <div className="space-y-5">
            <p className=" font-serif text-[#acabab]">We would love it if you subscribed to our newsletter! You will love it too.</p>
           
            </div>
          </div>
          {/* Social media */}
          <div className="h-60 w-60 space-y-6">
            <div>
              <div className="text-white font-serif text-2xl">Social media</div>
            </div>
        
          </div>
        </div>
      </div>
      <div className="bg-black h-16 text-center">
        <div className="pt-6 text-white text-sm font-light">
          © 2019 QODE INTERACTIVE, ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
