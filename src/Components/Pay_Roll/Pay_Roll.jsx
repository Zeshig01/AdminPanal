import React, { useState, useEffect } from 'react';

function PayRoll() {
  const [staffList, setStaffList] = useState([]);
  const [totalPayroll, setTotalPayroll] = useState(0);

  useEffect(() => {
    const storedStaff = JSON.parse(localStorage.getItem('staffList')) || [];
    setStaffList(storedStaff);

    // Calculate total payroll assuming each staff has a `salary` field
    const total = storedStaff.reduce((sum, staff) => sum + (staff.salary || 0), 0);
    setTotalPayroll(total);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Pay Roll</h1>
      <div className="p-4 bg-white shadow rounded">
        <p className="text-gray-600 font-medium">
          Total Payroll: <span className="text-fuchsia-600 font-bold">${totalPayroll}</span>
        </p>
        <ul className="mt-4">
          {staffList.map((staff) => (
            <li key={staff.id} className="text-gray-700">
              {staff.name} - ${staff.salary || 'Not Defined'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PayRoll;
