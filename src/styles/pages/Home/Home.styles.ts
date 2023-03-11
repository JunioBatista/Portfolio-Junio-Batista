import styled from  'styled-components'

export const HomeMainContainer = styled.section`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 50% 45%;
    gap: 5%;
    background-image: url('/images/waves.svg');
    background-color: #191919;
    background-repeat: no-repeat;

    @keyframes typing {
    from { width: 0 }
    to { width: 100% }
    }

    .animation {
        height: 100%;
        position: relative;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .profession {
            position: absolute;
            bottom:15%;
            font-family: 'Bad Script', cursive;
            font-size: 2rem;
            line-height: 2rem;
        }
    }
`

export const FirstSection  =  styled.div`
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;

    .hello {
        align-self: flex-start !important;
        justify-self: flex-start;
        padding: 1rem;

        h1 {
            font-weight: 400;
            font-size: 1.5rem;

            ::first-letter {
                text-decoration: underline;
            }
        }
        p {
            font-size:.8rem;
            line-height: .6;
        }
    }   

    .presentation {
        align-self:center;
        width: 30rem;
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        .iam {
            align-self: flex-end;
            font-weight: 400;
            color: rgba(222, 222, 222, 1);
            font-size: 2rem;
            display: block;
        }

        .name { 
            max-width: 30rem;
            font-weight: 900;
            color: rgba(0, 255, 247, 1);
            overflow: hidden;
            border-right: .6rem solid rgba(0, 255, 247, 1);
            white-space: nowrap;
            font-size: 3.7rem;
            animation: typing 2s forwards;

        }

        .profile-picture {
            height: 10rem;
            width: 10rem;
            padding: .3rem;
            border: 3px solid rgba(0, 255, 247, 1);
            border-radius: 50%;
            margin-bottom: -3rem;
        }
    }

    .buttons {
        margin-top: 1rem;
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;

        button {
            width: 15rem;
            text-align: center;
            margin: 0 .3rem;
            border-radius: 12px;
            padding: .7rem 2rem;
            color: white;
            font-size: .8rem;
            font-weight: 400;
            background: transparent;
            border:  1px solid rgba(0, 255, 247, 1);
            transition: .2s;
            vertical-align: middle;
            line-height: 2rem;
            span  {
                font-weight: 400;
                margin-right: 6px;
                font-size:1.4rem;
                vertical-align: middle;
            }

            :hover {
                background-color: rgba(0, 255, 247, 1);
                color: black
            }
            
            :active {
                background-color: transparent;
                color: black
            }
        }
    }

`
