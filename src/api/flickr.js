import axios from 'axios';
import { apiConfig } from './key';

export const fetchImages = (searchString, pageNumber, successHandler, errorHandler) => {
    axios.get(apiConfig.getUrl, {
            params : {
                method : 'flickr.photos.search',
                api_key : apiConfig.getKey,
                tags : searchString, 
                format : 'json',
                page : pageNumber,
                per_page : 50,
                nojsoncallback : 1
                
            }   
    }).then((response) => {
            successHandler(response.data.photos, searchString)
    }).catch((err) => {
            errorHandler(err)
    })
}