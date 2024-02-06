import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
  // todo:
  // onlyFavorite
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      //return {...state, title : action.payload}
      state.title = action.payload // ошибок нет потому что в reduxjs/toolkit есть immer (создание нового состояния путем изменения текущего)
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload
    },
    resetFilters: (state) => {
      // вернуть фильтры в состояние по умолчанию
      return initialState
    },
  },
})

export const { setTitleFilter, resetFilters, setAuthorFilter } =
  filterSlice.actions // экспорт actionCreator

export const selectTitleFilter = (state) => state.filter.title // используется для работы с useSelector в компоненте
export const selectAuthorFilter = (state) => state.filter.author

// console.log(filterSlice.actions) // замена actionCreators
// console.log(filterSlice.actions.setTitleFilter('test')) // передача payload

export default filterSlice.reducer // экспорт редюсера
