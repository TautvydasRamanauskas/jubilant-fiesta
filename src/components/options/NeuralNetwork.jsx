import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/neural-network-actions';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import OptionsItem from "./OptionsItem";

const NeuralNetwork = ({neuralNetworkState, changeNeuralNetwork}) => (
    <List>
        <Subheader>Neural Network</Subheader>
        <OptionsItem text="Use Neural Network" secondaryText="Uses Neural Network instead of Text Rules"
                     toggled={neuralNetworkState} onToggle={changeNeuralNetwork}/>
    </List>
);

const mapStateToProps = state => ({
    neuralNetworkState: state.options.neuralNetwork,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NeuralNetwork);