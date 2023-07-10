import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-5 py-6 sm:px-10 sm:py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-0 sm:my-5 feedback-card">
    <img
      src={quotes}
      alt="double_quotes"
      className=" w-[28px] h-[16px] sm:w-[42px] sm:h-[28px]  object-contain"
    />
    <p className="font-poppins font-normal text-l sm:text-xl leading-[28px] sm:leading-[32.4px] text-white my-5 sm:my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <img
        src={img}
        alt={name}
        className="w-[28px] h-[28px] sm:w-[48px] sm:h-[48px] rounded-full"
      />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-l sm:text-xl leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-sm sm:text-l leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
