import { Compare, Accordion, NoticePill, ProductCard, Error, Button, OrderSuccessPopup } from '@/ksh-components'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'
import { API_URL } from '@/ksh-config/index'
import Head from 'next/head'
import Link from 'next/link'
import { useContext } from 'react'
import { CartStates } from '@/ksh-contexts/Cart-Context'
import { AnimatePresence } from 'framer-motion'
import parse from 'html-react-parser'

export default function ComparePage({ isInjected = false, outstockMedicine, instockMedicine, relatedMedicines }) {
  const { showOrderSuccessPopup } = useContext(CartStates)

  if (isInjected) {
    return <Error message='URLကို မကလိပါနဲ့လား ကိုငြိမ်းမောင်' status='Error : tgg pan pr dl, plz.' />
  }

  const productDetailsCompareData = [
    {
      id: 1,
      title: 'ဆေးအကြောင်း အကျဉ်းချုပ်',
      outstockBody: outstockMedicine.product_details.description_rt,
      instockBody: instockMedicine.product_details.description_rt,
    },
    {
      id: 2,
      title: 'ကောင်းကျိုးများ',
      outstockBody: outstockMedicine.product_details.benefits_rt,
      instockBody: instockMedicine.product_details.benefits_rt,
    },
    {
      id: 3,
      title: 'ဘေးထွက်ဆိုးကျိုးများ',
      outstockBody: outstockMedicine.product_details.side_effects_rt,
      instockBody: instockMedicine.product_details.side_effects_rt,
    },
    {
      id: 4,
      title: 'ဆရာဝန် အကြုံပြုချက်များ',
      outstockBody: outstockMedicine.product_details.doctor_suggestions_rt,
      instockBody: instockMedicine.product_details.doctor_suggestions_rt,
    },
    {
      id: 5,
      title: 'သုံးစွဲနည်း',
      outstockBody: outstockMedicine.product_details.how_to_rt,
      instockBody: outstockMedicine.product_details.how_to_rt,
    },
    {
      id: 6,
      title: 'ဓာတ်မတည့်မှု သတိပေးချက်များ',
      outstockBody: outstockMedicine.product_details.warnings_rt,
      instockBody: instockMedicine.product_details.warnings_rt,
    },
  ]

  return (
    <>
      <Head>
        <title>Compare - Kyaw San Htoo - Pharmacy in Pathein</title>
      </Head>
      <AnimatePresence>{showOrderSuccessPopup && <OrderSuccessPopup />}</AnimatePresence>
      <Compare.Section>
        <GlobalContainer>
          <Compare outstockMedicine={outstockMedicine} instockMedicine={instockMedicine} />
          <Accordion mb='6.25em'>
            {productDetailsCompareData.map(({ id, title, outstockBody, instockBody }) => (
              <Accordion.Item key={id}>
                <Accordion.Title>{title}</Accordion.Title>
                <Accordion.AnswerWrapper>
                  <Accordion.TwoColAnswer>
                    <Accordion.TwoColAnswerColumn>
                      <NoticePill availability={false}>{outstockMedicine.product_name_mm}</NoticePill>
                      <Accordion.Answer m='0.5em 0 0 0'>{parse(outstockBody)}</Accordion.Answer>
                    </Accordion.TwoColAnswerColumn>

                    <Accordion.TwoColAnswerColumn>
                      <NoticePill availability={true}>{instockMedicine.product_name_mm}</NoticePill>
                      <Accordion.Answer m='0.5em 0 0 0'>{parse(instockBody)}</Accordion.Answer>
                    </Accordion.TwoColAnswerColumn>
                  </Accordion.TwoColAnswer>
                </Accordion.AnswerWrapper>
              </Accordion.Item>
            ))}
            {/* {' this div is to group in one line'} */}
            <Compare.ButtonWrapper>
              <Link href={`/categories/all`} passHref>
                <Button.White>ဆေးမျိုးစုံပေ့ခ်ျကိုပြန်သွားမယ်</Button.White>
              </Link>
              <Link href={`/categories/${instockMedicine.categories[0].slug}/${instockMedicine.slug}`} passHref>
                <Button>{`${instockMedicine.product_name_mm}ကိုကြည့်ကြည့်မယ်`}</Button>
              </Link>
            </Compare.ButtonWrapper>
          </Accordion>

          <ProductCard.Heading>ဆက်စပ် ဆေးဝါးများ</ProductCard.Heading>
          <ProductCard.Frame mt='3.13em'>
            {relatedMedicines.map(medicine => (
              <ProductCard key={medicine.id} medicine={medicine} />
            ))}
          </ProductCard.Frame>
        </GlobalContainer>
      </Compare.Section>
    </>
  )
}

export async function getServerSideProps({ query: { outstock, instock } }) {
  if (!outstock || !instock) {
    return {
      props: {
        isInjected: true,
      },
    }
  }

  const [outstockResp, instockResp] = await Promise.all([
    fetch(`${API_URL}/medicines?slug=${outstock}`),
    fetch(`${API_URL}/medicines?slug=${instock}`),
  ])
  const outstockMedicine = await outstockResp.json()
  const instockMedicine = await instockResp.json()

  const category = await outstockMedicine[0].categories[0].slug
  const relatedMedicinesResp = await fetch(`${API_URL}/medicines?categories.slug_contains=${category}`)
  const relatedMedicines = await relatedMedicinesResp.json()

  if (outstockMedicine[0]?.product_to_compare[0].slug !== instock) {
    return {
      props: {
        isInjected: true,
      },
    }
  }

  return {
    props: {
      outstockMedicine: outstockMedicine[0],
      instockMedicine: instockMedicine[0],
      relatedMedicines: relatedMedicines.filter(
        medicine => medicine.slug !== outstockMedicine[0].slug && medicine.slug !== instockMedicine[0].slug
      ),
    },
  }
}
