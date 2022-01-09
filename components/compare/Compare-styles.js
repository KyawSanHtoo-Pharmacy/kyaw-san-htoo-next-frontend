import styled from 'styled-components'
import { FadeInKeyframe } from '@/ksh-styles/keyframes/fadeIn'

export const Section = styled.section`
  margin-top: -4em;
  ${FadeInKeyframe}

  @media screen and (max-width: 980px) {
    margin-top: -2em;
  }
`

export const Frame = styled.div`
  display: flex;
  gap: 3.8em;

  @media screen and (max-width: 540px) {
    gap: 1.88em;
  }
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

  @media screen and (max-width: 540px) {
    font-size: 1.88em;
  }
`

export const EnglishName = styled(MyanmarName)`
  margin-bottom: 0.3em;
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 5/4;
  overflow: hidden;
  border-radius: 1.25em;
  margin-bottom: 6.25em;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 3em;

  & > button:first-of-type {
    margin-right: 1em;

    @media screen and (max-width: 640px) {
      margin-right: 0;
      margin-top: 1em;
      order: 2;
    }
  }

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`
