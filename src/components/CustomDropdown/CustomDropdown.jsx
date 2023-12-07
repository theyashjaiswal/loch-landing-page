import React, { useState } from "react";
import TraingleDownImage from "../../assets/Traingle-Arrow-Down.png";

const CustomDropdown = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const defaultValue =
    props.defaultValue?.length > 0 ? props.defaultValue : "Select an Option";

  return (
    <div>
      <div
        className="custom-select w-[6rem] h-[2rem] rounded-[0.35rem] border-[0.0875rem] p-2 text-[0.569rem] bg-gray-200 flex justify-between cursor-pointer focus:rounded-bl-[0] focus:rounded-br-[0]"
        onClick={toggleDropdown}
      >
        <span>{selectedOption || defaultValue}</span>
        <img
          src={TraingleDownImage}
          alt="DropdownArrow"
          className={`dropdown-arrow ${
            isOpen ? "open" : ""
          } h-[1rem] w-[1rem] `}
        />
      </div>
      {isOpen && (
        <ul className="absolute  text-[0.569rem] pl-2 bg-gray-200  min-w-[6rem] w-fit rounded  hover:cursor-pointer ">
          {props.options.map((option, index) => (
            <li
              className=" rounded border hover:w-[95%] hover:text-white hover:bg-blue-600 hover:opacity-1 transition duration-300 "
              key={index}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
