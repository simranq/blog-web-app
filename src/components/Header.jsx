import Navbar  from "./Navbar.jsx"
export const Header = ({ blogLogo, blogTitle }) => {
  return (
    <header>
      <div className=" font-montserrat flex items-center p-2 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 fixed z-50 w-full">
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
        <Navbar />
      </div>
    </header>
  );
};
