import { train, train1, train2, train3 } from "../assets/images";

const Gallery = () => {
  const photos = [
    { id: 1, src: train, alt: "Train Photography 1", category: "Transportation" },
    { id: 2, src: train1, alt: "Train Photography 2", category: "Transportation" },
    { id: 3, src: train2, alt: "Moon", category: "Sky" },
    { id: 4, src: train3, alt: "Ship Photography", category: "Transportation" },
  ];

  return (
    <section className="max-container">
      <h1 className="head-text blur-dark:text-white">
        <span style={{ 
          color: '#3b82f6',
          textShadow: '0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 30px #3b82f6, 0 0 40px #0ea5e9'
        }}>
          My
        </span>{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Gallery
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-300">
        <p>
          A collection of moments captured through my lens. Photography is my way of
          freezing time and sharing stories — from trains to landscapes, each shot
          tells something unique.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div className="aspect-square overflow-hidden bg-gray-200 dark:bg-gray-800">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 text-white">
                <p className="text-sm font-medium">{photo.category}</p>
                <p className="text-xs text-gray-300 mt-1">{photo.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
