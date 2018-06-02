import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import OptionsIcon from 'material-ui/svg-icons/action/settings';
import SearchIcon from 'material-ui/svg-icons/action/search';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
import {withRouter} from 'react-router-dom'

const searchButtonStyle = {
    verticalAlign: 'middle',
};

const ToolbarHeader = withRouter(
    ({history}) => (
        <Toolbar>
            <ToolbarGroup firstChild={true}>
                <FlatButton label="Search" labelPosition="before" onClick={e => history.push('/')}>
                    <SearchIcon style={searchButtonStyle}/>
                </FlatButton>
            </ToolbarGroup>
            <ToolbarGroup>
                <ToolbarSeparator className="toolbar-separator"/>
                <FlatButton label="Options" labelPosition="before" onClick={e => history.push('/options')}>
                    <OptionsIcon style={searchButtonStyle}/>
                </FlatButton>
            </ToolbarGroup>
        </Toolbar>
    )
);

export default ToolbarHeader;