/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sendMessage } from '../actions';

export class MessageForm extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.sendMessage(
            this.props.selectedChannel,
            this.props.currentUsername,
            this.state.value
        );
        this.setState({
            value: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Send" />
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedChannel: state.selectedChannel,
        currentUsername: state.currentUsername
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { sendMessage },
        dispatch
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
