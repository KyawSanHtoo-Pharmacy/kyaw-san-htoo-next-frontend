import {useState} from 'react';
import {BannerContainer,BannerTitle, BannerContent, DropdownWrapper, Dropdown, FixedText, ClickAble, DropdownData} from './Banner-Style'


const Banner = () => {
    const [dropdownState, setDropdownState] = useState(false);

    const clickHandler = () =>{
        setDropdownState(!dropdownState);
    }

    return (
        <>
        <BannerContainer>
           <BannerContent>
             <BannerTitle>သင်ဘယ်လို <br/> ခံစားနေရပါသလဲ</BannerTitle>
             <DropdownWrapper>
                <ClickAble onClick = {clickHandler} >
                 <Dropdown>
                    နေမကောင်းဖြစ် 
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.8546 0.355353L6.99374 5.0691L2.13289 0.355353C1.6443 -0.118451 0.855034 -0.118451 0.366443 0.355353C-0.122148 0.829157 -0.122148 1.59453 0.366443 2.06834L6.11678 7.64465C6.60537 8.11845 7.39463 8.11845 7.88322 7.64465L13.6336 2.06834C14.1221 1.59453 14.1221 0.829157 13.6336 0.355353C13.145 -0.106302 12.3432 -0.118451 11.8546 0.355353Z" fill="#3A4A67"/>
                    </svg>
                 </Dropdown>
                 <FixedText>နေတယ်</FixedText>
                 </ClickAble>
                 <DropdownData dropdownState = {dropdownState} >

                 </DropdownData>
             </DropdownWrapper>
           </BannerContent>
        </BannerContainer>
        </>
    )
}

export default Banner
