import styled from  'styled-components'

export const HomeMainContainer = styled.section`
    box-sizing: border-box;
    width: 100%;
    height: calc(100vh - 4.1rem);
    display: grid;
    grid-template-columns: .5fr 1fr;
    gap: 1rem;
    background-image: url('/images/wave.svg');
    background-color: rgb(230,231,233);
    background-repeat: no-repeat;

    .profile {
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column;
        height: 10rem;

        .main-title {
            font-size: 2rem;
            color: black;
            display: block;
            text-align: right;
        }


        
        .name { 

            color: rgb(255, 157, 0  );
            overflow: hidden;
            border-right: .6rem solid rgb(255, 157, 0  );
            white-space: nowrap;
            font-size: 3rem;
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