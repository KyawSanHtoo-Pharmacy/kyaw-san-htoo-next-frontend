import { Accordion, ProductDetails } from '@/ksh-components'
import parse from 'html-react-parser'
import { marked } from 'marked'

export default function ProductDetailsInfoContainer({ medicine_details, medicine_info }) {
  // I dont know why this check is needed, but to fix the error in console :((
  if (!medicine_details || !medicine_info) {
    return null
  }

  const { description_rt, benefits_rt, side_effects_rt, doctor_suggestions_rt, how_to_rt, warnings_rt } =
    medicine_details

  return (
    <>
      <ProductDetails medicine_info={medicine_info} />
      <Accordion>
        <Accordion.Item>
          <Accordion.Title>ဆေးအကြောင်း အကျဉ်းချုပ်</Accordion.Title>
          <Accordion.AnswerWrapper>
            <Accordion.Answer>
              {description_rt ? parse(marked.parse(description_rt)) : <p>မကြာမှီ တင်ပေးထားပါမယ်ဗျ။</p>}
            </Accordion.Answer>
          </Accordion.AnswerWrapper>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Title>ကောင်းကျိုးများ</Accordion.Title>
          <Accordion.AnswerWrapper>
            <Accordion.Answer>
              {benefits_rt ? parse(marked.parse(benefits_rt)) : <p>မကြာမှီ တင်ပေးထားပါမယ်ဗျ။</p>}
            </Accordion.Answer>
          </Accordion.AnswerWrapper>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Title>ဘေးထွက်ဆိုးကျိုးများ</Accordion.Title>
          <Accordion.AnswerWrapper>
            <Accordion.Answer>
              {side_effects_rt ? parse(marked.parse(side_effects_rt)) : <p>မကြာမှီ တင်ပေးထားပါမယ်ဗျ။</p>}
            </Accordion.Answer>
          </Accordion.AnswerWrapper>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Title>ဆရာဝန် အကြုံပြုချက်များ</Accordion.Title>
          <Accordion.AnswerWrapper>
            <Accordion.Answer>
              {doctor_suggestions_rt ? parse(marked.parse(doctor_suggestions_rt)) : <p>မကြာမှီ တင်ပေးထားပါမယ်ဗျ။</p>}
            </Accordion.Answer>
          </Accordion.AnswerWrapper>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Title>သုံးစွဲနည်း</Accordion.Title>
          <Accordion.AnswerWrapper>
            <Accordion.Answer>
              {how_to_rt ? parse(marked.parse(how_to_rt)) : <p>မကြာမှီ တင်ပေးထားပါမယ်ဗျ။</p>}
            </Accordion.Answer>
          </Accordion.AnswerWrapper>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Title>ဓာတ်မတည့်မှု သတိပေးချက်များ</Accordion.Title>
          <Accordion.AnswerWrapper>
            <Accordion.Answer>
              {warnings_rt ? parse(marked.parse(warnings_rt)) : <p>မကြာမှီ တင်ပေးထားပါမယ်ဗျ။</p>}
            </Accordion.Answer>
          </Accordion.AnswerWrapper>
        </Accordion.Item>
      </Accordion>
    </>
  )
}
