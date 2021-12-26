import styled from 'styled-components'

export const StyledButton = styled.button`
  padding: 1.02em 3.13em;
  color: ${({ theme }) => theme.colors.bodyBg};
  background: ${({ theme }) => theme.colors.heading};
  border: 1px solid ${({ theme }) => theme.colors.heading};
  border-radius: 100vw;
  font-size: 1.25em;
  width: ${({ Big }) => (Big ? '100%' : 'unset')};
  position: relative;
  isolation: isolate;
  overflow: hidden;
  transition: all 0.2s ease-out;

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.offWhite};
    border: 1px solid ${({ theme }) => theme.colors.offWhite};
    color: ${({ theme }) => theme.colors.dividerTwo};
  }
  &:disabled:hover {
    background-color: ${({ theme }) => theme.colors.offWhite};
    border: 1px solid ${({ theme }) => theme.colors.offWhite};
  }

  & > span {
    margin-bottom: -0.4em;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.text};
  }
`

export const WhiteButton = styled(StyledButton)`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.bodyBg};
  border: 1px solid ${({ theme }) => theme.colors.bodyBg};

  &:hover {
    color: ${({ theme }) => theme.colors.bodyBg};
    background: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.text};
  }
`

export const OffWhiteButton = styled(StyledButton)`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.offWhite};
  border: 1px solid ${({ theme }) => theme.colors.offWhite};
  font-size: ${({ small }) => (small ? ' 1.09em' : '1.25em')};
  display: flex;
  & > span {
    margin-bottom: -0.4em;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.bodyBg};
    background: ${({ theme }) => theme.colors.heading};
    border: 1px solid ${({ theme }) => theme.colors.heading};
  }
`
