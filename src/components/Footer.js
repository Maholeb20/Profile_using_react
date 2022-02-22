import React from "react";

function Footer() {
  return (
    <div className="footer">
       <footer class=" footer">
            <div class="footer-content">
                <div class="footer-body" id="aboutProjects">
                    <h3>Social Media links</h3>
                    <ul>
						<li><a href="https://za.linkedin.com/in/excellent-nhlanhla-mashengete-12535121b">LinkedIn</a></li>
                        <li><a href="https://github.com/Maholeb20">GitHub</a></li>
                    </ul>
                </div>
                <div class="footer-body" id="personal">
                    <h3>Contacts</h3>
                    <ul>
                        <li>Call me at: <a href="tel:+079-553-5147"> 079-553-5147</a></li>
                        <li>Email: <a href="mailto:mashengete@live.com"> mashengete@live.com</a></li>
                    </ul>
                </div>
            </div>
            <div class=" footer-bottom">
               &copy; Copyright  <strong>Excellent Technical. </strong> All rights reserved <br></br> Created by Excellent Nhlanhla Mashengete
            </div> 
        </footer> 
    </div>
  );
}

export default Footer;