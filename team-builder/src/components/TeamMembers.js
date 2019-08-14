import React from "react";

const TeamMembers = props => {
  console.log(props)
  return (
    <div>
      {props.teamList.map(member => {
        return (
            <div key={member.id}>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </div>
        )
      })}
    </div>
  )
}

export default TeamMembers;