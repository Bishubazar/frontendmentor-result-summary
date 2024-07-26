import React from "react";
import CircleScore from "./CircleScore";

const Result = () => {
    return (
        <article className="flex flex-col items-center justify-between p-10 text-white bg-blue-gradient result-rounded rounded-b-[36px] gap-5">
            <h1 className="text-lg font-semibold sm:text-2xl text-neutral-lavender">
                Your Result
            </h1>
            <CircleScore />
            <div className="text-center">
                <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
                    Great
                </h2>
                <p className="text-base max-w-64 sm:text-lg text-neutral-lavender">
                    You scored higher than 65% of the people who have taken
                    these tests.
                </p>
            </div>
        </article>
    );
};

export default Result;
