
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const fetchMessages = (channel) => {
    return fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json())
    .then((data) => {
        return {
            type: FETCH_MESSAGES,
            payload: data
        };
    })
}