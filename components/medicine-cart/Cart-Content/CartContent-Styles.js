import styled from '@emotion/styled'

export const Cart1stPage = styled.div``
export const CartHeading = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.heading};
  display: flex;
  svg {
    display: flex;
    align-items: center;
    height: inherit;
    margin-left: 17px;
    cursor: pointer;
  }
`
export const CartTitle = styled.h1`
  color: ${({ theme }) => theme.colors.whiteText};
  font-size: 1.4em;
  padding: 24px 0px 24px 17px;
  font-weight: 700px;
  line-height: 32px;
  text-align: center;
  flex: 1;
  display: flex;
  justify-content: center;
`
export const MNum = styled.span`
  background-color: white;
  color: ${({ theme }) => theme.colors.heading};
  width: 40px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100vw;
  margin-left: 10px;
  span {
    margin-bottom: 11px;
  }
`

export const ItemTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr;
`
export const ItemTitles = styled.h5`
  padding: 1.5em 0px 2em;
  text-align: center;
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.text};
`
export const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr;
  margin-bottom: 1em;
`
//1st column
export const ItemsToBuy = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 0em 1em;
`

export const ItemImg = styled.div`
  position: relative;
  height: 100%;
  img {
    border-radius: 10px;
  }
`
export const ItemName = styled.p`
  flex: 2;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.offWhite};
  margin-left: 10px;
`

//2nd column
export const ItemQuentity = styled.div`
  flex: 1;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  width: 80%;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.heading};
  border-radius: 10px;
`
export const QuantityShow = styled.input`
  text-align: center;
  width: 100%;
  font-size: 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.offWhite};
  outline: none;
  &:focus-within {
    border: 0;
  }
`
export const Plus = styled.button`
  background-color: ${({ theme }) => theme.colors.offWhite};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  font-weight: 900;
  border-radius: 10px 0px 0px 10px;
`
export const Min = styled.button`
  background-color: ${({ theme }) => theme.colors.offWhite};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  font-weight: 900;
  border-radius: 0px 10px 10px 0px;
`

//3rd column
export const ItemCost = styled.div`
  flex: 1;
  text-align: center;
  p {
    font-size: 20px;
    margin: 0 auto;
    width: 80%;
    padding: 0.6em 0em;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.offWhite};
  }
`

export const ButtonWrapper = styled.div`
  padding: 0px 17px 0px 17px;
  margin-bottom: 20px;
`
