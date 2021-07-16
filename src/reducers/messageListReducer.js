/* eslint-disable indent */
import { FETCH_MESSAGES, SEND_MESSAGE } from '../actions';

export default function(state = null, action) {
    switch (action.type) {
      case FETCH_MESSAGES:
        return action.payload.messages;
      case SEND_MESSAGE: {
        const newMessages = state.slice(0);
        newMessages.push(action.payload);
        return newMessages;
      }
      default:
        return state;
    }
  }
