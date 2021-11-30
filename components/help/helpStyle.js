import styled from 'styled-components'
import { FadeInKeyframe } from '@/ksh-styles/keyframes/fadeIn'

export const Helpwrapper = styled.div`
  display: flex;
  position: relative;
  ${FadeInKeyframe}

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`
export const LeftColumn = styled.div`
  flex: 1;
  @media only screen and (max-width: 700px) {
    margin-bottom: 5em;
  }
`
export const Menu = styled.nav`
  top: 1.5em;
  position: sticky;
`
export const Menuheading = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
`
export const Menulist = styled.ul`
  margin: 15px 0px 0px 20px;
`
export const MenuItem = styled.li`
  margin-top: 10px;
  a {
    transition: all ease-in-out 0.1s;
  }
`
export const Content = styled.div`
  flex: 2;
  scroll-behavior: smooth;
`
export const ContentHeading = styled.h1`
  padding: 0px 0px 25px;
  margin-top: -15px;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 69px;
  color: ${({ theme }) => theme.colors.text};
  position: sticky;
  top: 0;
  background-color: #ffffff;
  z-index: 50;

  @media only screen and (max-width: 700px) {
    font-size: 30px;
  }
`
export const InstructionsWrapper = styled.div`
  margin-top: 40px;
  display: flex;

  @media only screen and (max-width: 450px) {
    flex-direction: column;
    margin-top: 0px;
  }
`
export const ImgColumn = styled.div`
  position: sticky;
  top: 8em;
  width: 198px;
  height: 420px;

  @media only screen and (max-width: 450px) {
    top: 0;
    position: relative;
    margin: 20px auto;
  }
`
export const StickyImg = styled.div``
export const Instructions = styled.div`
  flex: 2;
  padding-left: 25px;
  @media only screen and (max-width: 450px) {
    padding-left: 0px;
  }
`
export const StepWrapper = styled.div`
  margin: 0px 0px 25px;
`
export const StepHeading = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 41px;
`
export const Steps = styled.p`
  margin-top: 12px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 31px;
`
export const ContentWrapper = styled.section`
  margin-bottom: 5em;
`
