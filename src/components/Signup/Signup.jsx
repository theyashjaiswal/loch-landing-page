import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const redirectToWebsite = (website) => {
    window.location.href = website;
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const emailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail = emailPattern.test(e.target.value);
    setIsValid(isValidEmail);
  };

  const submitEmail = () => {
    if (isValid) {
      redirectToWebsite("https://app.loch.one/welcome");
    }
  };

  return (
    <div className="md:p-8 mt-20 md:mt-0 md:h-full  h-full flex flex-col justify-center items-center bg-white gap-6">
      <h1 className="mb-4 w-[20.375rem] text-3xl font-extrabold text-gray-900 md:text-4xl text-left">
        <span className=" text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Sign up
        </span>{" "}
        for <br />
        exclusive access.
      </h1>
      <div className="mb-4 ">
        <input
          type="email"
          id="email"
          placeholder={isHovered ? "hello@loch.one" : "Your email address"}
          onMouseOver={handleHover}
          onMouseOut={handleMouseOut}
          onChange={handleEmail}
          value={email}
          className={`rounded-lg border w-[21.25rem] border-gray-300 shadow-sm text-base p-4 font-normal outline-none focus:ring focus:ring-gray-400
          ${!isValid && email.length > 0 ? "border-red-600" : ""}`}
        />
        {!isValid && email.length > 0 && (
          <p className="text-red-600 pt-1 font-medium text-l pl-2 ">
            Please enter a valid email address <br />
            <span className="font-normal text-neutral-600">
              e.g. hello@loch.one
            </span>
          </p>
        )}
      </div>
      <button
        type="submit"
        className={`w-[21.25rem] h-[59px] border rounded-lg bg-black text-white hover:bg-slate-900 hover:text-slate-500 ${
          !isValid ? "hover:cursor-not-allowed" : ""
        }`}
        disabled={!isValid}
        onClick={submitEmail}
      >
        Get Started
      </button>
      <p className="text-gray-900 text-wrap py-18 px-0 font-semibold rounded-bl-lg">
        You’ll receive an email with an invite link to join.
      </p>
    </div>
  );
}

export default Signup;
