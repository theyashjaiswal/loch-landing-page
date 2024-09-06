/* eslint-disable react/prop-types */
function TestimonalCard(props) {
  return (
    <div className="h-32 w-[20.125rem]  p-4 pb-8 rounded-lg gap-5 bg-white hover:cursor-grab line-clamp-4 overflow-hidden text-ellipsis">
      <p className="text-[1rem] font-bold">
        {props.testimonal.name}
        <span className="text-[0.8125rem] text-gray-400 font-normal ml-2">
          {props.testimonal.designation}
        </span>
      </p>
      <span className="pb-2">{props.testimonal.testimony}</span>
    </div>
  );
}

export default TestimonalCard;
