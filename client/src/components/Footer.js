import React from 'react'
import '../assets/stylesheets/footer.css'

export default function footer() {
  return (
    <div id="container" className="mt-5">
        <div id="part1">
            <div id="companyinfo"> <a id="sitelink" href="#">BBbootstrap</a>
                <p id="title">Cool and Perfect Snippet code</p>
                <p id="detail">
                    We create awesome code snippets that will help you in creating 
                    your own beautiful site. 
                </p>
            </div>
            <div id="explore">
                <p id="txt1">Explore</p> 
                <a className="link" href="#">Home</a> 
                <a className="link" href="#">About</a> 
                <a className="link" href="#">Snippet</a> 
                <a className="link" href="#">Careers</a>
            </div>
            <div id="visit">
                <p id="txt2">Visit</p>
                <p className="text">Lincoln House </p>
                <p className="text">78 Bhulabhai Desai Road </p>
                <p className="text">Mumbai 400 026 </p>
                <p className="text">Phone: (22) 2363-3611 </p>
                <p className="text">Fax: (22) 2363-0350 </p>
            </div>
            <div id="legal">
                <p id="txt3">Legal</p> 
                <a className="link1" href="#">Terms and Conditions</a> 
                <a className="link1" href="#">Private Policy</a>
            </div>
            <div id="subscribe">
                <p id="txt4">Subscribe to US</p>
                <form> 
                    <input id="email" type="email" placeholder="Email"/> 
                </form> 
                <a className="waves-effect waves-light btn">Subscribe</a>
                <p id="txt5">Connect With US</p> 
                <i className="fab fa-facebook-square social fa-2x"></i> 
                <i className="fab fa-linkedin social fa-2x"></i> 
                <i className="fab fa-twitter-square social fa-2x"></i>
            </div>
        </div>
        <div id="part2">
            <p id="txt6">
                <i className="material-icons tiny"> copyright</i>
                copyright 2019 BBbootstrap - All right reserved
            </p>
        </div>
    </div>
  )
}
