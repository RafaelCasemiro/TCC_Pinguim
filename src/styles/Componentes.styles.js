import styled from "styled-components"

export const SectionContainer = styled.section`
    display: flex;
    align-items: center;
    background: ${props => props.theme.caixas};
    border-radius: 2rem;
    margin-inline: 2rem;
    margin-top: 2rem;
    gap: 2rem;
    font-size: 1rem;
    padding-bottom: 2rem;
    

    li {
        font-size: 30px;
        margin-left: 8rem;
    }

    img {
        width: 332px;
        height: 295px;
        margin: 1rem;
    }

    @media (max-width: 1140px){

        display: block;
        text-align: center;
        li{
            font-size: 20px;
            margin-left: 0;
            margin-inline: 1rem;
        }
        img {
            width: 151px;
            height: 129px;
        } 
        
    }




`

export const CompContainer = styled.div`

padding-bottom: 2rem;

    h1 {
        margin-block: 5rem;
        text-transform: uppercase;
        font-size: 40px;
        text-align: center;
    }


    @media (max-width: 1140px){
        h1{
            font-size:40px ;
            margin-block:3rem ;
        }
    }
`