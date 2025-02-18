import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
export const HeroSection = () => {
  return (
    <div className="pt-32  font-montserrat bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 text-white p-10 text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to My Blog</h1>
      <p className="text-xl mb-4">Enjoy a coffee break <FontAwesomeIcon icon={faCoffee} /></p>
      <button className="bg-violet-400 text-black px-6 py-2 rounded-full hover:bg-violet-500 shadow-md">Get Started</button>
    </div>
  );
};
