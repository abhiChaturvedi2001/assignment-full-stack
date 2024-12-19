import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getStudentsData } from './studentSlice';
import { apiBaseUrl } from './constant';

const getStudent = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getAllStudents()
    }, [])

    const getAllStudents = async () => {
        const response = await axios.get(`${apiBaseUrl}/students`, { withCredentials: true })
        dispatch(getStudentsData(response?.data))
    }
}

export default getStudent