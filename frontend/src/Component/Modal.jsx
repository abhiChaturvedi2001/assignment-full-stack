import axios from "axios";
import React, { useState } from "react";
import { addMoreData } from "../utils/studentSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { apiBaseUrl } from "../utils/constant";

const Modal = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    cohort: "",
    course: [],
  });

  const courseList = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "History",
    "Geography",
    "Economics",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubjectChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      course: checked
        ? [...prev.course, value]
        : prev.course.filter((subject) => subject !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiBaseUrl}/students`, formData, {
        withCredentials: true,
      });
      if (response?.status == 201) {
        dispatch(addMoreData(response?.data));
        document.getElementById("my_modal_5").close();
        toast.success("student Created Succesfully");
      }
    } catch (error) {
      toast.error(error);
      throw new Error(error);
    }
  };

  return (
    <>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create Student!</h3>
          <p className="py-4">
            Please fill out the form below with your details:
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Cohort</span>
              </label>
              <select
                name="cohort"
                className="select select-bordered"
                value={formData.cohort}
                onChange={handleInputChange}
                required
              >
                <option disabled value="">
                  Select Year
                </option>
                {Array.from({ length: 10 }, (_, i) => {
                  const startYear = new Date().getFullYear() + i;
                  const endYear = startYear + 1;
                  return `${startYear}-${endYear}`;
                }).map((yearRange) => (
                  <option key={yearRange} value={yearRange}>
                    {yearRange}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">course</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {courseList.map((subject) => (
                  <label
                    key={subject}
                    className="cursor-pointer flex items-center"
                  >
                    <input
                      type="checkbox"
                      value={subject}
                      onChange={handleSubjectChange}
                      checked={formData.course.includes(subject)}
                      className="checkbox mr-2"
                    />
                    {subject}
                  </label>
                ))}
              </div>
            </div>
            <div className="modal-action">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
