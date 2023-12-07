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
        "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
    },
  ];

  return (
    <div>
      <div className="flex ml-10 mt-10 mb-10 flex-col md:flex-row overflow-x-hidden">
        <div className="Notification absoulte m-w-[20.125rem] w-[20.125rem] m-4 ">
          <img
            src={BellImage}
            alt="Example"
            className=" h-[32px] w-[32px] mb-4"
          />
          <h4 className="text-gray-200 text-shadow-sm font-inter text-3xl font-medium leading-9 mb-2 w-[313px]">
            Get notified when a highly correlated whale makes a move
          </h4>
          <p className="w-[322px] top-261 left-60 opacity-70 text-gray-200">
            Find out when a certain whale moves more than any preset amount
            on-chain or when a dormant whale you care about becomes active.
          </p>
        </div>
        <div
          className="flex flex-wrap  md:ml-[8rem]"
          style={{
            width: "407px",
          }}
        >
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
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

      <div className="flex flex-col items-between md:justify-between p-12 pt-2 md:flex-row">
        <img
          className="order-2 md:order-1 w-[335px] rounded-[0.75rem] border-[0.09375rem] border-black"
          src={CohortsImage}
          alt="Cohorts"
        />
        <div className="order-1 md:order-2 self-end md:self-center absoulte min-w-[19.0625rem] w-[19.0625rem] mb-4 mr-4">
          <div className="flex justify-end">
            <img className="h-[1.25rem] mb-4 " src={EyeImage} alt="Eye" />
          </div>
          <h4 className="text-white text-right text-shadow-sm w-[305px] font-inter text-3xl font-medium leading-9 mb-2">
            Watch what the whales are doing
          </h4>
          <p className="w-[305px] text-right opacity-70 text-gray-200">
            All whales are not equal. Know exactly what the whales impacting
            YOUR portfolio are doing.
          </p>
        </div>
      </div>

      <div className="testimonial p-12 overflow-x-hidden">
        <div className="flex justify-end ">
          <p className="text-gray-200 text-[1.5625rem]">Testimonials</p>
        </div>
        <div className="border-b border-gray-300 border-opacity-50 pb-0.5rem pr-1.5rem "></div>
        <div className="flex flex-col mt-6 md:flex-row">
          <img
            style={{ width: "60px" }}
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
              className="mySwiper ml-1 md:ml-[4rem]"
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
