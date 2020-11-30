import styled from 'styled-components'

export const ContactWrapper = styled.div`

img{
    width: 60%;
    height: auto;
    display: flex;
}
.textWrap{
    margin-left:auto;
    width: 60% ;
    
     transform: translate(-5rem, -5rem);
    background-color:white;


}

@media only screen and (max-width: 650px) {
    img{
        width: 100%;
        margin-bottom:3rem;


    }
    .textWrap{
        width: 100%;
    transform: none;


}
   
}
margin-bottom:7rem;
`
