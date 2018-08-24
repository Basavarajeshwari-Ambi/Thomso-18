import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

export default class Navbar extends React.Component{
render(){
    return(
      <div className="zonals-admin-nav">
        <ul>
          <li><Link to="/main/admin/">Home</Link></li>
          <li><Link to="/main/admin/logout">Logout</Link></li>
        </ul>
      </div>
    )
  }
}