import React from 'react';
import FeesFormRender from './FeesFormRender';

class FeesFormController extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            student : {
                studentName : null,
                fatherName : null,
                studentClass : null,
                course : null,
                rollNumber : null,
                dateOfPayment: '2020-08-15',
                courseFee : 0,
                admissionFee : 0,
                examFee : 0,
                libraryFee: 0,
            },
        }
    }

    handleChange = input => event => {
        let student = this.state.student;
        student[input] = event.target.value;
        this.setState({
            student : student,
        });

        
    }

    componentDidMount(){
        console.log(this.state.student);
    }

    render() {

        return (
            <FeesFormRender 
            studentValue = {this.state.student}
            handleChange = {this.handleChange}
            />
        );
    }
}

export default FeesFormController;