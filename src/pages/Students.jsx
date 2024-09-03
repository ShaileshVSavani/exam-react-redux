import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddStudent } from '../redux/Action'

const Students = () => {
  const [studentName, setStudentName] = useState('')
  const [studentAge, setStudentAge] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState('')

  let dispatch =useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    let newStudent ={
      name: studentName,
      age: studentAge,
      address: address,
      number: number
    }
    dispatch(AddStudent(newStudent))
    // console.log(studentName, studentAge, address, number)
    console.log(newStudent)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"  value={studentName} placeholder='Enter Name' onChange={(e) => setStudentName(e.target.value)}/>
        <input type="text" value={studentAge} placeholder='Enter Age' onChange={(e) => setStudentAge(e.target.value)} />
        <input type="text" value={address}placeholder='Enter Address' onChange={(e) => setAddress(e.target.value)}/>
        <input type="text" value={number}  placeholder="Enter Number" onChange={(e)=> setNumber(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Students
