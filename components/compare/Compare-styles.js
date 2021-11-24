import styled from 'styled-components'

export const Section = styled.section`
  margin-top: -4em;
`

export const Frame = styled.div`
  display: flex;
  gap: 3.8em;
`

export const Column = styled.div`
  flex: 1;
`

export const NameWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 1.88em;
`

export const MyanmarName = styled.h1`
  font-size: 3.13em;
  color: ${({ theme }) => theme.colors.text};
  font-weight: normal;
  width: 100%;
`

export const EnglishName = styled.h2`
  font-size: 3.13em;
  color: ${({ theme }) => theme.colors.text};
  font-weight: normal;
  margin-bottom: -0.4em;
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 5/4;
  overflow: hidden;
  border-radius: 1.25em;
  margin-bottom: 6.25em;
`
