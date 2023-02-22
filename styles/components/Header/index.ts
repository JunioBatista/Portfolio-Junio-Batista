import styled from 'styled-components'

export const HeaderContainer = styled.header`

    height: 60px;
    padding: 0 20px;
    background-color: gray;
    display:flex;
    justify-content: space-between;
    align-items: center;

    ul {
        display: flex;
        align-items: center;
        list-style-type: none;
    }

    li {
        margin: 0 1rem;
    }
`