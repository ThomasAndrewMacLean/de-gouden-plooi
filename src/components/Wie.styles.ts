import styled from 'styled-components';

export const WieWrapper = styled.div`
  margin-bottom: 7rem;
  ul {
    list-style: none;
    margin-left: 0;
    gap: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 7rem;

    @media only screen and (max-width: 1300px) {
      grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: 600px) {
      grid-template-columns: 1fr;
    }

    @media only screen and (max-width: 500px) {
      grid-template-columns: 1fr;
    }
  }
  li {
    position: relative;
    padding: 2rem;

    img {
      position: absolute;
      height: 50px;
      width: 50px;
      border-radius: 50%;
      top: 1rem;
      right: 1rem;
    }
  }
`;
