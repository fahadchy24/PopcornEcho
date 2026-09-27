import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="h-16 flex items-center justify-between">
                <div className="text-xl font-bold tracking-tight text-indigo-600">
                    <NavLink to="/">PopcornEcho</NavLink>
                </div>
                <nav className="flex space-x-8 text-sm font-medium">
                    <NavLink to="/movies" className="text-gray-600 hover:text-indigo-600 transition">Movies</NavLink>
                </nav>
            </div>
        </header>
    )
};

export default Navbar;