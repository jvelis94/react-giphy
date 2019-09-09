import React, {Component} from 'react';

class Gif extends Component {
    handleClick = () => {
        this.props.handleGifClick(this.props.id);
    }

    render() {
        const src = `https://media3.giphy.com/media/${this.props.id}/200.gif`;
        return (
            <img src={src} alt='' className='gif' onClick = {this.handleClick} />
        )
    }
}

export default Gif;