import React from "react";
import styled from "styled-components";

export const GoalContainer = styled.div`
  height: 80vh;

  display: flex;
  width: 2000px;
  max-width: 100vw;
  justify-content: space-around;
  align-items: center;
`;
export const DivContainerGoal = styled.div`
  height: 80%;
  background: #BABABA;
  width: 30.3%;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items center;
  -webkit-box-shadow: 7px 7px 13px 6px rgba(0,0,0,0.4); 
box-shadow: 7px 7px 13px 6px rgba(0,0,0,0.4);

    img{

        height: 120px;
        margin-top: 2.5rem;
        margin-left: 1rem;
    }
    h1{
        color: #2E2E2E;
        font-family: Exo;
        margin-top: 2rem;
        font-weight: 700;
        font-size: 2rem;
        
      
    }
    p{
        margin-top: 4rem;
        font-size: 0.7rem;
        color: #2E2E2E;
        width: 80%;
        margin-bottom: 6rem;
        
        text-align: center;
    }
`;
export const ContainerDivGoal = styled.div`
  background: #bababa;
  height: 80%;
  width: 30.3%;
  border-radius: 40px;

  -webkit-box-shadow: 7px 7px 13px 6px rgba(0, 0, 0, 0.4);
  box-shadow: 7px 7px 13px 6px rgba(0, 0, 0, 0.4);
`;
export const GoalBg = styled.div`
  background: #0f0f0f;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export function BannerGoalsComp() {
  return (
      <>
      
    <GoalBg>
      <GoalContainer>
        <DivContainerGoal>
          <img src={require("../../assets/goallogo.png")} />
          <h1>Objetivo</h1>
          <p>
            No mercado há quatro anos, com bagagem em mais de vinte anos de
            experiência profissional de seu fundador, aprensenta aos clientes
            capacidades técnicas da empresa ADK Soldas Automatizadas, na
            prestação de serviços nas áreas de automação e robótica, com
            especialidades em soldagem TIG,MIG/MAG e arco-submerso.
          </p>
        </DivContainerGoal>

        <DivContainerGoal>
          <img src={require("../../assets/mission.png")} />
          <h1>Missão</h1>
          <p>
            No mercado há quatro anos, com bagagem em mais de vinte anos de
            experiência profissional de seu fundador, aprensenta aos clientes
            capacidades técnicas da empresa ADK Soldas Automatizadas, na
            prestação de serviços nas áreas de automação e robótica, com
            especialidades em soldagem TIG,MIG/MAG e arco-submerso.
          </p>
        </DivContainerGoal>

        <DivContainerGoal>
          <img src={require("../../assets/vision.png")} />
          <h1>Visão</h1>
          <p>
            No mercado há quatro anos, com bagagem em mais de vinte anos de
            experiência profissional de seu fundador, aprensenta aos clientes
            capacidades técnicas da empresa ADK Soldas Automatizadas, na
            prestação de serviços nas áreas de automação e robótica, com
            especialidades em soldagem TIG,MIG/MAG e arco-submerso.
          </p>
        </DivContainerGoal>
      </GoalContainer>
    </GoalBg>
    </>
  );
}
