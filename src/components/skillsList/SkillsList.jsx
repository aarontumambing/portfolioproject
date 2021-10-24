import "./skillsList.css"
import Skills from "../skills/Skills"
import {skillsSet} from "../../data"

const SkillsList = () => {
    return (
        <div className="skl">
            <div className="skl-texts">
                <h1 className="skl-title">My GitHub Repository</h1>
                <p className="skl-desc"> 
                Here are some of GitHub repositories I've created while studying at Robertson College and Red River College.
                </p>
            </div>
            <div className="skl-list">
                {skillsSet.map((item) => (
                   <Skills key={item.id} img={item.img} link={item.link} desc={item.desc}/> 
                ))}
            </div>
        </div>
    )
}

export default SkillsList
