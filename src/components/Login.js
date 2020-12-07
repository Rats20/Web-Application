import React from 'react';
//import {useHistory} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import bgImage from './img/bgImage.jpg';

class Login extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            valid : 'Invalid',
            redirect : false
        };
    }

    handleSubmit = (e)=>{
        console.log('Handling Submit...');

        //const history = useHistory();

        var loginInfo = {
            name : this._name.value,
            id : this._id.value,
            password : this._password.value
        };

        console.log('Name : '+loginInfo.name);
        //console.log('Type of : '+typeof(loginInfo.name))
        console.log('Username : '+loginInfo.id);
        console.log('Password : '+loginInfo.password);
        //console.log('Object : '+JSON.stringify(loginInfo));

        fetch('http://localhost:8080/',{
            method : 'POST',
            headers : {'content-type':'application/json'},
            //Posting the data via the body
            body : JSON.stringify({"name": loginInfo.name, "id" : loginInfo.id, "password" : loginInfo.password})
        }).then((res)=>res.text()).then((res)=>{
            this.setState({
                valid : res
            });
            console.log('Login : '+this.state.valid)
            if(this.state.valid === 'Valid')
            {
                this.setState({
                    redirect : true
                });
                //history.push('/categorymain');
            }
            else{
                alert('Invalid credentials');
            }
        });
        e.preventDefault();
        e.stopPropagation();
    };

    /*componentDidUpdate(){
        console.log('Component has mounted');
        fetch('http://localhost:8080/data',{
            method : 'POST',
            headers : {'content-type' : 'applications/json'},
            //Posting the data via the body
            body : JSON.stringify({'works': this.state.works})
        }).then((res)=>res.text()).then((res)=>{
            console.log(res);
        });
    }*/

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

        const redirect = this.state.redirect;
        //const valid = this.state.valid;
        if(redirect){
            return <Redirect to='/categorymain'/>
        }

        return(

            <div>

                <div style = {loginBoxStyle}>

                <form onSubmit={this.handleSubmit}>

                    <label style = {textStyle}>
                        Name
                        <input type = "text" required ref={(ele)=>this._name=ele} style = {textBoxStyle} placeholder="Type here..."/>
                    </label>

                    <label style = {textStyle}>
                        ID Number
                        <input type = "text" required ref={(ele)=>this._id=ele} style = {textBoxStyle} placeholder="Type here..."/>
                    </label>

                    <label style = {textStyle}>
                        Password
                        <input type = "password" required ref={(ele)=>this._password=ele} style = {textBoxStyle} placeholder="Type here..."/>
                    </label>
                        
                    
                    {/*<Link to={this.state.path}>*/}
                        <button type="submit" style={loginButtonStyle}>
                            Login
                        </button>
                    {/*</Link>*/}        

                </form>

                </div>

                <div style = {bgImgStyle}>
                    <img src = {bgImage} alt = "Loading..." />
                </div>

                <h1 style = {mainHeadingStyle}>
                    <p>Lend &<br/>Borrow</p>
                </h1>

            </div>

        );

    }
}

export default Login;
