import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  let students =useSelector(store => store.students)
  let dispatch = useDispatch()

  return (
    <div>
      {students.map((student) =>
      <div key={student.id}>
        <h2> {student.name}</h2>
        <p>   {student.age}</p>

      
      </div>)}
    </div>
  )
}

export default Home