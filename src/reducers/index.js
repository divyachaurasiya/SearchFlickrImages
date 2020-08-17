import { combineReducers } from 'redux';
import imageReducer from './image_reducer';

const rootReducer = combineReducers({
    images : imageReducer
  });
  
  export default rootReducer;