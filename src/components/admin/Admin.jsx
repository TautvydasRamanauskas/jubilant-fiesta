import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/admin-actions';
import Divider from 'material-ui/Divider';
import {Avatar, Dialog, FlatButton, List, ListItem, Paper, Subheader} from "material-ui";
import ActionGrade from 'material-ui/svg-icons/action/grade';
import SearchIcon from 'material-ui/svg-icons/action/search';
import ClearIcon from 'material-ui/svg-icons/action/delete';
import Button from "../Button";

class Admin extends Component {
    render() {
        const {googleLimit, yandexLimit, users, searches, linksRemove, linksCount, bookmarksRemove, bookmarksCount} = this.props;
        const {changeLevel, openLinksRemove, closeLinksRemove, openBookmarksRemove, closeBookmarksRemove} = this.props;
        return (
            <Paper className="options" zDepth={5}>
                <List>
                    <Subheader>Limits</Subheader>
                    <ListItem primaryText={`${googleLimit}/100`} secondaryText="Google limit"/>
                    <ListItem primaryText={`${yandexLimit}/10`} secondaryText="Yandex limit"/>
                </List>
                <Divider/>
                <List>
                    <Subheader>Users</Subheader>
                    {users.map(u => <User user={u} changeLevel={changeLevel}/>)}
                </List>
                <Divider/>
                <List>
                    <Subheader>Searches</Subheader>
                    {searches.map(s => <Search search={s}/>)}
                </List>
                <Divider/>
                <CleanAction
                    buttonText={`Clean Links (${linksCount})`}
                    buttonClick={openLinksRemove}
                    dialogTitle="Do you really want to delete all your links?"
                    dialogOk={closeLinksRemove}
                    dialogCancel={closeLinksRemove}
                    dialogOpen={linksRemove}
                />
                <CleanAction
                    buttonText={`Clean Bookmarks (${bookmarksCount})`}
                    buttonClick={openBookmarksRemove}
                    dialogTitle="Do you really want to delete all your bookmarks?"
                    dialogOk={closeBookmarksRemove}
                    dialogCancel={closeBookmarksRemove}
                    dialogOpen={bookmarksRemove}
                />
            </Paper>
        );
    }

    componentDidMount() {
        const {fetchLimits, fetchUsers, fetchSearches, fetchLinksCount, fetchBookmarksCount} = this.props;
        fetchLimits();
        fetchUsers();
        fetchSearches();
        fetchLinksCount();
        fetchBookmarksCount();
    }
}

const User = ({user, changeLevel}) => {
    const adminIcon = user.level === 1 ? <ActionGrade/> : null;
    return (
        <ListItem
            key={user.id}
            onClick={e => changeLevel(user.id, user.level === 0 ? 1 : 0)}
            primaryText={user.name}
            secondaryText={user.email}
            insetChildren={!adminIcon}
            leftIcon={adminIcon}
            rightAvatar={<Avatar src={user.picture}/>}
        />
    );
};

const Search = ({search}) => {
    return (
        <ListItem
            key={search.id}
            primaryText={search.keyword}
            secondaryText={`Searches count: ${search.searchCount} | Results count: ${search.resultsCount}`}
            leftIcon={<SearchIcon/>}
            // rightIcon={<DeleteIcon onClick={e => cleanCache(search.keyword)}/>}
        />
    );
};

const CleanAction = ({buttonText, buttonClick, dialogTitle, dialogOk, dialogCancel, dialogOpen}) => (
    <div>
        <ClearButton text={buttonText} onClick={buttonClick}/>
        <ConfirmationDialog
            title={dialogTitle}
            cancel={dialogCancel}
            ok={dialogOk}
            open={dialogOpen}
        />
    </div>
);

const ClearButton = ({text, onClick}) => (
    <Button
        className="options-button"
        text={text}
        secondary={true}
        icon={<ClearIcon/>}
        onClick={e => onClick()}
    />
);

const ConfirmationDialog = ({title, ok, cancel, open}) => (
    <Dialog
        title={title}
        actions={[
            <FlatButton label="Ok" primary={true} keyboardFocused={true} onClick={e => ok()}/>,
            <FlatButton label="Cancel" secondary={true} onClick={e => cancel()}/>,
        ]}
        modal={false}
        open={open}
        onRequestClose={e => cancel()}
    />
);

const mapStateToProps = state => ({
    googleLimit: state.admin.limits.google,
    yandexLimit: state.admin.limits.yandex,
    users: state.admin.users,
    searches: state.admin.searches,
    linksRemove: state.admin.links.confirmDeleteLinks,
    linksCount: state.admin.links.count,
    bookmarksRemove: state.admin.bookmarks.confirmDeleteBookmarks,
    bookmarksCount: state.admin.bookmarks.count,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Admin);