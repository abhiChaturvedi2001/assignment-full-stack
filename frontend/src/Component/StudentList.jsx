import React, { useState } from "react";
import getStudent from "../utils/getStudent";
import { useDispatch, useSelector } from "react-redux";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { deleteStudentsData, updateStudentData } from "../utils/studentSlice";
import { FaCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import { apiBaseUrl } from "../utils/constant";
import Modal from "./Modal";

const StudentList = () => {
  getStudent();
  const students = useSelector((store) => store.student.students);
  const dispatch = useDispatch();
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${apiBaseUrl}/students/${id}`, {
        withCredentials: true,
      });
      dispatch(deleteStudentsData(id));
      toast.success("student delete succesfully");
    } catch (error) {
      toast.error(error);
      throw new Error(error);
    }
  };

  const handleUpdate = async (id) => {
    document.getElementById("my_modal_5").showModal();
    const filter = students.filter((items) => {
      if (items.id == id) {
        return items;
      }
    });
    setSelectedStudent(filter);
  };

  const handleModalSubmit = async (updatedStudent) => {
    try {
      const response = await axios.put(
        `${apiBaseUrl}/students/${updatedStudent.id}`,
        updatedStudent,
        {
          withCredentials: true,
        }
      );
      // Redux state update karein
      dispatch(updateStudentData(response.data));
      toast.success("Student updated successfully");
    } catch (error) {
      toast.error("Failed to update student");
    }
  };

  const formattedDate = (date) => {
    return new Date(date).toISOString().split("T")[0];
  };

  return (
    <>
      {" "}
      <div className="overflow-x-auto mt-7">
        <table className="table table-md ">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Cohort</th>
              <th>Courses</th>
              <th>Date of Joined</th>
              <th>Last Login</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          {students.length === 0 ? (
            <h1 className="text-center">loading..</h1>
          ) : (
            <tbody>
              {students.map((items) => {
                return (
                  <tr key={items.id}>
                    <td>{items.name}</td>
                    <td>AY {items.cohort}</td>
                    <td>{items.course.join(" ")}</td>
                    <td>{formattedDate(items.date)}</td>
                    <td>
                      {formattedDate(items.date)}
                      {new Date().toLocaleTimeString()}
                    </td>
                    <td>
                      {items.status ? (
                        <FaCircle className="text-green-600" />
                      ) : (
                        <FaCircle className="bg-red-600" />
                      )}
                    </td>
                    <td className="flex items-center space-x-2">
                      <MdEdit
                        onClick={() => handleUpdate(items.id)}
                        size={20}
                        cursor={"pointer"}
                      />
                      <MdDeleteForever
                        onClick={() => handleDelete(items.id)}
                        size={20}
                        cursor={"pointer"}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
      <Modal
        selectedStudent={selectedStudent}
        setSelectedStudent={setSelectedStudent}
      />
    </>
  );
};

export default StudentList;
