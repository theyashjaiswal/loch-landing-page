import React from "react";
import BarImage from "../../assets/Bar.png";

import CustomDropdown from "../CustomDropdown/CustomDropdown";

function NotificationTwo(props) {
  return (
    <div className=" w-48 rounded-lg  shadow-md  text-gray-900 bg-white">
      <div className="p-4">
        <div className="flex justify-between">
          <img src={BarImage} alt="Bar Graph" />
          <p className="text-[0.569rem] font-bold">
            <input type="checkbox" defaultChecked={true} />
          </p>
        </div>
        <p className="mt-12 font-inter text-xs font-normal leading-4 tracking-normal">
          Notify me when any wallets move more than
        </p>
        <div className="mt-2">
          <CustomDropdown
            options={props.options}
            defaultValue={props.options[0]}
          />
        </div>
      </div>
    </div>
  );
}

export default NotificationTwo;
