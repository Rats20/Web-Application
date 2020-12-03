import React from 'react';

class Book extends React.Component{
    render(){

        var boxStyle = {
            width : 500,
            height : 250,
            borderRadius : 10,
            border : "5px solid #CBB5A1",
            backgroundColor : "white",
            float : "left",
            margin : 20
        };

        var imgStyle = {
            height : 200,
            width : 150,
            margin : "20px 10px",
            float : "left"
        };

        var letterStyle={
            fontFamily : "Arial, Times, Lucida Grande",
            fontSize : 20,
            margin : 20
        };

        var stockStyle;

        if(this.props.stock === "In stock"){
            stockStyle = {
                fontFamily : "Arial, Times, Lucida Grande",
                fontSize : 20,
                color : "green",
                margin : 20
            };
        }
        else
        {
            stockStyle = {
                fontFamily : "Arial, Times, Lucida Grande",
                fontSize : 20,
                color : "red",
                margin : 20
            };
        }

        return(
            <div style={boxStyle}>
                <img src={this.props.source} alt="Book Image" style={imgStyle}/>
                <p style={letterStyle}>{this.props.tbName}</p>
                <p style={letterStyle}>Book owner : {this.props.owner}</p>
                <p style={letterStyle}>Contact Details : {this.props.phno}</p>
                <p style={stockStyle}>Availability : {this.props.stock}</p>
            </div>
        );
    }
}
 export default Book;
