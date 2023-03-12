import styled from 'styled-components'

export const HeaderContainer = styled.header`
    position: fixed;
    z-index: 1000;
    width: 100%;
    display: block;
    padding: 0 1.5rem;
    background-color: #000000;
    border-bottom: 1px solid rgb(145, 145, 145);
    display:flex;
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



    @media (max-width: 1015px) { 
        height: 4rem;
        padding: 0 .8rem 0 0;

        .icon {
            position: relative;
            width:  50px;
            height: 50px;
        }

        .hamburguer {
            border-radius: 4px;
            position: absolute;
            top: 50%;
            width: 37px;
            height:6px;
            background-color: #fff;
            transition: 0.5s;
        }

        .hamburguer::before {
            border-radius: 4px;
            position: absolute;
            top: -12px;
            content: "";
            width: 120%;
            height:6px;
            background-color: #fff;
            transition: 0.5s;
        }

        .hamburguer::after {
            border-radius: 4px;
            position: absolute;
            top: 12px;
            content: "";
            width: 120%;
            height:6px;
            background-color: #fff;    
            transition: 0.5s;
        }

        .icon-active .hamburguer{
            background: transparent;
        }

        .icon-active .hamburguer::after{
            top:0;
            background: #fff;
            transform: rotate(225deg);
        }
        
        .icon-active .hamburguer::before{
            top:0;
            background: #fff;
            transform: rotate(-225deg);
        }

        .mobo-nav-active{
            height: calc(100vh - 8.5rem);
            width: 100%;
            margin-top:6rem;
            position: absolute;
            top:-40px;
            right: 0px;
            display: flex;
            flex-direction: column;
            z-index: 1000;
            background-color: #000000;

            a{
                margin: 0;
                text-align: center;
                background-color: #000000;
                padding: 0 2rem;
            }
        }
        
        nav {
            display: none;
        }

        display: flex;
        width: 100%;
        justify-content: space-between;

    }

`