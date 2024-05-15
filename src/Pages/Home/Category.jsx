import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../Component/SectionTitle";
const Category = () => {
  return (
    <section>
      <div>
        <SectionTitle
          subHeading={"From 11.00am to 10.00pm"}
          heading={"Order online"}
        ></SectionTitle>

        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className="uppercase text-4xl text-center -mt-16 text-white">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className="uppercase text-4xl text-center -mt-16 text-white">
              Pizzas
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className="uppercase text-4xl text-center -mt-16 text-white">
              Soups
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className="uppercase text-4xl text-center -mt-16 text-white">
              Desserts
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className="uppercase text-4xl text-center -mt-16 text-white">
              Salads
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <div
          className="hero  mt-12"
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/sgjkfwBQ/chef-service.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-45 "></div>
          <div className="hero-content min-h-screen text-center">
            <div className=" bg-slate-100 h-80 pt-28 p-8">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
