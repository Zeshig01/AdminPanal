import React, { useState, useEffect } from 'react';
import Modal from './Subcomponent/Modal';

function Staff() {
  const [staffList, setStaffList] = useState([]);
  const [newStaff, setNewStaff] = useState({ name: '', position: '',fname:'', phone : ''});
  const [modalopen, setmodalopen] =useState(false)
  const [currentId, setCurrentId] = useState(1);
  
  // Load staff data from localStorage on component mount
  useEffect(() => {
    const storedStaff = JSON.parse(localStorage.getItem('staffList')) || [];
    setStaffList(storedStaff);
  }, []);

  // Save staff data to localStorage whenever the list updates
  useEffect(() => {
    localStorage.setItem('staffList', JSON.stringify(staffList));
  }, [staffList]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStaff({ ...newStaff, [name]: value });
  };

  const handleAddStaff = (e) => {
    e.preventDefault();
    if (newStaff.name && newStaff.position && newStaff.fname && newStaff.phone) {
      const staffWithId = { id: currentId, ...newStaff };
      setStaffList([...staffList, staffWithId]);
      setCurrentId(currentId + 1);
      setNewStaff({ name: '',fname: '', position: '', phone:'' }); // Reset form
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Staff Management</h1>

      {/* Staff List */}
      <div className="mb-6">
       <div className='flex justify-between items-center'>
        <div><h2 className="text-xl font-semibold text-gray-600 mb-3">Staff List</h2></div>
        <div > <button onClick={()=>setmodalopen(true)} className='px-5 bg-gradient-to-tr from-fuchsia-700 to-pink-500  py-3 mb-9 rounded-lg text-white'>Add New Staff</button></div>
       </div>
        
        <div className="space-y-4">
          {staffList.length > 0 ? (
            staffList.map((staff, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow rounded flex justify-between items-center"
              >
                <div className='flex gap-3'>
                  <div>
                  {index}
                  </div>
                  <div className='space-y-3'>
                  <p className="font-medium text-gray-800"> <span className='font-bold text-fuchsia-600'> Name: </span>  {staff.name}</p>
                  <p className="text-sm text-gray-600"> <span className='font-bold text-fuchsia-600'> Father Name: </span>  {staff.fname}</p>
                  <p className="text-sm text-gray-600"> <span className='font-bold text-fuchsia-600'> Designation: </span> {staff.position}</p>
                  <p className="text-sm text-gray-600"> <span className='font-bold text-fuchsia-600'> Phone No. : </span> {staff.phone}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No staff members available.</p>
          )}
        </div>
      </div>

      {/* Add New Staff */}
      
      <Modal  modalopen={modalopen}
          setmodalopen={setmodalopen}
          newStaff={newStaff}
          setNewStaff={setNewStaff}
          handleAddStaff={handleAddStaff}
          handleInputChange={handleInputChange}/>
    </div>
    
  );
}



export default Staff;
