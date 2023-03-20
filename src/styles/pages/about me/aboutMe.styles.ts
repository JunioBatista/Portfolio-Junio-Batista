import styled from "styled-components";


export const AboutContainer = styled.section`

    /* pattern */
    padding: 2rem;
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #1b2f30;
    align-items: center;
    background-image: url('/images/about-banner.png');
    background-color: #191919;
    background-size: contain;
    background-repeat: no-repeat;
    
    .image-container {
        padding: 15%;
        height: 100%;
        width: 80%;

        .about__img {
            object-fit: contain;
            height: 80%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            background-color: transparent;

            img {
                width: 100%;
                height: 100%;
                max-height:100%;
                max-width: 100%;
            }
        }

        .margin-top {
            height: 10%;
            width: 25%;
            border-top: .6rem solid #00d9ff;
            border-left: .6rem solid #00d9ff;

            position: absolute;
            top: -15px;
            left: -15px;
            
        }
        .margin-bottom {
            height: 10%;
            width: 25%;
            border-right: .6rem solid #00d9ff;
            border-bottom: .6rem solid #00d9ff;
            position: absolute;
            bottom: -15px;
            right: -15px;

        }


    }

    @media (max-width: 1015px) { 
        display: flex;
        flex-direction:column;
        padding: 0;
        background-image:none;

        .image-container {
            width: 100%;
        }
        .about__img {
            width:100%;
        }
    }

    

`