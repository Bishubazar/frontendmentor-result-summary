import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ title, href = "/", buttonStyle }) => {
    return (
        <a
            href={href}
            className={twMerge(
                "p-4 ont-medium text-center text-white bg-blue-gradient rounded-full  hover:from-neutral-dark hover:to-neutral-dark",
                buttonStyle
            )}
        >
            {title}
        </a>
    );
};

export default Button;
