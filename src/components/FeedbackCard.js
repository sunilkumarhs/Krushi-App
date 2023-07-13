import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-3 py-3 sm:px-10 sm:py-5 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-1 sm:my-5 feedback-card">
    <img
      src={quotes}
      alt="double_quotes"
      className=" w-[28px] h-[16px] sm:w-[42px] sm:h-[28px]  object-contain"
    />
    <p className="font-poppins font-normal text-sm sm:text-xl leading-[20px] sm:leading-[32.4px] text-white my-2 sm:my-5">
      {content}
    </p>

    <div className="flex flex-row">
      <img
        src={img}
        alt={name}
        className="w-[28px] h-[28px] sm:w-[48px] sm:h-[48px] rounded-full"
      />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-l sm:text-xl leading-[22px] sm:leading-[30px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-sm sm:text-l sm:leading-[30px]  leading-[22px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
