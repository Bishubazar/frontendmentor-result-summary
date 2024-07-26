import React from "react";

const CircleScore = () => {
    return (
        <div className="flex flex-col items-center justify-center leading-tight rounded-full h-36 sm:h-48 aspect-square bg-gradient-to-b from-blue-violet to-transparent">
            <h1 className="text-6xl sm:text-[72px] font-bold">76</h1>
            <span className="text-neutral-lavender">of 100</span>
        </div>
    );
};

export default CircleScore;
