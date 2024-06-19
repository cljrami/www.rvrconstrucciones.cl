// SWIPER
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
//import "swiper/css/effect-coverflow";

// import required modules
import { Keyboard, Navigation } from "swiper/modules";

const SliderHome = () => {
  return (
    <section className="overflow-hidden animate-fade animate-ease-in-out  mt-10 ">
      <div className="    text-focus-in" id="SliderHome">
        <>
          <div className="mx-auto mt-5 ">
            <Swiper
              //slidesPerView={"auto"}
              //centeredSlides={true}
              slidesPerView={"auto"}
              spaceBetween={30}
              // effect={"coverflow"}
              // grabCursor="true"
              // centeredSlides="true"
              // slideToClickedSlide="true"
              // loop="true"
              // coverflowEffect={{
              //   rotate: 0,
              //   stretch: -146,
              //   depth: 424,
              //   modifier: 1,
              //   slideShadows: false,
              // }}
              keyboard={{
                enabled: true,
              }}
              //autoplay={{
              //  delay: 2500,
              //  disableOnInteraction: true,
              //}}
              //pagination={true}
              navigation={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
              }}
              //pagination={true}
              modules={[Keyboard, Navigation]}
              className="SliderHome"
            >
              <SwiperSlide>
                <div className="rounded-md  p-1">
                  <img
                    src="Imagenes/Clientes/vega.webp"
                    width="100%"
                    height="auto"
                    alt="Disrutar Del Mejor Arrollado Este 18 De Septiembre"
                  />

                  <div className="absolute top-0 flex items-center h-full ">
                    <div className=" p-5 ml-10 rounded-lg w-5/6  bg-white bg-opacity-65">
                      <spa className="text-black tracking-tight  dark:text-white sm:text-1xl/[1.1]  font-semibold md:text-3xl/[1.1] lg:text-6xl/[1.1] text-focus-in">
                        Transforma tu Publicidad
                        <br /> ¡Digitaliza con Códigos QR!
                      </spa>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded-md  p-1">
                  <img
                    src="Imagenes/Clientes/vega.webp"
                    width="100%"
                    height="auto"
                    alt="Disrutar Del Mejor Arrollado Este 18 De Septiembre"
                  />

                  <div className="absolute top-0 flex items-center h-full ">
                    <div className=" p-5 ml-10 rounded-lg w-5/6  bg-white bg-opacity-65">
                      <spa className="text-black tracking-tight  dark:text-white sm:text-1xl/[1.1]  font-semibold md:text-3xl/[1.1] lg:text-6xl/[1.1] text-focus-in">
                        Transforma tu Publicidad
                        <br /> ¡Digitaliza con Códigos QR!
                      </spa>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </>
      </div>
    </section>
  );
};
export default SliderHome;
