import {
    SEARCH_IMAGE_SUCCESS,
    SEARCH_IMAGE_FAIL,
    SET_RESULTS_PAGE,
   } from '../actions/action_types';

const imageReducer = function (state = {images: [], resultsPage: 1, totalPage: 1, fetched: false}, action)
{
    switch (action.type) {
        case SEARCH_IMAGE_SUCCESS : 
            return {
                ...state, 
                images: action.images, 
                totalPage: action.totalPage,
                imageToSearch: action.keyToSearch, 
                fetched: true
            }
        case SEARCH_IMAGE_FAIL : 
            return {
                ...state,
                images: {},
                fetched: true
            }
        case SET_RESULTS_PAGE :
            return {
                ...state,
                resultsPage: action.resultsPage 
            }
        default : 
            return {...state}
        
    }
}

export default imageReducer;