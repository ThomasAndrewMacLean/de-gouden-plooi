import styled from 'styled-components';

export const PartnersWrapper = styled.div`
  ul {
    list-style: none;
    margin-left: 0;
    display: flex;
    flex-wrap: wrap;
  }
  li {
    margin: 1rem;
    a {
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: var(--background-dark);
    }
  }
  img {
    object-fit: contain;
    height: 75px;
  }
  margin-bottom:4rem;

`;
