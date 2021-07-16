import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { fetchMessages } from '../actions'

export class message_list extends Component {
    componentWillMount() {
        this.props.fetchMessages(this.props.selectedChannel);
    }
    render() {
        return (
            <div>
                {this.props.messageList.map((message) => {
                    return <p>{message.content}</p>
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messageList: state.messageList,
        selectedChannel: state.selectedChannel
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { fetchMessages },
        dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(message_list)
