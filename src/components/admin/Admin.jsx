import React from 'react';
import Divider from 'material-ui/Divider';
import {Paper} from "material-ui";
import Users from "./Users";
import Searches from "./Searches";
import Limits from "./Limits";
import CleanLinks from "./CleanLinks";
import CleanBookmarks from "./CleanBookmarks";

const Admin = () => (
    <Paper className="options" zDepth={5}>
        <Limits/>
        <Divider/>
        <Users/>
        <Divider/>
        <Searches/>
        <Divider/>
        <CleanLinks/>
        <CleanBookmarks/>
    </Paper>
);

export default Admin;
