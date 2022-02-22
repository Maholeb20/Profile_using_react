import React from "react";

function Home() {
  return (
    <div className="home">
      <main>
        <section id="home">
          <table id="mainTable">
            <tr>
              <td colSpan="2" >
                <img src="https://raw.githubusercontent.com/Maholeb20/Html_profile/main/assets/imgs/9.jpg" width="100%"/>
              </td>
            </tr>  
          </table>  
          <div className="container container-about">
            <table id="wrap-about">
              <tr>
                <td  align="center">
                  <div id="bioBox" class="bioBox">
                    <h1 id="name">Excellent Mashengete</h1>
                    <p id="bioinfo">I would describe myself as a dedicated, hardworking, <br />
                    Reliable and highly accurat 'IT Specialist Graduate <br />
                    focused on quality completion of all task given under <br />
                    tight deadlines. Works well under pressure and a team<br /> 
                    player, I easily adapt to new environment.<br /><br />
                    I am mature in my attitude towards my work and always strive to do my best.'+
                    with a National Diploma in IT (Software Development) I have comprehensive understanding of
                    software development life cycle, database design and administration,business analysis and
                    modelling, mobile development, software development and software testing</p>
                    <a href='./about.html'><button class='btn'>Learn more...</button></a>
                  </div>
                </td>
                <td align="right">
                  <img id="userImage" src="https://raw.githubusercontent.com/Maholeb20/Html_profile/main/assets/imgs/personalpic.jpg" alt="Own Photo" />
                </td>
              </tr>
            </table>
           
          </div>
        </section>
      </main>
      
    </div>
  );
}

export default Home;