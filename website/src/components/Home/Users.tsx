import { FC } from 'react'
import Card from '../Shared/Card'
import { useSelector } from 'react-redux'
import { State } from '../../types'
import { AiOutlineLoading } from 'react-icons/ai'

const Users: FC = () => {
  const { users } = useSelector((state: State) => state.users)
  const { query, order_asc, score, order_type } = useSelector((state: State) => state.filters)

  const filteredUsers = order_asc
    ? users
        ?.filter((q) => {
          return query === '' ? true : q.name.toLocaleLowerCase().includes(query)
        })
        ?.filter((s) => {
          return s.rating >= Number(score)
        })
        ?.sort((a, b) => {
          if (order_type === 'name') {
            const fa = a.name.toLowerCase()
            const fb = b.name.toLowerCase()

            if (fa < fb) {
              return -1
            }
            if (fa > fb) {
              return 1
            }
            return 0
          } else {
            return a.rating - b.rating
          }
        })
    : users
        ?.filter((q) => {
          return q.name.toLocaleLowerCase().includes(query)
        })
        ?.filter((s) => {
          return s.rating > Number(score)
        })
        ?.sort((a, b) => {
          if (order_type === 'name') {
            const fa = a.name.toLowerCase()
            const fb = b.name.toLowerCase()

            if (fa < fb) {
              return -1
            }
            if (fa > fb) {
              return 1
            }
            return 0
          } else {
            return a.rating - b.rating
          }
        })
        ?.reverse()

  return (
    <>
      {!filteredUsers ? (
        <div className="loading">
          <AiOutlineLoading />
        </div>
      ) : (
        filteredUsers?.map(({ rating, summary, first_release_date, id, name }) => {
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
