import React from "react";
import SummaryItem from "./Summary/SummaryItem";
import { overview_data } from "../../constants";
import { twMerge } from "tailwind-merge";

import Result from "./Result";
import Summary from "./Summary";

const Overview = () => {
    return (
        <article className="grid w-full overflow-hidden sm:w-auto sm:grid-cols-2 result-rounded custom-shadow">
            <Result />
            <Summary data={overview_data} />
        </article>
    );
};

export default Overview;
