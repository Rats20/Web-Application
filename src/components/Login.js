import React from 'react';
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import bgImage from './img/bgImage.jpg';

class Login extends React.Component{
    render(){

        var loginBoxStyle = {
            backgroundColor : "#E3E1D9",
            height : 470,
            width : 300,
            borderRadius : 10,
            padding : 20,
            position : "absolute",
            top : 150,
            left : 50
        };

        var textBoxStyle = {
            fontFamily : "Times New Roman, sans-serif",
            fontSize : 16,
            border : "none",
            padding : 5,
            margin : "10px 0px 30px 15px",
            height : 40,
            width : 250
        };

        var textStyle = {
            fontFamily : "American Typewriter, Times New Roman",
            fontSize : 24,
            padding : 10,
            marginLeft : 15
        };

        var loginButtonStyle = {
            fontFamily : "American Typewriter, Times New Roman",
            fontSize : 28,
            backgroundColor : "#CBB5A1",
            padding : 10,
            margin : "10px 0px 10px 15px",
            borderRadius : 10,
            border : "none",
            width : 250,
            height : 50
        };

        var forgotPasswordStyle = {
            fontFamily : "Times New Roman, sans-serif",
            fontSize : 16,
            backgroundColor : "#E3E1D9", 
            marginTop : 20,
            border : "none",
            float : "right"
        };

        var rememberStyle = {
            fontFamily : "Times New Roman, sans-serif",
            fontSize : 18,
            marginTop : 20,
            float : "left"
        };

        var bgImgStyle = {
            width : "auto",
            maxHeight : 826,
            overflow : "hidden"
        };

        var mainHeadingStyle = {
            fontFamily  : "Luminari, American Typewriter, Times New Roman",
            fontWeight : "normal",
            fontSize : 70,
            position : "absolute",
            top : "35%",
            left : "50%"
        };


        return(

            <div>

                <div style = {loginBoxStyle}>

                <form>

                    <label style = {textStyle}>
                        Name
                        <input type = "text" style = {textBoxStyle} placeholder="Type here..."/>
                    </label>

                    <label style = {textStyle}>
                        ID Number
                        <input type = "text" style = {textBoxStyle} placeholder="Type here..."/>
                    </label>

                    <label style = {textStyle}>
                        Password
                        <input type = "password" style = {textBoxStyle} placeholder="Type here..."/>
                    </label>

                    <Router>
                        <NavLink to="/categorymain">
                            <button style = {loginButtonStyle}>
                                Login
                            </button>
                        </NavLink>
                    </Router>

                    {/* Optional component in login page*/}
                    <button style = {forgotPasswordStyle}>
                        Forgot my Password?
                    </button>
                    
                    <label style = {rememberStyle}>
                    <input type = "checkbox" name = "Remember me" style = {{backgrounColor : "black"}}/>
                        Remember me
                    </label>

                </form>

                </div>

                <div style = {bgImgStyle}>
                    <img src = {bgImage} alt = "Loading Image" />
                </div>

                <h1 style = {mainHeadingStyle}>
                    <p>Lend &<br/>Borrow</p>
                </h1>

            </div>

        );

    }
}

export default Login;