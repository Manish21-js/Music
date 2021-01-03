import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider,connect} from 'react-redux';
import store from './store/';
import {addList, addPlayList} from "./store/actions/";

const mapDispatchToProps=dispatch=> {
  return {
    addList: article => dispatch(addList(article)),
    addPlayList:article => dispatch(addPlayList(article))
  };
};
const mapindexStateToProps = state => {
  return {
    songs:state.songs,
    playList:state.playList
  }
};
const Appfinal = connect(mapindexStateToProps, mapDispatchToProps)(App);
render(
  <Provider store={store}>
    <Appfinal/>
  </Provider>,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
