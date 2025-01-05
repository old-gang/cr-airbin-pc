import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHomeGoodPriceData } from '../../services'

export const fetchHomeDataAction = createAsyncThunk(
  'fetchHomeDataAction',
  async () => {
    const res = await getHomeGoodPriceData()
    return res
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {}
  },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
      state.goodPriceInfo = payload
    })
  }
})

export default homeSlice.reducer
export const { changeGoodPriceInfo } = homeSlice.actions
