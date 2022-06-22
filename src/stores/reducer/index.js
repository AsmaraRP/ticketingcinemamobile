import {combineReducers} from 'redux';
import movie from './movie';
import user from './user';
import ticket from './ticket';

export default combineReducers({
  movie,
  user,
  ticket,
});
