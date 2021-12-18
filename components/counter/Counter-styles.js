import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 192px;
  background-color: ${({ theme }) => theme.colors.offWhite};
  border-radius: 0.63em;
  border: 1px solid ${({ theme }) => theme.colors.heading};

  @media screen and (max-width: 400px) {
    max-width: 150px;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4em;
  background-color: transparent;
  border: none;
  @media screen and (max-width: 400px) {
   font-size : 12px;
  }
`

export const Amount = styled.p`
  @media screen and (max-width: 400px) {
   font-size : 14px;
  }
`
