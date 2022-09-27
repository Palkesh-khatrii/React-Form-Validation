import './App.css';
import FormInput from './Components/FormInput';
import { useState } from 'react'

function App() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    dob: '',
    password: '',
    confirmPassword: '',
  })

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      label: 'Username',
      placeholder: 'Username',
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      pattern :'^[A-Za-z0-9]{3,16}$',
      required :true
    },
    {
      id: 2,
      name: 'email',
      type: 'text',
      label: 'Email',
      placeholder: 'Email',
      errorMessage:'it should be valid Email address!',
      required :true
    },
    {
      id: 3,
      name: 'dob',
      type: 'date',
      label: 'DOB',
      placeholder: 'DOB'
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      label: 'Password',
      placeholder: 'Password',
      errorMessage:'Password should be 8-10 characters and include at least 1 letter, 1 number and 1 special character!',
      pattern: "^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,20}$",
      required :true
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      label: 'Confirm Password',
      placeholder: 'Confirm Password',
      errorMessage:"Password don't match!",
      pattern :values.password,
      required :true
    }
  ]
  const handleSubmit =(e)=>{
      e.preventDefault();
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  console.log(values)

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {
          inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={handleChange}
            />
          ))
        }
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
