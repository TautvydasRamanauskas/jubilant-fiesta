import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchActions from '../actions/search-actions';
import * as optionsActions from '../actions/options-actions';
import FlatButton from 'material-ui/FlatButton';
import OptionsIcon from 'material-ui/svg-icons/action/settings';
import SearchIcon from 'material-ui/svg-icons/action/search';
import LinkIcon from 'material-ui/svg-icons/content/link';
import AdministratorIcon from 'material-ui/svg-icons/action/build';
import BookmarkIcon from 'material-ui/svg-icons/action/bookmark';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
import {withRouter} from 'react-router-dom'

const iconStyle = {
    verticalAlign: 'middle',
};

const route = (history, target, reset) => {
    const {location} = history;
    if (location && location.pathname !== target) {
        reset();
    }
    history.push(target);
};

const routeWrapper = (history, reset) => target => route(history, target, reset);

const ToolbarHeader = withRouter(
    ({history, user, resetResults, reset}) => {
        const fullReset = () => {
            const userOptions = user.options;
            if (userOptions) {
                reset(userOptions);
            }
            resetResults();
        };
        const route = routeWrapper(history, fullReset);
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
                    <AdministratorToolbar user={user} route={route}/>
                    <FlatButton label="Options" labelPosition="before" onClick={e => route('/options')}>
                        <OptionsIcon style={iconStyle}/>
                    </FlatButton>
                </ToolbarGroup>
            </Toolbar>
        )
    }
);

const AdministratorToolbar = ({user: {level}, route}) => {
    if (level === 1) {
        return (
            <FlatButton label="Administrator" labelPosition="before" onClick={e => route('/admin')}>
                <AdministratorIcon style={iconStyle}/>
            </FlatButton>
        );
    }
    return null;
};

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({}, searchActions, optionsActions), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarHeader);
