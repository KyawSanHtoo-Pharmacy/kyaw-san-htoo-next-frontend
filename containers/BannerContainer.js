import { Banner } from '@/ksh-components'
function BannerContainer() {
  return (
    <>
      <Banner.Section>
        <Banner.Content>
          <Banner.Title>
            သင်ဘယ်လို <br /> ခံစားနေရပါသလဲ{' '}
          </Banner.Title>
          <Banner />
        </Banner.Content>
      </Banner.Section>
    </>
  )
}
export default BannerContainer
