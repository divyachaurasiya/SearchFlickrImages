import React from 'react'

const Pagination = props => {

  const showNextPage = () => {
    props.setResultsPage(props.page + 1)
    props.searchImages(props.keyToSearch, props.page + 1)
  }

  const showPrevPage = () => {
    props.setResultsPage(props.page - 1)
    props.searchImages(props.keyToSearch, props.page - 1)
  }

  return ( 
    <div className="ui buttons">
        {props.page > 1 ? (
          <button onClick={showPrevPage} className="ui black labeled icon button">
              <i className="left chevron icon"></i>
              {'Prev'}
          </button>
        ) : (
          <span />
        )}
        <button className="ui grey button">
            {props.page}
        </button>
        {props.page < props.totalPage ? (
          <button onClick={showNextPage}  className="ui black right labeled icon button">
            {'Next'}
            <i className="right chevron icon"></i>
          </button>
        ) : (
          <span/>    
       )}
    </div>
  );
}

export default Pagination;