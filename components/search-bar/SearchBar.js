import { Container, Form, Input, Button } from './SearchBar-styles'

export default function SearchBar() {
  return (
    <Form>
      <Input placeholder='e.g. Biogesic' />
      <Button>
        <span>ရှာမယ်</span>
      </Button>
    </Form>
  )
}

SearchBar.Container = function SearchBarContainer({ children, ...restPrpos }) {
  return <Container {...restPrpos}>{children}</Container>
}
