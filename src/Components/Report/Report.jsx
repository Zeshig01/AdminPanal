import React, { useState, useEffect } from 'react';

function Reports() {
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    const storedStaff = JSON.parse(localStorage.getItem('staffList')) || [];
    setStaffList(storedStaff);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Reports</h1>
      <div className="p-4 bg-white shadow rounded">
        <h2 className="text-xl font-semibold text-gray-600">Staff Salary Report</h2>
        <ul className="mt-4">
          {staffList.map((staff) => (
            <li key={staff.id} className="text-gray-700">
              {staff.name} - ${staff.salary || 'Not Defined'}
            </li>
          ))}
        </ul>
        <p className="text-gray-700 mt-6">
          <span className="font-semibold">Total Staff:</span> {staffList.length}
        </p>
      </div>
    </div>
  );
}

export default Reports;
