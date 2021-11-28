import { Accordion, ProductDetails } from '@/ksh-components'

export default function ProductDetailsInfoContainer({ medicine_details, medicine_info }) {
  // I dont know why this check is needed, but to fix the error in console :((
  if (!medicine_details || !medicine_info) {
    return null
  }

  const { description, benefits, side_effects, doctor_suggestions, how_to, warnings } = medicine_details

  return (
    <>
      <ProductDetails medicine_info={medicine_info} />
      <Accordion>
        <Accordion.Item>
          <Accordion.Title>ဆေးအကြောင်း အကျဉ်းချုပ်</Accordion.Title>
          <Accordion.AnswerWrapper>
            <Accordion.Answer>{description}</Accordion.Answer>
          </Accordion.AnswerWrapper>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Title>ကောင်းကျိုးများ</Accordion.Title>
          <Accordion.AnswerWrapper>
            <Accordion.Answer>{benefits}</Accordion.Answer>
          </Accordion.AnswerWrapper>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Title>ဘေးထွက်ဆိုးကျိုးများ</Accordion.Title>
          <Accordion.AnswerWrapper>
            <Accordion.Answer>{side_effects}</Accordion.Answer>
          </Accordion.AnswerWrapper>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Title>ဆရာဝန် အကြုံပြုချက်များ</Accordion.Title>
          <Accordion.AnswerWrapper>
            <Accordion.Answer>{doctor_suggestions}</Accordion.Answer>
          </Accordion.AnswerWrapper>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Title>သုံးစွဲနည်း</Accordion.Title>
          <Accordion.AnswerWrapper>
            <Accordion.Answer>{how_to}</Accordion.Answer>
          </Accordion.AnswerWrapper>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Title>ဓာတ်မတည့်မှု သတိပေးချက်များ</Accordion.Title>
          <Accordion.AnswerWrapper>
            <Accordion.Answer>{warnings}</Accordion.Answer>
          </Accordion.AnswerWrapper>
        </Accordion.Item>
      </Accordion>
    </>
  )
}
