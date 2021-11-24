import styled from 'styled-components'

export const StyledButton = styled.button`
  padding: 1.02em 3.13em;
  color: ${({ theme }) => theme.colors.bodyBg};
  background: ${({ theme }) => theme.colors.heading};
  border: 1px solid ${({ theme }) => theme.colors.heading};
  border-radius: 100vw;
  font-size: 1.25em;

  & > span {
    margin-bottom: -0.4em;
  }
  width: ${({ Big }) => (Big ? '100%' : 'unset')};
`

export const WhiteButton = styled(StyledButton)`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.bodyBg};
  border: 1px solid ${({ theme }) => theme.colors.bodyBg};

  & > span {
    margin-bottom: -0.4em;
  }
`

export const OffWhiteButton = styled(StyledButton)`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.offWhite};
  border: 1px solid ${({ theme }) => theme.colors.offWhite};
  font-size: ${({ small }) => (small ? ' 1.09em' : '1.25em')};

  & > span {
    margin-bottom: -0.4em;
  }
`
