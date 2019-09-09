import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    handleUpdate = (event) => {
        this.setState({
            term: event.target.value
        })
        this.props.searchGif(event.target.value)
    }

    render() {
        return (
            <input 
                type='text' 
                value={this.state.term}
                className='form-control form-search'
                onChange={this.handleUpdate} 
            />
        )
    }
}

export default SearchBar;
