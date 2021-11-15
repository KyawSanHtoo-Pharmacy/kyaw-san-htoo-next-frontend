import Head from 'next/head'
import styled from '@emotion/styled'

const Heading = styled.h1`
  text-align: center;
  line-height: 1.2;
  padding: 1.8em 0;
`

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - Kyaw San Htoo - Pharmacy in Pathein</title>
      </Head>
      <div>
        <Heading>Contact Page</Heading>
      </div>
    </>
  )
}
