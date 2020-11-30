import styled from 'styled-components'

export const DoodgewoonWrapper = styled.div`

.navigate-btn{
    font-size: 4rem;
    color: #333;
    text-shadow: 0px 0px 3px white;
}
.imgWrap{

    position:relative;
}
h4{font-family: 'Homemade Apple';}

img{
    width: 100%;
    display: flex;
}


.buttonWrap{
    position: absolute;
    height: 100%;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;


    button{
        border: none;
    background: none;
    width: 50%;
    cursor:pointer;
    outline: none;
    opacity: 0;
    }

    button:hover{
        opacity:1;
        background: var(--background-light)
    }
}



.textWrap{
     
    width: 80% ;
    
     transform: translate(-5rem, -5rem);
    background-color:white;
    @media only screen and (max-width: 1070px) {

transform: translate(1rem, -5rem);
}
@media only screen and (max-width: 650px) {
    width: 100%;
    transform: none;
    margin-top: 2rem;
}

}

margin-bottom:7rem;
`
