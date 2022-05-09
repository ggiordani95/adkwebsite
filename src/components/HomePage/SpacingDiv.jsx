import React from "react";
import styled from "styled-components";

export const SpacingDiv = styled.div`
    
    background: rgb(0,0,0);
    background: linear-gradient(72deg, rgba(0,0,0,0.3757878151260504) 0%, rgba(82,82,82,1) 0%, rgba(184,184,184,1) 48%, rgba(73,73,73,1) 100%);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border-bottom: solid 1rem grey;
    h1 b{
        color: var(--main-color);
        color: black;
    }
    h1{
        max-width: 1270px;
                font-family: Exo;
                margin-top: 5rem;
                margin-bottom: 5rem;
                font-weight: 600;
    }
    @media (min-width: 300px) {
        h1{
            font-size: 1rem;
            max-width: 260px;
            margin-top: 3rem;
            margin-bottom: 3rem;
        }
    }
        @media (min-width: 768px) {
            h1{
                font-size: 1rem;
                max-width: 650px;
                
            }
        }
        @media (min-width: 1280px) {
            h1{
                font-size: 1rem;
                max-width: 900px;
                margin-top: 4rem;
                margin-bottom: 4rem;
            }
        }
          @media (min-width: 1480px) {
            h1{
                font-size: 1.2rem;
                margin-top: 5rem;
            margin-bottom: 5rem;
            }
            
            img{
                max-width: 500px;
                padding-top: 4rem;
                
            }
        }
      
`;

export function SpacingAdk() {
  return (
    <SpacingDiv id="empresa">
      <h1>
        No mercado há quatro anos, com bagagem em mais de{" "}
        <b>vinte anos de experiência profissional</b> de seu fundador.
      </h1>

      <h1>
        ADK Soldas Automatizadas é especializada na prestação de serviços nas
        áreas de automação e robótica de soldagem{" "}
        <b>TIG, MIG/MAG e arco-submerso</b>.
      </h1>

      <h1>
        Nossa missão é oferecer aos nossos clientes serviços em soldagem
        automatizada/mecanizada que dinamizem a produção,{" "}
        <b>melhorando a qualidade e produtividade da sua empresa</b>.
      </h1>
    </SpacingDiv>
  );
}
