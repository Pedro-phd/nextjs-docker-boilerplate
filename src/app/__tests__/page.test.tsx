import { render } from '@/utils/test'
import Home from '../page'

const setup = () => render(<Home />)

describe('Home page test', () => {
  it('should render the main component', () => {
    const { getByTestId } = setup()
    expect(getByTestId('home')).toBeInTheDocument()
  })

  it('should render the expected image', () => {
    const { getByTestId } = setup()
    const image = getByTestId('home-image')

    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/next.svg')
    expect(image).toHaveAttribute('alt', 'Next.js Logo')
  })
})
