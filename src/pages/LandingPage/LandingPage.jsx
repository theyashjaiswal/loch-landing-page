import { useRef } from "react";
import Info from "../../components/Info/Info";
import Signup from "../../components/Signup/Signup";

export default function LandingPage() {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="custom-radial-gradient w-screen  bg-cover bg-center bg-no-repeat min-w-[340px]">
      <div className="flex flex-col flex-wrap md:flex-row overflow-clip">
        <button
          onClick={scrollToBottom}
          className="bg-white mt-6 rounded-lg shadow-sm items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-black h-10 px-4 py-2 absolute right-0 m-5 flex md:hidden"
        >
          Sign up
        </button>
        <Info></Info>
        <div
          className="signup  md:w-2/5 bg-white flex justify-center"
          ref={messagesEndRef}
        >
          <Signup></Signup>
        </div>
      </div>
    </div>
  );
}
