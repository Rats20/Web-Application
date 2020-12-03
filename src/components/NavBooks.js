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

    handleClick = (e)=>{
        
    }

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
                <hr style={{height : 0.5, width : 500, backgroundColor : "white", color : "white"}}/>
                <p style={{fontSize : 12, color : "white"}}>Click on the black background to close the menu</p>
                <button disabled={this.props.disabled1} style={buttonStyle}>SEM-1</button>
                <button disabled={this.props.disabled2} style={buttonStyle}>SEM-2</button>
                <button disabled={this.props.disabled3} style={buttonStyle}>SEM-3</button>
                <button disabled={this.props.disabled4} style={buttonStyle}>SEM-4</button>
                <button disabled={this.props.disabled5} style={buttonStyle}>SEM-5</button>
                <button disabled={this.props.disabled6} style={buttonStyle}>SEM-6</button>
                <button disabled={this.props.disabled} style={buttonStyle}>Others</button>
            </div>
        );
    }
}


class NavContainer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            visible : false,
            disabled1 : false,
            disabled2 : false,
            disabled3 : false,
            disabled4 : false,
            disabled5 : false,
            disabled6 : false,
            disabled : false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(e){
        this.toggleMenu();

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

    componentDidMount(){
        console.log('Component has mounted');
    }

    render(){
        return(
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown}/>
                <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} 
                    disabled={this.state.disabled} 
                    disabled1={this.state.disabled1} 
                    disabled2={this.state.disabled2} 
                    disabled3={this.state.disabled3} 
                    disabled4={this.state.disabled4}
                    disabled5={this.state.disabled5}
                    disabled6={this.state.disabled6}/>
            </div>
        );
    }
}


export default NavContainer;
