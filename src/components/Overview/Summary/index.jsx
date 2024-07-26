import React from "react";
import SummaryItem from "./SummaryItem";
import Button from "../../Button";
import { twMerge } from "tailwind-merge";

const Summary = ({ data }) => {
    return (
        <article className="flex flex-col p-5 pb-10 bg-white sm:p-10 text-neutral-dark ">
            <h1 className="text-xl font-semibold sm:text-2xl">Summary</h1>
            <div className="flex flex-col gap-4 mt-6 mb-7 sm:mb-10">
                {data.map((el, key) => {
                    return (
                        <SummaryItem
                            key={key}
                            data={el}
                            style={twMerge(el.style, "bg-opacity-10")}
                        />
                    );
                })}
            </div>
            <Button title="Continue" buttonStyle={"w-full sm:w-72"} />
        </article>
    );
};

export default Summary;
