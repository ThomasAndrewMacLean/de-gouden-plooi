import styled from 'styled-components'

export const AteliersWrapper = styled.div`
gap: 20px;
display: flex;
margin-bottom:7rem;
flex-wrap:wrap;
`

export const Atelier = styled.div`
border: 4px solid grey;
     width: calc(33% - 12px);
     min-width: 300px;
    padding: 2rem;

    @media only screen and (max-width: 400px) {
        width: 100%;
  }

`