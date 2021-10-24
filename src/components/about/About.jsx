import "./about.css"
import Me from "../../img/me.png"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div> 
                     <div className="a-card">
                         <img src={Me} alt="" />
               </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-desc">I am an aspiring IT professional that wants to dabble in all streams of information technology, from software development, networking, and even database management.</p>

                <br />

                <h1 className="a-title">Education</h1>
                <p className="a-edu">Robertson College Online <br />
                Full Stack Web Developer Online | Feb 2021 - Oct 2021</p>
                <p className="a-edu">Red River College <br />
                Business Information Technology | Aug 2017 - May 2020</p>
                <br />  
                
                <h1 className="a-title">Skills</h1>
                <p className="a-desc">
                    <ul>
                        <li>Java</li>
                        <li>C#</li>
                        <li>Microsoft SQL Server</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>GitHub / Azure</li>
                    </ul>
                </p>
                
            </div>
            <div className="a-botR">
            <h1 className="a-title">Experience</h1>
                <p className="a-sub">ICT Support Tier 1 Technician <br />
                EPIC Information Solutions | Nov 2020 - Feb 2021</p>
                <p className="a-desc"> - Resolved end-user IT incidents, problems, and requests including password reset, software and hardware support for Manitoba businesses remotely using ConnectWise Manage ticket tracking system.
                <br /> - Improved average daily dropped calls by 75% which enabled faster resolution time and higher daily processed ticket volume.
                <br /> - Escalated appropriate tickets to senior team members with information needed to resolve the ticket.
                </p>

                <p className="a-sub">IT Support Technician<br />
                Agriculture and Agri-Foods Canada | Jan 2020 - Aug 2020</p>
                <p className="a-desc"> - Provided in-person and online support for over 300~ clients and resolved client issues using the Axios Assyst ticketing system. 
                <br /> - Troubleshot VPN and software issues including Microsoft Office 2016applications to configuring hardware by installing the organization’s software image and HDD/RAM/battery swaps for laptops.
                <br /> - Created, updated, and resolved tickets with detailed descriptions on how the situation was handled for accountability and for future reference.
                <br /> - Communicated with vendors to exchange faulty hardware to ensure hardware reliability.
                </p>


            </div>
        </div>
    )
}

export default About
