import styled from  'styled-components'

export const HomeMainContainer = styled.section`
    box-sizing: border-box;
    margin: 1rem 5rem;
    width: auto;
    height: calc(100vh - 6rem);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    .presentation {
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

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
            color: rgb(255, 157, 0);
            overflow: hidden;
            border-right: .6rem solid rgb(255,174,48);
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
        /* background-color: rgba(248, 237, 222,0.8);    */
        display: flex;
        align-items: center;
        justify-content: center;
        .perfilImage {
            border-radius: 40%;
            height: 72vh;
            width: 25vw;
        }
    }

    @keyframes typing {
    from { width: 0 }
    to { width: 100% }
    }

`