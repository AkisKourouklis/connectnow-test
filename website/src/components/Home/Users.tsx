import { FC } from 'react'
import Card from '../Shared/Card'
import { useSelector } from 'react-redux'
import { State } from '../../types'
import { AiOutlineLoading } from 'react-icons/ai'

const Users: FC = () => {
  const { users } = useSelector((state: State) => state.users)
  const { query, order_asc, score, order_type } = useSelector((state: State) => state.filters)

  console.log(query, order_asc, score, order_type)
  return (
    <>
      {!users ? (
        <div className="loading">
          <AiOutlineLoading />
        </div>
      ) : (
        users?.map(({ rating, summary, first_release_date, id, name }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              rating={rating}
              summary={summary}
              first_release_date={first_release_date}
            />
          )
        })
      )}
    </>
  )
}

export default Users
