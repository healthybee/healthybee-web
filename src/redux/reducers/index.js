import authors from './authorReducer';
import { combineReducers } from 'redux';
import courses from './courseReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './userReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  courses,
  authors,
  user,
});

export default persistReducer(persistConfig, rootReducer);
