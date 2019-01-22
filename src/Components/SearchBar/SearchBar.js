import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    state = { term: ''};

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render () {
        return (
            <div className={ 'search-bar ui segment' }>
            <form className={ 'ui form' } onSubmit={this.onFormSubmit}>
                <div className='search'>
                <input
                    className='input'
                    type='text'
                    value={this.state.term}
                    placeholder={'Enter your search term...'}
                    onChange={(e) => this.setState({term: e.target.value})}/>
                <button className={ 'ui button button1' }>Search</button>
                </div>
            </form>
                </div>
        );
    }
}

export default SearchBar;
