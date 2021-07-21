/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { connect } from 'react-redux';

class ChannelList extends React.Component {
    render() {
        return (
            <div>
                {this.props.channelList.map((channel) => {
                    return (
                        <li
                          className={channel === this.props.selectedChannel ? "active-channel" : ""}
                          key={channel}
                        >
                            {channel}
                        </li>
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

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
