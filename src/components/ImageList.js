import './ImageList.css'
import React from 'react'
import Pagination from './Pagination'
import ImageCard from './ImageCard'

const ImageList = (props) =>  {

    const propsImg = props.imagesData;

    const renderImages = propsImg.images.map((image) => {      
        return <ImageCard key={image.id} image={image} />;
    });
    
    if (propsImg.fetched) {
        if (propsImg.images.length > 0) {
            return (
                <div className="item">
                    <div className="image-list">
                    {renderImages}
                    </div>      
                    <div className="ui center aligned container" >    
                        <Pagination
                            totalPage={propsImg.totalPage}
                            page={propsImg.resultsPage}
                            keyToSearch={propsImg.imageToSearch}
                            searchImages={props.searchImages}
                            setResultsPage={props.setResultsPage}
                        />
                    </div>
                </div>
            );
        }
        return <h2>No result found!</h2>;
    }
    else {
        return null;
    }

};

export default ImageList;