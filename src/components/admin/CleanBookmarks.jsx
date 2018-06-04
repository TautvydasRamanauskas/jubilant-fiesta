import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/admin-actions';
import CleanAction from "./CleanAction";

class CleanBookmarks extends Component {
    render() {
        const {bookmarksRemove, bookmarksCount} = this.props;
        const {openBookmarksRemove, closeBookmarksRemove, deleteBookmarks} = this.props;
        return (
            <CleanAction
                buttonText={`Clean Bookmarks (${bookmarksCount})`}
                buttonClick={openBookmarksRemove}
                dialogTitle="Do you really want to delete all your bookmarks?"
                dialogOk={deleteBookmarks}
                dialogCancel={closeBookmarksRemove}
                dialogOpen={bookmarksRemove}
            />
        );
    }

    componentDidMount() {
        const {fetchBookmarksCount} = this.props;
        fetchBookmarksCount();
    }
}

const mapStateToProps = state => ({
    bookmarksRemove: state.admin.bookmarks.confirmDeleteBookmarks,
    bookmarksCount: state.admin.bookmarks.count,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CleanBookmarks);