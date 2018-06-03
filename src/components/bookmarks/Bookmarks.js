import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../../App.css';
import * as actions from '../../actions/search-actions';
import Results from "../../components/results/Results";

class Bookmarks extends Component {
    render() {
        return (
            <div className="page">
                <Results linkEnable={true}/>
            </div>
        );
    }

    componentDidMount() {
        const {user, bookmarks} = this.props;
        bookmarks(user.id);
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks);