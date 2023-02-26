import styled from 'styled-components'

export const HeaderContainer = styled.header`

    padding: 0 1.5rem;
    background-color: rgb(255, 174, 48);
    display:flex !important;
    justify-content: space-between;
    align-items: center;

    nav {
        height: 4rem;

        a {
            margin: 0 1rem;
            font-size: 1.2rem;
            color: rgb(48, 48, 48);
            display: inline-block;
            position: relative;
            padding: 0 0.5rem;
            height: 4rem;
            line-height: 4rem;
            transition: color .3s;

            &:hover {

                color:  rgb(255, 255, 255);
                
            }
            &.active {
                color:white;
            }

            &.active::after {
                content:'';
                height: 6px;
                border-radius: 3px 3px 0 0;
                width: 100%;
                position: absolute;
                bottom: 1px;
                left: 0;
                background-color: white;

            }

        }

    }

    .logo {
        height: 3rem;
        width: 7rem;
    }
`