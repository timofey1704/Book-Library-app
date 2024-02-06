import { useDispatch, useSelector } from 'react-redux'
import {
  selectTitleFilter,
  setTitleFilter,
  resetFilters,
  setAuthorFilter,
  selectAuthorFilter,
} from '../../redux/slices/filterSlice'
import './Filter.css'

const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }

  const handeAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value))
  }

  const handleResetFilters = () => {
    dispatch(resetFilters())
  }
  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            value={titleFilter}
            placeholder="Filter by title..."
            onChange={handleTitleFilterChange}
          />
        </div>
        <div className="filter-group">
          <input
            type="text"
            value={authorFilter}
            placeholder="Filter by Author"
            onChange={handeAuthorFilterChange}
          />
        </div>
      </div>
      <button type="button" onClick={handleResetFilters}>
        Reset Filters
      </button>
    </div>
  )
}

export default Filter
