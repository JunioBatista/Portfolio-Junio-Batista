import { Fade, Zoom } from "react-awesome-reveal";
import { ProgrammingToolsCard } from "../../components/toolsCard";
import { tools as data }  from '../../data'
import { SkillsMainContainer } from "../../styles/pages/skills/skills.styles";

export default function skills () {

    let tools = data
    let countdown = 600

    return (
        <SkillsMainContainer>
            <div className="tools-container">
            { tools
            .map((stack)=>{ 
            countdown += 100
            return <Zoom delay={countdown}>
                <ProgrammingToolsCard tool={stack}/>
                </Zoom> }
                )
            }
            </div>
        </SkillsMainContainer>
    )
}