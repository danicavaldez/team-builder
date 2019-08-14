import React, { useState } from 'react';
import logo from './logo.svg';
import Form from './components/Form.js'
import TeamMembers from './components/TeamMembers.js'
import data from './data.js'

import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState(data);
  
  const addNewMember = member => {
    setTeamMember([ ...teamMember, member ])
  }

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form addNewMember={addNewMember}/>
      <TeamMembers teamList={teamMember}/>
    </div>
  )
}

export default App;
