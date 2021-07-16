/* eslint-disable indent */

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const SEND_MESSAGE = 'SEND_MESSAGE';


export const fetchMessages = (channel) => {
    const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
    return fetch(url)
    .then(response => response.json())
    .then((data) => {
        return {
            type: FETCH_MESSAGES,
            payload: data
        };
    });
};

export const sendMessage = (channel, author, content) => {
    const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
    const body = { channel, author, content };
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
