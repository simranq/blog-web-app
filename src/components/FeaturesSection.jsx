import FeaturedPost from "./FeaturedPost";
const FeaturedSection = ({ posts }) => {
    if (!posts) {
      return null; // Handle the case when `posts` prop is undefined
    }
    
    return (
      <section className="py-12 bg-pink-200">
        <div className="container mx-auto ">
          <h2 className="text-4xl font-pacifico text-center mb-8">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <FeaturedPost
                key={post.id}
                title={post.title}
                description={post.description}
                image={post.image}
                link={post.link}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturedSection;