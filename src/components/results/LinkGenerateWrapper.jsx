import React from 'react';
import LinkGenerate from "./LinkGenerate";

const LinkGenerateWrapper = ({enabled, link, onGenerate}) => {
    if (enabled) {
        return <LinkGenerate link={link} onGenerateLink={onGenerate}/>
    }
    return null;
};

export default LinkGenerateWrapper;
