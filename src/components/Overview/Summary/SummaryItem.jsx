import React from "react";
import { twMerge } from "tailwind-merge";

const SummaryItem = ({ style, data, ...props }) => {
    return (
        <div
            className={twMerge(
                style,
                "flex items-center rounded-xl justify-between p-4 sm:max-w-72 w-full"
            )}
            {...props}
        >
            <div className="flex items-center gap-4">
                <img src={data.icon} alt="" />
                <h1 className="font-medium">{data.category}</h1>
            </div>
            <h1 className="flex items-center gap-2 font-bold text-neutral-dark">
                {data.score} <span className="opacity-50">/ 100</span>
            </h1>
        </div>
    );
};

export default SummaryItem;
