import React from 'react';
import IconButton from 'material-ui/IconButton';
import OptionsIcon from 'material-ui/svg-icons/action/settings';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {withRouter} from 'react-router-dom'

const ToolbarHeader = withRouter(
    ({history}) => (
        <Toolbar>
            <ToolbarGroup firstChild={true}/>
            <ToolbarGroup>
                <ToolbarSeparator className="toolbar-separator"/>
                <ToolbarTitle text="Options"/>
                <IconButton>
                    <OptionsIcon onClick={e => history.push('/options')}/>
                </IconButton>
            </ToolbarGroup>
        </Toolbar>
    )
);

export default ToolbarHeader;