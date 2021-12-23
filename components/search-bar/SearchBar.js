import { useState } from 'react'
import { useRouter } from 'next/router'
import { Container, Form, Input, Button } from './SearchBar-styles'

export default function SearchBar() {
  const [keyword, setKeyword] = useState('')
  const router = useRouter()
  return (
    <Form>
      <Input placeholder='e.g. Biogesic' value={keyword} type='text' onChange={e => setKeyword(e.target.value)} />
      <Button
        disabled={keyword === ''}
        onClick={e => {
          e.preventDefault()
          router.push(`/search?keyword=${keyword}`)
        }}>
        <span>ရှာမယ်</span>
      </Button>
    </Form>
  )
}

SearchBar.Container = function SearchBarContainer({ children, ...restPrpos }) {
  return <Container {...restPrpos}>{children}</Container>
}
