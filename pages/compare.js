import { Compare, Accordion, NoticePill, ProductCard, Error, Button } from '@/ksh-components'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'
import { API_URL } from '@/ksh-config/index'
import Link from 'next/link'

export default function compare({ isInjected = false, outstockMedicine, instockMedicine }) {
  if (isInjected) {
    return <Error message='URLကို မကလိပါနဲ့လား ကိုငြိမ်းမောင်' status='Error : tgg pan pr dl, plz.' />
  }

  outstockMedicine = outstockMedicine[0]
  instockMedicine = instockMedicine[0]

  const productDetailsCompareData = [
    {
      id: 1,
      title: 'ဆေးအကြောင်း အကျဉ်းချုပ်',
      outstockBody: outstockMedicine.product_details.description,
      instockBody: instockMedicine.product_details.description,
    },
    {
      id: 2,
      title: 'ကောင်းကျိုးများ',
      outstockBody: outstockMedicine.product_details.benefits,
      instockBody: instockMedicine.product_details.benefits,
    },
    {
      id: 3,
      title: 'ဘေးထွက်ဆိုးကျိုးများ',
      outstockBody: outstockMedicine.product_details.side_effects,
      instockBody: instockMedicine.product_details.side_effects,
    },
    {
      id: 4,
      title: 'ဆရာဝန် အကြုံပြုချက်များ',
      outstockBody: outstockMedicine.product_details.doctor_suggestions,
      instockBody: instockMedicine.product_details.doctor_suggestions,
    },
    {
      id: 5,
      title: 'သုံးစွဲနည်း',
      outstockBody: outstockMedicine.product_details.how_to,
      instockBody: outstockMedicine.product_details.how_to,
    },
    {
      id: 6,
      title: 'ဓာတ်မတည့်မှု သတိပေးချက်များ',
      outstockBody: outstockMedicine.product_details.warnings,
      instockBody: instockMedicine.product_details.warnings,
    },
  ]

  return (
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
                    <Accordion.Answer m='0.5em 0 0 0'>{outstockBody}</Accordion.Answer>
                  </Accordion.TwoColAnswerColumn>

                  <Accordion.TwoColAnswerColumn>
                    <NoticePill availability={true}>{instockMedicine.product_name_mm}</NoticePill>
                    <Accordion.Answer m='0.5em 0 0 0'>{instockBody}</Accordion.Answer>
                  </Accordion.TwoColAnswerColumn>
                </Accordion.TwoColAnswer>
              </Accordion.AnswerWrapper>
            </Accordion.Item>
          ))}
          <Link href={`/categories/${instockMedicine.categories[0].slug}/${instockMedicine.slug}`} passHref>
            <Button>{`Go to ${instockMedicine.product_name_eng}`}</Button>
          </Link>
        </Accordion>

        <ProductCard.Heading>ဆက်စပ် ဆေးဝါးများ</ProductCard.Heading>
        {/* <ProductCard.Frame mt='3.13em'>
          <ProductCard availability={true} />
          <ProductCard availability={true} />
          <ProductCard availability={false} />
          <ProductCard availability={true} />
        </ProductCard.Frame> */}
      </GlobalContainer>
    </Compare.Section>
  )
}

export async function getServerSideProps({ query: { outstock, instock } }) {
  const [outstockResp, instockResp] = await Promise.all([
    fetch(`${API_URL}/medicines?slug=${outstock}`),
    fetch(`${API_URL}/medicines?slug=${instock}`),
  ])
  const outstockMedicine = await outstockResp.json()
  const instockMedicine = await instockResp.json()

  if (outstockMedicine[0]?.medicine_to_compare !== instock) {
    return {
      props: {
        isInjected: true,
      },
    }
  }

  return {
    props: {
      outstockMedicine,
      instockMedicine,
    },
  }
}
