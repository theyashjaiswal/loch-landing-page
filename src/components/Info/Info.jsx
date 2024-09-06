import BellImage from "../../assets/Bell_v1.png";
import CohortsImage from "../../assets/Cohorts-1.png";
import EyeImage from "../../assets/Eye.png";
import LochLogo from "../../assets/Loch-logo.png";
import TestimonalCard from "../TestiomonalCard/TestimonalCard";
import { Swiper, SwiperSlide } from "swiper/react";
import NotificationOne from "../NotificationCards/NotificationOne";
import NotificationTwo from "../NotificationCards/NotificationTwo";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NotificationThree from "../NotificationCards/NotificationThree";

function Info() {
  const options1 = ["$1,000.00", "$10,000.00", "$50,000.00", "$100,000.00"];
  const options2 = ["> 30 days", "> 45 days", "> 60 days", "> 90 days"];

  const Testimonals = [
    {
      name: "Jack F",
      designation: "Ex Blackrock PM",
      testimony:
        "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
    },
    {
      name: "Yash P",
      designation: "Research, 3poch Crypto Hedge Fund",
      testimony:
        "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
    },
    {
      name: "Shiv S",
      designation: "Co-Founder Magik Labs",
      testimony:
        "“Managing my own portfolio is helpful and well designed. Watching the whales make moves simpler.”",
    },
  ];

  return (
    <div className="h-full md:w-3/5 mx-auto">
      <div className="flex flex-wrap p-8 mt-20 flex-col md:flex-row overflow-x-hidden justify-evenly">
        <div className="Notification absoulte max-w-[20.125rem] w-full md:w-[20.125rem]">
          <img
            src={BellImage}
            alt="Example"
            className="h-[32px] w-[32px] mb-4"
          />
          <h4 className="text-white text-shadow-sm font-inter text-3xl font-medium leading-9 mb-2 w-full md:w-[313px]">
            Get notified when a highly correlated whale makes a move
          </h4>
          <p className="w-[20.125rem] opacity-70 font-medium text-gray-200">
            Find out when a certain whale moves more than any preset amount
            on-chain or when a dormant whale you care about becomes active.
          </p>
        </div>
        <div className="mt-8 w-[20.5rem] ">
          <Swiper
            slidesPerView={2}
            spaceBetween={80}
            autoHeight={false}
            freeMode={true}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
            style={{
              margin: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <SwiperSlide>
              <NotificationOne />
            </SwiperSlide>
            <SwiperSlide>
              <NotificationTwo options={options1}></NotificationTwo>
            </SwiperSlide>
            <SwiperSlide>
              <NotificationThree options={options2} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="flex flex-wrap flex-col p-8 md:flex-row overflow-x-hidden justify-evenly">
        <img
          className="order-2 lg:order-2 max-w-[20.125rem]  rounded-[0.75rem]"
          src={CohortsImage}
          alt="Cohorts"
        />
        <div className="order-1 lg:order-1 mb-4 md:mt-8 absoulte max-w-[20.125rem]  w-full md:w-[20.125rem] flex  flex-col jusitify-right items-end">
          <div className="flex justify-end">
            <img className="h-[1.25rem] mb-4" src={EyeImage} alt="Eye" />
          </div>
          <h4 className="text-white text-right text-shadow-sm w-[305px] font-inter text-3xl font-medium leading-9 mb-2">
            Watch what the whales are doing
          </h4>
          <p className="w-[19.0625rem] text-right opacity-70 font-medium text-gray-200">
            All whales are not equal. Know exactly what the whales impacting
            YOUR portfolio are doing.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap p-8 pt-2 flex-col overflow-clip justify-evenly">
        <div className="flex flex-wrap flex-col w-2 md:w-auto">
          <p className="text-white text-[1.5625rem] text-right">Testimonials</p>
          <div className="border-b border-gray-300 border-opacity-50 pb-0.5rem pr-1.5rem"></div>
        </div>
        <div className="flex flex-col flex-wrap mt-6 md:flex-row w-6 md:w-20">
          <img
            style={{ width: "32px" }}
            src={LochLogo}
            alt="LochLogo"
            className="md:self-end order-2 md:order-1 mt-4 md:mt-0"
          />
          <div className="flex flex-wrap order-1 w-[62.5rem] md:order-2">
            <Swiper
              slidesPerView={2}
              spaceBetween={25}
              freeMode={true}
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper ml-[0.5rem] md:ml-[2rem]"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <SwiperSlide>
                <TestimonalCard testimonal={Testimonals[0]}></TestimonalCard>
              </SwiperSlide>
              <SwiperSlide>
                <TestimonalCard testimonal={Testimonals[1]}></TestimonalCard>
              </SwiperSlide>
              <SwiperSlide>
                <TestimonalCard testimonal={Testimonals[2]}></TestimonalCard>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
