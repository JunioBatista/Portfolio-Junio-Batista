import styled from 'styled-components'

export const FooterContainer = styled.footer`
    display: block;
    border-top: 1px solid rgb(145, 145, 145);;
    padding: 0 1.5rem;
    background-color: #000000;
    border-bottom: 1px solid rgb(145, 145, 145);
    display:flex;
    height: 5rem;
    justify-content:center;
    align-items: center;
    gap:2rem;

    .social-media {
        width: 200px;
        padding-left:1rem ;
        border-left: 1px solid rgba(0, 255, 247, 1);
        display: flex;
        flex-direction: column;

        span{
            font-size: .8rem;
        }

        > div {     
            display: flex;
            justify-content:space-between;

            a {
                font-size: 1.5rem;
                color: rgb(145, 145, 145);
                transition: .6s;
                &:hover{
                    color: rgba(0, 255, 247, 1);
                }
            }
        }
    }


`