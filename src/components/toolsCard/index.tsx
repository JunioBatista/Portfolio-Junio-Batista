import Image from "next/image";
import { ToolCardContainer } from "../../styles/components/cardProgrammingTools.style.ts";

interface programmingToolProp {
    id:number;
    name: string;
    image: string
}
interface HomeProps {
    tool: programmingToolProp
}

export function ProgrammingToolsCard({tool}: HomeProps) {
    return (
            <ToolCardContainer>
                <Image width='50' height='50' alt={tool.name} src={tool.image} />
                <div>
                    <p>{tool.name}</p>
                </div>
            </ToolCardContainer>
    )
}