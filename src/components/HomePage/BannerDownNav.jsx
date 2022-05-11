import React from "react";
import styled from "styled-components";

export const VideoBg = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 300px) {
    height: 36vh;
    
  }
  @media (min-width: 768px) {
    height: 40vh;
    
    
  }
  @media (min-width: 1280px) {
    
    height: 50vh;
    
    
    
  }
  
`;
export const VideoBgAskTeam = styled.div`
  z-index: 0;
  background: #0000008c;
  height: 100vh;
  display: flex;
  justify-content: center;
 

  width: 100vw;
 
      
     
      
  
`;
export const AskTeamButton = styled.a`
  text-decoration: none;
  
  padding-top: 1.2rem;
  
`;
export const AskTeamButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  background: var(--main-color);
 
  color: #ffffff;
  font-size: 1.2rem;
  border-radius: 1rem;
  font-weight: 500;
  font-family: var(--ff-secundary);
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
  &:hover {
    color: black;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0);
  }
  @media (min-width: 280px) {
    
    height: 50px;
    width: 120px;
    font-size: 0.9rem;
    
    
    
  }
  @media (min-width: 1280px){
    height: 50px;
    width: 16vw;
  }
`;
export const Quotation = styled.div`
  z-index: 0;
  background: #0000008c;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const SpanAskTeam = styled.span`
  
  display: flex;
  flex-direction: column;
  background: transparent;
  align-items: center;
  justify-content: center;
  padding-top: 0.4rem;
  
  h1 {
    color: white;
    padding-bottom: 0.5rem;
    font-size: 1.4rem;
  }
  @media (min-width: 280px) {
    h1{
    
    font-size: 1.1rem;
  }
    
    
  }
  @media (min-width: 1280px){
    h1{
    
      font-size: 1.5rem;
    }
  }
`;

export function BannerDownNav() {
  return (
    <>
      <VideoBg>
        <VideoBgAskTeam>
            
          <SpanAskTeam>
            <h1>Serviços técnicos especializados em</h1>
            <h1> equipamentos de solda robotizada.</h1>
            <AskTeamButton href="https://wa.me/555496767579" target="_blank">
              <AskTeamButtonDiv >Tire sua Dúvida</AskTeamButtonDiv>
            </AskTeamButton>
          </SpanAskTeam>
          
          
        </VideoBgAskTeam>
      
      </VideoBg>
    </>
  );
}
