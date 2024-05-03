import React, { useState } from "react";
import { Grid, Checkbox, TextField, FormControlLabel ,Button } from "@mui/material";

function StudentDataForm({saveStudentData}) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [courseName, setCourseName] = useState("");
  const [enrolled, setEnrolled] = useState(false);
  const handleIdChnage = (e) => {
    setId(e.target.value);
  };
  const handleNameChnage = (e) => {
    setName(e.target.value);
  };
  const handleDateOfBirthChnage = (e) => {
    setDateOfBirth(e.target.value);
  };
  const handleCourseNameChnage = (e) => {
    setCourseName(e.target.value);
  };
  const handleEnrolledChnage = (e) => {
    setEnrolled(e.target.value);
  };
  const save = () => {
    if(!id){
      return alert("please enter the student id");
    }
  const student = {
    id:id,
    name:name,
    dateOfBirth:dateOfBirth,
    courseName:courseName,
    enrolled:enrolled,
  }
 setId("");
 setName("");
 setDateOfBirth("");
 setCourseName("");
 setEnrolled(false);
      <Button onClick={save} sx={{margin:'auto', width:'50%'}} variant="contained">Save</Button>
  saveStudentData(student);
  }

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <TextField
          required
          autoFocus
          id="Id"
          label="ID"
          className="custom-input"
          onChange={handleIdChnage}
          value={id}
          sx={{margin:1}}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          id="name"
          label="Name"
          className="custom-input"
          onChange={handleNameChnage}
          value={name}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          id="birth-date"
          label="Birth Date"
          className="custom-input"
          onChange={handleDateOfBirthChnage}
          value={dateOfBirth}
        />
      </Grid>
      <Grid item xs={12} md={6} sx={{mb:2}}>
        <TextField
          id="course-name"
          label="Course Name"
          className="custom-input"
          onChange={handleCourseNameChnage}
          value={courseName}
        />
      </Grid>
     <div style={{backgroundColor:'#D9D9D9',opacity:'0.8', padding:'5px',margin:'auto'}}>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={enrolled} // Set the default checked state
              color="success"
              onChange={handleEnrolledChnage} // Handle checkbox change
            />
          }
          label="Enrolled"
          sx={{margin:'auto',}}
        />
        </div>
     
      <Grid item md = {12} mt={1}>
      <Button onClick={save} sx={{margin:'auto', width:'50%'}} variant="contained">Save</Button>
      </Grid>
    </Grid>
  );
}

export default StudentDataForm;
