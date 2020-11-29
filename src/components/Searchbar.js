import React from 'react';
import SearchIcon from './img/SearchIcon.jpeg';

class SearchBar extends React.Component{
    render(){

        var boxStyle = {
            border : "5px solid #CBB5A1",
            width : 500,
            height : 41,
            float : "left",
            color : "#A2A2A2",
            fontSize : 20,
            padding : 5
        };

        var imgStyle = {
            height : 60,
            width : 70,
            float : "left"
        };

        var basicStyle={
            float : "right",
            margin : 20
        }

        return(
            <div style={basicStyle}>
                <input type="text" id="search" style={boxStyle} placeholder="Search here..." />
                <img src={SearchIcon} style={imgStyle} alt="Oops!Couldn't load the image"/>
            </div>
        );
    }
}

export default SearchBar;