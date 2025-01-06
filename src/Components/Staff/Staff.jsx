import React, { useState, useEffect } from 'react';
import Modal from './Subcomponent/Modal';

function Staff() {
  const [staffList, setStaffList] = useState([
    { id: 1, name: 'John Doe', position: 'Manager', fname: 'Robert Doe', phone: '1234567890', salary: '5000' },
    { id: 2, name: 'Jane Smith', position: 'Assistant', fname: 'Michael Smith', phone: '9876543210', salary: '4000' },
    { id: 3, name: 'Alice Brown', position: 'Accountant', fname: 'Tom Brown', phone: '1122334455', salary: '4500' },
  ]);

  const [newStaff, setNewStaff] = useState({ name: '', position: '', fname: '', phone: '', salary: '' });
  const [modalopen, setmodalopen] = useState(false);
  const [currentId, setCurrentId] = useState(4); 
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedStaff = JSON.parse(localStorage.getItem('staffList')) || [];
    if (storedStaff.length > 0) {
      setStaffList(storedStaff);

      const maxId = Math.max(...storedStaff.map((staff) => staff.id));
      setCurrentId(maxId + 1);
    }
  }, []);

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
      setNewStaff({ name: '', position: '', fname: '', phone: '', salary: '' });
      setmodalopen(false);
    }
  };

  const handleRemoveStaff = (id) => {
    const updatedStaff = staffList.filter((staff) => staff.id !== id);
    setStaffList(updatedStaff);
  };

  const filteredStaff = staffList.filter((staff) =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-700">Staff Management</h1>
        <input
          type="text"
          placeholder="Search staff"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-72 px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button
          onClick={() => setmodalopen(true)}
          className="px-6 py-3 bg-gradient-to-tr from-fuchsia-700 to-pink-500 text-white rounded-lg shadow-md hover:scale-105 transform transition-all"
        >
          Add New Staff
        </button>
      </div>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-pink-500 text-white">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Father Name</th>
              <th className="px-4 py-2 text-left">Position</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Salary</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStaff.length > 0 ? (
              filteredStaff.map((staff) => (
                <tr key={staff.id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2 text-left">{staff.id}</td>
                  <td className="px-4 py-2 text-left">{staff.name}</td>
                  <td className="px-4 py-2 text-left">{staff.fname}</td>
                  <td className="px-4 py-2 text-left">{staff.position}</td>
                  <td className="px-4 py-2 text-left">{staff.phone}</td>
                  <td className="px-4 py-2 text-left">{staff.salary}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => handleRemoveStaff(staff.id)}
                      className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600 transition"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-4 py-2 text-center text-gray-500">
                  No staff members found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal
        modalopen={modalopen}
        setmodalopen={setmodalopen}
        newStaff={newStaff}
        setNewStaff={setNewStaff}
        handleAddStaff={handleAddStaff}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default Staff;
