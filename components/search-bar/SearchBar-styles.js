import styled from '@emotion/styled'

export const Container = styled.div`
  padding: 0 11.88em;
  margin-top: -4.6em;
  display: flex;
  align-items: center;
`

export const Form = styled.form`
  flex-grow: 1;
  position: relative;
  margin-right: 1em;
`

export const Input = styled.input`
  width: 100%;
  font-size: 1.25em;
  font-family: inherit;
  padding: 1em 2em;
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
`

export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-51%);
  right: 0.65em;
  background-color: ${({ theme }) => theme.colors.heading};
  color: ${({ theme }) => theme.colors.bodyBg};
  border: none;
  border-radius: 100vw;
  font-size: 1.09em;
  padding: 0.5em 1em 0.3em;
`
