import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const FeaturedPost = ({ title, description, image, link }) => {
    return (
        <div className="bg-red-50 p-6 shadow-lg hover:bg-blue-50 font-montserrat">
            <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <a href={link} className="text-blue-500 hover:text-blue-700">Read more  <FontAwesomeIcon icon={faArrowRight} />
            </a>
        </div>
    );
};

export default FeaturedPost;