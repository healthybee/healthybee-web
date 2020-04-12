import authors from './authorReducer';
import { combineReducers } from 'redux';
import courses from './courseReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  user,
});

export default rootReducer;
