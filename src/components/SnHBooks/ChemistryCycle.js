import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from '../Searchbar';
import NavCourse from '../NavCourses';
import Book from '../Book';
import LeftArrow from import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from '../Searchbar';
import NavCourse from '../NavCourses';
import Book from '../Book';
import LeftArrow from '../img/LeftArrow.jpeg';
import Book1 from '../img/Book1.png';
import Book2 from '../img/Book2.jpeg';
//import Book3 from '../img/Book3.png';
//import Book4 from '../img/Book4.jpeg';
//import Book5 from '../img/Book5.jpeg';

class ChemistryCycle extends React.Component{

    constructor(props){
        super(props);

        this.state={
            tbTitle : [],
            ownerName : [],
            availabilty : [],
            contactNo : []
        };
    }

    componentDidMount(){
        console.log('Component has mounted');

        fetch('http://localhost:8080/snh/chem',{
            method : 'GET',
            headers : {'Accept' : 'applications/json'}
        }).then((res)=>res.json()).then((res)=>{
            console.log(res[0].Availability);
            console.log(res.length);

            for(let i=0; i<res.length; i++){
                this.setState({
                    tbTitle : this.state.tbTitle.concat(res[i].Textbook_name),
                    ownerName : this.state.ownerName.concat(res[i].Owner_name),
                    availabilty : this.state.availabilty.concat(res[i].Availability),
                    contactNo : this.state.contactNo.concat(res[i].Contact_no)
                });
            }

        });
    }

    render(){

        var centerStyle = {
            width : 1100,
            margin : "auto"
        };

        return(
            <div style={centerStyle}>
                <div style={{float : "left", marginTop : 120, width:1100}}>
                        <SearchBar/>
                        <NavCourse path="/snh/chem/" prevpath="/snh"
                            course1="Engineering Chemistry" path1="ec"
                            course2="Problem Solving with C" path2="C"
                            course3="Foundation in electronics" path3="ece"
                            course4="Mechanics" path4="me"
                            course5="Engineering Mathematics-2" path5="math2"/>
                </div>

                <div>
                    <Link to='/snh'>
                        <input type="image" src={LeftArrow} alt="Previous" style={{position : "fixed", top : "50%", left : 50}}/>
                    </Link>
                </div>

                <div style={{float : "left"}}>
                    <Book source={Book1} owner={this.state.ownerName[0]} tbName={this.state.tbTitle[0]} phno={this.state.contactNo[0]} stock={this.state.availabilty[0]}/>
                    <Book source={Book2} owner={this.state.ownerName[1]} tbName={this.state.tbTitle[1]} phno={this.state.contactNo[1]} stock={this.state.availabilty[1]}/>
                    <Book source={Book1} owner={this.state.ownerName[2]} tbName={this.state.tbTitle[2]} phno={this.state.contactNo[2]} stock={this.state.availabilty[2]}/>
                    <Book source={Book2} owner={this.state.ownerName[3]} tbName={this.state.tbTitle[3]} phno={this.state.contactNo[3]} stock={this.state.availabilty[3]}/>
                    <Book source={Book1} owner={this.state.ownerName[4]} tbName={this.state.tbTitle[4]} phno={this.state.contactNo[4]} stock={this.state.availabilty[4]}/>
                    <Book source={Book2} owner={this.state.ownerName[5]} tbName={this.state.tbTitle[5]} phno={this.state.contactNo[5]} stock={this.state.availabilty[5]}/>
                    <Book source={Book1} owner={this.state.ownerName[6]} tbName={this.state.tbTitle[6]} phno={this.state.contactNo[6]} stock={this.state.availabilty[6]}/>
                    <Book source={Book2} owner={this.state.ownerName[7]} tbName={this.state.tbTitle[7]} phno={this.state.contactNo[7]} stock={this.state.availabilty[7]}/>
                    <Book source={Book1} owner={this.state.ownerName[8]} tbName={this.state.tbTitle[8]} phno={this.state.contactNo[8]} stock={this.state.availabilty[8]}/>
                    <Book source={Book2} owner={this.state.ownerName[9]} tbName={this.state.tbTitle[9]} phno={this.state.contactNo[9]} stock={this.state.availabilty[9]}/>
                    <Book source={Book1} owner={this.state.ownerName[10]} tbName={this.state.tbTitle[10]} phno={this.state.contactNo[10]} stock={this.state.availabilty[10]}/>
                    <Book source={Book2} owner={this.state.ownerName[11]} tbName={this.state.tbTitle[11]} phno={this.state.contactNo[11]} stock={this.state.availabilty[11]}/>
                </div>

            </div>
                    );
                }
            }

export default ChemistryCycle;img/LeftArrow.jpeg';
import Book1 from '../img/Book1.png';
import Book2 from '../img/Book2.jpeg';
//import Book3 from '../img/Book3.png';
//import Book4 from '../img/Book4.jpeg';
//import Book5 from '../img/Book5.jpeg';

class ChemistryCycle extends React.Component{

    constructor(props){
        super(props);

        this.state={
            tbTitle : [],
            ownerName : [],
            availabilty : [],
            contactNo : []
        };
    }

    componentDidMount(){
        console.log('Component has mounted');

        fetch('http://localhost:8080/snh/chem',{
            method : 'GET',
            headers : {'Accept' : 'applications/json'}
        }).then((res)=>res.json()).then((res)=>{
            console.log(res[0].Availability);
            console.log(res.length);

            for(let i=0; i<res.length; i++){
                this.setState({
                    tbTitle : this.state.tbTitle.concat(res[i].Textbook_name),
                    ownerName : this.state.ownerName.concat(res[i].Owner_name),
                    availabilty : this.state.availabilty.concat(res[i].Availability),
                    contactNo : this.state.contactNo.concat(res[i].Contact_no)
                });
            }

        });
    }

    render(){

        var centerStyle = {
            width : 1100,
            margin : "auto"
        };

        return(
            <div style={centerStyle}>
                <div style={{float : "left", marginTop : 120, width:1100}}>
                        <SearchBar/>
                        <NavCourse path="/snh/chem/" course1="Engineering Chemistry" path1="ec"
                            course2="Problem Solving with C" path2="C"
                            course3="Foundation in electronics" path3="ece"
                            course4="Mechanics" path4="me"
                            course5="Engineering Mathematics-2" path5="math2"/>
                </div>

                <div>
                    <Link to='/snh'>
                        <input type="image" src={LeftArrow} alt="Previous" style={{position : "fixed", top : "50%", left : 50}}/>
                    </Link>
                </div>

                <div style={{float : "left"}}>
                    <Book source={Book1} owner={this.state.ownerName[0]} tbName={this.state.tbTitle[0]} phno={this.state.contactNo[0]} stock={this.state.availabilty[0]}/>
                    <Book source={Book2} owner={this.state.ownerName[1]} tbName={this.state.tbTitle[1]} phno={this.state.contactNo[1]} stock={this.state.availabilty[1]}/>
                    <Book source={Book1} owner={this.state.ownerName[2]} tbName={this.state.tbTitle[2]} phno={this.state.contactNo[2]} stock={this.state.availabilty[2]}/>
                    <Book source={Book2} owner={this.state.ownerName[3]} tbName={this.state.tbTitle[3]} phno={this.state.contactNo[3]} stock={this.state.availabilty[3]}/>
                    <Book source={Book1} owner={this.state.ownerName[4]} tbName={this.state.tbTitle[4]} phno={this.state.contactNo[4]} stock={this.state.availabilty[4]}/>
                    <Book source={Book2} owner={this.state.ownerName[5]} tbName={this.state.tbTitle[5]} phno={this.state.contactNo[5]} stock={this.state.availabilty[5]}/>
                    <Book source={Book1} owner={this.state.ownerName[6]} tbName={this.state.tbTitle[6]} phno={this.state.contactNo[6]} stock={this.state.availabilty[6]}/>
                    <Book source={Book2} owner={this.state.ownerName[7]} tbName={this.state.tbTitle[7]} phno={this.state.contactNo[7]} stock={this.state.availabilty[7]}/>
                    <Book source={Book1} owner={this.state.ownerName[8]} tbName={this.state.tbTitle[8]} phno={this.state.contactNo[8]} stock={this.state.availabilty[8]}/>
                    <Book source={Book2} owner={this.state.ownerName[9]} tbName={this.state.tbTitle[9]} phno={this.state.contactNo[9]} stock={this.state.availabilty[9]}/>
                    <Book source={Book1} owner={this.state.ownerName[10]} tbName={this.state.tbTitle[10]} phno={this.state.contactNo[10]} stock={this.state.availabilty[10]}/>
                    <Book source={Book2} owner={this.state.ownerName[11]} tbName={this.state.tbTitle[11]} phno={this.state.contactNo[11]} stock={this.state.availabilty[11]}/>
                </div>

            </div>
                    );
                }
            }

export default ChemistryCycle;
