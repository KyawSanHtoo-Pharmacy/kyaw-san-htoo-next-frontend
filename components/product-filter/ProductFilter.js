import { useState, useEffect } from 'react'
import { useWindowSize } from 'react-use'
import { Button } from '@/ksh-components'
import { useRouter } from 'next/router'
const { Alphabets } = require('@/ksh-data/alphabets.json')
import { AnimatePresence } from 'framer-motion'
import {
  Container,
  BlurOverlay,
  SquareArrow,
  Frame,
  Item,
  TitleWrapper,
  Title,
  Icon,
  Body,
  Pill,
  AlphabetPill,
  AlphabetText,
} from './ProductFilter-styles'

export default function ProductFilter({ longCat, routerChar, routerCat }) {
  const router = useRouter()
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { width } = useWindowSize()

  const clickHandler = (param, type) => {
    //param gets api endpoint. type gets route either it's supposed to go to cateogires or aphabets.
    if (type === 'cat') {
      router.push(`/categories/${param}`)
    } else if (type === 'alpha') {
      router.push(`/categories/alphabets/${param}`)
    }
  }

  useEffect(() => {
    if (width < 700) {
      document.body.style.overflow = isFilterOpen ? 'hidden' : 'unset'
    }
  }, [isFilterOpen, width])

  return (
    <>
      <AnimatePresence>
        {isFilterOpen && (
          <BlurOverlay
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: [0.86, 0, 0.07, 1],
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.8,
                ease: [0.86, 0, 0.07, 1],
              },
            }}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          />
        )}
      </AnimatePresence>

      <Container>
        <Button.OffWhite
          small
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          style={{
            color: isFilterOpen && '#FFFFFF',
            background: isFilterOpen && '#5ABEAE',
            borderColor: isFilterOpen && '#5ABEAE',
          }}>
          <span>စစ်ထုတ်မယ်</span>
        </Button.OffWhite>
        <AnimatePresence>
          {isFilterOpen && (
            <Frame
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  when: 'beforeChildren',
                  staggerChildren: 1,
                  duration: 0.8,
                  ease: [0.86, 0, 0.07, 1],
                },
              }}
              exit={{
                opacity: 0,
                y: 24,
                transition: {
                  duration: 0.8,
                  ease: [0.86, 0, 0.07, 1],
                },
              }}>
              <Item
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.86, 0, 0.07, 1],
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 24,
                  transition: {
                    duration: 0.8,
                    ease: [0.86, 0, 0.07, 1],
                  },
                }}>
                <TitleWrapper>
                  <Title>ရောဂါများ</Title>
                </TitleWrapper>
                <Body>
                  {longCat.map(cat => (
                    <Pill
                      isActive={routerCat === cat.slug ? true : false}
                      key={cat.id}
                      onClick={() => {
                        clickHandler(cat.slug, 'cat')
                        setIsFilterOpen(!isFilterOpen)
                      }}>
                      {cat.category_name_long}
                    </Pill>
                  ))}
                </Body>
              </Item>

              <Item
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.86, 0, 0.07, 1],
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 24,
                  transition: {
                    duration: 0.8,
                    ease: [0.86, 0, 0.07, 1],
                  },
                }}>
                <TitleWrapper>
                  <Title>အစ စာလုံးများ</Title>
                </TitleWrapper>
                <Body>
                  {Alphabets.map(char => (
                    <AlphabetPill
                      isActive={routerChar === char.char ? true : false}
                      key={char.id}
                      onClick={() => {
                        clickHandler(char.char, 'alpha')
                        setIsFilterOpen(!isFilterOpen)
                      }}>
                      {' '}
                      <AlphabetText> {char.char} </AlphabetText>{' '}
                    </AlphabetPill>
                  ))}
                </Body>
              </Item>

              <SquareArrow />
            </Frame>
          )}
        </AnimatePresence>
      </Container>
    </>
  )
}
