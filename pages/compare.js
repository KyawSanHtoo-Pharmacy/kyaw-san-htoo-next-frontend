import { Compare, Accordion, NoticePill, ProductCard } from '@/ksh-components'
import { GlobalContainer } from '@/ksh-styles/GlobalStyles'

export default function compare() {
  return (
    <Compare.Section>
      <GlobalContainer>
        <Compare />
        <Accordion mb='6.25em'>
          <Accordion.Item>
            <Accordion.Title>ဆေးအကြောင်း အကျဉ်းချုပ်</Accordion.Title>
            <Accordion.AnswerWrapper>
              <Accordion.TwoColAnswer>
                <Accordion.TwoColAnswerColumn>
                  <NoticePill availability={false}>Solmux</NoticePill>
                  <Accordion.Answer m='0.5em 0 0 0'>
                    အဆင့်မြင့်အားဆေး၊ နှာစေးချောင်းဆိုးပျောက်ဆေး၊ ကလေးအားဆေး၊ ဆေးပြား၊ ဓာတ်ဆား၊ အာရုံကြောဆေးများ၊
                    အရေပြားလိမ်းဆေး၊ ဆီးချိုတိုင်းစက်အစရှိသည်တို့ ကို မှာယူနိုင်ပါတယ်။
                  </Accordion.Answer>
                </Accordion.TwoColAnswerColumn>

                <Accordion.TwoColAnswerColumn>
                  <NoticePill availability={true}>Solmux</NoticePill>
                  <Accordion.Answer m='0.5em 0 0 0'>
                    အဆင့်မြင့်အားဆေး၊ နှာစေးချောင်းဆိုးပျောက်ဆေး၊ ကလေးအားဆေး၊ ဆေးပြား၊ ဓာတ်ဆား၊ အာရုံကြောဆေးများ၊
                    အရေပြားလိမ်းဆေး၊ ဆီးချိုတိုင်းစက်အစရှိသည်တို့ ကို မှာယူနိုင်ပါတယ်။
                  </Accordion.Answer>
                </Accordion.TwoColAnswerColumn>
              </Accordion.TwoColAnswer>
            </Accordion.AnswerWrapper>
          </Accordion.Item>

          <Accordion.Item>
            <Accordion.Title>ဆေးအကြောင်း အကျဉ်းချုပ်</Accordion.Title>
            <Accordion.AnswerWrapper>
              <Accordion.TwoColAnswer>
                <Accordion.TwoColAnswerColumn>
                  <NoticePill availability={false}>Solmux</NoticePill>
                  <Accordion.Answer m='0.5em 0 0 0'>
                    အဆင့်မြင့်အားဆေး၊ နှာစေးချောင်းဆိုးပျောက်ဆေး၊ ကလေးအားဆေး၊ ဆေးပြား၊ ဓာတ်ဆား၊ အာရုံကြောဆေးများ၊
                    အရေပြားလိမ်းဆေး၊ ဆီးချိုတိုင်းစက်အစရှိသည်တို့ ကို မှာယူနိုင်ပါတယ်။
                  </Accordion.Answer>
                </Accordion.TwoColAnswerColumn>

                <Accordion.TwoColAnswerColumn>
                  <NoticePill availability={true}>Solmux</NoticePill>
                  <Accordion.Answer m='0.5em 0 0 0'>
                    အဆင့်မြင့်အားဆေး၊ နှာစေးချောင်းဆိုးပျောက်ဆေး၊ ကလေးအားဆေး၊ ဆေးပြား၊ ဓာတ်ဆား၊ အာရုံကြောဆေးများ၊
                    အရေပြားလိမ်းဆေး၊ ဆီးချိုတိုင်းစက်အစရှိသည်တို့ ကို မှာယူနိုင်ပါတယ်။
                  </Accordion.Answer>
                </Accordion.TwoColAnswerColumn>
              </Accordion.TwoColAnswer>
            </Accordion.AnswerWrapper>
          </Accordion.Item>

          <Accordion.Item>
            <Accordion.Title>ဆေးအကြောင်း အကျဉ်းချုပ်</Accordion.Title>
            <Accordion.AnswerWrapper>
              <Accordion.TwoColAnswer>
                <Accordion.TwoColAnswerColumn>
                  <NoticePill availability={false}>Solmux</NoticePill>
                  <Accordion.Answer m='0.5em 0 0 0'>
                    အဆင့်မြင့်အားဆေး၊ နှာစေးချောင်းဆိုးပျောက်ဆေး၊ ကလေးအားဆေး၊ ဆေးပြား၊ ဓာတ်ဆား၊ အာရုံကြောဆေးများ၊
                    အရေပြားလိမ်းဆေး၊ ဆီးချိုတိုင်းစက်အစရှိသည်တို့ ကို မှာယူနိုင်ပါတယ်။
                  </Accordion.Answer>
                </Accordion.TwoColAnswerColumn>

                <Accordion.TwoColAnswerColumn>
                  <NoticePill availability={true}>Solmux</NoticePill>
                  <Accordion.Answer m='0.5em 0 0 0'>
                    အဆင့်မြင့်အားဆေး၊ နှာစေးချောင်းဆိုးပျောက်ဆေး၊ ကလေးအားဆေး၊ ဆေးပြား၊ ဓာတ်ဆား၊ အာရုံကြောဆေးများ၊
                    အရေပြားလိမ်းဆေး၊ ဆီးချိုတိုင်းစက်အစရှိသည်တို့ ကို မှာယူနိုင်ပါတယ်။
                  </Accordion.Answer>
                </Accordion.TwoColAnswerColumn>
              </Accordion.TwoColAnswer>
            </Accordion.AnswerWrapper>
          </Accordion.Item>
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
