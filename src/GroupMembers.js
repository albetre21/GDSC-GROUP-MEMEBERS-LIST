
import React from 'react';
import './GroupMembers.css'; // Import your CSS file

const GroupMembers = () => {
  // List of group-members
  const members = [
    'Betrearon Dereje',
    'Albetre Deinstein',
    'Fiker Dereje ',
    'Anchalem yazachew',
    'Dereje Tiruneh',
    'betelehem liknaw',
    'Selam biniyam',
    'Sumueal Alemu',
    'fiker yene',
    'fiker yene sitota'
  ];

  return (
    <div className="group-members">
      <h2>Group Members</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
      <img
        src="space.jpg" 
        alt="Group members"
        className="group-image"
      />
    </div>
  );
};

export default GroupMembers;
