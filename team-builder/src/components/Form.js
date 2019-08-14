import React, { useState } from 'react';

const Form = props => {
  console.log(props)
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: ""
  })

  const changeHandler = event => {
    setTeamMember({ ...teamMember, [event.target.name]: event.target.value })
  }

  const submitForm = event => {
    event.preventDefault();
    const newMember = {
      ...teamMember,
    }
    props.addNewMember(newMember);
    setTeamMember({ name: "", email: "", role: "" })
  }
  return (
    <form onSubmit={submitForm}>
      <div>
        <label htmlFor="member name" hidden>Name</label>
        <input 
          type="text" 
          name="name" 
          placeholder="Enter Name Here" 
          value={teamMember.name}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor="member email" hidden>Email</label>
        <input 
          type="text" 
          name="email" 
          placeholder="Enter E-mail Here"
          value={teamMember.email}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor="member role" hidden>Role</label>
        <input 
          type="text" 
          name="role" 
          placeholder="Enter Role Here" 
          value={teamMember.role}
          onChange={changeHandler}
        />
      </div>
      <button type="submit">Add New Team Member!</button>
    </form>
  )
}

export default Form;
