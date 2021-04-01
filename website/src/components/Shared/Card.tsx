import { FC } from 'react'
import { IUser } from '../../types'
import { truncate } from '../../utils/utils'

const Card: FC<IUser> = ({ name, rating, summary }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img alt="card" src="/placeholder.png" />
      </div>
      <div className="card__info">
        <p className="card__info__title">{name}</p>
        <p className="card__info__date">
          <b>Release Date:</b> 10-10-2020
        </p>
        <p className="card__info__description">[Summary] {truncate(summary, 130)}</p>
      </div>
      <div className="card__number">
        <div className="card__number__container">
          <p>{Math.round(rating)}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
