import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 145px 40px;
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 3.7em;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 3px;
  margin: auto;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 1.625rem;
  font-weight: normal;
  margin: 16px auto;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
