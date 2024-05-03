import React, { useState } from 'react';
import { Collapse, Grid, Button, Typography, Box } from '@mui/material';
import StudentDataForm from './StudentDataForm';

function AddStudent({saveOnBlockchain}) {
    const [showAddStudent, setShowAddStudent] = useState(false);
    const toggleAddStudent = () => {
        setShowAddStudent(!showAddStudent);
    };
    const saveStudentData= (student)=>{
        toggleAddStudent();
        saveOnBlockchain(student);
    }
    return (
        <Grid container>
            <Box  alignItems="center" borderBottom={1} pb={1} sx={{height:50}} width="100%">
            <Grid  item > 
            <Typography variant="h4" > Hybrid Blockchain Dapp</Typography>
            </Grid>
            </Box>
            <Grid item md={12}>
                    <Button variant="contained" sx={{m:2}} onClick={toggleAddStudent}>Add Student</Button>
                    </Grid>
            <Grid item xs={12} justifyContent="center">
                <Collapse in={showAddStudent} >
                    <StudentDataForm saveStudentData={saveStudentData} />
                </Collapse>
            </Grid>
        </Grid>
    );
}

export default AddStudent;
