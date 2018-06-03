import React from 'react';
import Results from "../results/Results";
import LinkField from "./LinkField";

const Link = () => (
    <div className="page">
        <LinkField/>
        <Results linkEnable={false}/>
    </div>
);

export default Link;