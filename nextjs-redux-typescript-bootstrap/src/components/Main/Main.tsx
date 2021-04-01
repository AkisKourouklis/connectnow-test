import { FC } from 'react'
import Notification from '../Shared/Notification'

const Main: FC = ({ children }) => {
  return (
    <>
      <Notification />
      <header>Header</header>
      <main>
        <div>{children}</div>
      </main>
      <footer>footer</footer>
    </>
  )
}

export default Main
