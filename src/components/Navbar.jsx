const Navbar = () => {
    return (
        <nav className="flex flex-row space-x-4" aria-label="Main navigation">
            <ul className="flex space-x-9 font-bold text-lg text-white mx-66">
                <li className="hover:text-violet-600">
                    <a href="#">Home</a>
                </li>
                <li className="hover:text-violet-600">
                    <a href="#">About</a>
                </li>
                <li className="hover:text-violet-600">
                    <a href="#">Contact</a>
                </li>
                <li className="hover:text-violet-600">
                    <a href="#">Blogs</a>
                </li>
            </ul>
        </nav>
        );
};
export default Navbar;