import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  let data =useSelector(store => store.student)
  let dispatch = useDispatch()

    dispatch(getStudents())
  
  

  return (
    <div>
      {data.students.map((student) =>
      <div key={student.id}>
        <h2> {student.name}</h2>
        <p>   {student.age}</p>

      
      </div>)}
    </div>
  )
}

export default Home