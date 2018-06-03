import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/search-actions';
import FlatButton from 'material-ui/FlatButton';
import OptionsIcon from 'material-ui/svg-icons/action/settings';
import SearchIcon from 'material-ui/svg-icons/action/search';
import LinkIcon from 'material-ui/svg-icons/content/link';
import BookmarkIcon from 'material-ui/svg-icons/action/bookmark';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
import {withRouter} from 'react-router-dom'

const iconStyle = {
    verticalAlign: 'middle',
};

const route = (history, target, reset) => {
    if (history.location.pathname !== target) {
        reset();
    }
    history.push(target);
};

const routeWrapper = (history, reset) => target => route(history, target, reset);

const ToolbarHeader = withRouter(
    ({history, resetResults}) => {
        const route = routeWrapper(history, resetResults);
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <FlatButton label="Search" labelPosition="before" onClick={e => route('/')}>
                        <SearchIcon style={iconStyle}/>
                    </FlatButton>
                    <FlatButton label="Bookmarks" labelPosition="before" onClick={e => route('/bookmarks')}>
                        <BookmarkIcon style={iconStyle}/>
                    </FlatButton>
                    <FlatButton label="Link" labelPosition="before" onClick={e => route('/link')}>
                        <LinkIcon style={iconStyle}/>
                    </FlatButton>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarSeparator className="toolbar-separator"/>
                    <FlatButton label="Options" labelPosition="before" onClick={e => route('/options')}>
                        <OptionsIcon style={iconStyle}/>
                    </FlatButton>
                </ToolbarGroup>
            </Toolbar>
        )
    }
);

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(ToolbarHeader);
