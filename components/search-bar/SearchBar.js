import { useState } from 'react'
import { useRouter } from 'next/router'
import { Container, Form, Input, Button } from './SearchBar-styles'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function SearchBar() {
  const [keyword, setKeyword] = useState('')
  const router = useRouter()
  return (
    <Form>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Input placeholder='e.g. Biogesic' value={keyword} type='text' onChange={e => setKeyword(e.target.value)} />
      <Button
        // disabled={keyword === ''}
        onClick={e => {
          e.preventDefault()
          if (keyword === '') {
            toast.error('တစ်ခုခုရေးဦးလေ အချောလေး😘')
          } else {
            router.push(`/search?keyword=${keyword}`)
          }
        }}>
        <span>ရှာမယ်</span>
      </Button>
    </Form>
  )
}

SearchBar.Container = function SearchBarContainer({ children, ...restPrpos }) {
  return <Container {...restPrpos}>{children}</Container>
}
