// SWIPER
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
//import "swiper/css/effect-coverflow";

// import required modules
import { Keyboard, Navigation } from "swiper/modules";

const SliderTestimonios = () => {
  return (
    <section className="overflow-hidden animate-fade animate-ease-in-out  mt-10 p-2  md:max-w-6xl mx-auto">
      <h1 className="text-center text-4xl lg:text-5xl font-bold font-heading mb-6 max-w-md mx-auto">
        Opiniónes de nuestros clientes
      </h1>
      <div className="    text-focus-in" id="SliderTestimonios">
        <>
          <div className="mx-auto mt-5 ">
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
              //pagination={true}
              navigation={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 3,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 3,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 3,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 3,
                },
              }}
              //pagination={true}
              modules={[Keyboard, Navigation]}
              className="SliderTestimonios"
            >
              <SwiperSlide>
                <div className="border border-orange-500 bg-white w-full rounded-t-3xl rounded-br-3xl mb-8  p-3">
                  <div className="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="22"
                      viewBox="0 0 30 22"
                      fill="none"
                    >
                      <path
                        d="M13.1971 4.75862C10.9375 4.89655 9.11058 5.47127 7.71635 6.48276C6.37019 7.49425 5.57692 8.87356 5.33654 10.6207C5.28846 11.2184 5.28846 11.8621 5.33654 12.5517C5.72115 12 6.20192 11.6092 6.77885 11.3793C7.35577 11.1494 8.05289 11.0345 8.87019 11.0345C10.1683 11.0345 11.2981 11.5172 12.2596 12.4828C13.2212 13.4483 13.7019 14.7126 13.7019 16.2759C13.7019 17.977 13.125 19.3563 11.9712 20.4138C10.8173 21.4713 9.30289 22 7.42788 22C5.07212 22 3.24519 21.1724 1.94712 19.5172C0.649038 17.8161 0 15.5862 0 12.8276C0 9.47126 1.05769 6.57471 3.17308 4.13793C5.33654 1.65517 8.67789 0.275861 13.1971 0V4.75862ZM29.4952 4.75862C27.1875 4.89655 25.3606 5.47127 24.0144 6.48276C22.6683 7.49425 21.875 8.87356 21.6346 10.6207C21.5865 11.0345 21.5625 11.6782 21.5625 12.5517C21.9952 12 22.5 11.6092 23.0769 11.3793C23.6538 11.1494 24.351 11.0345 25.1683 11.0345C26.4663 11.0345 27.5962 11.5172 28.5577 12.4828C29.5192 13.4483 30 14.7126 30 16.2759C30 17.977 29.4231 19.3563 28.2692 20.4138C27.1154 21.4713 25.601 22 23.726 22C21.3221 22 19.4712 21.1724 18.1731 19.5172C16.9231 17.8161 16.2981 15.5862 16.2981 12.8276C16.2981 9.47126 17.3558 6.57471 19.4712 4.13793C21.6346 1.65517 24.976 0.275861 29.4952 0V4.75862Z"
                        fill="#FF7100"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold font-heading mb-4 text-black">
                    Experiencia y conocimientos
                  </h2>
                  <p className="text-gray-600 mb-10">
                    <a href="https://www.rvrconstruccioones.cl">
                      <span className="text-blue-900 font-bold">RVR</span>
                    </a>{" "}
                    es una empresa que nos ha demostrado experiencia en obras
                    civíles realizadas en nuestras instalaciónes
                  </p>
                  <div className="flex items-center flex-wrap">
                    <div className="rounded-full bg-orange-50 overflow-hidden">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAe1BMVEVHcEwAdc8Ads8Ad88Dfc8Adc8LlM0Adc8Adc8Egc8Kks4BeM8Cfc4Jks4Fg84Fhs4Gic4JkM0IkM0Lls0Lls0Lls0Nns0Nnc0QpcwQqMwSrMwSrcwSrcwaw8sVtcsWt8sbx8sYvcsbyMoaxMsbxsobxcocy8oezsodzMqs5/M/AAAAKXRSTlMAQ4Wlvf8U7dNrKv//QP/s/6r/gv+i////7pz/pEf/6H//yYr//+n/rZnm4C8AAADgSURBVHgBbc4FEsMwDAXRNVRlZma4/wmbxLacwhuq/jaTkBnrvHfW8E8jccIHMQJNzZYaVwy+XluoVhpybRJ5/fvvs+08/LxX4vFTBXB6OdOhVh2gnyAEWsHoz0TSYrDdoI1ycbK4XkDWj5PDDypDMhkEHj+qfMRR4BlPArJ+nMZMZ0EbNY/TlP6isFwslySyLM5y7cMqWgvBOi3AZpvs9p2y6QnIITvCUQ+hcDonl6LpcaVyud1Lt6I97rd7OB5El2epbM/kgXoV5+unJbKXervyTdNL+LE/vS6X12mPegNHRCD3wlc52QAAAABJRU5ErkJggg=="
                        alt=""
                        className="pr-2"
                      />
                    </div>
                    <div>
                      <h2 className="font-semibold text-black ">
                        Subgerente Soporte y Servicios
                      </h2>
                      <p className="text-blue-500 text-sm font-bold">
                        <a
                          href="https://www.orizon.cl"
                          className="hover:underline"
                          target="_blank"
                        >
                          Orison S.A
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border border-orange-500 bg-white w-full rounded-t-3xl rounded-br-3xl mb-8  p-3">
                  <div className="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="22"
                      viewBox="0 0 30 22"
                      fill="none"
                    >
                      <path
                        d="M13.1971 4.75862C10.9375 4.89655 9.11058 5.47127 7.71635 6.48276C6.37019 7.49425 5.57692 8.87356 5.33654 10.6207C5.28846 11.2184 5.28846 11.8621 5.33654 12.5517C5.72115 12 6.20192 11.6092 6.77885 11.3793C7.35577 11.1494 8.05289 11.0345 8.87019 11.0345C10.1683 11.0345 11.2981 11.5172 12.2596 12.4828C13.2212 13.4483 13.7019 14.7126 13.7019 16.2759C13.7019 17.977 13.125 19.3563 11.9712 20.4138C10.8173 21.4713 9.30289 22 7.42788 22C5.07212 22 3.24519 21.1724 1.94712 19.5172C0.649038 17.8161 0 15.5862 0 12.8276C0 9.47126 1.05769 6.57471 3.17308 4.13793C5.33654 1.65517 8.67789 0.275861 13.1971 0V4.75862ZM29.4952 4.75862C27.1875 4.89655 25.3606 5.47127 24.0144 6.48276C22.6683 7.49425 21.875 8.87356 21.6346 10.6207C21.5865 11.0345 21.5625 11.6782 21.5625 12.5517C21.9952 12 22.5 11.6092 23.0769 11.3793C23.6538 11.1494 24.351 11.0345 25.1683 11.0345C26.4663 11.0345 27.5962 11.5172 28.5577 12.4828C29.5192 13.4483 30 14.7126 30 16.2759C30 17.977 29.4231 19.3563 28.2692 20.4138C27.1154 21.4713 25.601 22 23.726 22C21.3221 22 19.4712 21.1724 18.1731 19.5172C16.9231 17.8161 16.2981 15.5862 16.2981 12.8276C16.2981 9.47126 17.3558 6.57471 19.4712 4.13793C21.6346 1.65517 24.976 0.275861 29.4952 0V4.75862Z"
                        fill="#FF7100"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold font-heading mb-4 text-black">
                    Responsables
                  </h2>
                  <p className="text-gray-600 mb-10">
                    <a href="https://www.rvrconstruccioones.cl">
                      <span className="text-blue-900 font-bold">RVR</span>
                    </a>{" "}
                    se destaca por su gran espiritu de colaboración,
                    resposabilidad y desempeño en proyectos realizados
                  </p>
                  <div className="flex items-center flex-wrap">
                    <div className="rounded-full bg-orange-50 overflow-hidden">
                      <img
                        src="data:image/png;base64,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"
                        alt=""
                        className="pr-2 "
                      />
                    </div>
                    <div>
                      <h2 className="font-semibold text-black ">
                        Jefe Mantención
                      </h2>
                      <p className="text-blue-500 text-sm font-bold">
                        <a
                          href="https://www.marinadelsol.cl"
                          className="hover:underline"
                          target="_blank"
                        >
                          Casino Marina Del Sol
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border border-orange-500 bg-white w-full rounded-t-3xl rounded-br-3xl mb-8  p-3">
                  <div className="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="22"
                      viewBox="0 0 30 22"
                      fill="none"
                    >
                      <path
                        d="M13.1971 4.75862C10.9375 4.89655 9.11058 5.47127 7.71635 6.48276C6.37019 7.49425 5.57692 8.87356 5.33654 10.6207C5.28846 11.2184 5.28846 11.8621 5.33654 12.5517C5.72115 12 6.20192 11.6092 6.77885 11.3793C7.35577 11.1494 8.05289 11.0345 8.87019 11.0345C10.1683 11.0345 11.2981 11.5172 12.2596 12.4828C13.2212 13.4483 13.7019 14.7126 13.7019 16.2759C13.7019 17.977 13.125 19.3563 11.9712 20.4138C10.8173 21.4713 9.30289 22 7.42788 22C5.07212 22 3.24519 21.1724 1.94712 19.5172C0.649038 17.8161 0 15.5862 0 12.8276C0 9.47126 1.05769 6.57471 3.17308 4.13793C5.33654 1.65517 8.67789 0.275861 13.1971 0V4.75862ZM29.4952 4.75862C27.1875 4.89655 25.3606 5.47127 24.0144 6.48276C22.6683 7.49425 21.875 8.87356 21.6346 10.6207C21.5865 11.0345 21.5625 11.6782 21.5625 12.5517C21.9952 12 22.5 11.6092 23.0769 11.3793C23.6538 11.1494 24.351 11.0345 25.1683 11.0345C26.4663 11.0345 27.5962 11.5172 28.5577 12.4828C29.5192 13.4483 30 14.7126 30 16.2759C30 17.977 29.4231 19.3563 28.2692 20.4138C27.1154 21.4713 25.601 22 23.726 22C21.3221 22 19.4712 21.1724 18.1731 19.5172C16.9231 17.8161 16.2981 15.5862 16.2981 12.8276C16.2981 9.47126 17.3558 6.57471 19.4712 4.13793C21.6346 1.65517 24.976 0.275861 29.4952 0V4.75862Z"
                        fill="#FF7100"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold font-heading mb-4 text-black">
                    Excelente desempeño
                  </h2>
                  <p className="text-gray-600 mb-10">
                    <a href="https://www.rvrconstruccioones.cl">
                      <span className="text-blue-900 font-bold">RVR</span>
                    </a>{" "}
                    se destaca por su responsabilidad y desemepño en proyectos
                    preventivos y correctivos
                  </p>
                  <div className="flex items-center flex-wrap">
                    <div className="rounded-full bg-orange-50 overflow-hidden">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAByklEQVR4AZ1TM4AdQBTc2HYZd7Ft27btnG3btm3bdnc2mzN3vnUsZj3zuOT8jytCILY1q4h9wz7M2I8Fvo112qGZlPSU2FQNA3SdQGyrN05YAI8pKY8rUN0BQdzZpGxdBQPjCsy2rS7j8aCCnl3zzZx70SdjubVPxsJXV7SM5o8hULOKwoNpmcK6WUUyTHVTQOaMEN+MBcMsHBMpADKsQQBeIP4ZdhUfBQX8MuZ85Q2FS7ap0qPopRjmzcE0m+q/XulrpPwyZ9dSgX6EI+QByBySXGov0S4sZCdzlWN+lmbsPTO2AHLBK0JQbxa5l/yMyCQvvVrIW39FnG9wTgv4FCI9ZJm8Pcc/k+jAE4QDMXYuONbhKnnl84u89kljCDxy3aCfsEcOZFhkxx2bP2MjJXsCTAG4CoD8yjuXzi7khf+r2+oyj7Wid5ve8nXKQkLhEQgAJR+nyGQKMBOnB9dBhmWiWLnEMnzPCXiAMNAPvALwAqEwBXApmSgOAd4mwSM0zmM/1+soLd6xypuHeZ9rShejeoxLg5pTsM77JwDUnN19eIPGWuecEH7I264ZPQJPCZoHCYTrgn2O/kfm2RVACTHjnK8PIIB5KhgBwQWuTpUrAeEAAAAASUVORK5CYII="
                        alt=""
                        className="pr-2 w-2 h-2"
                      />
                    </div>
                    <div>
                      <h2 className="font-semibold text-black ">
                        Jefa Administracion y finanzas{" "}
                      </h2>
                      <p className="text-blue-500 text-sm font-bold">
                        <a
                          href="https://www.fonasa.cl"
                          className="hover:underline"
                          target="_blank"
                        >
                          Fonasa
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="border border-orange-500 bg-white w-full rounded-t-3xl rounded-br-3xl mb-8  p-3">
                  <div className="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="22"
                      viewBox="0 0 30 22"
                      fill="none"
                    >
                      <path
                        d="M13.1971 4.75862C10.9375 4.89655 9.11058 5.47127 7.71635 6.48276C6.37019 7.49425 5.57692 8.87356 5.33654 10.6207C5.28846 11.2184 5.28846 11.8621 5.33654 12.5517C5.72115 12 6.20192 11.6092 6.77885 11.3793C7.35577 11.1494 8.05289 11.0345 8.87019 11.0345C10.1683 11.0345 11.2981 11.5172 12.2596 12.4828C13.2212 13.4483 13.7019 14.7126 13.7019 16.2759C13.7019 17.977 13.125 19.3563 11.9712 20.4138C10.8173 21.4713 9.30289 22 7.42788 22C5.07212 22 3.24519 21.1724 1.94712 19.5172C0.649038 17.8161 0 15.5862 0 12.8276C0 9.47126 1.05769 6.57471 3.17308 4.13793C5.33654 1.65517 8.67789 0.275861 13.1971 0V4.75862ZM29.4952 4.75862C27.1875 4.89655 25.3606 5.47127 24.0144 6.48276C22.6683 7.49425 21.875 8.87356 21.6346 10.6207C21.5865 11.0345 21.5625 11.6782 21.5625 12.5517C21.9952 12 22.5 11.6092 23.0769 11.3793C23.6538 11.1494 24.351 11.0345 25.1683 11.0345C26.4663 11.0345 27.5962 11.5172 28.5577 12.4828C29.5192 13.4483 30 14.7126 30 16.2759C30 17.977 29.4231 19.3563 28.2692 20.4138C27.1154 21.4713 25.601 22 23.726 22C21.3221 22 19.4712 21.1724 18.1731 19.5172C16.9231 17.8161 16.2981 15.5862 16.2981 12.8276C16.2981 9.47126 17.3558 6.57471 19.4712 4.13793C21.6346 1.65517 24.976 0.275861 29.4952 0V4.75862Z"
                        fill="#FF7100"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold font-heading mb-4 text-black">
                    Dan Soluciónes efectivas
                  </h2>
                  <p className="text-gray-600 mb-10">
                    <a href="https://www.rvrconstruccioones.cl">
                      <span className="text-blue-900 font-bold">RVR</span>
                    </a>{" "}
                    se destaca por proporcionar soluciones certeras a nuestros
                    problemas en las instalaciones y su responsabilidad
                  </p>
                  <div className="flex items-center flex-wrap">
                    <div className="rounded-full bg-orange-50 overflow-hidden">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAhFBMVEUAQK8APa4AMKsAO643XLjAyeVrgcZMa77///+XpNQANayUotMAO7SLYXyeaG8VQ6u+c1f/jwD5iAoAObb/igBOT5jNeEsAM6ymaWm3b1w1R6IAJagDQrCHmM+grtkASrja4PDP1uvy9foAKqnl6fQZSrIAH6dJaL10isoAOa1ddsGYp9b/Cmu9AAAAq0lEQVR4AWKgDACapQcthmEoAKCrX23b+v//22ofzEV04wRBUezScIIgrxSjAGhmXYAhG2RXyPGCiFwgJ8mywl2gqmmarCMXLQ1Z03bdIozJYEPesp0tup4f0JTbF4Sht5mt70P3RMyQDcw1xgBJp0R6gpDlblECgIec4O0xGZQGqOqTbtMu0XTTPmCXGxKtecT2Grve/gzpI24v2JCou7CqD1ezS9RT+NJzB+1EEaMzOm6cAAAAAElFTkSuQmCC"
                        alt=""
                        className="pr-2 w-2 h-2"
                      />
                    </div>
                    <div>
                      <h2 className="font-semibold text-black ">
                        Técnico de Mantención{" "}
                      </h2>
                      <p className="text-blue-500 text-sm font-bold">
                        <a
                          href="https://www.hites.cl"
                          className="hover:underline"
                          target="_blank"
                        >
                          Tiendas Hites
                        </a>
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
export default SliderTestimonios;
