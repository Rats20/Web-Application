import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './Searchbar';
import Categories from './Categories';
import LendForm from './LendForm';
import LendQuote from './img/LendQuote.jpg';

class Heading extends React.Component{
    render(){

        var bgStyle = {
            width : "100%",
            backgroundColor : "#E3E1D9",
            margin : "10px 0px 10px 0px",
            float : "left"
        };

        var letterStyle = {
            fontFamily : "American Typewriter",
            fontSize : 28,
            fontWeight : "normal",
            textAlign : "center"
        };

        return(
            <div style = {bgStyle}>
                <h1 style = {letterStyle}>{this.props.name}</h1>
            </div>
        );
    }
}

class Lend extends React.Component{
    render(){

        var letterStyle = {
            fontFamily : "Arial, Times, Lucida Grande",
            fontSize : 36,
            textAlign : "center",
            color : "#A2A2A2",
            float : "left",
            width : 300
        };

        var centerStyle = {
            width : 400,
            height : 500,
            float : "left",
            display: "block",
            margin : "50px 0px 0px 100px"
        };

        return(
            <div>
                <Heading name = "Lend a Book?"/>
                <img src={LendQuote} alt="Oops!Couldn't load the image" height="530" width="800" style={{margin : 0, float : "left"}}/>
                    <div style={centerStyle}>
                        <p style={letterStyle}>Get in here to share your happiness, I mean BOOKS!</p>
                        <Categories name="Lend!" Width="300px" Height="100px" handleClick={this.props.handleClick}/>
                    </div>
            </div>
        );
    }
}

class CategoryMain extends React.Component{

    constructor(props){
        super(props);

        this.state={
            visible : false
        }
        
    };

    togglePopUp = ()=>{
        this.setState({
            visible : !this.state.visible
        });
    };

    handleClose = (e)=>{

        this.togglePopUp();

        console.log('clicked');
        e.stopPropagation();

    };


    render(){

        var basicStyle = {
            float : "left"
        }

        var letterStyle = {
            fontFamily : "American TypeWriter, Times New Roman, sans-serif",
            fontSize : 40,
            fontWeight : "normal",
            float : "left",
            margin : 30
        };

        var categoryStyle = {
            width : 900,
            margin : "auto"
        };

        return(

            <div style={{float : "left",marginTop : 100}}>
                
                    <Heading name = "Rent a Book?"/>

                <div style={categoryStyle}>

                    <div style = {basicStyle}>
                        <h1 style={letterStyle}>Categories</h1>
                        <SearchBar/>
                    </div>

                    <div style = {basicStyle}>
                        <Link to="/snh">
                            <Categories name = "Science & Humanities" Width="250px" Height="150px"/>
                        </Link>
                        <Link to="/cse">
                            <Categories name = "Computer Science Engineering" Width="250px" Height="150px"/>
                        </Link>
                        <Link to="/ece">
                            <Categories name = "Electronics & Communications Engineering" Width="250px" Height="150px"/>
                        </Link>
                        <Link to="/eee">
                            <Categories name = "Electrical & Electronics Engineering" Width="250px" Height="150px"/>
                        </Link>
                        <Link to="/me">
                            <Categories name = "Mechanical Engineering" Width="250px" Height="150px"/>
                        </Link>
                        <Link to="/civ">
                            <Categories name = "Civil Engineering" Width="250px" Height="150px"/>
                        </Link>
                        <Link to="/bt">
                            <Categories name = "Biotechnology" Width="250px" Height="150px"/>
                        </Link>
                        <Link to="/others">
                            <Categories name = "Other Reference Books" Width="540px" Height="150px"/>
                        </Link>

                    </div>

                </div>

                <Lend handleClick={this.handleClose}/>
                <LendForm handleClick={this.handleClose} popUpVisibility={this.state.visible}/>

            </div>

        );
    }
}

export default CategoryMain;
