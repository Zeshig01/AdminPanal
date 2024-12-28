import React, { useState } from 'react';

function Modal({ modalopen, setmodalopen, staffList, getdata }) {
  const [leaveDetails, setLeaveDetails] = useState({
    staffname: '',
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLeaveDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Leave details submitted:', leaveDetails);
    setmodalopen(false); // Close the modal
    getdata(leaveDetails);
  };

  return (
    <>
      {modalopen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold text-gray-600 mb-4">Add Leave</h2>
              <button
                onClick={() => setmodalopen(false)}
                className="bg-gradient-to-tr from-fuchsia-700 to-pink-500 px-3 text-white rounded hover:underline"
              >
                X
              </button>
            </div>

            {/* Leave Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Select Staff</label>
                <select
                  name="staffname"
                  value={leaveDetails.staffname}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none"
                >
                  <option value="" disabled>
                    Select a staff member
                  </option>
                  {staffList.map((staff) => (
                    <option key={staff.id} value={staff.name}>
                      {staff.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Leave Type</label>
                <input
                  type="text"
                  name="leaveType"
                  value={leaveDetails.leaveType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none"
                  placeholder="Enter leave type"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={leaveDetails.startDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={leaveDetails.endDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Reason</label>
                <textarea
                  name="reason"
                  value={leaveDetails.reason}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none"
                  placeholder="Enter reason for leave"
                />
              </div>

              <button
                type="submit"
                className="bg-gradient-to-tr from-fuchsia-700 to-pink-500  text-white px-4 py-2 rounded  w-full"
              >
                Submit Leave Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
