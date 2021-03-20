import React from 'react'
import '../assets/stylesheets/aboutUs.css'

export default function AboutUs() {
  return (
    <div style={{ margin: "0" }} className="px-5">
        <div className="about-section">
            <h1>About Us Page</h1>
            <p>Some text about who we are and what we do.</p>
            <p>Resize the browser window to see that this page is responsive by the way.</p>
        </div>

        <h2 style={{textAlign:"center"}}>Our Team</h2>
        <div className="row aboutUsRow">
            <div className="aboutUsColumn">
                <div className="aboutUsCard">
                    <img src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane" style={{width:"100%"}}/>
                    <div className="container aboutUsContainer">
                        <h2>Jane Doe</h2>
                        <p className="aboutUsTitle">CEO & Founder</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>jane@example.com</p>
                        <p><button className="aboutUsButton">Contact</button></p>
                    </div>
                </div>
            </div>

            <div className="aboutUsColumn">
                <div className="aboutUsCard">
                    <img src="https://www.w3schools.com/w3images/team2.jpg" alt="Mike" style={{width:"100%"}}/>
                    <div className="container aboutUsContainer">
                        <h2>Mike Ross</h2>
                        <p className="aboutUsTitle">Art Director</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>mike@example.com</p>
                        <p><button className="aboutUsButton">Contact</button></p>
                    </div>
                </div>
            </div>
            
            <div className="aboutUsColumn">
                <div className="aboutUsCard">
                    <img src="https://www.w3schools.com/w3images/team3.jpg" alt="John" style={{width:"100%"}}/>
                    <div className="container aboutUsContainer">
                        <h2>John Doe</h2>
                        <p className="aboutUsTitle">Designer</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>john@example.com</p>
                        <p><button className="aboutUsButton">Contact</button></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
