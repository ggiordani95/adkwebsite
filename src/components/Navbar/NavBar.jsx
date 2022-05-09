import React from "react";
import styled from "styled-components";

export const ContainerNavAnchor = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: 2rem;
height: 100%;
padding-right: 1rem;
padding-top: 5.2rem;


a{
  font-family: var(--ff-primary);
  color: rgb(0, 0, 0);
  font-weight: 400;
  text-decoration: none;
  margin-left: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
a:hover{
  color: var(--main-color);
  }
}

@media (min-width: 1280px){
  padding-right: 0.5rem;
  padding-top: 6.2rem;

}

`;

export const NavBarLink = styled.a`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 4.2rem;

img {
  height: 70px;
  padding-bottom: 1.2rem;
  
  padding-top: 1.2rem;
}
span {
  
  color: white;
  font-family: var(--ff-jost);
 
}
span:hover {
  color: var(--main-color);
}

@media (min-width: 300px){
  padding-top: 2.5rem;
  height: 30vh;
  img {
    height: 70px;
    padding-bottom: 1.2rem;
    
    padding-top: 1.2rem;
  }
  span {
  
    color: white;
    font-family: var(--ff-jost);
    font-size: 12px;
  }

}
@media (min-width: 768px){
  padding-top: 2.5rem;
  height: 40vh;
  img {
    height: 70px;
    padding-bottom: 1.2rem;
    
    padding-top: 1.2rem;
  }
  span {
   
    color: white;
    font-family: var(--ff-jost);
    font-size: 1rem;
  }

  
}

@media (min-width: 1280px){
  
  padding: 0 0 4rem 0;
  img {
      height: 58px;
      padding-bottom: 0.5rem;
      
      padding-top: 1rem;
    }
  
 span {
    
    color: white;
    font-family: var(--ff-jost);
    font-size: 1rem;
    padding: 1rem;
    
  }

`;

export const AdkLinkA = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: white;
    font-family: var(--ff-jost);
    font-size: 1.2rem;
  }
  
`;
export const AdkLogoAlign = styled.div`
  @media (min-width: 300px) {
    img {
      width: 150px;
      position: absolute;
      transform: translate(-50%);
      left: 50%;
      top: 5%;
    }
    @media (min-width: 768px) {
      img {
        width: 150px;
        position: absolute;
        transform: translate(-50%);
        left: 50%;
        top: 5%;
      }
    }
    @media (min-width: 1280px) {
      img {
        width: 150px;
        position: absolute;
        transform: translate(-50%);
        left: 20%;
        top: 5.5%;
      }
      @media (min-width: 1480px) {
        img {
          width: 150px;
          position: absolute;
          left: 20%;
          top: 5.5%;
        }
    }
  }
`;
export const NavBarDownContainer = styled.div`
  height: 13vh;
  display: flex;
 background: #000000ce;
 
  width: 100vw;
  align-items: center;
  justify-content: center;

}
@media (min-width: 200px){

    height: 43vh;
  }
  .adklogo {
    
  }
  @media (min-width: 300px){
    
      height: 38vh;
    }
   
    
    .navbar--link img {
      max-height: 70px;
      padding-bottom: 1.2rem;
      
      padding-top: 1.2rem;
    }
    .navbar--link span {
      
      color: white;
      font-family: var(--ff-jost);
      font-size: 12px;
    }
    .container--nav-anchor{
      padding-right: 1rem;
      padding-top: 5.2rem;
    }
  }
  @media (min-width: 768px){
   
      height: 43vh;
    }
    
    
    .navbar--link img {
      max-height: 140px;
      padding-bottom: 1.2rem;
      
      padding-top: 1.2rem;
    }
    .navbar--link span {
      
      color: white;
      font-family: var(--ff-jost);
      font-size: 18px;
    }
    .container--nav-anchor{
      padding-right: 1rem;
      padding-top: 6.2rem;
    }
  }
  @media (min-width: 1280px){
    {
      height: 20vh;
      
      
    }
    
    
    .navbar--link img {
      max-height: 100px;
      padding-bottom: 1.2rem;
      
      padding-top: 1.2rem;
    }
    .navbar--link span {
      font-size: 18px;
      
    }
    .container--nav-anchor{
      
    }
  }
  

`;
export function NavigationBar() {
  

  return (
    <>
      <NavBarDownContainer>
        <AdkLinkA>
          <AdkLogoAlign>
            <img src="adklogonovo.png" alt="adklogo" />
          </AdkLogoAlign>
        </AdkLinkA>
        <ContainerNavAnchor>
          <AdkLinkA>
            <NavBarLink href="#empresa">
              <img src="companylogo2.png"></img>
              <span>Empresa</span>
            </NavBarLink>
          </AdkLinkA>

          <AdkLinkA>
            <NavBarLink href="#services">
              <img src="weldingrobotlogo2.png"></img>
              <span>Serviços</span>
            </NavBarLink>
          </AdkLinkA>

          <AdkLinkA>
            <NavBarLink href="#footer">
              <img src="emaillogo2.png" alt="emaillogo"></img>
              <span>Contato</span>
            </NavBarLink>
          </AdkLinkA>

          <AdkLinkA>
            <NavBarLink href="https://www.facebook.com/adksoldas" target="_blank">
              <img src="checkuplogo2.png"></img>
              <span>Agendar</span>
            </NavBarLink>
          </AdkLinkA>
        </ContainerNavAnchor>
      </NavBarDownContainer>
      
    </>
  );
}
//
