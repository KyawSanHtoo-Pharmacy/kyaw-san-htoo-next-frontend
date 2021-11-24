import styled from 'styled-components'

export const Container = styled.div`
  position: sticky;
  top: 5em;
`

export const MainImage = styled.div`
  position: relative;
  border-radius: 0.63em;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 4/3;
  margin-bottom: 0.57em;
`

export const SmallImageWrapper = styled.div`
  display: flex;
  gap: 0.63em;
`

export const SmallImage = styled.div`
  position: relative;
  border-radius: 0.63em;
  overflow: hidden;
  flex-grow: 1;
  width: 5em;
  aspect-ratio: 5/3;
  cursor: pointer;
`
