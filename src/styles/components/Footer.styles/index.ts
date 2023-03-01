import styled from 'styled-components'

export const FooterContainer = styled.footer`
    border-top: 1px solid rgb(145, 145, 145);;
    padding: 0 1.5rem;
    background-color: #000000;
    border-bottom: 1px solid rgb(145, 145, 145);
    display:flex;
    height: 5rem;
    justify-content:space-between;
    align-items: center;

    > button {
        border-radius: 12px;
        padding: 1rem 3rem;
        color: white;
        font-size: 1.2rem;
        font-weight: 400;
        background: transparent;
        border:  3px solid rgba(0, 255, 247, 1);
        transition: .2s;
        :hover {
            background-color: rgba(0, 255, 247, 1);
            color: black
        }
        :active {
            background-color: rgba(0, 129, 185, 1);;
            color: black
        }
    }
`