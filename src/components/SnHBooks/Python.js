import React from 'react';
import {Link} from 'react-router-dom';
import Book from '../Book';
import LeftArrow from '../img/LeftArrow.jpeg';
import Book1 from '../img/Book1.png';
import Book2 from '../img/Book2.jpeg';

class Python extends React.Component{

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

        fetch('http://localhost:8080/snh/phy/python',{
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
                <div>
                    <Link to='/snh/phy'>
                        <input type="image" src={LeftArrow} alt="Previous" style={{position : "fixed", top : "50%", left : 50}}/>
                    </Link>
                </div>

                <div style={{float : "left", marginTop:100}}>
                    <Book source={Book1} owner={this.state.ownerName[0]} tbName={this.state.tbTitle[0]} phno={this.state.contactNo[0]} stock={this.state.availabilty[0]}/>
                    <Book source={Book2} owner={this.state.ownerName[1]} tbName={this.state.tbTitle[1]} phno={this.state.contactNo[1]} stock={this.state.availabilty[1]}/>
                </div>

            </div>
                    );
                }
            }

export default Python;