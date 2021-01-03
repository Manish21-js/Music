import {
  ADD_SONGS,
  ADD_PLAYLIST
  } from '../constants/action-types';

export const addList = payload => ({
  type: ADD_SONGS,
  payload
});
export const addPlayList = payload => ({
  type: ADD_PLAYLIST,
  payload
});