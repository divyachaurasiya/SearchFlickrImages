import React from 'react';
import { connect } from 'react-redux';
import { fetchImageSuccess, fetchImageFail, setResultsPage } from '../actions';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import { fetchImages } from '../api/flickr';

class App extends React.Component {

    setResultsPage = pageNumber => {
        this.props.setResultsPage(pageNumber)
    }

    searchImages = (searchstring, pageNumber) => {
        this.props.setResultsPage(pageNumber);
        fetchImages(searchstring, pageNumber, this.props.fetchImageSuccess, this.props.fetchImageFail);
    }

    render() {

        return (
            <div className="ui container" style={{marginTop:'15px', marginBottom: '15px'}}>
            <SearchBar page={this.setResultsPage} searchImages={this.searchImages} />
            <ImageList imagesData={this.props.data} searchImages={this.searchImages} setResultsPage={this.props.setResultsPage} />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return { data : state.images}

}

export default connect(mapStateToProps, { fetchImageSuccess, fetchImageFail, setResultsPage })(App);