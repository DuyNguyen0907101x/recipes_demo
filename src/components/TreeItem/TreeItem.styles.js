import styled, { css } from 'styled-components';

export const TreeContainer = styled.ul`
  padding: 0;
`;

export const TreeItem = styled.li`
  list-style: none;
  padding-left: 15px;
`;

export const TreeTitle = styled.h5`
  position: relative;

  &:before {
    position: absolute;
    display: inline-block;
    content: '';
    height: 4px;
    width: 4px;
    background-color: #000000;
    border-radius: 50%;
    top: 50%;
    left: -14px;
    transform: translate(0, -50%);
  }

  ${({ expandable }) =>
    expandable
      ? css`
          cursor: pointer;

          &:before {
            width: 0;
            height: 0;
            border-radius: 0;
            background-color: transparent;
            border-top: 8px solid #000000;
            border-right: 5px solid transparent;
            border-left: 5px solid transparent;
            left: -16px;
            cursor: pointer;
            transform: rotate(-90deg);
            top: 5px;
            transition: all 0.25s ease;
            font-weight: 700;
          }
        `
      : ''}

  ${({ expanded }) =>
    expanded
      ? css`
          &:before {
            transform: rotate(0);
          }
        `
      : ''}
`;
