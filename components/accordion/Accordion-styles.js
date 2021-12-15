import styled from 'styled-components'
const cubiz = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'

export const Container = styled.div`
  margin-bottom: ${({ mb }) => mb || 0};
  display: flex;
  flex-direction: column;
`

export const Item = styled.div`
  &:not(:first-of-type) {
    margin-top: 1.88em;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerTwo};
  padding-bottom: 0.6em;
  margin-bottom: 0.6em;
  cursor: pointer;
`

export const Title = styled.h3`
  font-size: 1.64em;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  user-select: none;
`

export const Icon = styled.img`
  transform: ${({ show }) => (show ? 'rotate(45deg)' : 'rotate(0deg)')};
  transition: ${cubiz};
  user-select: none;
`

export const AnswerWrapper = styled.div`
  padding-top: ${({ show }) => (show ? '0.6em' : '0')};
  height: ${({ show }) => (show ? 'auto' : '0')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  overflow: hidden;
  transition: ${cubiz};
`

export const Answer = styled.p`
  font-size: 1.25em;
  margin: ${({ m }) => (m ? m : '')};
`

export const TwoColAnswerWrapper = styled.div`
  display: flex;
  gap: 3.8em;
`

export const TwoColAnswerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`
