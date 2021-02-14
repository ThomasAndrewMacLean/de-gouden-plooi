import styled from 'styled-components';

export const WieWrapper = styled.div`
  margin-bottom: 7rem;
  ul {
    list-style: none;
    margin-left: 0;
    display: flex;
    flex-wrap: wrap;
  }
  li {
    flex: 1;
    margin: 1rem;
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
