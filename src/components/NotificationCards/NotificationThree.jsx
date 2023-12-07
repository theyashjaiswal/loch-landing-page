import ClockImage from "../../assets/Clock.png";
import CustomDropdown from "../CustomDropdown/CustomDropdown";

function NotificationThree(props) {
  return (
    <div className="min-w-48 w-48 h-44 rounded-lg  shadow-md  text-gray-900 bg-white">
      <div className="p-4">
        <div className="flex justify-between">
          <img src={ClockImage} alt="Clock" className="h-[1.75rem]" />
          <p className="text-[0.569rem] font-bold">
            <input type="checkbox" defaultChecked={true} />
          </p>
        </div>
        <p className=" mt-5 font-inter text-xs font-normal leading-4 tracking-normal">
          Notify me when any wallet dormant for
        </p>
        <div className="mt-2 ">
          <CustomDropdown
            options={props.options}
            defaultValue={props.options[0]}
          />
        </div>
        <p className=" mt-2 font-inter text-xs font-normal leading-4 tracking-normal">
          becomes active
        </p>
      </div>
    </div>
  );
}

export default NotificationThree;
