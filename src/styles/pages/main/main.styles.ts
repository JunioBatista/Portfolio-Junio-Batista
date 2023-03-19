import styled from  'styled-components'

export const HomeMainContainer = styled.section`
    margin-top:4rem ;
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    background-image: url('/images/waves.svg');
    background-color: #191919;
    background-repeat: no-repeat;

    .lang-toggle {
        padding: 8px 0 5px 10px; 
        position: absolute;
        top: 4.5rem;
        right: .5rem;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        text-align: center;
        border-radius: 8px;
        color: rgba(222, 222, 222, 1);
        border:  none;
        transition: .2s;
        vertical-align: baseline;
        color: black;

        span  {
            padding: .5rem;
            font-size:.9rem;
            vertical-align: middle;
        }

        :hover {
            background-color: rgba(0, 255, 247, 1);
        }
        
        :active {
            background-color: rgba(0, 255, 247, 1);
            color: black
        }
    }

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
            font-size: 4rem;
            line-height: 2rem;
        }
    }

    @media (max-width: 1300px) { 

        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: center;
        
        .animation{
            display: none
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
        padding-left: .5rem;
        width: 100%;
        align-self: flex-start !important;
        justify-self: flex-start;

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
        display: flex;
        gap: .5rem;
        flex-grow: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        .iam {
            align-self: flex-end;
            line-height: 2rem;
            font-weight: 400;
            color: rgba(222, 222, 222, 1);
            font-size: 3rem;
            display: block;
        }

        .name { 
            max-width: 50rem;
            font-weight: 900;
            color: rgba(0, 255, 247, 1);
            overflow: hidden;
            white-space: nowrap;
            font-size: 4.5rem;
            animation: typing 2s forwards;
        }

        .profile-picture {
            height: 15em;
            width: 15rem;
            padding: .3rem;
            border: 1px solid #00fff7ff;
            border-radius: 100%;
            box-shadow: .1rem .1rem .1rem .1rem #00fff7ff;
        }
    }

    .buttons {
        margin-top: 1rem;
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;

        button {
            cursor: pointer;
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
                background-color: rgba(0, 255, 247, 1);
                color: black
            }
        }
    }

    @media (max-width: 543px) { 
        display: flex;
        width: 100%;
        .hello {

            margin-left: 3rem;

            h1 {

                font-weight: 400;
                font-size: 1.5rem;

                ::first-letter {
                    text-decoration: underline;
                }
            }
            p {
                width: 10rem;
                font-size:.8rem;
                line-height: .6;
            }
        }   

    
        .presentation .name {
            font-size:3rem;
            max-width: 23rem;
        }

        .presentation .iam {
            width: 30%;
            align-self: flex-end;
            font-weight: 400;
            color: rgba(222, 222, 222, 1);
            font-size: 2rem;
            display: block;
        }

        
        .presentation .buttons button {
            width: 10rem;
            text-align: center;
            margin: 0 .3rem;
            border-radius: 12px;
            padding: .7rem 1rem;
            color: white;
            font-size: .9rem;
            font-weight: 400;
            background: transparent;
            border:  1px solid rgba(0, 255, 247, 1);
            transition: .2s;
            vertical-align: middle;
            line-height: 2rem;
            span  {
                font-weight: 400;
                margin-right: 6px;
                font-size:1.2rem;
                vertical-align: middle;
            }
        }
    }

`



