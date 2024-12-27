import React, { useState, useEffect } from "react";

function Attendance() {
  const [staffList, setStaffList] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [oldRecords, setOldRecords] = useState([]);


  // Load staff list and old attendance records from local storage
  useEffect(() => {
    const storedStaff = JSON.parse(localStorage.getItem("staffList")) || [];
    setStaffList(storedStaff);

    const storedAttendance = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
    setOldRecords(storedAttendance);

    // Initialize today's attendance records for staff
    const initialAttendance = storedStaff.reduce((acc, staff) => {
      acc[staff.name] = { inTime: "", outTime: "" };
      return acc;
    }, {});
    setAttendance(initialAttendance);
  }, []);

  const handleInputChange = (e, staffName, timeType) => {
    const value = e.target.value;
    setAttendance((prev) => ({
      ...prev,
      [staffName]: { ...prev[staffName], [timeType]: value },
    }));
  };

  const handleSaveAttendance = (staffName) => {
    const updatedAttendance = { ...attendance };
    const staffRecord = updatedAttendance[staffName];
    if (!staffRecord.inTime || !staffRecord.outTime) {
      alert("Please fill both In-Time and Out-Time.");
      return;
    }

    // Save attendance to local storage
    const updatedRecords = [...oldRecords];
    const todayRecord = updatedRecords.find((record) => record.date === new Date().toLocaleDateString());

    if (todayRecord) {
      todayRecord.attendance[staffName] = staffRecord;
    } else {
      updatedRecords.push({
        date: new Date().toLocaleDateString(),
        attendance: { [staffName]: staffRecord },
      });
    }

    localStorage.setItem("attendanceRecords", JSON.stringify(updatedRecords));
    alert("Attendance saved!");
    setOldRecords(updatedRecords);

    // Clear input fields after saving
    setAttendance((prev) => ({
      ...prev,
      [staffName]: { inTime: "", outTime: "" },
    }));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Staff Attendance</h1>

      {/* Attendance Table */}
      <div className="bg-white shadow rounded p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-600 mb-4">Mark Attendance</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2 text-gray-700">Name</th>
              <th className="border-b py-2 text-gray-700">Position</th>
              <th className="border-b py-2 text-gray-700">In-Time</th>
              <th className="border-b py-2 text-gray-700">Out-Time</th>
              <th className="border-b py-2 text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffList.length > 0 ? (
              staffList.map((staff) => (
                <tr key={staff.name} className="border-b">
                  <td className="py-2">{staff.name}</td>
                  <td className="py-2">{staff.position}</td>
                  <td className="py-2">
                    <input
                      type="time"
                      value={attendance[staff.name]?.inTime || ""}
                      onChange={(e) => handleInputChange(e, staff.name, "inTime")}
                      className="p-2 border rounded-md w-full"
                    />
                  </td>
                  <td className="py-2">
                    <input
                      type="time"
                      value={attendance[staff.name]?.outTime || ""}
                      onChange={(e) => handleInputChange(e, staff.name, "outTime")}
                      className="p-2 border rounded-md w-full"
                    />
                  </td>
                  <td className="py-2">
                    <button
                      onClick={() => handleSaveAttendance(staff.name)}
                      className="bg-gradient-to-tr from-fuchsia-700 to-pink-500 ml-3 text-white py-1 px-3 rounded hover:bg-blue-700"
                    >
                      Save Attendance
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-500">
                  No staff available. Add staff first.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Old Attendance Records */}
      <div className="bg-white shadow rounded p-6">
        <h2 className="text-xl font-semibold text-gray-600 mb-4">Old Attendance Records</h2>
        {oldRecords.length > 0 ? (
          <div className="space-y-6">
            {oldRecords.map((record, index) => (
              <div key={index} className="p-4 border rounded-md bg-gray-50">
                <h3 className="text-lg font-medium text-gray-700">
                  Date: {record.date}
                </h3>
                <ul className="mt-2 space-y-2">
                  {Object.entries(record.attendance).map(([name, times]) => (
                    <li key={name} className="text-gray-600">
                      <span className="font-medium">{name}</span>: In-Time:{" "}
                      {times.inTime || "N/A"}, Out-Time: {times.outTime || "N/A"}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No previous attendance records found.</p>
        )}
      </div>
    </div>
  );
}

export default Attendance;
