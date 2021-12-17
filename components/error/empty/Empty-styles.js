import styled from 'styled-components'

export const Frame = styled.div`
  background: ${({ theme }) => theme.colors.offWhite};
  padding: 2em;
  border-radius: 0.56em;
  max-width: 37em;
`

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.warning};
`

export const Button = styled.button`
  background: transparent;
  border: none;
  margin-top: 1em;
  color: ${({ theme }) => theme.colors.text};
`
