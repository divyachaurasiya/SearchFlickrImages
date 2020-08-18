import React from 'react';
import { connect } from 'react-redux';
import { fetchImageSuccess, fetchImageFail, setResultsPage } from '../actions';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import { fetchImages } from '../api/flickr';
import './ImageList.css';

class App extends React.Component {

    componentDidMount() {
        this.searchImages(null,1);
    }

    setResultsPage = pageNumber => {
        this.props.setResultsPage(pageNumber)
    }

    searchImages = (searchstring, pageNumber) => {
        this.props.setResultsPage(pageNumber);
        fetchImages(searchstring, pageNumber, this.props.fetchImageSuccess, this.props.fetchImageFail);
    }

    render() {

        return (
            <div className="ui container main">
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