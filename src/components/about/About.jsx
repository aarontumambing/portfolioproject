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
            <div className="a-right"><h1 className="a-title">About Me</h1>
                <p className="a-sub">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p className="a-desc">Sed ut perspiciatis unde omnis iste natus error 
                sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit 
                aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum 
                quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi 
                tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p></div>
        </div>
    )
}

export default About
