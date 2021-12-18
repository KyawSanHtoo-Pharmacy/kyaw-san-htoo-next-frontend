import { Accordion, ProductDetails } from '@/ksh-components'
import parse from 'html-react-parser'

export default function ProductDetailsInfoContainer({ medicine_details, medicine_info }) {
  // I dont know why this check is needed, but to fix the error in console :((
  if (!medicine_details || !medicine_info) {
    return null
  }

  const { description, benefits, side_effects, doctor_suggestions, how_to, warnings, description_rt } = medicine_details

  return (
    <>
      <ProductDetails medicine_info={medicine_info} />
      <Accordion>
        <Accordion.Item>
          <Accordion.Title>ဆေးအကြောင်း အကျဉ်းချုပ်</Accordion.Title>
          <Accordion.AnswerWrapper>
            <Accordion.Answer>{parse(description)}</Accordion.Answer>
          </Accordion.AnswerWrapper>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Title>ကောင်းကျိုးများ</Accordion.Title>
          <Accordion.AnswerWrapper>
            <Accordion.Answer>{parse(benefits)}</Accordion.Answer>
          </Accordion.AnswerWrapper>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Title>ဘေးထွက်ဆိုးကျိုးများ</Accordion.Title>
          <Accordion.AnswerWrapper>
            <Accordion.Answer>{parse(side_effects)}</Accordion.Answer>
          </Accordion.AnswerWrapper>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Title>ဆရာဝန် အကြုံပြုချက်များ</Accordion.Title>
          <Accordion.AnswerWrapper>
            <Accordion.Answer>{parse(doctor_suggestions)}</Accordion.Answer>
          </Accordion.AnswerWrapper>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Title>သုံးစွဲနည်း</Accordion.Title>
          <Accordion.AnswerWrapper>
            <Accordion.Answer>{parse(how_to)}</Accordion.Answer>
          </Accordion.AnswerWrapper>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Title>ဓာတ်မတည့်မှု သတိပေးချက်များ</Accordion.Title>
          <Accordion.AnswerWrapper>
            <Accordion.Answer>{parse(warnings)}</Accordion.Answer>
          </Accordion.AnswerWrapper>
        </Accordion.Item>
      </Accordion>
    </>
  )
}
