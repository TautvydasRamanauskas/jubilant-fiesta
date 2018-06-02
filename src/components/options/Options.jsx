import React from 'react';
import Divider from 'material-ui/Divider';
import {Paper} from "material-ui";
import Rating from "./Rating";
import SearchEngines from "./SearchEngines";
import TextRules from "./TextRules";
import NeuralNetwork from "./NeuralNetwork";

const Options = () => (
    <Paper className="options" zDepth={5}>
        <SearchEngines/>
        <Divider/>
        <TextRules/>
        <Divider/>
        <NeuralNetwork/>
        <Divider/>
        <Rating/>
    </Paper>
);

export default Options;