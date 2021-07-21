/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from '../components/message';
import { fetchMessages } from '../actions';

export class MessageList extends Component {
    componentWillMount() {
        this.getMessages();
    }

    componentDidMount() {
        // this.interval = setInterval(this.getMessages, 5000);
    }

    componentDidUpdate() {
        this.messageListDiv.scrollTop = this.messageListDiv.scrollHeight;
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getMessages() {
        this.props.fetchMessages(this.props.selectedChannel);
    }

    render() {
        return (
            <div ref={(messageListDiv) => { this.messageListDiv = messageListDiv; }}>
                {this.props.messageList.map((message) => {
                    return <Message message={message} key={message.id} />;
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messageList: state.messageList,
        selectedChannel: state.selectedChannel
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { fetchMessages },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
