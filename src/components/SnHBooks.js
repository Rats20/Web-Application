import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './Searchbar'
import NavContainer from './NavBooks';
import Book from './Book';
import LeftArrow from './img/LeftArrow.jpeg';
import RightArrow from './img/RightArrow.jpeg';
import Book1 from './img/Book1.png';
import Book2 from './img/Book2.jpeg';
import Book3 from './img/Book3.png';
import Book4 from './img/Book4.jpeg';
import Book5 from './img/Book5.jpeg';

class SnHBooks extends React.Component{
    render(){

        var centerStyle = {
            width : 1100,
            margin : "auto"
        };

        return(
            <div style={centerStyle}>
                <div style={{float : "left", marginTop : 120, width:1100}}>
                        <SearchBar/>
                        <NavContainer name="snh"/>
                </div>

                <div>
                    <Link to='/categorymain'>
                        <input type="image" src={LeftArrow} alt="Previous" style={{position : "fixed", top : "50%", left : 50}}/>
                    </Link>
                        <input type="image" src={RightArrow} alt="Next" style={{position : "fixed", top : "50%", right : 50}}/>
                </div>

                <div style={{float : "left"}}>
                    <Book source={Book1} owner="Annabeth Chase" tbName="AUTOMATING OPEN SOURCE INTELLIGENCE, 3rd Edition, Robert Layton, Paul&Warriors" phno="8093276845" stock="In stock"/>
                    <Book source={Book2} owner="Thalia Grace" tbName="COMPUTER SCIENCE AND ENGINEERING HANDBOOK, Allen B.Tucker" phno="9083279845" stock="In stock"/>
                    <Book source={Book3} owner="Grover Underwood" tbName="FORMAL LANGUAGES AND AUTOMATA, 4th Edition, Peter Linz" phno="7403976845" stock="Out of stock"/>
                    <Book source={Book4} owner="Greg Heffley" tbName="EMBEDDED COMPUTING SYSTEMS HANDBOOK, 7th Sem" phno="9083286845" stock="In stock"/>
                    <Book source={Book5} owner="Daniel Radcliffe" tbName="AUTOMATA THEORY, LANGUAGES AND COMPUTATION, 3rd Edition, Pearson" phno="8483276845" stock="Out of stock"/>
                    <Book source={Book1} owner="Rose Redwood" tbName="AUTOMATING OPEN SOURCE INTELLIGENCE, 3rd Edition, Robert Layton, Paul&Warriors" phno="7493276846" stock="In stock"/>
                    <Book source={Book2} owner="Rowley Atkinson" tbName="COMPUTER SCIENCE AND ENGINEERING HANDBOOK, Allen B.Tucker" phno="8097487684" stock="In stock"/>
                    <Book source={Book3} owner="Tyson Cyclopes" tbName="FORMAL LANGUAGES AND AUTOMATA, 4th Edition, Peter Linz" phno="9203276856" stock="In stock"/>
                    <Book source={Book4} owner="Rachel Dorothy" tbName="EMBEDDED COMPUTING SYSTEMS HANDBOOK, 7th Sem" phno="8094279834" stock="In stock"/>
                    <Book source={Book5} owner="Juniper Green" tbName="AUTOMATA THEORY, LANGUAGES AND COMPUTATION, 3rd Edition, Pearson" phno="7343276845" stock="In stock"/>
                </div>

            </div>
                    );
                }
            }

export default SnHBooks;