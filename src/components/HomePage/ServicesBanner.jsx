import React from "react";
import styled from "styled-components";

export const ContainerServices = styled.div`
  width: 100%;

  padding: 0 8%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    72deg,
    rgba(0, 0, 0, 0.3757878151260504) 0%,
    rgba(0, 0, 0, 1) 0%,
    rgba(28, 28, 28, 1) 48%,
    rgba(0, 0, 0, 1) 100%
  );
  h1 {
    text-align: center;
    padding-top: 5rem;
    margin-bottom: 100px;
    font-weight: 600;
    position: relative;
    font-size: 1.7rem;
    color: whitesmoke;
  }
  h1::after {
    content: "";
    background: #ff5c00;
    width: 7rem;
    height: 5px;
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;
export const RowServices = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 2fr));
  grid-gap: 30px;

  @media (min-width: 300px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 2fr));
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(450px, 2fr));
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  }
`;
export const Services = styled.div`
  text-align: center;

  margin-bottom: 4rem;
  padding: 2rem 10px;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: #bababa;
  transition: transform 0.5s, background 0.5s;
  &:hover {
    background: #212529;
    color: #fff;
    transform: scale(1.1);
  }

  h2 {
    font-weight: 800;
    padding-bottom: 1rem;
    font-size: 1.4rem;
    font-family: Exo;
  }
  i {
    font-size: 6rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
  p {
    font-size: 1.2rem;
  }
  &:hover i {
    color: #fff;
  }
  &:hover h2 {
    color: #ff5c00;
  }
  &:hover li {
    color: white;
  }
  @media (min-width: 300px) {
    p {
      font-size: 0.8rem;
    }
    i {
      font-size: 4rem;
      margin-bottom: 2rem;
      margin-top: 2rem;
    }
    h2 {
      font-weight: 700;
      padding-bottom: 1rem;
      font-size: 1.1rem;
    }
  }
`;

export const LiService = styled.li`
  font-size: 1.2rem;
  font-family: Exo;
  text-align: start;
  padding-top: 1rem;
  font-weight: 700;
  color: black;
  position: relative;
  right: 1rem;

  b {
    color: var(--main-color);
    font-size: 2rem;
  }

  @media (min-width: 300px) {
    font-size: 1rem;
    text-align: start;
    padding-left: 1.5rem;

    b {
      font-size: 1rem;
    }
  }
  @media (min-width: 568px) {
    padding-left: 3.5rem;
  }
  @media (min-width: 700px) {
    padding-left: 4.5rem;
  }
  @media (min-width: 887px) {
    padding-left: 1.5rem;
  }
`;
export const ButtonService = styled.a`
  position: relative;
  height: 5rem;
  text-decoration: none;

  border-radius: 2rem;
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  background-color: #2ecc71;
  border: none;
  border-bottom: 5px solid #27ae60;
  text-shadow: 0px -2px #27ae60;
  -webkit-transition: all 0.1s;
  transition: all 0.1s;
  &:hover,
  &:active {
    -webkit-transform: translate(0px, 5px);
    -ms-transform: translate(0px, 5px);
    transform: translate(0px, 5px);
    border-bottom: 1px solid #2ecc71;
    color: whitesmoke;
  }
  @media (min-width: 300px) {
    font-size: 0.9rem;
    height: 4rem;
    padding: 1.2rem;
  }
  @media (min-width: 1280px) {
    font-size: 1.2rem;
    height: 5rem;
    padding: 1.5rem;
  }
`;
export const installtext =
  "Fornecimento de mão de obra para desmontagem/montagem de células robotizadas, e ou equipamentos mecanizados de soldagem.";

export const trainingtext =
  "Técnico especializado para treinamento 'in company' em células robotizadas, e ou equipamentos mecanizados de soldagem, conforme necessidade da sua empresa.";

export const advisortext =
  "Serviço técnico especializado para resolução de problemas em solda.";

export const technicaltext =
  "Serviço técnico especializado para análise de soluções em solda.";

export const projecttext =
  "Serviço técnico especializado para desenvolvimento de novos gabaritos.";

export const programmingtext =
  "Serviço técnico especializado para desenvolvimento de programações para soldagem.";

export function ServicesBanner(props) {
  const ServicesData = [
    {
      itemname: "Instalações",
      icon: "fa-solid fa-arrow-up-from-bracket",
      textitem: installtext,
      li: [
        " Mudanças de layout.",
        " Instalação mecânica.",
        " Instalação elétrica.",
        " Instalação pneumática.",
        " Instalação hidráulica.",
        " Montagens em geral.",
        " Teste de funcionamento.",
      ],

      id: 1,
    },
    {
      itemname: "Treinamento",
      icon: "fa-solid fa-graduation-cap",
      textitem: trainingtext,
      li: [
        " Programação robô",
        " Operação de célula robotizada.",
        " Manutenção básica de célula robotizada.",
        " Desenvolvimento de processos de solda.",
        " Integração de novos colaboradores.",
      ],

      id: 1,
    },
    {
      itemname: "Assessoria Técnica",
      icon: "fa-solid fa-person-chalkboard",
      textitem: advisortext,
      li: [
        " Descontiniuidades de solda (imperfeições).",
        " Atendimento de normas técnicas.",
        " Melhoria de produtividade.",
        " Melhoria de qualidade.",
        " Desenvolvimento de novos processos.",
        " Programação robô de itens para soldagem.",
      ],

      id: 1,
    },
    {
      itemname: "Consultoria Técnica",
      icon: "fa-solid fa-square-pen",
      textitem: technicaltext,
      li: [
        " Estudo de novos equipamentos.",
        " Analisar possíveis dificuldades de automatização da peça a ser soldada e orientar tomadas de decisões (desenvolvimento de novos produtos).",
        " Acompanhamento e análise de produção.",
        " Diagnósticos e encaminhamento para melhorias.",
        " Melhoria da qualidade.",
        " Programação robô de itens para soldagem.",
      ],

      id: 1,
    },
    {
      itemname: "Projeto e Execução de Gabaritos de Soldas",
      icon: "fa-solid fa-square-check",
      textitem: projecttext,
      li: [
        " Projeto de gabaritos de solda.",
        " Fabricação de gabaritos de solda.",
        " Programação e desenvolvimento de processo de solda para novos gabaritos.",
        " Reforma de gabaritos.",
      ],

      id: 1,
    },
    {
      itemname: "Programação",
      icon: "fa-solid fa-laptop-code",
      textitem: programmingtext,
      li: [
        " Consultoria e assessoria especializada para desenvolvimento de novos equipamentos e ou retrofitting. ",
        " Execução de projetos especiais.",
      ],

      id: 1,
    },
    {
      itemname: "Integração de Novos Equipamentos Robotizados / Mecanizados",
      icon: "fa-solid fa-gear",

      li: [
        " Projeto de gabaritos de solda",
        " Fabricação de gabaritos de solda",
        " Programação e desenvolvimento de processo de solda para novos gabaritos",
        " Reforma de gabaritos",
      ],

      id: 1,
    },
  ];

  return (
    <ContainerServices>
      <h1 id="services">Serviços</h1>
      <RowServices>
        {ServicesData.map((props) => {
          return (
            <Services>
              <ButtonService href="https://wa.me/555496767579" target="_blank">SOLICITAR ORÇAMENTO</ButtonService>
              <i class={props.icon} />
              <h2>{props.itemname}</h2>
              <p>{props.textitem}</p>
              <ul>
                {props.li.map((service, i) => (
                  <LiService key={i}>
                    <b>•</b>
                    {service}
                  </LiService>
                ))}
              </ul>
            </Services>
          );
        })}
      </RowServices>
    </ContainerServices>
  );
}
