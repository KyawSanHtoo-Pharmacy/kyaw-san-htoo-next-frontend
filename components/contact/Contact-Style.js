import styled from 'styled-components'

export const ContactWrapper = styled.section`
  display: flex;

  @media only screen and (max-width: 650px) {
    flex-direction: column-reverse;
  }
`

export const ContactImg = styled.div`
  flex: 1;
  height: 74.7vh;
  position: relative;

  @media only screen and (max-width: 650px) {
    width: 100%;
    height: 20em;
    flex: unset;
  }
`

export const ContactContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  /* padding: 1.7em 7.03em; */
  padding: 3.13em 0 3.13em 6.25em;

  @media only screen and (max-width: 965px) {
    padding: 1.7em 4.03em 1.7em 6.03em;
  }
  @media only screen and (max-width: 700px) {
    padding: 1.7em 2.03em 1.7em 3.93em;
  }

  @media only screen and (max-width: 650px) {
    flex: unset;
    padding: 1.7em 2.03em 1.7em 3.91em;
  }
  @media only screen and (max-width: 500px) {
    padding-left: 1.25em;
  }
`

export const UpperContent = styled.div`
  /* align-self: flex-start; */
`

export const Description = styled.p``

export const ContactTitle = styled.h1`
  font-size: 2.4em;
  margin-top: 0.4em;

  @media only screen and (max-width: 955px) {
    font-size: 2em;
  }
  @media only screen and (max-width: 955px) {
    font-size: 1.7em;
  }
`

export const LowerContent = styled.div``
export const ContactDetail = styled.p`
  padding: 0.3em 0;
`
export const SocialWrapper = styled.ul``
export const SocialIcon = styled.a`
  padding: 0.5em 0.4em 0em;
`
