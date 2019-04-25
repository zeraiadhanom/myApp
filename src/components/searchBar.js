import React from 'react';
class SearchBar extends React.Component {
    render() {
        return (
            <div className='searchBar'>
              <input type="text" className="input" placeholder="search item"/>
            </div>
            
        );
    }
}

export default SearchBar;