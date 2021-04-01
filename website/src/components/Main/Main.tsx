import { FC } from 'react'
import Navbar from '../Shared/Navbar'

const Main: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <div>{children}</div>
      </main>
      <footer>footer</footer>
    </>
  )
}

export default Main
