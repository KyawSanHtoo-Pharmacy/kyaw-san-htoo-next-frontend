import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 192px;
  background-color: ${({ theme }) => theme.colors.offWhite};
  border-radius: 0.63em;
  border: 1px solid ${({ theme }) => theme.colors.heading};
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4em;
  background-color: transparent;
  border: none;
`

export const Amount = styled.p``
