import styled from "styled-components";

export const SepararContainer = styled.div`

    display: flex;
    gap: 2rem;
    justify-content: center;
    margin: 2rem;
    
    @media (max-width: 1140px) {
        display:block;
        text-align: center;
        margin: 2.5rem;
        gap: 1rem;
        padding-bottom: 2rem;
    }
`

export const ParticipantesContainer = styled.div`

    background: ${props => props.theme.preto};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 6px 4px rgba(0, 0, 0, 0.30);
    width: 428px;
    margin-bottom: 5rem;

    img.integrantes {
        width: 271px;
        height: 263px;
        margin: 2rem;
    }
    

    h2 {
        color: ${props => props.theme.laranjaTitulo};
        margin-bottom: 1rem;
        font-size: 40px;
    }

    p {
        color: ${props => props.theme.laranjaAncora};
        width: 264px;
        height: 100px;
        margin-bottom: 1rem;
        font-size: 30px;
    }

    div {
        margin-top: 3rem;
    }

    @media (max-width: 1140px){
        width: 300px;
        height: 430px;
        margin-bottom: 3rem;

        img.integrantes {
            width: 197px;
            height: 189px;
        }

        h2 {
            font-size:20px;
        }

        p {
            font-size: 16px;
        }

        img {
            width: 40px;
            height: 40px;
           
        }

        div {
            margin-top: 0;
        } 
    }
`

export const EquipeContainer = styled.div`

    text-transform: uppercase;
    margin-top: 2rem;
    text-align: center;

    h1 {
        font-size: 64px;
    }
    @media (max-width: 1140px){

        h1 {
            font-size: 40px;
        }
    }
`