import React, { useEffect, useState } from 'react'

function Leaves() {
  const [staffList , setStaffList]=useState([])
  useEffect((()=>
    {
      const storedstaff = JSON.parse(localStorage.getItem('staffList')) || [];      
      setStaffList(storedstaff)
  }), [])
  return (
    <div>
      <h1>Staff List</h1>
      {
        staffList.map((staff,i)=>(
          <div className='p-4 my-10 shadow-md' key={i}>
            <p>{staff.name}</p>
           
          </div>
        ))
      }
      
    </div>
  )
}

export default Leaves