/* eslint-disable indent */

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CHANGE_CHANNEL = 'CHANGE_CHANNEL';


export const fetchMessages = (channel) => {
    const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
    const promise = fetch(url)
    .then(response => response.json());
    return {
        type: FETCH_MESSAGES,
        payload: promise
    };
};

export const sendMessage = (channel, author, content) => {
    const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
    const body = { author, content };
    const promise = fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(r => r.json());
    return {
        type: SEND_MESSAGE,
        payload: promise
    };
};

export const changeChannel = (channel) => {
    return {
        type: CHANGE_CHANNEL,
        payload: channel
    };
};
