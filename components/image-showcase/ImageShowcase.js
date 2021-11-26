import Image from 'next/image'
import { useState } from 'react'
import { Container, MainImage, SmallImageWrapper, SmallImage } from './ImageShowcase-styles'
import { API_URL } from '@/ksh-config/index'

export default function ImageShowcase({ medicine_images }) {
  const [mainImage, setMainImage] = useState(medicine_images[0])

  return (
    <Container>
      <MainImage>
        <Image src={`${API_URL}${mainImage.url}`} alt={mainImage.caption} layout='fill' />
      </MainImage>
      <SmallImageWrapper>
        {medicine_images.map((image, index) => (
          <SmallImage key={index} onClick={() => setMainImage(medicine_images[index])}>
            <Image src={`${API_URL}${image.formats.small.url}`} alt={image.caption} layout='fill' />
          </SmallImage>
        ))}
      </SmallImageWrapper>
    </Container>
  )
}
