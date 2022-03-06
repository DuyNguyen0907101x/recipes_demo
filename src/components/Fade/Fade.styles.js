import styled, { css } from 'styled-components';

export const FadeStyled = styled.div`
  ${({ show }) => css`
    animation: ${show ? 'fadeIn' : 'fadeOut'} 0.25s ease;
  `}

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;
