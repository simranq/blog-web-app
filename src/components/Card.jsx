import React from 'react';

const Card = () => {
    return (
        <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 hover:bg-gray-200 rounded-full">
            <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6f5ZEeT1bM05vEOyFk2a7AHaHa%26pid%3DApi&f=1&ipt=1a09faabe3f727767ec477bb033e38e6a19df43724388ca91479a2545345840e&ipo=images" alt="" />
            <div class="space-y-2 text-center sm:text-left">
                <div class="space-y-0.5">
                    <p class="text-lg font-semibold text-black">The Moon</p>
                    <p class="font-medium text-gray-500">The Moon is Earth's only natural satellite. It orbits at an average distance of 384,400 km, about 30 times the diameter of Earth. Tidal forces between Earth and the Moon have synchronized the Moon's orbital period with its rotation period at 29.5 Earth days, causing the same side of the Moon to always face Earth</p>
                </div>
            </div>
        </div>
    );
};

export default Card;