import { NavLink } from "react-router";

const HeroBanner = () => {
    return (
        <section className="bg-white py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight">
                    DISCOVER <span className="text-indigo-600">MOVIES</span>
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto">
                    Explore and discover your favorite movies from around the world.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <NavLink to="/movies" className="px-6 py-3 font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-md transition">
                        Explore Now
                    </NavLink>
                </div>
            </div>
        </section>
    )
};

export default HeroBanner;