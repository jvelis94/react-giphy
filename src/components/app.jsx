import React, {Component} from 'react';
import SearchBar from './searchBar.jsx';
import Gif from './gif.jsx';
import GifList from './gifList.jsx';
import giphy from 'giphy-api'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: [],
            selectedGifID: 'xT9IgDEI1iZyb2wqo8'
        }

    }

    searchGif = (query) => {
        //API CALL
        giphy('34wxCno53FafmopUvisQk5HPcry5FBlM').search({
            q: query,
            rating: 'g',
            limit: 10
        }, (error, result) => {
            this.setState({
                gifs: result.data
            })
        });
    }

    handleGifClick = (id) => {
        this.setState({
            selectedGifID: id
        });
    }

    render() {
        return (
            <div>
                <div className='left-scene'>
                    <SearchBar searchGif = {this.searchGif} />
                    <div className='selected-gif'>
                        <Gif 
                            id = {this.state.selectedGifID} 
                            handleGifClick = {this.handleGifClick} 
                        />
                    </div>
                </div>
                <div className='right-scene '>
                    <GifList 
                        gifs={this.state.gifs}
                        handleGifClick = {this.handleGifClick}
                    />
                </div>
            </div>
        )
    }
}

export default App