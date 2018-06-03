import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/search-actions';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import DisplayIcon from 'material-ui/svg-icons/action/input';
import {teal500 as displayColor} from 'material-ui/styles/colors';

const LinkField = ({link, links, changeLink, user}) => (
    <div>
        <TextField
            className="link-field"
            hintText="Copy your link here"
            value={link}
            onChange={e => changeLink(e.target.value)}
        />
        <IconButton onClick={e => links(link, user)}>
            <DisplayIcon color={displayColor}/>
        </IconButton>
    </div>
);

const mapStateToProps = state => ({
    link: state.search.link,
    user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LinkField);