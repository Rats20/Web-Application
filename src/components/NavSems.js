import React from 'react';
import {Link} from 'react-router-dom';
import LeftArrow from './img/LeftArrow.jpeg';
//import MenuIcon from './img/MenuIcon.jpeg';

var fetch = require('node-fetch');

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
}*/

class NavSems extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            disabled1 : false,
            disabled2 : false,
            disabled3 : false,
            disabled4 : false,
            disabled5 : false,
            disabled6 : false,
            disabled : false
        };


        //this.handleMouseDown = this.handleMouseDown.bind(this);
        //this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentDidMount(){
       // this.toggleMenu();
       // console.log(this.state.visible);

        /*if(!this.state.visible){
            this.setState({
                visible : true
            });
        }
        else if(this.state.visible){
            this.setState({
                visible : false
            });
        }*/

        if((this.props.name) === "snh")
        {
            this.setState({
                disabled : true,
                disabled3 : true,
                disabled4 : true,
                disabled5 : true,
                disabled6 : true
            });
        }
        else if((this.props.name) === 'others')
        {
            this.setState({
                disabled1 : true,
                disabled2  : true,
                disabled3 : true,
                disabled4 : true,
                disabled5 : true,
                disabled6 : true
            });
        }
        else
        {
            this.setState({
                disabled : true,
                disabled1 : true,
                disabled2 : true
            });
        }

        //e.stopPropagation();
    }


    render(){

        /*var visibility = "hide";

        if(this.props.menuVisibility){
            visibility = "show";
        }*/

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

            <div id="slide" onMouseDown={this.handleMouseDown} style={{marginTop : 100}}>
                <label style={labelStyle}>Contents</label>
                <hr style={{height : 0.5, width : 500, backgroundColor : "white", color : "white"}}/>
                <div>
                    <Link to="/categorymain">
                        <input type="image" src={LeftArrow} alt="Previous" style={{height : 50, width : 50, left : 50}}/>
                    </Link>
                </div>
                {/*<p style={{fontSize : 12, color : "white"}}>Click on the black background to close the menu</p>*/}
                <Link to={(this.props.path).concat('/phy')}>
                <button disabled={this.state.disabled1} style={buttonStyle}>Physics Cycle</button>
                </Link>
                <Link to={(this.props.path).concat('/chem')}>
                <button disabled={this.state.disabled2} style={buttonStyle}>Chemistry Cycle</button>
                </Link>
                <Link to={(this.props.path).concat('/sem3')}>
                <button disabled={this.state.disabled3} style={buttonStyle}>SEM-3</button>
                </Link>
                <Link to={(this.props.path).concat('/sem4')}>
                <button disabled={this.state.disabled4} style={buttonStyle}>SEM-4</button>
                </Link>
                <Link to={(this.props.path).concat('/sem5')}>
                <button disabled={this.state.disabled5} style={buttonStyle}>SEM-5</button>
                </Link>
                <Link to={(this.props.path).concat('/sem6')}>
                <button disabled={this.state.disabled6} style={buttonStyle}>SEM-6</button>
                </Link>
                <Link to='\others'>
                <button disabled={this.state.disabled} style={buttonStyle}>Others</button>
                </Link>
            </div>
        );
    }
}

/*className={visibility}*/

/*class NavContainer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            disabled1 : false,
            disabled2 : false,
            disabled3 : false,
            disabled4 : false,
            disabled5 : false,
            disabled6 : false,
            disabled : false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        //this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(e){
       // this.toggleMenu();
       // console.log(this.state.visible);

        if(!this.state.visible){
            this.setState({
                visible : true
            });
        }
        else if(this.state.visible){
            this.setState({
                visible : false
            });
        }

        if((this.props.name) === "snh")
        {
            this.setState({
                disabled : true,
                disabled3 : true,
                disabled4 : true,
                disabled5 : true,
                disabled6 : true
            });
        }
        else if((this.props.name) === 'others')
        {
            this.setState({
                disabled1 : true,
                disabled2  : true,
                disabled3 : true,
                disabled4 : true,
                disabled5 : true,
                disabled6 : true
            });
        }
        else
        {
            this.setState({
                disabled : true,
                disabled1 : true,
                disabled2 : true
            });
        }

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
                <Menu handleMouseDown={this.handleMouseDown} 
                    disabled={this.state.disabled} 
                    disabled1={this.state.disabled1} 
                    disabled2={this.state.disabled2} 
                    disabled3={this.state.disabled3} 
                    disabled4={this.state.disabled4}
                    disabled5={this.state.disabled5}
                    disabled6={this.state.disabled6}
                    path={this.props.path}/>
            </div>
        );
    }
}*/

/*<MenuButton handleMouseDown={this.handleMouseDown}/>

menuVisibility={this.state.visible}*/


export default NavSems;
