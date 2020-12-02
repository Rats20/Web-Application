import React from 'react';

class Categories extends React.Component{
    render(){

        var boxStyle = {
            width : this.props.Width,
            height : this.props.Height,
            borderRadius : 10,
            border : "5px solid #CBB5A1",
            backgroundColor : "white",
            float : "left",
            margin : 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        };

        var letterStyle = {
            fontFamily : "American Typewriter, Times New Roman, sans-serif",
            fontSize : 28,
            fontWeight : "normal",
            textAlign : "center"
        };

        return(
            <button style = {boxStyle} onMouseDown={this.props.handleClick}>
                <h1 style = {letterStyle}>{this.props.name}</h1>
            </button>
        );
    }
}

export default Categories;
