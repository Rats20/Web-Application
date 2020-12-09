import React from 'react';
import {Link} from 'react-router-dom';
import LeftArrow from './img/LeftArrow.jpeg';
//import MenuIcon from './img/MenuIcon.jpeg';

var fetch = require('node-fetch');

class NavCourse extends React.Component{

    render(){

        var buttonStyle = {
            height : 80,
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

            <div id="slide" style={{marginTop : 100}}>
                <label style={labelStyle}>Contents</label>
                <hr style={{height : 0.5, width : 500, backgroundColor : "white", color : "white"}}/>
                <div>
                    <Link to={this.props.prevpath}>
                        <input type="image" src={LeftArrow} alt="Previous" style={{height : 50, width : 50, left : 50}}/>
                    </Link>
                </div>
                <Link to={(this.props.path).concat(this.props.path1)}>
                <button style={buttonStyle}>{this.props.course1}</button>
                </Link>
                <Link to={(this.props.path).concat(this.props.path2)}>
                <button style={buttonStyle}>{this.props.course2}</button>
                </Link>
                <Link to={(this.props.path).concat(this.props.path3)}>
                <button style={buttonStyle}>{this.props.course3}</button>
                </Link>
                <Link to={(this.props.path).concat(this.props.path4)}>
                <button style={buttonStyle}>{this.props.course4}</button>
                </Link>
                <Link to={(this.props.path).concat(this.props.path5)}>
                <button style={buttonStyle}>{this.props.course5}</button>
                </Link>
            </div>
        );
        }
}

/*class MenuButton extends React.Component{

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
            height : 100,
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
                <hr style={{height : 0.5, width : 500, backgroundColor : "white", color : "white"}}/>
                <p style={{fontSize : 12, color : "white"}}>Click on the black background to close the menu</p>
                <Link to={(this.props.path).concat(this.props.path1)}>
                <button style={buttonStyle}>{this.props.course1}</button>
                </Link>
                <Link to={(this.props.path).concat(this.props.path2)}>
                <button style={buttonStyle}>{this.props.course2}</button>
                </Link>
                <Link to={(this.props.path).concat(this.props.path3)}>
                <button style={buttonStyle}>{this.props.course3}</button>
                </Link>
                <Link to={(this.props.path).concat(this.props.path4)}>
                <button style={buttonStyle}>{this.props.course4}</button>
                </Link>
                <Link to={(this.props.path).concat(this.props.path5)}>
                <button style={buttonStyle}>{this.props.course5}</button>
                </Link>
            </div>
        );
    }
}


class NavCourse extends React.Component{

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
                <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} 
                    course1={this.props.course1} path1={this.props.path1}
                    course2={this.props.course2} path2={this.props.path2}
                    course3={this.props.course3} path3={this.props.path3}
                    course4={this.props.course4} path4={this.props.path4}
                    course5={this.props.course5} path5={this.props.path5}
                    path={this.props.path}/>
            </div>
        );
    }
}*/


export default NavCourse;
