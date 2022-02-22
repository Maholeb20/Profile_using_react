import React from "react";

function About() {
  return (
    <div className="about">
      <section id="about">
        <table>
          <tr>
            <td align="center" >
              <div class="container bio"> 
                <h2>Educational Background</h2><br />
                <h4>Matric</h4>
                <p>I Matriculated in 2017</p><br />

                <h4>University</h4>
                <p>I recently completed my theory and school exposure practicals  
                  and Part of the requirements for me to complete my qualification  
                  National Diploma in Information Technology: Software Development  
                  is that I undergo a six months internship program</p><br />

                <h4>ShapeAi</h4>
                <p>I have completed a coding Bootcamp hosted by ShapeAI in collaboration  
                  with Microsoft Learn and GDG Ranchi, Learned the fundamentals of 
                  basic web development with HTML, CSS and JavaScript</p><br />

                <h4>Udemy</h4>
                <p>I have completed a coding course powered by udemy 
                  I have learned the basic fundamentals of C# by coding </p><br />
              </div>
            </td>
          </tr>
        
          <tr>
            <td align="center">
              <div id="skills" class="skills">
                <h2>Skills</h2>         
                <ul>
                  <li>Django</li>
                  <li>Python</li>
                  <li>C#</li>
                  <li>C++</li>
                  <li>PostgresSQL</li>
                  <li>Oracle Databases(PL/SQL, MySQL)</li>
                  <li>HTML & CSS</li>
                  <li>JavaScript</li>
                  <li>Linux</li>

                </ul>    
              </div>
            </td>
          </tr>
        </table>
        
        <table id="projects" >
          <tr>
            <h2 id="projectsHeader"></h2>
            <td> 
              <div class="card" styles="max-width: 20rem;">
                <div id="card-header1" class="card-header">University Final Year Project</div>
                <div class="card-body">
                  <h4 id="card-title1" class="card-title">Tracking System</h4>
                  <p id="card-text1" class="card-text">In my final studies I developed a web<br />
                                                  based system together with my team, the <br />
                                                  purpose of the system was to help the <br />
                                                  funder to keep track of funded students<br /> 
                                                  whether they are still attending classes or<br />
                                                  they dont, reason for the system is to<br />
                                                  prevent further loss of funds to students<br /> that do not
                                                  attend </p>
                </div>
              </div>
            </td>
            
            <td>
              <div id="card-header2"  class="card" >
                <div class="card-header">Personal Project</div>
                <div class="card-body">
                  <h4 id="card-title2" class="card-title">Video conference</h4>
                  <p id="card-text2" class="card-text">A JavaScript project that create a live <br />
                                                  video conference and allows connected <br />
                                                  users to chat and has private room'</p>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </section>
    </div>
  );
}

export default About;