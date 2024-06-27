const tarjetaConfesiones = ({ image, titulo, autor, edad, url }) => {
  return (
    <div className="relative">
      <img src={image} alt="Background" className="w-full h-auto opacity-30 " />
      <div className="absolute z-10 bottom-0 left-0 right-0 px-2 py-5 text-left text-white">
        <a href={url} className="text-white">
          <h2 className="tracking-tight text-3xl sm:text-6xl md:text-3xl lg:text-3xl xl:text-5x1 font-semibold">
            {titulo}
          </h2>
        </a>
        <h3>
          {autor} <i className="fas fa-mars"></i> | {edad} años
        </h3>
      </div>
    </div>
  );
};

export default tarjetaConfesiones;
