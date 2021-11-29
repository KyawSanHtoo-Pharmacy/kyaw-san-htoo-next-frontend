import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 11.88em;
  margin-top: -4.6em;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1200px) {
    padding: 0;
    margin-top: -2.3em;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: stretch;
  }
`

export const Form = styled.form`
  flex-grow: 1;
  position: relative;
  margin-right: 1em;

  @media screen and (max-width: 1200px) {
    margin-right: 0;
  }
`

export const Input = styled.input`
  width: 100%;
  font-size: 1.25em;
  font-family: inherit;
  padding: 1em 1.5em;
  background-color: ${({ theme }) => theme.colors.offWhite};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 100vw;
  border: 2px solid ${({ theme }) => theme.colors.offWhite};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.paleText};
  }

  &:active,
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.heading};
  }

  @media screen and (max-width: 1200px) {
    margin-bottom: 1em;
  }
`

export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.65em;
  background-color: ${({ theme }) => theme.colors.heading};
  color: ${({ theme }) => theme.colors.bodyBg};
  border: none;
  border-radius: 100vw;
  font-size: 1.09em;
  padding: 0.6em 1em;
  display: flex;

  & > span {
    margin-bottom: -0.2em;
  }

  @media screen and (max-width: 1200px) {
    transform: translateY(-69%);
  }
`
