import React from "react";
import styled from "styled-components";



export const FooterStyled = styled.footer`
  background-color: #24262b;
  padding: 5rem 0;
  @media (min-width: 1440px){
    height: 30vh;
  }
`;
export const ContainerFooter = styled.div`
  max-width: 100vw;
  margin: auto;
  display: flex;
  justify-content: center;
  
`;
export const RowFooter = styled.div`
display: grid;
grid-template-columns:  repeat(3, 1fr);
padding-top: 1.5rem;
max-width: 1400px;

@media (min-width: 368px){
  grid-template-columns:  repeat(1, 1fr);
}
@media (min-width: 778px){
  grid-template-columns:  repeat(3, 1fr);
  
}
`;
export const ColFooter = styled.div`
   display:flex;
   align-items: center;
   justify-content: space-around;
  
    img{
        width: 200px;
        opacity: 0.4;
    }
   h4{
	font-size: 4rem;
	color: grey;
	text-transform: capitalize;
	margin-bottom: 1rem;
	font-weight: 800;
	
   }
   
   }
   ul li:not(:last-child){
	margin-bottom: 0.2rem;
}
ul li {
	font-size: 1.5rem;
	
	color: #ffffff;
	text-decoration: none;
	font-weight: 500;
	color: #bbbbbb;
	display: block;
	transition: all 0.3s ease;
}
ul li:hover{
	color: #ffffff;
	padding-left: 8px;
}
@media (min-width: 358px){
  h4{
    display: none;
  }
  ul li {
    font-size: 1rem;
    padding-right: 1rem;
    

  }
  ul{
    padding-bottom: 2.5rem;
  }
}

@media (min-width: 768px){
  ul li {
    font-size: 1rem;
    padding-right: 0rem;
  }
  h4{
    display: block;
  }
}
@media (min-width: 1440px){
  ul li {
    font-size: 1.2rem;

  }
}

`

export const SocialLinks = styled.div`

a{
	display: inline-block;
    margin-left: 1.2rem;
	height: 5rem;
	width: 5rem;
	background-color: rgba(255,255,255,0.2);
	
	text-align: center;
	
	border-radius: 50%;
	color: #ffffff;
	transition: all 0.5s ease;
}
a:hover{
    color: #24262b;
	background-color: #ffffff;
    transform: scale(1.1);
}
i{
    font-size: 2rem;
    position: relative;
    transform: translate(0%, -50%);
    top: 50%;
    
}
@media (min-width: 358px){
  a{
   
    height: 3.5rem;
    width: 3.5rem;
    
  }
  i{
    font-size: 1.5rem;
   
    
}
}
@media (min-width: 768px){
  padding-bottom: 2.5rem;
  a{
   
    height: 3.5rem;
    width: 3.5rem;
    
  }
  i{
    font-size: 1.5rem;
   
    
}
}
@media (min-width: 1440px){
  padding-bottom: 2.5rem;
  a{
   
    height: 4rem;
    width: 4rem;
    
  }
  i{
    font-size: 1.4rem;
   
    
}
}
`
export function Footer() {
  return (
    <FooterStyled id="footer">
        
      <ContainerFooter>
        <RowFooter>
            
          
          <ColFooter>
            <h4></h4>
            <ul>
              <li>comercial@adksoldas.com.br</li>
              <li>CPNJ 27.580.358/0001-97</li>

              <li>IE 029/0622220 </li>
            </ul>
          </ColFooter>
          <ColFooter>
            <h4><i class="fa-solid fa-location-arrow"></i></h4>
            
            <ul>
              <li>Rua Gíacomo Battassini, 180,</li>
              <li>Bairro Santa Catarina,</li>
              <li> CEP 95034-190,</li>
              <li>Caxias do Sul, Rio Grande do Sul</li>
            </ul>
          </ColFooter>
          <ColFooter>
            <SocialLinks>
            
            <a href="#">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a href="https://web.whatsapp.com/send?phone=55549676-7579" target="_blank">
              <i class="fa-solid fa-envelope"></i>
              </a>
              
              <a href="https://www.facebook.com/adksoldas" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
              
              
              
            </SocialLinks>
          </ColFooter>
        </RowFooter>
      </ContainerFooter>
    </FooterStyled>
  );
}
