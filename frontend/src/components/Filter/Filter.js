import { useDispatch, useSelector } from 'react-redux'
import {
  selectTitleFilter,
  setTitleFilter,
  resetFilters,
  setAuthorFilter,
  selectAuthorFilter,
  setOnlyFavoriteFilter,
  selectOnlyFavoriteFilter,
} from '../../redux/slices/filterSlice'
import './Filter.css'

const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }

  const handeAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value))
  }

  const handleResetFilters = () => {
    dispatch(resetFilters())
  }

  const handleOnlyFavoriteFilterChange = (e) => {
    dispatch(setOnlyFavoriteFilter()) // нет смысла в e.target.checked так как в редюсере используется инверсия переменной
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
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={onlyFavoriteFilter}
              onChange={handleOnlyFavoriteFilterChange}
            />
            Only Favorite
          </label>
        </div>
      </div>
      <button type="button" onClick={handleResetFilters}>
        Reset Filters
      </button>
    </div>
  )
}

export default Filter
