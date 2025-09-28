import React from "react";
import {  FaUser } from 'react-icons/fa';
import {
  FaFacebook,
  FaInstagramSquare,
  FaPinterestSquare,
} from "react-icons/fa";
import { FaLinkedin, FaSquareTwitter } from "react-icons/fa6";

const socialLinks = [
  { icon: <FaFacebook /> },
  { icon: <FaPinterestSquare /> },
  { icon: <FaLinkedin /> },
  { icon: <FaSquareTwitter /> },
  { icon: <FaInstagramSquare /> },
];

const data = [
  { id: 1, count: 350, text: "Article" },
  { id: 2, count: "25k", text: "Followers" },
  { id: 3, count: "8.9", text: "Rating" },
];

const MainProfile = () => (
  <div>
    <div className="flex items-center justify-center flex-col  pt-5">
      <div className="  ">
        {/* <FaUser/> */}
        <FaUser className="size-[200px]"/>
      </div>
      <div className="text-center">
        <h1 className="text-xl md:text-2xl font-bold lg:text-4xl">
          John Doe
        </h1>
        <h2 className="mt-3 text-lg">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <p className="max-w-[600px] text-[14px] mt-2 text-grayText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vel
          libero velit delectus, ad sit consequuntur. Molestiae totam
        </p>
      </div>
    </div>
    <div className="bg-primary1/30 flex items-center justify-around py-10 px-5 mt-4">
      {data.map((d) => (
        <div
          key={d.id}
          className="bg-primary1 w-full p-5 not-last:border-r text-center not-last:border-grayText/30"
        >
          <h5 className="text-xl md:text-3xl lg:text-5xl font-bold">
            {d.count}
          </h5>
          <p className="text-lg md:text-xl mt-3">{d.text}</p>
        </div>
      ))}
    </div>
  </div>
);

const Profile = () => (
  <section >
    <MainProfile />
    <div className="flex items-center justify-center py-10 gap-10">
      {socialLinks.map((s, idx) => (
        <span
          key={idx}
          className=" text-xl lg:text-3xl cursor-pointer hover:scale-[1.1] "
        >
          {s.icon}
        </span>
      ))}
    </div>
  </section>
);

export default Profile;