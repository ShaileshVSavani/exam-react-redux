import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, getStudents, updateStudent } from "../redux/Action";

const Home = () => {
  const [show, setShow] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [id, setId] = useState("");

  let data = useSelector((store) => store.Student);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudents());
  }, []);
  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleSaveChanges = () => {
    let newStudent = {
      number: number,
      studentName: studentName,
      age: age,
      address: address,
    };
    dispatch(updateStudent(id, newStudent));
    setShow(false);
  };
  const handleUpdate = (student) => {
    setShow(true);
    setStudentName(student.studentName);
    setAge(student.age);
    setAddress(student.address);
    setNumber(student.number);
    setId(student.id);
  };

  return (
    <div>
      {show && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-1/2">
            <h2 className="text-xl font-semibold mb-4">Update Student</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Age</label>
                <input
                  type="number"
                  placeholder="Enter Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Address</label>
                <textarea
                  placeholder="Enter Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Number</label>
                <input
                  type="number"
                  placeholder="Enter GR Id"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </form>
            <div className="flex justify-end space-x-4">
              <button className="btn btn-secondary" onClick={handleClose}>
                Close
              </button>
              <button className="btn btn-primary" onClick={handleSaveChanges}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.students.map((student) => (
          <div
            key={student.id}
            className="bg-white shadow-lg rounded-lg p-6 m-4 w-80"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {student.name}
            </h2>
            <p className="text-gray-600">Age: {student.age}</p>
            <p className="text-gray-600">Address: {student.address}</p>
            <p className="text-gray-600">Number: {student.number}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleUpdate(student)}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(student.id)}
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
