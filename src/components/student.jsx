import React from 'react';
import { Paper, Grid, Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  cardContainer: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    margin:'15px'
  },
  cardTitle: {
    color: '#333333',
    fontSize: '1.2rem',
    marginBottom: 10,
    fontWeight:'bold'
  },
  cardInfo: {
    color: '#666666',
    fontSize: '1rem',
  },
  enrolled: {
    border: '2px solid green',
  },
});

function Student({ student }) {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={`${classes.cardContainer}`}>
      <Card className= {`${student.enrolled ? classes.enrolled : ''}`}>
        <CardContent>
          <Typography variant="h5" component="div" className={classes.cardTitle}>
            Student Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body1" className={classes.cardInfo}>ID: {student.id}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" className={classes.cardInfo}>Name: {student.name}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" className={classes.cardInfo}>Enrolled: {student.enrolled ? 'Yes' : 'No'}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" className={classes.cardInfo}>Course Name: {student.courseName}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" className={classes.cardInfo}>Birth Date: {student.dateOfBirth}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Paper>
  );
}

export default Student;
