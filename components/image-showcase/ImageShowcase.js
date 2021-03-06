import Image from 'next/image'
import { useState, useEffect } from 'react'
import {
  Container,
  MainImage,
  SmallImageWrapper,
  SmallImage,
  ImageNumberWrapper,
  ImageNumber,
} from './ImageShowcase-styles'

export default function ImageShowcase({ medicine_images }) {
  const [mainImage, setMainImage] = useState(medicine_images && medicine_images[0])
  const [imageIndex, setImageIndex] = useState(1)

  useEffect(() => {
    setMainImage(medicine_images[0])
  }, [medicine_images])

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
        <ImageNumberWrapper>
          <ImageNumber>{imageIndex} /</ImageNumber> <ImageNumber> {medicine_images.length}</ImageNumber>
        </ImageNumberWrapper>
      </MainImage>

      <SmallImageWrapper>
        {medicine_images.map((image, index) => (
          <SmallImage
            key={index}
            onClick={() => {
              setMainImage(medicine_images[index])
              setImageIndex(index + 1)
            }}>
            <Image src={image.url} alt={image.caption} layout='fill' placeholder='blur' blurDataURL={image.hash} />
          </SmallImage>
        ))}
      </SmallImageWrapper>
    </Container>
  )
}
