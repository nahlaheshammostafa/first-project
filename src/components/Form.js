import React, { useState } from 'react';

function Form()
{
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("male");

    const nameHandler = (value) =>
    {
        setName(value);
    };
    const passwordHandler = (value) =>
    {
        setPassword(value);
    };
    const genderHandler = (value) =>
    {
        setGender(value);
    };
  return(
    <form onSubmit={(e) =>{e.preventDefault();}}>
     <label>Name</label>
     <input type='text' onChange = {(e) => {nameHandler(e.target.value);}} />
     <br/>

     <label>Password</label>
     <input type='password' onChange = {(e) => {passwordHandler(e.target.value);}} />
     <br/>

     <label>Gender</label>
       <select value={gender} onChange = {(e) => {genderHandler(e.target.value);}}>
        <option value="male">Male</option>
        <option value="female">Female</option>
       </select>
     <br/>
     <button type="submit">Submit</button>
    </form>
  );
}

export default Form;