import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    transData:[],
    transLoading: false,
    transError: ''
}

const TransecSlice = createSlice({
    name: 'TransecSlice',
    initialState: initialState,
    reducers: {
        setTransData: (state, { payload }) => { state.transData = payload },
        setTransLoading: (state, { payload }) => { state.transLoading = payload },
        setTransError: (state, { payload }) => { state.transError = payload }
    }
})

export const {
    setTransData,
    setTransLoading,
    setTransError
} = TransecSlice.actions;

export default TransecSlice.reducer;