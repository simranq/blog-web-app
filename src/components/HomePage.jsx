import React from "react";
import { Card } from './Card.jsx';
import { HeroSection } from './HeroSection.jsx';
import FeaturesSection  from './FeaturesSection.jsx';

const featuredBridgePost = {
    id: 1,
    title: "The Majestic Golden Gate Bridge",
    description: "Explore the history and engineering marvels of the iconic Golden Gate Bridge in San Francisco.",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IDq8cZVcGfgwgkR1Bt0RywHaEo%26pid%3DApi%26h%3D160&f=1&ipt=97c5f73d8fe8ce6525233eb0f3dac2dceecdd2f27a644cf767f840c8848904cc&ipo=images",
    link: "/posts/golden-gate-bridge",
};

const featuredIcebergPost = {
    id: 2,
    title: "The Mysteries of Icebergs",
    description: "Dive into the fascinating world of icebergs, their formation, and the hidden dangers they pose.",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7cRYFyLoDEDh4sRtM73vvwHaDg%26pid%3DApi%26h%3D160&f=1&ipt=0a7f3b6ee2aec1b172954b4435f8f0cabb3e88fb0a56e7e9f40edcd725c7b8c7&ipo=images",
    link: "/posts/mysteries-of-icebergs",
};

const featuredBeachPost = {
    id: 3,
    title: "Top 10 Beaches to Visit in 2025",
    description: "Discover the most breathtaking beaches around the world to add to your travel bucket list.",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.amEbZWd9JRcIxkyVtYNODwHaE8%26pid%3DApi%26h%3D160&f=1&ipt=2051f8175b691e482e194006008fd458cfc755d394eae92f637ce62f1f941127&ipo=images",
    link: "/posts/top-beaches-2025",
};

const posts = [featuredBridgePost, featuredIcebergPost, featuredBeachPost];
function HomePage() {
    return (
        <>
            <HeroSection />
            <div className="scroll-container">
                <div className="scroll-content">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <FeaturesSection posts={posts}/>
            </>
    )
};

export default HomePage;