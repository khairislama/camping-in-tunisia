import React from 'react'
import '../assets/stylesheets/contactUs.css'

export default function ContactUs() {
  return (
    <div style={{ boxSizing: "border-box" }}>
        <h2>Responsive Contact Section</h2>
        <p>Resize the browser window to see the effect.</p>
        <div className="container contactUsContainer">
            <div style={{ textAlign:"center" }}>
                <h2>Contact Us</h2>
                <p>Swing by for a cup of coffee, or leave us a message:</p>
            </div>
            <div className="row contactUsRow">
                <div className="contactUsColumn">
                    <img 
                        src="https://www.w3schools.com/w3images/map.jpg" 
                        style={{ width:"100%" }}
                    />
                </div>
                <div className="contactUsColumn">
                    <form action="/#">
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" className="contactUsInput"
                            name="firstname" placeholder="Your name.."
                        />
                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" 
                            placeholder="Your last name.." className="contactUsInput"
                        />
                        <label for="country">Country</label>
                        <select id="country" name="country" className="contactUsInput">
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>
                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" className="contactUsInput"
                            placeholder="Write something.." style={{ height:"170px" }}
                        ></textarea>
                        <input type="submit" value="Submit" className="contactUsSubmit"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
