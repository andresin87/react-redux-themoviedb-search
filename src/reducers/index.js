import { combineReducers } from 'redux';
import genres from './genres';
import search from './search';
import detail from './detail';

const rootReducer = combineReducers({ genres, search, detail });

export default rootReducer;

export const selectorDetail = state => state.detail;
export const selectorGenres = state => state.genres;
export const selectorSearch = state => state.search;
