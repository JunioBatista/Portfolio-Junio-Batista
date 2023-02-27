import styled from  'styled-components'

export const HomeMainContainer = styled.section`
    padding: 1rem;
    box-sizing: border-box;
    width: 100%;
    height: calc(100vh - 6rem);
    display: grid;
    grid-template-columns: .5fr 1fr;
    gap: 1rem;

    .stacks {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;


        .profession {
            text-align: center;
            font-size: 3.5rem;
            font-family: 'Bad Script', cursive;
            color: black;
        }
    }

    .profile {
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column;

        .perfilImage {
            border-radius: 10%;
            height: 58vh;
            width: 100%;
        }

        .typing {
            display: flex;
            height: 7rem;
            display: inline-block;
        }

        .main-title {

            font-size: 2rem;
            color: black;
            font-weight: 900 !important;
            display: block;
            text-align: right;
        }


        
        .name { 

            color: rgb(255, 157, 0);
            overflow: hidden;
            border-right: .6rem solid rgb(255,174,48);
            white-space: nowrap;
            font-size: 4rem;
            width: 0;
            animation: typing 2s forwards;
            >span {
                color: black;
            }
        }


    }

    @keyframes typing {
    from { width: 0 }
    to { width: 100% }
    }

`