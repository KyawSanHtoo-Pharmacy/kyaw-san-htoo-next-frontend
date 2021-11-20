import React, {useState} from 'react'
import {Cart} from '@/ksh-components/'
import {PaymentWrapper, 
        PaymentHeading, 
        PaymentTitle, 
        MethodDescription, 
        MethodWrapper, 
        MethodPills,
        PaymentForm,
        FormGroup,
        Label,
        FormInput,
        SummaryWrapper,
        SummaryHeading, CostdescriptionWrapper, CostText, Amount,
        KPayWrapper, KPayDescription, AccountWrapper,  HeadingWrapper, AccountHeading, AccountDetails, Name, Phone,
        ButtonWrapper, Line,
        UploadWrapper, UploadDescripton, UploadButton
    } from "./Payment-Style";
import { Button } from '@/ksh-components'
function Payment({prePage}) {

//MethodStates & Handling 
const [methodpills, setMethodpills] = useState([
        {
            id : '0',
            buttonText : 'ဆိုင်လာယူမယ်',
            status : false,
            activestatus : false,
        },
        {
            id : '1',
            buttonText : 'အိမ်အရောက်ပို့ပေးပါ',
            status : true,
            activestatus : false,
        }
    ])
const [homeDelivery, setHomeDelivery] = useState(false);

const [kPaymodeOn , setkPaymodeOn] = useState(false);

const grabActive = (index) => {
    console.log(methodpills[index].activestatus);
    const updatedState = methodpills.map( pill => {
        if(pill.id === index) {
        
            pill.activestatus = true;
        }
        else{

            pill.activestatus = false;
        }
    } )

   console.log(updatedState) 
}

    return (
        <PaymentWrapper>
            
                <PaymentHeading>
                    {/* <Cart.Container> */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={prePage}  >
                    <path d="M19.0005 11H7.83047L12.7105 6.11997C13.1005 5.72997 13.1005 5.08997 12.7105 4.69997C12.3205 4.30997 11.6905 4.30997 11.3005 4.69997L4.71047 11.29C4.32047 11.68 4.32047 12.31 4.71047 12.7L11.3005 19.29C11.6905 19.68 12.3205 19.68 12.7105 19.29C13.1005 18.9 13.1005 18.27 12.7105 17.88L7.83047 13H19.0005C19.5505 13 20.0005 12.55 20.0005 12C20.0005 11.45 19.5505 11 19.0005 11Z" fill="white"/>
                    </svg>
                 <PaymentTitle>အော်ဒါတင်ရန်</PaymentTitle>
                      {/* </Cart.Container> */}
            </PaymentHeading>

            <MethodDescription>ဆိုင်လာယူမလား။ အိမ်ရောက်ပို့ပေးရမလား။</MethodDescription>
            <MethodWrapper>
               {
                   methodpills.map((pill, index) => (
                       <MethodPills key = {pill.id} onClick = { () => {setHomeDelivery(pill.status), grabActive(index) } } 
                        active = {pill.activestatus}
                       >{ pill.buttonText }</MethodPills>
                   ))
               } 

            </MethodWrapper>

            <PaymentForm>
                    <FormGroup>
                        <Label>နာမည်</Label>
                        <FormInput type = "text" />
                    </FormGroup>
                    <FormGroup>
                        <Label>ဖုန်းနံပါတယ်</Label>
                        <FormInput type = "text"  />
                    </FormGroup>
                    {
                        homeDelivery && (
                        <FormGroup>
                            <Label>နေရပ်လိပ်စာ</Label>
                            <FormInput type = "text"  />
                        </FormGroup>
                        )
                    }
             
            </PaymentForm>

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
                    <MethodPills onClick = {() => setkPaymodeOn(false)} >ငွေသားနဲ့ ပေးချေမယ်</MethodPills>        
                    <MethodPills onClick = {() => setkPaymodeOn(true)} >K Pay နဲ့ ပေးချေမယ်</MethodPills>         
                </MethodWrapper>

            {
                kPaymodeOn && (
                    <KPayWrapper>
                    <KPayDescription>အောက်ပါ အကောင့်များကို ငွေလွှဲနိုင်ပါတယ်။</KPayDescription>
                <AccountWrapper>
                    <HeadingWrapper>
                        <AccountHeading>အကောင့်အမည်</AccountHeading>
                        <AccountHeading>ဖုန်းနံပါတ်</AccountHeading>
                    </HeadingWrapper>
                    <Line></Line>
                    <AccountDetails>
                        <Name>မမ</Name>       <Phone>၀၉ ၁၂၃၄ ၅၆၇၈၉</Phone>
                        <Name>ညီမလေး</Name>   <Phone>၀၉ ၁၂၃၄ ၅၆၇၈၉</Phone>
                    </AccountDetails>
                 </AccountWrapper>

                <UploadWrapper>
                    <UploadDescripton>ငွေလွှဲဖြတ်ပိုင်း ထည့်သွင်းရန်</UploadDescripton>
                    <UploadButton  >ပုံတင်မယ်</UploadButton>
                </UploadWrapper>

            </KPayWrapper>
                )
            }
         
         

            <ButtonWrapper>
                <Button Big  >အော်ဒါတင်မယ်</Button>
        </ButtonWrapper>

        </PaymentWrapper>
    )
}

export default Payment
