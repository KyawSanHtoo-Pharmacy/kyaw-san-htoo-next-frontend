import {
  PaymentForm,
  PaymentHeading,
  PaymentTitle,
  MethodDescription,
  MethodWrapper,
  MethodPills,
  PaymentInputWrapper,
  FormGroup,
  Label,
  FormInput,
  SummaryWrapper,
  SummaryHeading,
  CostdescriptionWrapper,
  CostText,
  Amount,
  KPayWrapper,
  KPayDescription,
  AccountWrapper,
  HeadingWrapper,
  AccountHeading,
  AccountDetails,
  Name,
  Phone,
  ButtonWrapper,
  Line,
  UploadWrapper,
  UploadDescripton,
  UploadButton,
  UploadButtonWrapper,
} from './Payment-Style'
import { Button } from '@/ksh-components'
import { useState } from 'react'

export default function Payment({ prePage, orderFormData, setOrderFormData, medicineToBuy }) {
  const { name, phone, address, delivery_method, payment_method } = orderFormData
  const [base64KpayImage, setBase64KpayImage] = useState(null)

  const handleOrderFormDataChange = e => {
    const { name, value } = e.target
    setOrderFormData(data => {
      return { ...data, [name]: value }
    })
  }

  const generateAndSetBase64KpayImage = image => {
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onloadend = () => {
      setBase64KpayImage(reader.result)
    }
  }

  const sendOrder = async e => {
    e.preventDefault()
    const orderData = {
      ...orderFormData,
      kpay_screenshot: base64KpayImage,
      medicines: medicineToBuy,
    }

    const resp = await fetch('/api/order', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
    const order = await resp.json()
    console.log(order)

    if (order.message.accepted) {
      console.log('Order accepted!')
    } else {
      console.log('Noooo')
    }
  }

  return (
    <PaymentForm onSubmit={sendOrder}>
      <PaymentHeading>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={prePage}>
          <path
            d='M19.0005 11H7.83047L12.7105 6.11997C13.1005 5.72997 13.1005 5.08997 12.7105 4.69997C12.3205 4.30997 11.6905 4.30997 11.3005 4.69997L4.71047 11.29C4.32047 11.68 4.32047 12.31 4.71047 12.7L11.3005 19.29C11.6905 19.68 12.3205 19.68 12.7105 19.29C13.1005 18.9 13.1005 18.27 12.7105 17.88L7.83047 13H19.0005C19.5505 13 20.0005 12.55 20.0005 12C20.0005 11.45 19.5505 11 19.0005 11Z'
            fill='white'
          />
        </svg>
        <PaymentTitle>အော်ဒါတင်ရန်</PaymentTitle>
      </PaymentHeading>

      <MethodDescription>ဆိုင်လာယူမလား။ အိမ်ရောက်ပို့ပေးရမလား။</MethodDescription>
      <MethodWrapper>
        <MethodPills>
          <input
            type='radio'
            name='delivery_method'
            id='ဆိုင်လာယူမယ်'
            value='ဆိုင်လာယူမယ်'
            checked={delivery_method === 'ဆိုင်လာယူမယ်'}
            onChange={handleOrderFormDataChange}
          />
          <label htmlFor='ဆိုင်လာယူမယ်'>ဆိုင်လာယူမယ်</label>
        </MethodPills>
        <MethodPills>
          <input
            type='radio'
            name='delivery_method'
            id='အိမ်အရောက်ပို့ပေးပါ'
            value='အိမ်အရောက်ပို့ပေးပါ'
            checked={delivery_method === 'အိမ်အရောက်ပို့ပေးပါ'}
            onChange={handleOrderFormDataChange}
          />
          <label htmlFor='အိမ်အရောက်ပို့ပေးပါ'>အိမ်အရောက်ပို့ပေးပါ</label>
        </MethodPills>
      </MethodWrapper>

      <PaymentInputWrapper>
        <FormGroup>
          <Label htmlFor='name'>နာမည်</Label>
          <FormInput type='text' name='name' id='name' value={name} onChange={handleOrderFormDataChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='phone'>ဖုန်းနံပါတယ်</Label>
          <FormInput type='text' name='phone' id='phone' value={phone} onChange={handleOrderFormDataChange} />
        </FormGroup>
        {orderFormData.delivery_method === 'အိမ်အရောက်ပို့ပေးပါ' ? (
          <FormGroup>
            <Label htmlFor='address'>နေရပ်လိပ်စာ</Label>
            <FormInput type='text' name='address' id='address' value={address} onChange={handleOrderFormDataChange} />
          </FormGroup>
        ) : (
          ''
        )}
      </PaymentInputWrapper>

      <SummaryWrapper>
        <SummaryHeading>ကုန်ကျငွေများ</SummaryHeading>
        <CostdescriptionWrapper>
          <CostText>အိမ်အရောက်ပို့ခ (ကျပ်)</CostText>
          <Amount>၁၅၀၀</Amount>
        </CostdescriptionWrapper>

        <CostdescriptionWrapper>
          <CostText>စုစုပေါင်း ကျသင့်ငွေ (ကျပ်)</CostText>
          <Amount>၃၁၀၀</Amount>
        </CostdescriptionWrapper>
      </SummaryWrapper>

      <SummaryWrapper>
        <SummaryHeading>ငွေဘယ်လိုပေးချေမလဲ။</SummaryHeading>
      </SummaryWrapper>
      <MethodWrapper>
        <MethodPills>
          <input
            type='radio'
            name='payment_method'
            id='ငွေသားနဲ့ ပေးချေမယ်'
            value='ငွေသားနဲ့ ပေးချေမယ်'
            checked={payment_method === 'ငွေသားနဲ့ ပေးချေမယ်'}
            onChange={handleOrderFormDataChange}
          />
          <label htmlFor='ငွေသားနဲ့ ပေးချေမယ်'>ငွေသားနဲ့ ပေးချေမယ်</label>
        </MethodPills>
        <MethodPills>
          <input
            type='radio'
            name='payment_method'
            id='KPay နဲ့ ပေးချေမယ်'
            value='KPay နဲ့ ပေးချေမယ်'
            checked={payment_method === 'KPay နဲ့ ပေးချေမယ်'}
            onChange={handleOrderFormDataChange}
          />
          <label htmlFor='KPay နဲ့ ပေးချေမယ်'>KPay နဲ့ ပေးချေမယ်</label>
        </MethodPills>
      </MethodWrapper>

      {orderFormData.payment_method === 'KPay နဲ့ ပေးချေမယ်' ? (
        <KPayWrapper>
          <KPayDescription>အောက်ပါ အကောင့်များကို ငွေလွှဲနိုင်ပါတယ်။</KPayDescription>
          <AccountWrapper>
            <HeadingWrapper>
              <AccountHeading>အကောင့်အမည်</AccountHeading>
              <AccountHeading>ဖုန်းနံပါတ်</AccountHeading>
            </HeadingWrapper>
            <Line></Line>
            <AccountDetails>
              <Name>မမ</Name> <Phone>၀၉ ၁၂၃၄ ၅၆၇၈၉</Phone>
              <Name>ညီမလေး</Name> <Phone>၀၉ ၁၂၃၄ ၅၆၇၈၉</Phone>
            </AccountDetails>
          </AccountWrapper>

          <UploadWrapper>
            <UploadDescripton>ငွေလွှဲဖြတ်ပိုင်း ထည့်သွင်းရန်</UploadDescripton>
            <UploadButtonWrapper>
              <label htmlFor='Screenshot'>ပုံတင်မယ်</label>
              {/* <UploadButton
                type='file'
                id='Screenshot'
                name='payment_screenshot'
                onChange={handleOrderFormDataChange}></UploadButton> */}
              <UploadButton
                type='file'
                id='Screenshot'
                name='payment_screenshot'
                onChange={e => {
                  generateAndSetBase64KpayImage(e.target.files[0])
                }}></UploadButton>
            </UploadButtonWrapper>
          </UploadWrapper>
        </KPayWrapper>
      ) : (
        ''
      )}

      {base64KpayImage && <img src={base64KpayImage} alt='chosen' style={{ height: '300px' }} />}

      <ButtonWrapper>
        <Button Big>အော်ဒါတင်မယ်</Button>
      </ButtonWrapper>
    </PaymentForm>
  )
}
