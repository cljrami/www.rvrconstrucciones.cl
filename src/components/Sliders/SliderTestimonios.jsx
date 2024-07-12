// SWIPER
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
//import "swiper/css/effect-coverflow";

// import required modules
import { Keyboard, Navigation } from "swiper/modules";
import TarjetaTestimonios from "../Tarjetas/tarjetaTestimonios";

const SliderTestimonios = () => {
  return (
    <section
      className="overflow-hidden animate-fade animate-ease-in-out  mt-10  md:max-w-7xl mx-auto p-4"
      id="SliderTestimonios"
    >
      <h2 className="text-md  font-heading mb-2 max-w-md text-gray-400">
        Lo que la gente opina
      </h2>
      <h3 className="text-5xl">Testimonios </h3>

      <div className="    text-focus-in" id="SliderTestimonios">
        <>
          <div className=" mt-5 ">
            <Swiper
              //slidesPerView={"auto"}
              //centeredSlides={true}
              slidesPerView={"auto"}
              spaceBetween={30}
              // effect={"coverflow"}
              // grabCursor="true"
              //centeredSlides="true"
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
              pagination={true}
              navigation={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 3,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 3,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 3,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 3,
                },
              }}
              //pagination={true}
              modules={[Keyboard, Navigation]}
              className="SliderTestimonios"
            >
              <SwiperSlide>
                <TarjetaTestimonios
                  nombre="La Colegiala"
                  testimonio="Interesantes Propuesta.... YO Ya conté mi historia "
                  ciudad="Temuco"
                  imagen="/Imagenes/portadas/historiaMujer.webp"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TarjetaTestimonios nombre="juana" testimonio="lalal" />
              </SwiperSlide>
              <SwiperSlide>
                <TarjetaTestimonios nombre="juana" testimonio="lalal" />
              </SwiperSlide>
              <SwiperSlide>
                <TarjetaTestimonios nombre="juana" testimonio="lalal" />
              </SwiperSlide>
              <SwiperSlide>
                <TarjetaTestimonios nombre="juana" testimonio="lalal" />
              </SwiperSlide>
            </Swiper>
          </div>
        </>
      </div>
    </section>
  );
};
export default SliderTestimonios;
