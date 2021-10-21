import "./intro.css"
import Me from "../../img/me.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Aaron Tumambing</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Student</div>
                            <div className="i-title-item">Aspiring Developer</div>
                            <div className="i-title-item">Support Tech</div>
                            <div className="i-title-item">Gamer</div>
                            <div className="i-title-item">test2</div>
                        </div>
                    </div>
                        <div className="i-desc">
                            Currently honing my skills with Robertson College as a full stack web developer to create web 
                            applications and applying the fundamental methods, 
                            techniques, and processes of software testing to build dynamic 
                            web applications running in the cloud.
                        </div>
                </div>
            </div>

            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img"/>
            </div>
        </div>
    )
}

export default Intro
