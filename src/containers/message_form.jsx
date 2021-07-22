/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { sendMessage } from '../actions';

export class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    componentDidMount = () => {
        this.messageInput.focus();
    }

    componentDidUpdate = () => {
        this.messageInput.focus();
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
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  ref={(input) => { this.messageInput = input; }}
                />
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
