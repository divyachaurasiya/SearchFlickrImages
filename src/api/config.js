export const apiConfig = {
    getUrl : 'https://www.flickr.com/services/rest/',
    getKey : process.env.REACT_APP_FLICKR_API_KEY,
    getRecentMethod : 'flickr.photos.getRecent',
    getSearchMethod : 'flickr.photos.search',
    getFormat : 'json',
    getPerPage : 50
}