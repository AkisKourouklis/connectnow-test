import { FC } from 'react'
import Navbar from '../Shared/Navbar'

const Main: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <div>{children}</div>
      </main>
    </>
  )
}

export default Main
