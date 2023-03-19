import styled from "styled-components";


export const AboutContainer = styled.section`

    /* pattern */
    padding: 0 2rem;
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2px  1fr;
    background-color: #1b2f30;
    align-items: center;
    
    .linha {
        width: 100%;
        height: 1px;
        border: 0;
        background: #333;
        background-image: linear-gradient(to right, #00fff7ff, white, #00fff7ff);
    }

    .section{
        width:80%;
        margin:0 auto;
        height:400px;
        position:relative;
        padding:0
    }

    .hscroll-line {
        bottom:30px;
        right: 50%;
        height: 1px;
        position: absolute;
        overflow: hidden;
        width:600px;
        transform: rotate(90deg);
    
    }

    .hscroll-line::before,
    .hscroll-line::after {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: ""
    }

    .hscroll-line:before {
        background: #ffffff3b;
    }

    .hscroll-line::after {
        background: #00fff7ff;
        animation: move 3s infinite
    }

    @keyframes move {
        0% {
            transform: translate3d(-200%, 0, 0)
        }
        60% {
            transform: translate3d(100%, 0, 0)
        }
        100% {
            transform: translate3d(100%, 0, 0)
        }
    }

`