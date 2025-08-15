import { train, train1, train2, train3 } from "../assets/images";

const Gallery = () => {
  return (
    <section className="max-container">
      <h1 className="text-lg text-black-500 font-bold">My Gallery</h1>
      <div className="mt-5 flex flex-col gap-3 text ">
        <p>List My Gallery</p>
      </div>
      <div className="mt-10 grid grid-cols-4 gap-4">
        <img src={train} alt="Train 1" className="w-full h-52 rounded shadow" />
        <img
          src={train1}
          alt="Train 2"
          className="w-full h-52 rounded shadow"
        />
        <img
          src={train2}
          alt="Train 3"
          className="w-full h-52 rounded shadow"
        />
        <img
          src={train3}
          alt="Train 4"
          className="w-full h-52 rounded shadow"
        />
      </div>
    </section>
  );
};

export default Gallery;
