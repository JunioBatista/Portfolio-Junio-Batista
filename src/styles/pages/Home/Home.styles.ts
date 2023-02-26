import styled from  'styled-components'

export const HomeMainContainer = styled.section`
    box-sizing: border-box;
    margin: 1rem 5rem;
    width: auto;
    height: calc(100vh - 6rem);
    display: flex;
    justify-content: space-around;
    gap: 0.5em;

    .presentation {
        padding: 2rem;
        display: flex;
        flex-direction: column;

        .typing {
            height: 7rem;
            display: inline-block;
        }

        .main-title {
            font-size: 3rem;
            color: black;
            font-weight: 900 !important;
            display: block;
        }

        .name { 
            color: #47467B;
            overflow: hidden;
            border-right: .6rem solid #47467B;
            white-space: nowrap;
            font-size: 5rem;
            width: 0;
            animation: typing 2s forwards;
            >span {
                color: black;
            }
        }

        .profession {
            text-align: center;
            font-size: 2rem;
            font-family: 'Bad Script', cursive;
            color: black;
        }

    }

    .photo {
        .perfilImage {
            border-radius: 10%;
            height: 72vh;
            width: 25vw;
        }
    }

    @keyframes typing {
    from { width: 0 }
    to { width: 100% }
    }

`