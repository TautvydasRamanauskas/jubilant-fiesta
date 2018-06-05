import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/admin-links-actions';
import CleanAction from "./CleanAction";

class CleanLinks extends Component {
    render() {
        const {linksRemove, linksCount} = this.props;
        const {openLinksRemove, closeLinksRemove, deleteLinks} = this.props;
        return (
            <CleanAction
                buttonText={`Clean Links [${linksCount}]`}
                buttonClick={openLinksRemove}
                dialogTitle="Do you really wish to delete all your links?"
                dialogOk={deleteLinks}
                dialogCancel={closeLinksRemove}
                dialogOpen={linksRemove}
            />
        );
    }

    componentDidMount() {
        const {fetchLinksCount} = this.props;
        fetchLinksCount();
    }
}

const mapStateToProps = state => ({
    linksRemove: state.admin.links.confirmDeleteLinks,
    linksCount: state.admin.links.count,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CleanLinks);