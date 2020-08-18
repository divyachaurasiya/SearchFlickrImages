## SearchFlickrImages

### App description
This React App uses Flickr API to display and search images with pagination. It displays public feed images in grid view. Users are also able to search for a keyword in search box and it returns the images with searched keyword tags. 

### Pagination
The App contains pagination which allows users to display images in multiple pages. App provide ability for users to go next or previous page to look for various images. One page contains list 50 images and on click on next/previous, API is called with relevant page number.

### Stack information

Front end - HTML5, CSS3, ES6, Semantic UI, React, Redux, axios etc

API - Flickr public APIs:
1) To fetch recent images : https://www.flickr.com/services/rest/?method=flickr.photos.getRecent
2) To search in those images : https://www.flickr.com/services/rest/?method=flickr.photos.search

### To run code locally
open terminal window and install all client dependencies: Navigate to the application root directory and run:

shell
npm install
After all installations are finished, run client with command:

shell
npm start
Then open your app on http://localhost:3000

#### Attaching screenshot for your references