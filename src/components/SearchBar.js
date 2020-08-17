import React from 'react';

class SearchBar extends React.Component {

    onFormSubmit = (event) => {
        event.preventDefault();
       this.props.searchImages(this.input.value, 1);
    }

    render() {
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form" >
            <h3>Search image</h3>
                <div className="ui grid">   
                    <div className="fourteen wide column">
                        <input 
                            type="text" 
                            name="image-search"
                            ref={input => {
                                this.input = input
                            }}
                            required 
                        />
                    </div>
                    <div className="two wide column">
                        <button className="ui orange button">
                            {'Search'}
                        </button>
                    </div> 
                </div>
                
            </form>
        </div>
        );
    }
}

export default SearchBar;