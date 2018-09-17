import { combineReducers } from 'redux';
import genres from './genres';
import search from './search';
import detail from './detail';

const rootReducer = combineReducers({ genres, search, detail });

export default rootReducer;
