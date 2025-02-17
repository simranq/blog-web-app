import blogLogo from "/images/blog-logo.png";

export const Header = () => {
  return (
    <header>
      <div className="flex items-center p-2 bg-navbar">
        <img
          src={blogLogo}
          alt="Logo of proj-blog"
          className="w-12 h-12"
        />
        <h1 className="text-4xl ml-4 font-pacifico ">
          <div className="text-darkTeal">
            simss blog..
          </div>
        </h1>
        <nav className="flex flex-row space-x-4 " aria-label="Main navigation">
          <ul className="flex space-x-9 font-bold text-lg text-orange-400 mx-66 ">
            <li className="hover:text-orange-600">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-orange-600">
              <a href="#">About</a>
            </li>
            <li className="hover:text-orange-600">
              <a href="#">Contact</a>
            </li>
            <li className="hover:text-orange-600">
              <a href="#">Blogs</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
