// SWIPER
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

//import "swiper/css/effect-coverflow";

// import required modules
import { Keyboard, Navigation } from "swiper/modules";

const SliderProyectos = () => {
  return (
    <section id="Servicios" className="mt-0  px-6 py-10">
      <div
        className="mx-auto overflow-hidden "
        data-aos="fade-up"
        dats-aos-duration="3000"
        data-aos-delay="10"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <>
          <h2 className="inline-block mb-1 text-lg text-yellow-400 font-semibold tracking-widest capitalize">
            Proyectos Realizados
          </h2>
          <h3 className="font-heading mb-1 tracking-tight text-5xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-8x1 font-bold">
            Últimos Proyectos
          </h3>

          <div className="mx-auto mt-5 ">
            <Swiper
              //slidesPerView={"auto"}
              //centeredSlides={true}
              // spaceBetween={10}
              // effect={"coverflow"}
              // grabCursor="true"
              // centeredSlides="true"
              // slidesPerView="auto"
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
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
              //pagination={true}
              modules={[Keyboard, Navigation]}
              className="SliderProyectos"
            >
              <SwiperSlide>
                <div className=" bg-gray-100 p-2 rounded-md ">
                  <img
                    src="/Imagenes/Proyectos/Reposicion_de_aceras.webp"
                    alt="Product"
                    className="object-cover"
                  />
                  <div className="px-4 py-3 w-90">
                    <span className="text-slate-900 mr-3 uppercase text-xs">
                      Cliente
                    </span>
                    <p className="text-lg font-bold text-black truncate block capitalize">
                      Municipalidad de Coronel
                    </p>
                    <div className="flex items-center">
                      <p className="text-md cursor-auto my-3 text-black">
                        Reposición de Aceras Sector de Coronel
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-gray-100 p-2 rounded-md ">
                  <img
                    src="/Imagenes/Proyectos/Reparacion_y_Revestimiento.webp"
                    alt="Product"
                    className="object-cover"
                  />
                  <div className="px-4 py-3 w-90">
                    <span className="text-slate-900 mr-3 uppercase text-xs">
                      Cliente
                    </span>
                    <p className="text-lg font-bold text-black truncate block capitalize">
                      Escuela República de Francia
                    </p>
                    <div className="flex items-center">
                      <p className="text-md cursor-auto my-3 text-black">
                        Reparación y Revestimiento muro exterior y cambio de
                        hojalatería
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-gray-100 p-2 rounded-md ">
                  <img
                    src="/Imagenes/Proyectos/Revestimiento_Exterior_Casa_De_La_Cultura_Coronel.webp"
                    alt="Product"
                    className="object-cover"
                  />
                  <div className="px-4 py-3 w-90">
                    <span className="text-slate-900 mr-3 uppercase text-xs">
                      Cliente
                    </span>
                    <p className="text-lg font-bold text-black truncate block capitalize">
                      Casa De La Cultura Coronel
                    </p>
                    <div className="flex items-center">
                      <p className="text-md cursor-auto my-3 text-black">
                        Reparaciones en revestimiento exterior (250mts²)
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-gray-100 p-2 rounded-md ">
                  <img
                    src="/Imagenes/Proyectos/Amplaicion_Casa_De_La_Cultura_Coronel.webp"
                    alt="Product"
                    className="object-cover"
                  />
                  <div className="px-4 py-3 w-90">
                    <span className="text-slate-900 mr-3 uppercase text-xs">
                      Cliente
                    </span>
                    <p className="text-lg font-bold text-black truncate block capitalize">
                      Casa De La Cultura Coronel
                    </p>
                    <div className="flex items-center">
                      <p className="text-md cursor-auto my-3 text-black">
                        Construcción de sala de 80mts² en azotea
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-gray-100 p-2 rounded-md ">
                  <img
                    src="/Imagenes/Proyectos/Reparacion_Locales_Mall_Plaza_Trebol.webp"
                    alt="Product"
                    className="object-cover"
                  />
                  <div className="px-4 py-3 w-90">
                    <span className="text-slate-900 mr-3 uppercase text-xs">
                      Cliente
                    </span>
                    <p className="text-lg font-bold text-black truncate block capitalize">
                      Mall Plaza del Trébol
                    </p>
                    <div className="flex items-center">
                      <p className="text-md cursor-auto my-3 text-black">
                        Reparación y Mantención de varios locales comerciales
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-gray-100 p-2 rounded-md ">
                  <img
                    src="/Imagenes/Proyectos/Construccion_Loza_Zona_Carga_Camiones.webp"
                    alt="Product"
                    className="object-cover"
                  />
                  <div className="px-4 py-3 w-90">
                    <span className="text-slate-900 mr-3 uppercase text-xs">
                      Cliente
                    </span>
                    <p className="text-lg font-bold text-black truncate block capitalize">
                      Oxiquim S.A.
                    </p>
                    <div className="flex items-center">
                      <p className="text-md cursor-auto my-3 text-black  ">
                        Construcción de loza zona carga camiones
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" bg-gray-100 p-2 rounded-md ">
                  <img
                    src="/Imagenes/Proyectos/Mejoramiento_Espacios_Galeria_Villa_Musalem.webp"
                    alt="Product"
                    className="object-cover"
                  />
                  <div className="px-4 py-3 w-90">
                    <span className="text-slate-900 mr-3 uppercase text-xs">
                      Cliente
                    </span>
                    <p className="text-lg font-bold text-black  block capitalize">
                      C.C Comercio Concepción
                    </p>
                    <div className="flex items-center">
                      <p className="text-md cursor-auto my-3 normal-case   text-black">
                        Habilitacion, preparacion y mejoramiento de espacios
                        comunes en Galerias Musalem y VIlla.
                      </p>
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

export default SliderProyectos;
