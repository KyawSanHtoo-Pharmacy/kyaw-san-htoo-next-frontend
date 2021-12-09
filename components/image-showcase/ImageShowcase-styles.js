import styled from 'styled-components'

export const Container = styled.div`
  position: sticky;
  top: 8.8em;

  @media screen and (max-width: 730px) {
    display: flex;
  }
`

export const MainImage = styled.div`
  position: relative;
  border-radius: 0.63em;
  overflow: hidden;
  aspect-ratio: 4/3;
  margin-bottom: 0.57em;
  width: 100%;

  @media screen and (max-width: 730px) {
    margin-bottom: 0;
    margin-right: 0.57em;
    height: 16em;
  }
`

export const SmallImageWrapper = styled.div`
  display: flex;
  gap: 0.63em;

  @media screen and (max-width: 730px) {
    align-items: flex-start;
    flex-direction: column;
    flex-grow: 1;
  }
`

export const SmallImage = styled.div`
  position: relative;
  border-radius: 0.63em;
  overflow: hidden;
  flex-grow: 1;
  height: 8em;
  cursor: pointer;

  @media screen and (max-width: 730px) {
    flex-grow: unset;
    width: 62px;
    height: 45px;
  }
`
