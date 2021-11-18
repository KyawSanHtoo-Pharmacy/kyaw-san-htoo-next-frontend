import Image from 'next/image'
import { useState } from 'react'
import { Container, MainImage, SmallImageWrapper, SmallImage } from './ImageShowcase-styles'
const images = ['/temp/sol-sc.jpg', '/temp/bio-sc.jpg', '/temp/ob-sc.jpg']

export default function ImageShowcase() {
  const [mainImage, setMainImage] = useState(images[0])
  return (
    <Container>
      <MainImage>
        <Image src={mainImage} alt='blah' layout='fill' />
      </MainImage>
      <SmallImageWrapper>
        {images.map((image, index) => (
          <SmallImage key={index} onClick={() => setMainImage(images[index])}>
            <Image src={image} alt='blah' layout='fill' />
          </SmallImage>
        ))}
      </SmallImageWrapper>
    </Container>
  )
}
