import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react';

const studentSlice = createSlice({
    name: "students",
    initialState: {
        students: [],
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
        },
        updateStudentData(state, action) {
            const updatedStudent = action.payload;
            state.students = state.students.map((student) =>
                student.id === updatedStudent.id ? updatedStudent : student
            );
        },
    }
});

export const { getStudentsData, deleteStudentsData, addMoreData, updateStudentData } = studentSlice.actions

export default studentSlice.reducer