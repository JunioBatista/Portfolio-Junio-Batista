import styled from "styled-components";


export const SkillsContainer = styled.section`

    /* pattern */
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    background-color: #aa1186;

    .linha {
        width: 100%;
        height: 1px;
        border: 0;
        background: #333;
        background-image: linear-gradient(to right, #00fff7ff, white, #00fff7ff);
    }
`