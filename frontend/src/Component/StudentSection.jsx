import React from "react";
import StudentList from "./StudentList";

const StudentSection = () => {
  return (
    <>
      <div className="bg-white w-full h-screen rounded-lg shadow-sm p-5">
        <div className="flex items-center justify-between">
          <div>
            <select className="bg-gray-300 px-4 py-2 rounded-md">
              <option value="">AY 2024-25</option>
            </select>
            <select className="bg-gray-300 px-4 py-2 rounded-md ml-2">
              <option value="">CBSE 9</option>
            </select>
          </div>
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn bg-gray-300 px-2 py-2 rounded-md ml-2 "
          >
            {" "}
            + Add new Student
          </button>
        </div>
        <StudentList />
      </div>
    </>
  );
};

export default StudentSection;
