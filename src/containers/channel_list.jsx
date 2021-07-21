/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeChannel, fetchMessages } from '../actions';

class ChannelList extends React.Component {
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.selectedChannel !== this.props.selectedChannel) {
            this.props.fetchMessages(nextProps.selectedChannel);
        }
    }
    handleClick = (channel) => {
        this.props.changeChannel(channel);
    }
    render() {
        return (
            <div>
                {this.props.channelList.map((channel) => {
                    return (
                        <a
                          className={channel === this.props.selectedChannel ? "active-channel" : ""}
                          key={channel}
                          onClick={() => this.handleClick(channel)}
                        >
                            {channel}
                        </a>
                    );
                }) }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        channelList: state.channelList,
        selectedChannel: state.selectedChannel
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { changeChannel, fetchMessages },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
