const tarjetaMercado = ({ image, titulo, alt, title }) => {
  return (
    <div className="relative overflow-hidden bg-cover ">
      <img
        src={image}
        alt={alt}
        title={title}
        className="w-full h-auto opacity-30 transition duration-300 ease-in-out hover:scale-110"
      />

      <div className="absolute z-10 bottom-0 left-0 right-0 px-2 py-5 text-left text-white">
        <h2 className="tracking-tight text-2xl ">{titulo}</h2>
      </div>
    </div>
  );
};

export default tarjetaMercado;
