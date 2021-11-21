import styled from '@emotion/styled'

export const PaymentForm = styled.form`
  /* padding : 0px 17px; */
`

export const PaymentHeading = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.heading};
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  svg {
    position: absolute;
    left: 17px;
    top: 50%;
    transform: translateY(-50%);
    align-items: center;
    height: inherit;
    cursor: pointer;
  }
`
export const PaymentTitle = styled.h1`
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

export const MethodDescription = styled.p`
  margin-top: 30px;
  padding-left: 17px;
  font-size: 15px;
  font-weight: 700;
`

export const MethodWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  padding-left: 17px;
`

export const MethodPills = styled.div`
  font-size: 1.09em;
  flex: 1;
  align-self: center;
  display: flex;
  align-items: center;
  margin: 0 0.5em 0.5em 0;

  & > label {
    width: 100%;
    color: ${({ theme, active }) => (active ? theme.colors.bodyBg : theme.colors.text)};
    background-color: ${({ theme, active }) => (active ? theme.colors.heading : theme.colors.offWhite)};
    border: 1px solid ${({ theme }) => theme.colors.heading};
    border-radius: 100vw;
    padding: 0.5em 0.8em;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.1s ease-out;
    user-select: none;
  }

  & > label:hover {
    background-color: ${({ theme }) => theme.colors.testimonial};
  }

  & > input {
    display: none;
  }

  & > input[type='radio']:checked + label {
    color: ${({ theme }) => theme.colors.bodyBg};
    background-color: ${({ theme }) => theme.colors.heading};
    border: 1px solid ${({ theme }) => theme.colors.heading};
  }
`

export const PaymentInputWrapper = styled.div`
  padding: 0px 17px 17px;
  margin-top: 30px;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 14px;
`
export const FormInput = styled.input`
  width: 100%;
  font-size: 1.25em;
  font-family: inherit;
  padding: 0.8em 1em;
  background-color: ${({ theme }) => theme.colors.offWhite};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.offWhite};
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.paleText};
  }
  &:active,
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.heading};
  }
`

export const SummaryWrapper = styled.div`
  margin: 30px auto;
  padding: 0px 17px;
`

export const SummaryHeading = styled.p`
  font-size: 15px;
  font-weight: 700;
`

export const CostdescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  margin: 10px 0px;
`

export const CostText = styled.p`
  font-size: 16px;
`

export const Amount = styled.p`
  font-size: 20px;
  margin: 0 auto;
  width: 100%;
  padding: 0.6em 0em;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.offWhite};
  text-align: center;
`

export const KPayWrapper = styled.div`
  margin: 20px 0px;
  padding: 0px 17px;
`
export const KPayDescription = styled.p`
  font-size: 15px;
`

export const Line = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 0.6px;
  background-color: ${({ theme }) => theme.colors.dividerTwo};
`

export const AccountWrapper = styled.div`
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.offWhite};
  padding: 10px 20px;
  border-radius: 8px;
`
export const HeadingWrapper = styled.div`
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 2.5fr 1fr;
`

export const AccountHeading = styled.p`
  font-size: 14px;
  font-weight: bold;
`

export const AccountDetails = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 2.5fr 1fr;
`

export const Name = styled.p`
  font-size: 15px;
  margin-bottom: 10px;
`

export const Phone = styled.p`
  font-size: 15px;
`
export const ButtonWrapper = styled.div`
  margin-top: 50px;
  padding: 0px 17px 0px 17px;
  margin-bottom: 20px;
`
export const UploadWrapper = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  align-items: center;
`
export const UploadDescripton = styled.p`
  font-size: 14px;
  font-weight: bold;
`
export const UploadButton = styled.input`
  font-size: 1.09em;
  flex: 1;
  align-self: center;
  color: ${({ theme, active }) => (active ? theme.colors.bodyBg : theme.colors.text)};
  background-color: ${({ theme, active }) => (active ? theme.colors.heading : theme.colors.offWhite)};
  border: 1px solid ${({ theme }) => theme.colors.heading};
  border-radius: 100vw;
  padding: 1.2em 0.8em;
  margin: 0 0.5em 0.5em 0;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.heading};
    color: ${({ theme }) => theme.colors.bodyBg};
  }
`
