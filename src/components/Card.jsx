export default function Card(props) {
  const movieDate = props.movie?.premiered;
  const movieYear = movieDate.split("-")[0];

  return (
    <div className="bg-white p-4 sm:p-6 border border-slate-200 shadow-sm w-full max-w-sm rounded-lg mx-auto mt-6 overflow-hidden">
      <div className="w-full">
        <img
          src={props.movie.image.medium}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
          alt="movie thumbnail image"
        />
      </div>

      <hr className="border-slate-300 my-6 dark:border-neutral-700" />

      <div>
        <h3 className="text-slate-900 text-lg font-semibold dark:text-slate-50 text-center">
          {props.movie.name}
        </h3>
        <div
          className="flex justify-between gap-1 mt-3"
          role="img"
          aria-label="4.5 out of 5 stars, based on 50 reviews"
        >
          <div className="inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-3.5 shrink-0"
              viewBox="0 0 511.987 511"
              aria-hidden="true"
            >
              <path
                fill="#ffc107"
                d="M510.652 195.902a27.158 27.158 0 0 0-23.425-18.71l-147.774-13.419-58.433-136.77c-4.31-10.023-14.122-16.509-25.024-16.509s-20.715 6.487-25.023 16.534l-58.434 136.746-147.797 13.418a27.208 27.208 0 0 0-23.402 18.71c-3.371 10.368-.258 21.739 7.957 28.907l111.7 97.96-32.938 145.09c-2.41 10.668 1.73 21.696 10.582 28.094 4.757 3.438 10.324 5.188 15.937 5.188 4.84 0 9.64-1.305 13.95-3.883l127.468-76.184 127.422 76.184c9.324 5.61 21.078 5.097 29.91-1.305a27.223 27.223 0 0 0 10.582-28.094l-32.937-145.09 111.699-97.94a27.224 27.224 0 0 0 7.98-28.927zm0 0"
                data-original="#ffc107"
              ></path>
            </svg>
            <span
              aria-hidden="true"
              className="text-slate-900 ml-1.5 text-sm font-medium dark:text-slate-50"
            >
              {props.movie.rating.average}
            </span>
          </div>
          <div>
            <span
              aria-hidden="true"
              className="text-slate-900 ml-1.5 text-sm font-medium dark:text-slate-50"
            >
              📅 {movieYear}
            </span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            href="#"
            className="inline-block py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            See details
          </a>
        </div>
      </div>
    </div>
  );
}
