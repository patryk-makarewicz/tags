import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const ButtonIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;

  :hover {
    opacity: 0.8;
  }
`;
