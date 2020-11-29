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

        var letterStyle = {
            fontFamily : "Arial, Times, Lucida Grande",
            fontSize : 20,
            margin : 20
        };

        var buttonStyle = {
            backgroundColor : "#F5E5D6",
            border : "none",
            width : 300,
            height : 50,
            fontFamily : "American Typewriter, Times New Roman, sans-serif",
            fontSize : 24,
            fontWeight : "normal",
            textAlign : "center",
            marginLeft : 10
        };

        return(
            <div style={boxStyle}>
                <img src={this.props.source} alt="Book Image" style={imgStyle}/>
                <p style={letterStyle}>{this.props.tbName}</p>
                <p style={letterStyle}>Book owner : {this.props.owner}</p>
                <button style={buttonStyle}>More Information?</button>
            </div>
        );
    }
}
 export default Book;