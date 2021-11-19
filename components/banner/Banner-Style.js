import styled from '@emotion/styled'

export const BannerContainer = styled.section``
export const BannerContent = styled.div`
  padding-top: 7.22em;
  padding-bottom: 10.97em;
  background: url('/illustrations/HeroBackground.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  position: relative;
`
export const DropdownWrapper = styled.div`
  width: fit-content;
  margin: 1.88em auto;
  display: flex;
  flex-direction: column;
`
export const ClickAble = styled.div`
  display: flex;
`
export const Dropdown = styled.p`
  padding: 0 0.6em 0 0;
  svg {
    margin: 0px 6px;
  }
`
export const FixedText = styled.p``

export const BannerTitle = styled.h1`
  text-align: center;
`
export const DropdownData = styled.div`
  position: absolute;
  bottom: 15%;
  margin-top: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.offWhite};
  width: 300px;
  height: ${({ dropdownState }) => (dropdownState ? '100px' : '0')};
  transition: 0.5s ease-in-out all;
`
