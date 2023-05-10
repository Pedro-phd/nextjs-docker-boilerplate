import { FC, ReactElement } from 'react'
import { act } from 'react-dom/test-utils'
import { render, RenderOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

interface IProviders {
  children: ReactElement
}

interface IProviderProps {
  wrapperProps?: Omit<IProviders, 'children'>
}

const Providers: FC<IProviders> = ({ children }) => <>{children}</>

// Use this in your test after mounting if you need to let the query finish without updating the wrapper
export async function actWait(amount = 0) {
  await act(async () => {
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, amount))
  })
}

const customRender = (ui: ReactElement, options?: RenderOptions & IProviderProps) => {
  const { wrapperProps = {}, ...rest } = options || {}

  return {
    user: userEvent.setup(),
    ...render(ui, {
      wrapper: ({ children }) => <Providers {...wrapperProps}>{children}</Providers>,
      ...rest,
    }),
  }
}

export * from '@testing-library/react'
export { customRender as render }
