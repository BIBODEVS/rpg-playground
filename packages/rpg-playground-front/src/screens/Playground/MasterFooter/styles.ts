import styled from 'styled-components/macro'

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & button:not(:last-child) {
    margin-right: 10px;
  }
`
