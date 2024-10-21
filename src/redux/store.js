import { createStore } from 'redux';
import { deviceReducer } from './reducer.js';

export const store = createStore(deviceReducer);
