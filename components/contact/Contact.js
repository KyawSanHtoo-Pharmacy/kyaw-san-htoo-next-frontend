import React from 'react'
import Image from 'next/image'
import {
  ContactWrapper,
  ContactImg,
  ContactContent,
  UpperContent,
  Description,
  ContactTitle,
  LowerContent,
  ContactDetail,
  SocialWrapper,
  SocialIcon,
} from './Contact-Style'
function contact() {
  return (
    <ContactWrapper>
      <ContactImg>
        <Image
          src='https://res.cloudinary.com/kyawsanhtoo-pharmacy/image/upload/v1638100159/243724047_165332972421422_8626863540491597743_n_6cc9e8521e.jpg'
          layout='fill'
          alt='kyaw-san-htoo-pharmacy'
        />
      </ContactImg>
      <ContactContent>
        <UpperContent>
          <Description>ကျော်စံထူးဆေးဆိုင်တွင် ဆေးမျိုးစုံကို လက်လီ လက်ကား ဝယ်ယူရရှိနိုင်ပါပြီ</Description>
          <ContactTitle>
            အောက်ပါ ဖုန်းနံပါတ်နဲ့ လိပ်စာ တွေကို ဆေးမှာယူချင်ရင်ဖြစ်စေ သိချင်တာများ မေးချင်ရင်ဖြစ်စေ ခေါ်ဆိုနိုင်ပါတယ်
          </ContactTitle>
        </UpperContent>
        <LowerContent>
          <ContactDetail>
            <a href='tel:04224747'>၀၄၂ ၂၄၇၄၇</a>၊ <a href='tel:095021252'>၀၉ ၅၀၂၁ ၂၅၂</a>
          </ContactDetail>
          <ContactDetail>info@kyawsantoopharmacy.com</ContactDetail>
          <ContactDetail>အမှတ် ကျူ/ဘီ၊ ပုသိမ်ဆေးရုံကြီးရှေ့၊ ပုသိမ်မြို့။</ContactDetail>
          <SocialWrapper>
            <SocialIcon href=''>
              <Image src='/icons/facebook.svg' width='18' height='18' alt='facebook-icon' />
            </SocialIcon>
            <SocialIcon href=''>
              {' '}
              <Image src='/icons/viber.svg' width='19' height='19' alt='viber-icon' />
            </SocialIcon>
          </SocialWrapper>
        </LowerContent>
      </ContactContent>
    </ContactWrapper>
  )
}

export default contact
