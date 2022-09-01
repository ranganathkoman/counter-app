import React from "react";
import {eventIdentify} from '../rudder/eventBuilder';
const CHARS = 'abcdefghijklmnopqrstuvwxyz1234567890';
// Stateless Functional Component

const generateName = () => {  
  let string = '';
  for(var ii=0; ii<15; ii++){
    string += CHARS[Math.floor(Math.random() * CHARS.length)];
  }
  return string;
}


const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light">
      <div className="navbar-brand">
        <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
        <span
          className="badge badge-pill badge-info m-2"
          style={{ width: 50, fontSize: "24px" }}
        >
          {totalCounters}
        </span>
        Items
        <button
          className="btn btn-secondary"
          onClick={() => {
            const newUser = generateName();
            console.log(newUser);
            eventIdentify(newUser);
          }}
        >
          Switch
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
