/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from '../components/message';
import MessageForm from '../containers/message_form';

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
            <div className="messages-container">
                <div className="channel-title">
                    <h3>{this.props.selectedChannel}</h3>
                </div>
                <div
                  className="messages"
                  ref={(messageListDiv) => { this.messageListDiv = messageListDiv; }}
                >
                    {this.props.messageList.map((message) => {
                        return <Message message={message} key={message.id} />;
                    })}
                </div>
                <MessageForm />
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
