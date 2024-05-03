import React from 'react'
import Student from './student'

function Students({students}) {
  
  return (
    <>
    {students.map((student)=>(
       <Student key={student.id} student={student}  />    
        ))}
    </>
  )
}

export default Students