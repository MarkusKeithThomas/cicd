import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Basic CI test', () => {
  it('renders home page heading', () => {
    render(<Home />)

    expect(
      screen.getByText(/welcome to next\.js!/i)
    ).toBeInTheDocument()
  })
})
