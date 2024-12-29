

import React, { useEffect, useState } from 'react';
import Modal from './Subcomponent/Modal';

function Leaves() {
  const [staffList, setStaffList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalopen, setmodalopen] = useState(false);

  // Fetch staffList from localStorage when the component mounts
  const storedstaff = JSON.parse(localStorage.getItem('staffList')) || [];

  useEffect(() => {
    setStaffList(storedstaff); // Set the staffList in state when the component mounts
  }, []);

  // Filter staff based on search term
  const filteredStaff = staffList.filter((staff) =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Update staffList with new leave data
  const getdata = (leaveDetails) => {
    const updatedStaffList = staffList.map((staff) =>
      staff.name === leaveDetails.staffname
        ? { ...staff, leaveDetails: leaveDetails }
        : staff
    );

    // Update staffList in state and save it to localStorage
    setStaffList(updatedStaffList);
    localStorage.setItem('staffList', JSON.stringify(updatedStaffList));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search staff"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-72 px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
        <div>
          <button
            onClick={() => setmodalopen(true)}
            className="px-6 py-3 bg-gradient-to-tr from-fuchsia-700 to-pink-500 text-white rounded-lg shadow-md hover:scale-105 transform transition-all"
          >
            Add Leave
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-pink-500 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Staff ID</th>
              <th className="px-4 py-2 text-left">Staff Name</th>
              <th className="px-4 py-2 text-left">Leave Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredStaff.map((staff, i) => (
              <tr key={i} className="border-b hover:bg-gray-100 ">
                <td className="px-4 py-2 text-left">{i + 1}</td>
                <td className="px-4 py-2 text-left">{staff.name}</td>
                <td className="px-4 py-2 text-left">
                  {staff.leaveDetails
                    ? `${staff.leaveDetails.leaveType} from ${staff.leaveDetails.startDate} to ${staff.leaveDetails.endDate}`
                    : 'No leave'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        modalopen={modalopen}
        setmodalopen={setmodalopen}
        staffList={staffList}
        getdata={getdata}
      />
    </div>
  );
}

export default Leaves;
