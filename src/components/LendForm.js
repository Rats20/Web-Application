import React from 'react';
import Reading from './img/Reading.png';

class LendForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isEnabled : true,
            isErr : "notError",
            numLength : 0
        };
    }

    preview_image = (e)=> {
        //FileReader object to get the file data
        var reader = new FileReader();
        //After reader is loaded
        //Function to get the output image and change its source to result
        reader.onload = function(){
        var output = document.getElementById('output_image');
        output.src = reader.result;
        }
        //readAsDataURL to preview the image
        reader.readAsDataURL(e.target.files[0]);
    }

    //Validation for Contact Number
    numValidatn = (e)=>{
        //console.log(e.target.value);
        if(this.state.numLength===9)
        {
            this.setState({
                isEnabled : false
            });
        }
        else if(isNaN(e.target.value) && (this.state.numLength<10))
        {
            this.setState({
                isErr : "error"
            });
        }
        else if(!isNaN(e.target.value) && (this.state.numLength<10))
        {
            this.setState({
                isErr : "notError",
                numLength : this.state.numLength+1
            });
        }

        e.stopPropagation();
    };

    handleSubmit = (e)=>{
        e.preventDefault();
        alert("Form is submitted!");
        e.stopPropagation();
    };

    //Changes the semesters according to the chosen branches.
    handleSelect = (e)=>{

        //let selbranch = this._branch;
        let branch = this._branch.options[this._branch.selectedIndex].text;
        let sem = this._sem;
        
        let sems = [];
        console.log(sems);

        if(branch === "Science&Humanities"){
            sems.push({
                value : '1',
                text : 'Physics Cycle'
            },
            {
                value : '2',
                text : 'Chemistry Cycle'
            });
        }
        else if(branch !== "Science&Humanities" && branch !== "Other Books"){
            sems.push({
                value : '1',
                text : 'SEM-3'
            },
            {
                value : '2',
                text : 'SEM-4'
            },
            {
                value : '3',
                text : 'SEM-5'
            },
            {
                value : '4',
                text : 'SEM-6'
            });
        }
        else{
                sems.push({
                    value : '1',
                    text : 'All'
                });
        }

        console.log(sems);

        if(sem.options.length !== 0)
        {
            for (let i = sem.options.length-1; i >= 0; i--) {
                sem.options[i] = null;
            }
        }

        sems.forEach(option =>
            sem.options.add(
                new Option(option.text,option.value)
            )  
        ); 
        
        

        e.stopPropagation()
    };

    handleSelectSem = (e)=>{

        let selSem = this._sem;
        let sem = selSem.options[selSem.selectedIndex].text;
        let selbranch = this._branch;
        let branch = selbranch.options[selbranch.selectedIndex].text;
        let course = this._course;

        let courses=[];

        if(branch === "Science&Humanities"){
            if(sem === 'Physics Cycle'){
                courses.push({
                    value : '1',
                    text : 'Introduction to computing using Python'
                },
                {
                    value : '2',
                    text : 'Engineering Physics'
                },
                {
                    value : '3',
                    text : 'Basic Electrical Engineering'
                },
                {
                    value : '4',
                    text : 'Mechanical Engineering Sciences'
                },
                {
                    value : '5',
                    text : 'Engineering Mathematics-1'
                });
            }
            else if(sem === 'Chemistry Cycle'){
                courses.push({
                    value : '1',
                    text : 'Engineering Chemistry'
                },
                {
                    value : '2',
                    text : 'Problem Solving with C'
                },
                {
                    value : '3',
                    text : 'Engineering Mechanics'
                },
                {
                    value : '4',
                    text : 'Foundation in Electronic Circuits and Systems'
                },
                {
                    value : '5',
                    text : 'Engineering Mathematics-2'
                });
            }
        }

        else if(branch === "Computer Science Engineering"){
            if(sem === 'SEM-3'){
                courses.push({
                    value : '1',
                    text : 'Digital Design and Computer Organization'
                },
                {
                    value : '2',
                    text : 'Data Structures and its applications'
                },
                {
                    value : '3',
                    text : 'Statistics for Data science'
                },
                {
                    value : '4',
                    text : 'Web Technologies-1'
                },
                {
                    value : '5',
                    text : 'Automata, Formal Languages and Logic'
                },
                {
                    value : '6',
                    text : 'Special Topic-1'
                });
            }
            else if(sem === 'SEM-4'){
                courses.push({
                    value : '1',
                    text : 'Linear Algebra and its Applications'
                },
                {
                    value : '2',
                    text : 'Design and analysis of algorithms'
                },
                {
                    value : '3',
                    text : 'Database Management System'
                },
                {
                    value : '4',
                    text : 'Microprocessor and Computer Architecture'
                },
                {
                    value : '5',
                    text : 'Theory of Computation'
                });
            }
            else if(sem === 'SEM-5'){
                courses.push({
                    value : '1',
                    text : 'Computer Networks'
                },
                {
                    value : '2',
                    text : 'Introduction to operating systems'
                },
                {
                    value : '3',
                    text : 'Principles of Programming Languages'
                });
            }
            else if(sem === 'SEM-6'){
                courses.push({
                    value : '1',
                    text : 'Compiler Design'
                },
                {
                    value : '2',
                    text : 'Cloud computing'
                },
                {
                    value : '3',
                    text : 'Machine Learning'
                });
            }
        }

        
        else if(branch === "Electronics & Communications Engineering"){
            if(sem === 'SEM-3'){
                courses.push({
                    value : '1',
                    text : 'Network analysis and synthesis'
                },
                {
                    value : '2',
                    text : 'Analog Circuit Design'
                },
                {
                    value : '3',
                    text : 'Digital Circuit Design'
                },
                {
                    value : '4',
                    text : 'Signals and systems'
                });
            }
            else if(sem === 'SEM-4'){
                courses.push({
                    value : '1',
                    text : 'Linear Algebra'
                },
                {
                    value : '2',
                    text : 'Control Systems'
                },
                {
                    value : '3',
                    text : 'Computer Organization'
                },
                {
                    value : '4',
                    text : 'VLSI'
                },
                {
                    value : '5',
                    text : 'Electromagnetic field & Transmission lines'
                });
            }
            else if(sem === 'SEM-5'){
                courses.push({
                    value : '1',
                    text : 'Communication Engineering'
                },
                {
                    value : '2',
                    text : 'Microwave Engineering'
                },
                {
                    value : '3',
                    text : 'VLSI Design'
                });
            }
            else if(sem === 'SEM-6'){
                courses.push({
                    value : '1',
                    text : 'Computer Networks'
                },
                {
                    value : '2',
                    text : 'Digital Computing'
                },
                {
                    value : '3',
                    text : 'Digital System Design'
                });
            }
        }

        else if(branch === "Electrical & Electronics Engineering"){
            if(sem === 'SEM-3'){
                courses.push({
                    value : '1',
                    text : 'Engineering Mathematics-3'
                },
                {
                    value : '2',
                    text : 'Electric Circuit Theory'
                },
                {
                    value : '3',
                    text : 'Analog Electronic Circuits'
                },
                {
                    value : '4',
                    text : 'Digital Electronics'
                },
                {
                    value : '5',
                    text : 'Electromagnetic Theory'
                });
            }
            else if(sem === 'SEM-4'){
                courses.push({
                    value : '1',
                    text : 'Linear Algebra and its Applications'
                },
                {
                    value : '2',
                    text : 'Linear Integrated Circuits'
                },
                {
                    value : '3',
                    text : 'Electrical Machines-1'
                },
                {
                    value : '4',
                    text : 'Power Electronics'
                },
                {
                    value : '5',
                    text : 'Generation Transmission and Distribution'
                });
            }
            else if(sem === 'SEM-5'){
                courses.push({
                    value : '1',
                    text : 'Electrical Machines-2'
                },
                {
                    value : '2',
                    text : 'Microcontrollers'
                },
                {
                    value : '3',
                    text : 'Signals & Systems'
                });
            }
            else if(sem === 'SEM-6'){
                courses.push({
                    value : '1',
                    text : 'Power System Analysis & Stability'
                },
                {
                    value : '2',
                    text : 'Control Systems'
                },
                {
                    value : '3',
                    text : 'Digital Signal Processing'
                });
            }
        }

        else if(branch === "Mechanical Engineering"){
            if(sem === 'SEM-3'){
                courses.push({
                    value : '1',
                    text : 'Material Science and Metallurgy'
                },
                {
                    value : '2',
                    text : 'Mechanics of Solids'
                },
                {
                    value : '3',
                    text : 'Engineering Thermodynamics'
                },
                {
                    value : '4',
                    text : 'Metal Casting and Welding process'
                });
            }
            else if(sem === 'SEM-4'){
                courses.push({
                    value : '1',
                    text : 'Engineering Mechanics Dynamics'
                },
                {
                    value : '2',
                    text : 'Mechanics of Machines and Mechanism'
                },
                {
                    value : '3',
                    text : 'Mechanics of fluid'
                },
                {
                    value : '4',
                    text : 'Elective surface Engineering'
                });
            }
            else if(sem === 'SEM-5'){
                courses.push({
                    value : '1',
                    text : 'Design of Machine Elements'
                },
                {
                    value : '2',
                    text : 'Principles of Energy Conversion'
                },
                {
                    value : '3',
                    text : 'Metal Cutting and Machine Processes'
                },
                {
                    value : '4',
                    text : 'Introduction to Aerodynamics'
                });
            }
            else if(sem === 'SEM-6'){
                courses.push({
                    value : '1',
                    text : 'Automotive Electronics'
                },
                {
                    value : '2',
                    text : 'Smart Materials'
                },
                {
                    value : '3',
                    text : 'Computational Fluid Dynamics'
                },
                {
                    value : '4',
                    text : 'Principles of Flight'
                });
            }
        }

        else if(branch === "Civil Engineering"){
            if(sem === 'SEM-3'){
                courses.push({
                    value : '1',
                    text : 'Strength of Materials'
                },
                {
                    value : '2',
                    text : 'Fluid Mechanics'
                },
                {
                    value : '3',
                    text : 'GeoInformatics'
                },
                {
                    value : '4',
                    text : 'Construction materials and Technology'
                });
            }
            else if(sem === 'SEM-4'){
                courses.push({
                    value : '1',
                    text : 'Concrete Technology'
                },
                {
                    value : '2',
                    text : 'Transportation Engineering'
                },
                {
                    value : '3',
                    text : 'Structural Analysis'
                },
                {
                    value : '4',
                    text : 'Hydraulics & Machinery'
                });
            }
            else if(sem === 'SEM-5'){
                courses.push({
                    value : '1',
                    text : 'Design and Detailing of RC'
                },
                {
                    value : '2',
                    text : 'Fundamentals of Geotechnical Engineering'
                });
            }
            else if(sem === 'SEM-6'){
                courses.push({
                    value : '1',
                    text : 'Design and Detailing of Steel Structural Elements'
                },
                {
                    value : '2',
                    text : 'Advanced Geotechnical Engineering'
                },
                {
                    value : '3',
                    text : 'Alternative Building Material and Technology'
                });
            }
        }

        else if(branch === "Biotechnology"){
            if(sem === 'SEM-3'){
                courses.push({
                    value : '1',
                    text : 'Engineering Mathematics-3'
                },
                {
                    value : '2',
                    text : 'Bioprocess Calculations'
                },
                {
                    value : '3',
                    text : 'Microbiology'
                },
                {
                    value : '4',
                    text : 'Biochemistry : Biomolecules'
                },
                {
                    value : '5',
                    text : 'Special Topic-1'
                });
            }
            else if(sem === 'SEM-4'){
                courses.push({
                    value : '1',
                    text : 'Linear Algebra and its Applications'
                },
                {
                    value : '2',
                    text : 'Genetics and Molecular Biology'
                },
                {
                    value : '3',
                    text : 'Biochemistry: Metabolism'
                },
                {
                    value : '4',
                    text : 'Mass transfer'
                },
                {
                    value : '5',
                    text : 'Special Topic'
                });
            }
            else if(sem === 'SEM-5'){
                courses.push({
                    value : '1',
                    text : 'Bioprocess Reaction Engineering'
                },
                {
                    value : '2',
                    text : 'Genetic Engineering and applications'
                },
                {
                    value : '3',
                    text : 'Bioinformatics'
                });
            }
            else if(sem === 'SEM-6'){
                courses.push({
                    value : '1',
                    text : 'Bioprocess Systems Analysis and Control'
                },
                {
                    value : '2',
                    text : 'Upstrem Process Technology'
                },
                {
                    value : '3',
                    text : 'Immunology'
                },
                {
                    value : '4',
                    text : 'Special Topic'
                });
            }
        }

        else if(branch === 'Other Books'){
            if(sem === 'All'){
                courses.push({
                    value : '1',
                    text : 'All Courses'
                });
            }
        }

        if(course.options.length !== 0)
        {
            for (let i = course.options.length-1; i >= 0; i--) {
                course.options[i] = null;
            }
        }

        courses.forEach(option =>
            course.options.add(
                new Option(option.text,option.value)
            )  
        ); 

        e.stopPropagation();
    };


    render(){

        var visibility = "hide";

        if(this.props.popUpVisibility){
            visibility = "show";
        };

        var bgStyle = {
            position: "fixed",
            background: "#00000050",
            width: "100vw",
            height: "100vh",
            top: 0,
            left: 0
        };
        
        var popUpBoxStyle = {
            width: "70%",
            margin: "0 auto",
            height: "90%",
            marginTop: 20,
            background: "#fff",
            borderRadius: 10,
            padding: 20
        };

        var labelStyle = {
            fontfamily : "American Typewriter, Times New Roman, Helvetica",
            fontSize : 24,
            float : "left",
        };

        var textBoxStyle = {
            fontFamily : "Times New Roman, sans-serif",
            fontSize : 20,
            border : "5px solid #CBB5A1",
            borderRadius : 10,
            padding : 5,
            margin : "10px 0px 30px 0px",
            height : "1.5em",
            width : 500,
            float : "left"
        };

        var buttonStyle = {
            float : "left",
            backgroundColor : "white",
            border : "5px solid #CBB5A1",
            borderRadius : 10,
            fontFamily : "American Typewriter, Times New Roman, sans-serif",
            fontSize : 24,
            width : 300,
            height : 50,
            margin : 20
        };

        var imgStyle = {
            margin : "50px 20px 50px 20px",
            height : 400,
            width : 300
        };

        return(
        <div style={bgStyle} id="popUp" className={visibility}>
            <form style={popUpBoxStyle} onSubmit={this.handleSubmit}>

                <button className="close-icon" onClick={this.props.handleClick}>x</button>

                <div style={{marginTop : 10, float : "left", width : 550, marginLeft : 50}}>
                    <label style={labelStyle}>Book Owner</label>
                    <input type="text" maxLength="20" required style={textBoxStyle} placeholder="Type Here..."/>

                    <label style={labelStyle}>Contact Number</label>
                    <input type="text" maxLength="10" id="contactNum" className={this.state.isErr} onKeyUp={this.numValidatn} placeholder="Type Here..."/>

                    <label style={labelStyle}>Title of the book</label>
                    <input type="text" maxLength="60" required style={textBoxStyle} placeholder="Type Here..."/>

                    <label style={labelStyle}>
                        Belongs to the branch
                    </label>
                    <div style={{fontFamily : "American Typewriter, Times New Roman, sans-serif", color : "#A2A2A2", float : "left", marginTop : 6}}>
                            (Choose branch first)
                    </div>
                    <select id="branches" class="custom-select" required ref={(ele)=>this._branch=ele} onChange={this.handleSelect}>
                        <option value="" disabled selected>Choose your option</option>
                        <option value="1">Science&Humanities</option>
                        <option value="2">Computer Science Engineering</option>
                        <option value="3">Electronics & Communications Engineering</option>
                        <option value="4">Electrical & Electronics Engineering</option>
                        <option value="5">Mechanical Engineering</option>
                        <option value="6">Civil Engineering</option>
                        <option value="7">Biotechnology</option>
                        <option value="10">Other Books</option>
                    </select>

                    <label style={labelStyle}>Belongs to the semester</label>
                    <select id="sem" class="custom-select" required ref={(ele)=>this._sem=ele} onChange={this.handleSelectSem}>
                        <option value="" disabled selected>Choose</option>
                    </select>

                    <label style={labelStyle}>Belongs to the course</label>
                    <select id="course" class="custom-select" required ref={(ele)=>this._course=ele}>
                        <option value="" disabled selected>Choose</option>
                    </select>

                </div>

                <div style={{float : "left", height : 800, width : 350, marginTop : 50, marginLeft : 50}}>
                    {/*<div class="uploadWrapper">
                        <button style={buttonStyle}>Upload image</button>
                        <input type="file" accept="image/*" onChange={this.preview_image}/>
                    </div>
                    <img id="output_image" style={imgStyle} /> */}
                    <img src={Reading} style={imgStyle} alt="Loading..."/>
                    <input type="submit" style={buttonStyle} disabled={this.state.isEnabled} value="Lend"/> 
                </div>

            </form>
        </div>
        );
    }
}

export default LendForm;
