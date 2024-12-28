import React, { useEffect, useState } from 'react'
import Modal from './Subcomponent/Modal';

function Leaves() {
  const [staffList , setStaffList]=useState([])
  const [searchTerm, setSearchTerm]=useState('')
  const [modalopen, setmodalopen] =useState(false)
  useEffect((()=>
    {
      const storedstaff = JSON.parse(localStorage.getItem('staffList')) || [];      
      setStaffList(storedstaff)
  }), [])
    
    const filteredStaff = staffList.filter(staff => staff.name.toLowerCase().includes(searchTerm.toLowerCase()))
    

  return (
    <div>
      <div className='flex justify-between items-center'>
     <div>
      <input
        type="text"
        placeholder="Search staff"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="border w-72 rounded-lg  py-3 px-2 mb-4"
      />
      </div>
        <div > <button onClick={()=>setmodalopen(true)} className='px-5 bg-gradient-to-tr from-fuchsia-700 to-pink-500  py-3 mb-9 rounded-lg text-white'>Add Leave</button></div>

      </div>
      {
        filteredStaff.map((staff,i)=>(
          <div className='p-4 my-10 shadow-md' key={i}>
            <p>{staff.name}</p>
           
          </div>
        ))
      }
      <Modal  modalopen={modalopen}
          setmodalopen={setmodalopen}
         
         
          />
      
    </div>
  )
}

export default Leaves