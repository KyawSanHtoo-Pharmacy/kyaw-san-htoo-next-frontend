import Image from 'next/image'
import { useState } from 'react'
import { Container, MainImage, SmallImageWrapper, SmallImage } from './ImageShowcase-styles'

export default function ImageShowcase({ medicine_images }) {
  const [mainImage, setMainImage] = useState(medicine_images && medicine_images[0])
  // I dont know why this check is needed, but to fix the error in console :((
  if (!medicine_images) {
    return null
  }

  return (
    <Container>
      <MainImage>
        <Image
          src={mainImage.url}
          alt={mainImage.caption}
          layout='fill'
          placeholder='blur'
          blurDataURL={mainImage.hash}
        />
      </MainImage>
      <SmallImageWrapper>
        {medicine_images.map((image, index) => (
          <SmallImage key={index} onClick={() => setMainImage(medicine_images[index])}>
            <Image
              src={image.formats.small.url}
              alt={image.caption}
              layout='fill'
              placeholder='blur'
              blurDataURL={image.hash}
            />
          </SmallImage>
        ))}
      </SmallImageWrapper>
    </Container>
  )
}
