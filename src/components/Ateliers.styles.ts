import styled from 'styled-components';

export const AteliersWrapper = styled.div`
  .info {
    font-size: 0.8rem;
    opacity: 0.6;
  }
  h2 {
    font-family: 'Homemade Apple';

    line-height: 2rem;
  }
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
`;

export const Atelier = styled.div<{ kleur: string }>`
  padding: 2rem !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-color: ${(props) => `${props.kleur} !important`};

  padding: 2rem;
  .datawrap {
    display: flex;
    justify-content: space-between;
  }
  a {
    margin-top: 2rem;
    width: 100%;
  }
  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
