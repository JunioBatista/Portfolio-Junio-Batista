import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: block;
    padding: 0 1.5rem;
    background-color: #000000;
    border-bottom: 1px solid rgb(145, 145, 145);
    display:flex !important;
    justify-content: space-between;
    align-items: center;

    nav {
        height: 4rem;

        a {
            margin: 0 1.5rem;
            font-size: 1.2rem;
            color: rgb(145, 145, 145);
            display: inline-block;
            position: relative;
            height: 4rem;
            line-height: 4rem;
            transition: color .3s;

            &:hover {
                color:  rgb(255, 255, 255);
            }

            &.active {
                color:rgba(0, 255, 247, 1)
            }

            &.active::after {
                content:'';
                height: 6px;
                border-radius: 3px 3px 0 0;
                width: 100%;
                position: absolute;
                bottom: 1px;
                left: 0;
                background-color: rgba(0, 255, 247, 1);

            }

        }

    }

    .logo {
        margin-left: 1rem;
        border-radius: 30%;
        height: 3.5rem;
        width: 4.5rem;
    }
`