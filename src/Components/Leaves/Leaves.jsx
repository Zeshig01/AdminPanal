
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
    // Find the staff by name and add the leave details
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
    <div>
      <div className="flex justify-between items-center">
        <div>
          <input
            type="text"
            placeholder="Search staff"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border w-72 rounded-lg py-3 px-2 mb-4"
          />
        </div>
        <div>
          <button
            onClick={() => setmodalopen(true)}
            className="px-5 bg-gradient-to-tr from-fuchsia-700 to-pink-500 py-3 mb-9 rounded-lg text-white"
          >
            Add Leave
          </button>
        </div>
      </div>

      {filteredStaff.map((staff, i) => (
        <div className="my-3 " key={i}>
          <table className="min-w-[70%]   bg-red-200  ">
            <thead>
              <tr className="">
                <th className="px-4 py-2 text-left">Staff ID</th>
                <th className="py-2 text-left">Staff Name</th>
              
                <th className=" px-4 py-2 text-left">Leave Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" px-4 py-2 text-center">{i}</td>
                <td className=" px-4 py-2 text-center">{staff.name}</td>
                <td className=" px-4 py-2 text-center">
                  {staff.leaveDetails
                    ? `${staff.leaveDetails.leaveType} from ${staff.leaveDetails.startDate} to ${staff.leaveDetails.endDate}`
                    : 'No leave'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}

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
