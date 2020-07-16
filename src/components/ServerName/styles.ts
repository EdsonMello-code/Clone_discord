import styled from 'styled-components';
import { ExpandMore } from 'styled-icons/material'


export const Container = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 11px 0 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;

  background-color: var(--secondary);
`
export const  Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
`;

export const ExpandIcon = styled(ExpandMore)`
  width: 28px;
  height: 28px;
  color: var(--white);
  cursor: pointer;

`;

