import { Teste } from "../../styles/components/cardProgrammingTools.style.ts";

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
        <Teste>
            <p>I'm a card! {tool.name}</p>
        </Teste>
    )
}