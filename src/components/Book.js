import React from 'react';

class Book extends React.Component{
    render(){

        var boxStyle = {
            width : 350,
            height : 220,
            borderRadius : 10,
            border : "5px solid #CBB5A1",
            backgroundColor : "white",
            float : "right",
            margin : 20
        };

        /*var imgStyle = {
            height : 160,
            width : 120,
            margin : "20px 10px",
            float : "left"
        };*/

        var letterStyle={
            fontFamily : "Arial, Times, Lucida Grande",
            fontSize : 16,
            margin : 20
        };

        var stockStyle;

        if(this.props.stock === "In_stock" || this.props.stock === "In-stock" || this.props.stock === "In-Stock"){
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
                {/*<img src={this.props.source} alt="Book" style={imgStyle}/>*/}
                <p style={letterStyle}>{this.props.tbName}</p>
                <p style={letterStyle}>Book owner : {this.props.owner}</p>
                <p style={letterStyle}>Contact Details : {this.props.phno}</p>
                <p style={stockStyle}>Availability : {this.props.stock}</p>
            </div>
        );
    }
}
 export default Book;
