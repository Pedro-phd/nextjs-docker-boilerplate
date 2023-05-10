'use client'

import * as Styled from './page.style'

export default function Home() {
  return (
    <Styled.Main data-testid="home">
      <Styled.Wrapper>
        <Styled.Image data-testid="home-image" src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
      </Styled.Wrapper>
    </Styled.Main>
  )
}
