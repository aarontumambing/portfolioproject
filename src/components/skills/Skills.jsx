import "./skills.css"

const Skills = ({img,link,desc}) => {
    return (
        <div className="s">
            <div className="s-browser">
                <div className="s-circle"></div>
                <div className="s-circle"></div>
                <div className="s-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer" ><p>{desc}</p>
                <img src={img} alt="" className="s-img"/>
                
            </a>
        </div>
    );
};

export default Skills
