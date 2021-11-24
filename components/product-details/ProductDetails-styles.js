import styled from 'styled-components'

export const Container = styled.main`
  margin-bottom: 4.6em;
  display: flex;
  flex-direction: column;
  margin-top: -1em;
`

export const MyanmarName = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-weight: normal;
`

export const EnglishName = styled.h2`
  font-size: 3.13em;
  color: ${({ theme }) => theme.colors.text};
  font-weight: normal;
  margin-bottom: 0.8em;
`

export const HorizontalGroup = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2.4em;

  &:last-of-type {
    margin-bottom: 3.2em;
  }
`

export const VerticleGroup = styled.div`
  flex: 1;
`

export const Label = styled.p`
  font-size: 1.25em;
`

export const InfoText = styled.p`
  font-size: 1.64em;
  font-weight: bold;
  margin-top: -0.4em;
`

export const PaleText = styled.p`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.paleText};
`
