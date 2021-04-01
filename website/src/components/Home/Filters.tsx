import { FC } from 'react'
import { BiUpArrowAlt, BiDownArrowAlt } from 'react-icons/bi'
import { TiArrowSortedDown } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import {
  filtersClear,
  loadOrderASC,
  loadOrderType,
  loadQuery,
  loadScore,
} from '../../store/actions/filters'
import { State } from '../../types'

const Filters: FC = () => {
  const { query, order_asc, score } = useSelector((state: State) => state.filters)
  const dispatch = useDispatch()

  const handleQuery = (e): void => {
    dispatch(loadQuery(e.target.value))
  }

  const handleScore = (e): void => {
    const score = e.target.value < 1 ? 1 : e.target.value > 100 ? 100 : e.target.value

    dispatch(loadScore(score))
  }

  const handleOrderType = (e): void => {
    dispatch(loadOrderType(e.target.value))
  }

  const handleOrderASC = (): void => {
    dispatch(loadOrderASC(!order_asc))
  }

  const handleClear = (): void => {
    dispatch(filtersClear())
  }

  return (
    <div className="filters">
      <p className="filters__title">Filter Results</p>
      <form>
        <div className="filters__group">
          <label htmlFor="filterQuery">Name (contains)</label>
          <input
            onChange={handleQuery}
            id="filterQuery"
            name="query"
            placeholder="Text string"
            type="string"
            value={query}
          />
        </div>
        <div className="filters__mobile">
          <div className="filters__group">
            <label htmlFor="filterScore">Minimum score</label>
            <input
              onChange={handleScore}
              id="filterScore"
              name="score"
              placeholder="1-100"
              type="number"
              value={score}
            />
          </div>
          <div className="filters__group">
            <label htmlFor="filterOrder">Order By</label>
            <div className="filters__group__select">
              <button type="button" onClick={handleOrderASC}>
                {order_asc === true ? <BiDownArrowAlt /> : <BiUpArrowAlt />}
              </button>
              <select onChange={handleOrderType} name="order">
                <option value="name">Name</option>
                <option value="score">Score</option>
              </select>
              <span className="filters__group__select__arrow">
                <TiArrowSortedDown />
              </span>
            </div>
          </div>
          <div className="filters__clear">
            <button onClick={handleClear} type="button">
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Filters
