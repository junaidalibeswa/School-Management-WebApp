import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Select, TextField, InputLabel, MenuItem, Button, Divider, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root' : {
            margin : theme.spacing(1),
            width: "70%",           
        },
        '& .MuiSelect-root' : {
            margin : theme.spacing(1),
            width: 300,           
        },
        '& .MuiTypography-root':{
            textAlign: 'center'
        },
        
        width: '50%',
        marginLeft : 10*theme.spacing(1),
    },
}));

function FeesFormRender(props) {
        const classes = useStyles();
        const { studentValue, handleChange } = props;

        return (
            <form className = {classes.root} autoComplete = "off" >
                <div>
                    <Typography variant="h5">
                        Student Details
                    </Typography>
                    <TextField 
                        required
                        id="standard-required"
                        label="Name of Student" 
                        defaultValue={studentValue.studentName}
                        onChange={handleChange('studentName')}                       
                    />
                    <TextField 
                        required
                        id="standard-required"
                        label="Father's Name" 
                        defaultValue={studentValue.fatherName}
                        onChange={handleChange('fatherName')} 
                    />
                    <TextField 
                        required
                        id="standard-required"
                        label="Class"
                        type="number" 
                        defaultValue={studentValue.studentClass}
                        onChange={handleChange('studentClass')} 
                    />
                    <InputLabel id = "demo-simple-select-label" >Course</InputLabel>
                    <Select 
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={handleChange('course')}                    
                    >
                        <MenuItem value={null}>None</MenuItem>
                        <MenuItem value='Science'>Science</MenuItem>
                        <MenuItem value='Commerce'>Commerce</MenuItem>
                        <MenuItem value='Arts'>Arts</MenuItem>
                    </Select>

                    <TextField 
                        required
                        id="standard-required"
                        label="Roll Number" 
                        type = "number"
                        defaultValue={studentValue.rollNumber}
                        onChange={handleChange('rollNumber')} 
                    />

                    <TextField 
                        id="date"
                        label="Date of Payment"
                        type="date"
                        defaultValue={studentValue.dateOfPayment}
                        onChange={handleChange('dateOfPayment')} 
                    />
                </div>

                <Divider variant = "middle" />
                <div>
                    <Typography variant="h5" >
                        Fee Details
                    </Typography>
                    <TextField 
                        required
                        id="standard-required"
                        label="Course Fee"
                        type = "number"
                        defaultValue={studentValue.courseFee}
                        onChange={handleChange('courseFee')} 
                    />
                    <TextField 
                        label="Admission Fee"
                        type = "number"
                        defaultValue={studentValue.admissionFee}
                        onChange={handleChange('admissionFee')} 
                    />
                    <TextField 
                        label="Exam Fee"
                        type = "number"
                        defaultValue={studentValue.examFee}
                        onChange={handleChange('examFee')} 
                    />
                    <TextField 
                        label="Library Fee"
                        type = "number"
                        defaultValue={studentValue.libraryFee}
                        onChange={handleChange('libraryFee')} 
                    />
                </div>
                <div>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        type="submit"
                        onClick={() => {alert(studentValue.course)}}>
                    Submit
                    </Button>
                </div>
            </form>
        );
}

export default FeesFormRender