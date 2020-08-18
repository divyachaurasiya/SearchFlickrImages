import axios from 'axios';
import { apiConfig } from './config';

export const fetchImages = (searchString, pageNumber, successHandler, errorHandler) => {
    axios.get(apiConfig.getUrl, {
            params : {
                method : searchString ? apiConfig.getSearchMethod : apiConfig.getRecentMethod,
                api_key : apiConfig.getKey,
                tags : searchString, 
                format : apiConfig.getFormat,
                page : pageNumber,
                per_page : apiConfig.getPerPage,
                nojsoncallback : 1
                
            }   
    }).then((response) => {
            successHandler(response.data.photos, searchString)
    }).catch((err) => {
            errorHandler(err)
    })
}