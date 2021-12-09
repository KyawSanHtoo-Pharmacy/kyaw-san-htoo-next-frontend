import styled from 'styled-components'

export const Section = styled.section`
  margin-top: -4em;
  @media screen and (max-width: 7300px) {
    margin-top: 0;
  }
`

export const Frame = styled.div`
  display: flex;
  gap: 3.13em;
  justify-content: space-between;

  @media screen and (max-width: 730px) {
    flex-direction: column;
    gap: 0;
  }
`

export const StickySide = styled.div`
  position: relative;
  flex: 1;
`

export const NormalSide = styled.div`
  flex: 1;
`
