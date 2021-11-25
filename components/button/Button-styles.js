import styled, { keyframes, css } from 'styled-components'

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

  & > span {
    margin-bottom: -0.4em;
  }

  &::before {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transform-origin: center;
    background: rgba(0, 0, 0, 0.05);
    z-index: -1;
    transition: all 0.2s ease-out;
  }

  &:hover::before {
    width: 100%;
  }
`

export const WhiteButton = styled(StyledButton)`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.bodyBg};
  border: 1px solid ${({ theme }) => theme.colors.bodyBg};
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
`
