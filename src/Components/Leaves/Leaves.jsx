import React, { useEffect, useState } from 'react'

function Leaves() {
  const [staffList , setStaffList]=useState([])
  const [searchTerm, setSearchTerm]=useState('')
  useEffect((()=>
    {
      const storedstaff = JSON.parse(localStorage.getItem('staffList')) || [];      
      setStaffList(storedstaff)
  }), [])
    
    const filteredStaff = staffList.filter(staff => staff.name.toLowerCase().includes(searchTerm.toLowerCase()))
    

  return (
    <div>
      <div>
     
      <input
        type="text"
        placeholder="Search staff"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="border w-full p-2 mb-4"
      />
      <div>
        <button >Leave</button>
      </div>
      </div>
      {
        filteredStaff.map((staff,i)=>(
          <div className='p-4 my-10 shadow-md' key={i}>
            <p>{staff.name}</p>
           
          </div>
        ))
      }
      
    </div>
  )
}

export default Leaves