import React from 'react';
import SearchBar from './Searchbar';
import MenuIcon from './img/MenuIcon.jpeg';

class NavBooks extends React.Component{
    render(){

        var buttonStyle={
            margin : 20,
            float : "left",
            width : 70,
            height: 60
        };

        return(
            <div>
                <input name="navigatn" style={buttonStyle} type="image" src={MenuIcon} alt="Menu"/> 
                <SearchBar/>
            </div>
        );
    }
}

export default NavBooks;