import React, { useState,useEffect } from "react";
import AddStudent from "../components/AddStudent";
import { Grid ,Grow } from "@mui/material";
import Alert from "@mui/material/Alert";
import { storeStudentData } from "../requests/axios";
import Students from "../components/Students";

function HomePage() {
  const [students, setStudents] = useState([]);
  const [showAlert, setShowAlert] = useState(false); // State for alert visibility
  const [showFade,setShowFade] = useState(false);
  useEffect(()=>{
    setShowFade(true);
  }
  ,[])
  const submitData = async (student) => {
    try {
      const response = await storeStudentData(student);  
      setShowAlert(true);
      setStudents([...students, response.data]);
      
    } catch (error) {
     console.error(error) 
    }
  };
  const handleCloseAlert = () => {
    setShowAlert(false); // Hide the alert
  };
  return (
    <Grow
    in={showFade}
    style={{ transformOrigin: '0 0 0' }}
    {...(showFade ? { timeout: 3000 } : {})}
  >
    <Grid container justifyContent="center" style={{ minHeight: "74vh" }}>
      
      <Grid item width={"50%"}>
      {showAlert && (
        <Alert severity="success" onClose={handleCloseAlert}>
          Student added to the vault 
        </Alert>
      )}
        <AddStudent saveOnBlockchain={submitData} />
      </Grid>
      <Grid item md={8}>
        <Students students={students} />
      </Grid>
    </Grid>
    </Grow>
  );
}

export default HomePage;
