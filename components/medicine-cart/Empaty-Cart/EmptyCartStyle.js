import styled from 'styled-components'

export const EmptyCartWrapper = styled.div``
export const CartHeading = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.heading};
  display: flex;
  align-items: center;
  height: 80px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  svg {
    display: flex;
    align-items: center;
    height: inherit;
    cursor: pointer;
    position: absolute;
    left: 17px;
    top: 50%;
    transform: translateY(-50%);
  }
`
export const CartTitle = styled.h1`
  color: ${({ theme }) => theme.colors.whiteText};
  font-size: 1.4em;
  font-weight: 700px;
  line-height: 32px;
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  & > .number {
    background-color: white;
    color: ${({ theme }) => theme.colors.heading};
    width: 40px;
    aspect-ratio: 1;
    border-radius: 100vw;
    margin-left: 10px;
  }
`
export const ImageWrapper = styled.div`
  margin : 50px auto 0;
  position:relative;
  width : 32em; 
  height : 32em;
`

export const ButtonWrapper = styled.div`
  padding: 0px 17px 0px 17px;
  margin-bottom: 20px;
`