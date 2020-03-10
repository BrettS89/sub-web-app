import { combineReducers } from 'redux';
import appReducer from './app';
import subscriptionReducer from './subscription';
import userReducer from './user';
import spotsReducer from './spots';

export default combineReducers({
  app: appReducer,
  subscription: subscriptionReducer,
  user: userReducer,
  spots: spotsReducer,
});
