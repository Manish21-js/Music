import {
  createStore
} from "redux";
import {
  ADD_SONGS,
  ADD_PLAYLIST
} from './../constants/action-types';

const initialState = {
  songs: [],
  playList: [],
  playListToEdit: {}
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONGS:
      return {
        ...state,
        songs: action.payload.songs
      };
      case ADD_PLAYLIST:
      return {
        ...state,
        playList: action.payload.playList
      };
      default:
        return state;
  };
}
const store = createStore(rootReducer);
export default store;