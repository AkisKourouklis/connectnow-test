import { FC, useState } from 'react'
import { BiUpArrowAlt, BiDownArrowAlt } from 'react-icons/bi'
import { TiArrowSortedDown } from 'react-icons/ti'

const Filters: FC = () => {
  const [filterASC, setFilterASC] = useState<boolean>(false)

  const toggleFilterASC = (): void => {
    setFilterASC((e) => !e)
  }

  return (
    <div className="filters">
      <p className="filters__title">Filter Results</p>
      <form>
        <div className="filters__group">
          <label htmlFor="filterQuery">Name (contains)</label>
          <input id="filterQuery" name="query" placeholder="Text string" type="string" />
        </div>
        <div className="filters__mobile">
          <div className="filters__group">
            <label htmlFor="filterScore">Minimum score</label>
            <input id="filterScore" name="score" placeholder="1-10" type="string" />
          </div>
          <div className="filters__group">
            <label htmlFor="filterOrder">Order By</label>
            <div className="filters__group__select">
              <button type="button" onClick={toggleFilterASC}>
                {filterASC === true ? <BiDownArrowAlt /> : <BiUpArrowAlt />}
              </button>
              <select name="order">
                <option value="score">Score</option>
                <option value="name">Name</option>
              </select>
              <span className="filters__group__select__arrow">
                <TiArrowSortedDown />
              </span>
            </div>
          </div>
          <div className="filters__clear">
            <button type="button">Clear</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Filters
