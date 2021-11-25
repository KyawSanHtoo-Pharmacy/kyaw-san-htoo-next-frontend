import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
`

export const Container = styled.div`
  padding: 3.13em 7.81em;

  @media screen and (max-width: 980px) {
    padding: 3.13em 3.91em;
  }

  @media screen and (max-width: 500px) {
    padding: 3.13em 1.25em;
  }
`

export const GroupWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 980px) {
    flex-wrap: wrap;
  }
`

export const Group = styled.div`
  flex: 1;
  margin: ${({ mt = 0 }) => mt};
  padding-right: 1em;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 980px) {
    flex: unset;
    width: 50%;
    margin-bottom: 1.88em;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 680px) {
    width: 100%;
  }
`

export const InfoText = styled.p`
  font-size: ${props => (props.large ? '1.48em' : props.small ? '1.09em' : '1.25em')}; ;
`

export const Logo = styled.a`
  width: 10em;
  height: 1.53em;
  position: relative;
`

export const SocialIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.63em;
`

export const SocialIcon = styled.a`
  margin-right: 0.63em;
  display: flex;
  align-items: center;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.dividerOne};
  margin: 3.13em 0;
`
