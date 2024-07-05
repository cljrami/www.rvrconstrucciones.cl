const tarjetaConfesiones = ({ image, titulo, autor, edad, url, alt }) => {
  return (
    <div className="relative overflow-hidden bg-cover ">
      <a href={url} className="text-white">
        <img
          src={image}
          alt={alt}
          className="w-full h-auto opacity-30 transition duration-300 ease-in-out hover:scale-110"
        />

        <div className="absolute z-10 bottom-0 left-0 right-0 px-2 py-5 text-left text-white">
          <h2 className="tracking-tight text-3xl sm:text-6xl md:text-3xl lg:text-3xl xl:text-5x1 font-semibold">
            {titulo}
          </h2>

          <h3>
            {autor} <i className="fas fa-mars"></i> | {edad} años
          </h3>
        </div>
      </a>
    </div>
  );
};

export default tarjetaConfesiones;
