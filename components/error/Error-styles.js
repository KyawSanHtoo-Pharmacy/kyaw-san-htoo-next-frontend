import styled from 'styled-components'

export const Section = styled.section`
  height: 85vh;
  background: url(/illustrations/ko-nyein-mg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  max-width: 38em;
  margin: 0 auto;
`

export const Message = styled.h1`
  font-size: 2.4em;
  color: ${({ theme }) => theme.colors.text};
`

export const Status = styled.h2`
  font-size: 1.25em;
  color: ${({ theme }) => theme.colors.warning};
  margin-top: 12em;
`
