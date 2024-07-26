import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ title, href = "/", buttonStyle }) => {
    return (
        <a
            href={href}
            className={twMerge(
                "p-4 font-medium text-center text-white hover:bg-blue-gradient rounded-full  bg-neutral-dark",
                buttonStyle
            )}
        >
            {title}
        </a>
    );
};

export default Button;
