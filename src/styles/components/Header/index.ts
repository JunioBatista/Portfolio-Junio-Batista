import styled from 'styled-components'

export const HeaderContainer = styled.header`

    height: 60px;
    padding: 0 1.5rem;
    background-color: #47467B;
    display:flex !important;
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

    .logo {
        height: 3rem;
        width: 7rem;
    }
`