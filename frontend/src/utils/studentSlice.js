import { createSlice } from '@reduxjs/toolkit'

const studentSlice = createSlice({
    name: "students",
    initialState: {
        students: []
    },
    reducers: {
        getStudentsData: (state, action) => {
            state.students = action.payload
        },
        deleteStudentsData: (state, action) => {
            const id = action.payload;
            const filter = state.students.filter((items) => items.id != id);
            state.students = filter;
        },
        addMoreData: (state, action) => {
            state.students = [...state.students, action.payload]
        }
    }
});

export const { getStudentsData, deleteStudentsData, addMoreData } = studentSlice.actions

export default studentSlice.reducer