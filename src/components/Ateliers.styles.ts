import styled from 'styled-components'

export const AteliersWrapper = styled.div`
h4{

  font-size:0.8rem;
  opacity:0.6 ;
}
 h2 {
    font-family: 'Homemade Apple';
  
  line-height:2rem;}
gap: 20px;
display: grid;
  grid-template-columns: 1fr 1fr 1fr   ;
margin-bottom:7rem;

@media only screen and (max-width: 1300px) {
  grid-template-columns: 1fr   1fr     ;
  }


@media only screen and (max-width: 600px) {
  grid-template-columns: 1fr    ;
  }


@media only screen and (max-width: 500px) {
  grid-template-columns: 1fr  ;
  }

 
`

export const Atelier = styled.div`
padding: 2rem !important;
display: flex;
flex-direction:column;
justify-content:space-between;
border-color:  grey !important;
    
    padding: 2rem;

   


  a{
margin-top: 2rem;
 width:100%;

 
 
  }

`