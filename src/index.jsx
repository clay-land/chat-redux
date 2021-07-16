// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import channelListReducer from './reducers/channelListReducer';
import currenUsernameReducer from './reducers/currenUsernameReducer';
import messageListReducer from './reducers/messageListReducer';
import selectedChannelReducer from './reducers/selectedChannelReducer';


// State and reducers
const initialState = {
  messageList: [
    {
      "author":"anonymous92",
      "content":"Hello world!",
      "created_at":"2017-09-26T23:03:16.365Z"
    },
    {
      "author":"anonymous77",
      "content":"My name is anonymous77",
      "created_at":"2017-09-26T23:03:21.194Z"
    }
  ],
  channelList: ['general', 'golf', 'habs'],
  selectedChannel: 'general',
  currentUsername: prompt("What is your username?") || `anon${Math.floor(10 + (Math.random() * 90))}`
};
const reducers = combineReducers({
  messageList: messageListReducer,
  channelList: channelListReducer,
  selectedChannel: selectedChannelReducer,
  currentUsername: currenUsernameReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, applyMiddleware(logger, promise))}>
    <App />
  </Provider>,
  document.getElementById('root')
);
