import React from 'react';
import MenuIcon from './img/MenuIcon.jpeg';

class MenuButton extends React.Component{

    render(){

        var buttonStyle={
            margin : 20,
            float : "left",
            width : 70,
            height: 60
        };

        return(
            <div>
                <input name="menuButton" style={buttonStyle} type="image" src={MenuIcon} alt="Menu" onMouseDown={this.props.handleMouseDown}/> 
            </div>
        );
    }
}

class Menu extends React.Component{

    render(){

        var visibility = "hide";

        if(this.props.menuVisibility){
            visibility = "show";
        }

        var buttonStyle = {
            height : 50,
            width : 300,
            backgroundColor : "white",
            border : "5px solid #CBB5A1",
            margin : "20px 0px 20px 50px",
            fontFamily : "American Typewriter, Times New Roman, sans-serif",
            fontSize : 24
        };

        var labelStyle = {
            color : "white",
            fontSize : 32,
            fontFamily : "American TypeWriter, Times New Roman, Helvetica",
            textAlign : "center",
            margin : "20px 0px 20px 50px",
        };

        return(

            <div id="slide" onMouseDown={this.props.handleMouseDown} className={visibility}>
                <label style={labelStyle}>Contents</label>
                <hr style={{height : 0.5, backgroundColor : "white", color : "white"}}/>
                <button style={buttonStyle}>SEM-1</button>
                <button style={buttonStyle}>SEM-2</button>
                <button style={buttonStyle}>SEM-3</button>
                <button style={buttonStyle}>SEM-4</button>
                <button style={buttonStyle}>SEM-5</button>
                <button style={buttonStyle}>SEM-6</button>
                <button style={buttonStyle}>SEM-7</button>
            </div>
        );
    }
}


class NavContainer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            visible : false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(e){
        this.toggleMenu();
        e.stopPropagation();
    }

    toggleMenu(){
        this.setState({
            visible : !this.state.visible
        });
    }

    render(){
        return(
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown}/>
                <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} />
            </div>
        );
    }
}


export default NavContainer;
