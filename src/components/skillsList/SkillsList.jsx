import "./skillsList.css"
import Skills from "../skills/Skills"

const SkillsList = () => {
    return (
        <div className="skl">
            <div className="skl-texts">
                <h1 className="skl-title">My GitHub Repository</h1>
                <p className="skl-desc"> 
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                </p>
            </div>

            <div className="skl-list">
                <Skills/>
                <Skills/>
                <Skills/>
            </div>
        </div>
    )
}

export default SkillsList
