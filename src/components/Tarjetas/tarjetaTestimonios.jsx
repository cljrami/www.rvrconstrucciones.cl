const tarjetaConfesiones = ({ nombre, testimonio, alt, title, ciudad }) => {
  return (
    <div className="p-4 m-4  rounded  overflow-hidden ">
      <div className="relative max-w-screen-xl">
        <div className="relative">
          <blockquote className="mt-4">
            <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium  ">
              <p>{testimonio}</p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <img
                    alt={alt}
                    loading="lazy"
                    title={title}
                    className="mx-auto h-10 w-10 rounded-full"
                    src="/Imagenes/portadas/historiaHombre.webp"
                    width="56"
                    height="56"
                  />
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center gap-2">
                  <div className="text-base leading-6 font-medium ">
                    {nombre}
                  </div>{" "}
                  -
                  <div className="text-base leading-6 font-medium text-gray-500">
                    <i className="fas fa-location-pin"></i> {ciudad}
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default tarjetaConfesiones;
