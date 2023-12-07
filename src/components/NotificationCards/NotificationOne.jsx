import { useState } from "react";
import BellCard from "../../assets/Bell_v2.png";

function NotificationOne() {
  const [displayName, setDisplayName] = useState("David");
  const handleMouseEnter = () => {
    setDisplayName("hello@loch.one");
  };

  const handleMouseLeave = () => {
    setDisplayName("David");
  };

  return (
    <div className="w-48 h-44 rounded-lg shadow-md  text-gray-900 bg-gradient-to-b from-white via-slate-50 to-blue-200 hover:cursor-grab">
      <div className="p-3">
        <div className="flex justify-between">
          <img src={BellCard} alt="Bell" />
          <p className="text-[0.569rem] font-bold hover:text-[#0075FC] hover:cur">
            Save
          </p>
        </div>
        <p className="w-[8.063rem] h-[3.188rem] mt-2">
          We’ll be sending notifications to you here
        </p>
        <div className="mt-7 ">
          <input
            type="text"
            value={displayName}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onChange={() => {}}
            className="w-[10.5rem] h-[2.188rem] rounded-[0.35rem] border-[0.0875rem] p-2 border-black"
          />
        </div>
      </div>
    </div>
  );
}

export default NotificationOne;
