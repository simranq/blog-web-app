export const Header = ({ blogLogo, blogTitle }) => {
  return (
    <header>
      <div className="flex items-center p-2 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 shadow-lg">
        <img
          src={blogLogo}
          alt="Blog Logo"
          className="w-12 h-12"
        />
        <h1 className="text-4xl ml-4 font-pacifico">
          <div className="text-white">
            {blogTitle}
          </div>
        </h1>
        <nav className="flex flex-row space-x-4" aria-label="Main navigation">
          <ul className="flex space-x-9 font-bold text-lg text-white mx-66">
            <li className="hover:text-yellow-400">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-yellow-400">
              <a href="#">About</a>
            </li>
            <li className="hover:text-yellow-400">
              <a href="#">Contact</a>
            </li>
            <li className="hover:text-yellow-400">
              <a href="#">Blogs</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
