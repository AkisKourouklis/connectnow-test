import { FC } from 'react'
import Main from '../Main/Main'
import Filters from './Filters'
import Users from './Users'

const Home: FC = () => {
  return (
    <Main>
      <div className="home">
        <div className="home__filters">
          <Filters />
        </div>
        <div className="home__list">
          <Users />
        </div>
      </div>
    </Main>
  )
}

export default Home
