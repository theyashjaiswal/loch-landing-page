import React from "react";

function TestimonalCard(props) {
  return (
    <div className="h-36 min-w-[22.0625rem] p-5 rounded-lg gap-5 bg-white hover:cursor-grab ">
      <p className="text-[1rem] font-bold">
        {props.testimonal.name}
        <span className="text-[0.8125rem] text-gray-400 font-normal ml-2">
          {props.testimonal.designation}
        </span>
      </p>
      <span>{props.testimonal.testimony}</span>
    </div>
  );
}

export default TestimonalCard;
