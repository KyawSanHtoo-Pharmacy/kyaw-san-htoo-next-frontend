import styled from '@emotion/styled'

export const StyledButton = styled.button`
  padding: 1.02em 3.13em;
  color: ${({ theme }) => theme.colors.bodyBg};
  background: ${({ theme }) => theme.colors.heading};
  border: 1px solid ${({ theme }) => theme.colors.heading};
  border-radius: 100vw;
  font-size: 1.25em;
`

export const WhiteButton = styled.button`
  padding: 1.02em 3.13em;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.bodyBg};
  border: 1px solid ${({ theme }) => theme.colors.bodyBg};
  border-radius: 100vw;
  font-size: 1.25em;
  display: flex;
  align-items: center;
  justify-content: center;
`
