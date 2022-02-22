import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation"> 
      <header >
        <table class="header">
          <tr>
            <td>
              <NavLink className="logo" to="/" class="logo">E.N.M</NavLink>
            </td>
            <td align="right">
              <nav class="navbar">
                <ul class="nav-menu">
                  <li><NavLink className="nav-link scrollto " to="/">Home</NavLink></li> 
                  <li><NavLink className="nav-link scrollto" to="/about">About</NavLink></li>
                  <li><NavLink className="nav-link scrollto" to="/contact">Contacts</NavLink></li>
                </ul>
              </nav>
            </td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default Navigation; 
  
  
  
  
  
  
  
  
  
  
  
