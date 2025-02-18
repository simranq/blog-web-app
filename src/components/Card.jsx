import React from 'react';

export const Card = () => {
    return (
        <div className=" font-montserrat flex flex-row p-4 w-198 h-auto my-4 mx-14 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 rounded-lg shadow-lg">
            <img
                className="w-48 h-48 rounded-lg flex-shrink-0"
                src="images/minimalism-img.avif"
                alt="A minimalist image"
            />
            <div className="p-4 text-center sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg font-semibold text-black">The Magic of Minimalism</p>
                    <p className="font-medium text-gray-600">
                        How Simplifying Your Life Can Lead to Greater Happiness
                        In today's fast-paced world, many of us find ourselves overwhelmed by the constant barrage of information, possessions, and responsibilities.
                    </p>
                </div>
            </div>
        </div>
    );
};
