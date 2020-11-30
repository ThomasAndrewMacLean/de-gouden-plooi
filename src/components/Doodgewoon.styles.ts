import styled from 'styled-components'

export const DoodgewoonWrapper = styled.div`
.imgWrap{

    position:relative;
}
h4{font-family: 'Homemade Apple';}

img{
    width: 100%;
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

margin-bottom:7rem;
`
