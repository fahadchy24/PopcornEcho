import { X } from "lucide-react";
import { useState } from "react";

const MovieDetailsModal = ({ isOpen, onClose, movieData }) => {
  const [error, setError] = useState("");

  if (!isOpen || !movieData) return null;

  const htmlString = movieData.summary;
  const theObj = { __html: htmlString };

  const movieDate = movieData.premiered;
  const movieYear = movieDate.split("-")[0];

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60 z-51">
      <div className="w-[400px] p-5 rounded-2xl bg-gray-100 shadow-2xl">
        <div className="text-end">
          <button onClick={onClose} className="cursor-pointer">
            <X />
          </button>
        </div>
        <div className="pt-8">
          <div>
            <img
              src={movieData.image.original}
              className="w-full h-84 object-fit"
              alt="movie backdrop image"
            />
          </div>
          <h2 className="py-2">{movieData.name}</h2>
          <div className="flex justify-between items-center py-2">
            <p>⭐ Rating: {movieData.rating.average}</p>
            <p>📅 Release: {movieYear}</p>
          </div>
          <p>Overview:</p>
          <div dangerouslySetInnerHTML={theObj} />
        </div>
        <div className="text-center pt-1">
          {error && <p className="text-red-600 text-md font-medium">{error}</p>}
        </div>
        <div className="flex justify-end py-2">
          <button
            onClick={onClose}
            className="inline-flex items-center py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <X /> Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
