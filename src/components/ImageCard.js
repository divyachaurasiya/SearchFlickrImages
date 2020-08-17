import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {spans:0};
        this.imageRef = React.createRef();
    }
   
    componentDidMount() {
        this.imageRef.current.addEventListener('load' ,this.setSpan);
    }

    setSpan = () => {
            const height = this.imageRef.current.clientHeight;
            const spans = Math.ceil(height/10)+1;
            this.setState({spans});
           
    }

    render() {
        const {id, farm, secret, server, title} = this.props.image;
        return (
        <div style = {{gridRowEnd : `span ${this.state.spans}`}} >
            <img ref={this.imageRef} src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt ={title} />
        </div>
        );
    }

}

export default ImageCard;