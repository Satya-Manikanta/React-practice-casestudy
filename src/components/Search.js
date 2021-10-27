import React, { Component } from 'react';

import '../styles/Search.css';

class Search extends Component {

    state = {
        value: "",
        countryList: require('../data/location.json'),
        filterData: []
    };
    
    handleChange = e => {
        this.setState({
            filterData: this.state.countryList
        });
    };
    
    filterList = e => {
        const updatedList = this.state.countryList.filter(item => {
            return (
                item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1
            );
        });
        this.setState({ filterData: updatedList });
    };

    render() {
        const searchBox = (
            <input className="searchbox-input"
              type="text"
              defaultValue="India"
              onClick={this.handleChange}
              onChange={this.filterList}
            />
          );
          const selectBox = this.state.filterData.map(option => (
            <li key={option.name}>{option.name}</li>
        ));

        return <div className="searchbox">
            {searchBox}
            {selectBox && <ul className="myUL">{selectBox}</ul>}
        </div>;
    }
}
 
export default Search;