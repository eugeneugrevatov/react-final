import React, { useState } from 'react';
import PersonAvatar from "../person-avatar/person-avatar";

function House({ house }) {

  const [toggled, setToggled] = useState(false);

  const onToggle = () => setToggled(!toggled);

  return (
    <div onClick={onToggle}>
      <h4>{house.name}</h4>
      {
        toggled &&
        <div style={{ marginLeft: 20 }}>
          <p>Words: <i>{house.words}</i></p>
          <p>Sworn Members:</p>
          <ul>
            {house.swornMembers && house.swornMembers
              .map(url => url.split("/").pop())
              .map(id => <li key={id}><PersonAvatar id={id}/></li>)}
          </ul>
        </div>
      }
    </div>
  );
}

export default House;
