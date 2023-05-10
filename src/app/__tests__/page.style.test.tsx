import renderer from 'react-test-renderer'
import { Main, Wrapper, Image } from '../page.style'

describe('Home page styles test', () => {
  it('should render `Main` as expected', () => {
    const tree = renderer.create(<Main />).toJSON()
    expect(tree).toMatchSnapshot('Home - `Main` styled component')
  })

  it('should render `Wrapper` as expected', () => {
    const tree = renderer.create(<Wrapper />).toJSON()
    expect(tree).toMatchSnapshot('Home - `Wrapper` styled component')
  })

  it('should render `Image` as expected', () => {
    const tree = renderer.create(<Image src="" alt="" />).toJSON()
    expect(tree).toMatchSnapshot('Home - `Image` styled component')
  })
})
