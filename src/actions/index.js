import { 
    SEARCH_IMAGE_SUCCESS,
    SEARCH_IMAGE_FAIL,
    SET_RESULTS_PAGE,
   } from './action_types';

export const fetchImageSuccess = (images, keyToSearch) => {
    return {
        type: SEARCH_IMAGE_SUCCESS,
        images: images.photo,
        totalPage: images.pages,
        keyToSearch: keyToSearch
    }
}

export const fetchImageFail = (error) => {
    return {
        type: SEARCH_IMAGE_FAIL,
        error: error
    }
}

export const setResultsPage = (pageNumber) => {
    return {
        type: SET_RESULTS_PAGE,
        resultsPage: pageNumber
    }
}