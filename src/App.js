import './App.css';
import React,{useState} from 'react';
const App=()=> {
  const [formValues, setFormValues] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: '',
    email: '',
    phoneNumber: '',
    gender: '',
    startTime: '',
    endTime: '',
    jobPosition: '',
    teams: '',
    designation: '',
    billableHours: '',
    isBillable: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formValues.firstName) errors.firstName = 'First Name is required';
    if (!formValues.lastName) errors.lastName = 'Last Name is required';
    if (!formValues.birthDate) errors.birthDate = 'Date is required';
    if (!formValues.email) errors.email = 'Email is required';
    if (!formValues.phoneNumber) errors.phoneNumber = 'Phone Number is required';
    if (!formValues.gender) errors.gender = 'Gender is required';
    if (!formValues.startTime) errors.startTime = 'Start Time is required';
    if (!formValues.endTime) errors.endTime = 'End Time is required';
    if (!formValues.jobPosition) errors.jobPosition = 'Job Position is required';
    if (!formValues.teams) errors.teams = 'Required';
    if (!formValues.designation) errors.designation = 'Required';
    if (!formValues.billableHours) errors.billableHours = 'Required and must be a positive number';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form is valid and ready for submission!');
    }
  };
  return (
    <form className="App1" onSubmit={handleSubmit}>
      <h2>Employee Form</h2>
    <div className="App">
      <div className='row1'>
        <label>First Name</label>
        <input placeholder='Enter your First Name' type='text' name="firstName" value={formValues.firstName} onChange={handleInputChange}/><br/>
        {errors.firstName && <span className="error">{errors.firstName}</span>}

        <label>Birth Date</label>
        <input placeholder='Enter your DOB' type='date' name="birthDate" value={formValues.birthDate} onChange={handleInputChange}/><br/>
        {errors.birthDate && <span className="error">{errors.birthDate}</span>}

        <label>Select Gender</label>
        <select  name="gender" value={formValues.gender} onChange={handleInputChange}>
          <option value="" disabled >Choose Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select><br/>
        {errors.gender && <span className="error">{errors.gender}</span>}

        <label>Job Position</label>
        <input placeholder='Enter the Job Position' type='text' name="jobPosition" value={formValues.jobPosition} onChange={handleInputChange}/><br/>
        {errors.jobPosition && <span className="error">{errors.jobPosition}</span>}

        <label>Billable Hours</label>
        <input placeholder='Enter the billable hours' type='number' name="billableHours"  value={formValues.billableHours}  onChange={handleInputChange}/><br/>
        {errors.billableHours && <span className="error">{errors.billableHours}</span>}

      </div>
      <div className='row2'>
        <label>Middle Name</label>
        <input placeholder="Enter your Middle Name" type="text" name="lastName" value={formValues.lastName} onChange={handleInputChange}/>

        <label>Email</label>
        <input placeholder="Enter your email" type="email" name="email" value={formValues.email} onChange={handleInputChange}/><br/>
        {errors.email && <span className="error">{errors.email}</span>}

        <label>Start Time</label>
        <input placeholder="" type="time" name="startTime" value={formValues.startTime} onChange={handleInputChange}/><br/>
        {errors.birthDate && <span className="error">{errors.birthDate}</span>}

        <label>Select Teams</label>
        <select name="teams" value={formValues.teams} onChange={handleInputChange}>
          <option value="" disabled>Select...</option>
          <option value="team1">Team 1</option>
          <option value="team2">Team 2</option>
          <option value="team3">Team 3</option>
        </select><br/>
        {errors.teams && <span className="error">{errors.teams}</span>}

       <p>Is Billable <input type="checkbox" name="isBillable" checked={formValues.isBillable}  onChange={handleInputChange} className='pbill'/></p> 
      </div>
      <div className='row3'>
        <label>Last Name</label>
        <input placeholder="Enter your Last Name" type="text" name="lastName" value={formValues.lastName} onChange={handleInputChange}/><br/>
        {errors.lastName && <span className="error">{errors.lastName}</span>}

        <label>Phone Number</label>
        <input placeholder="Enter your phone number" type="tel" name="phoneNumber" maxLength="10" value={formValues.phoneNumber} onChange={handleInputChange}/><br/>
        {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}

        <label>End Time</label>
        <input placeholder="" type="time" name="endTime" value={formValues.endTime} onChange={handleInputChange}/><br/>
        {errors.endTime && <span className="error">{errors.endTime}</span>}

        <label>Select Teams</label>
        <select name="designation" value={formValues.designation} onChange={handleInputChange}>
          <option value="" disabled>Select Designation</option>
          <option value="designation1">Software Developer</option>
          <option value="designation2">Testing</option>
          <option value="designation3">Team Leader</option>
        </select><br/>
        {errors.designation && <span className="error">{errors.designation}</span>}

      </div>
    </div>
    <button>Submit</button>
    </form>
  );
}

export default App;
