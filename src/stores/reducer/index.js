import {combineReducers} from 'redux';
import movie from './movie';
import user from './user';

export default combineReducers({
  movie,
  user,
});
