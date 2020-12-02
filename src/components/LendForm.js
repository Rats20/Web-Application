import React from 'react';

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
            },
            {
                value : '5',
                text : 'SEM-7'
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

    /*handleSelectSem = (e)=>{

        let selSem = this._sem;
        let sem = selSem.options[selSem.selectedIndex].text;

        let courses=[];

        e.stopPropagation();
    };*/


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
            border : "5px dashed #F5E5D6",
            borderRadius : 5,
            margin : 20,
            height : 400,
            width : 300
        };

        return(
        <div style={bgStyle} id="popUp" className={visibility}>
            <form style={popUpBoxStyle} onSubmit={this.handleSubmit}>

                <button className="close-icon" onClick={this.props.handleClick}>x</button>

                <div style={{marginTop : 10, float : "left", width : 550, marginLeft : 50}}>
                    <label style={labelStyle}>Book Owner</label>
                    <input type="text" maxLength="100" required style={textBoxStyle} placeholder="Type Here..."/>

                    <label style={labelStyle}>Contact Number</label>
                    <input type="text" maxLength="10" id="contactNum" className={this.state.isErr} onKeyUp={this.numValidatn} placeholder="Type Here..."/>

                    <label style={labelStyle}>Title of the book</label>
                    <input type="text" maxLength="100" required style={textBoxStyle} placeholder="Type Here..."/>

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
                        <option value="8">Aeronautical Engineering</option>
                        <option value="9">Chemical Engineering</option>
                        <option value="10">Other Books</option>
                    </select>

                    <label style={labelStyle}>Belongs to the semester</label>
                    <select id="sem" class="custom-select" required ref={(ele)=>this._sem=ele} onChange={this.handleSelectSem}>
                        <option value="" disabled selected>Choose</option>
                    </select>

                    <label style={labelStyle}>Belongs to the course</label>
                    <select id="sem" class="custom-select" required ref={(ele)=>this._course=ele}>
                        <option value="" disabled selected>Choose</option>
                    </select>

                </div>

                <div style={{float : "left", height : 800, width : 350, marginTop : 50, marginLeft : 50}}>
                    <div class="uploadWrapper">
                        <button style={buttonStyle}>Upload image</button>
                        <input type="file" accept="image/*" onChange={this.preview_image}/>
                    </div>
                    <img id="output_image" style={imgStyle}/> 
                    <input type="submit" style={buttonStyle} disabled={this.state.isEnabled} value="Lend"/> 
                </div>

            </form>
        </div>
        );
    }
}

export default LendForm;