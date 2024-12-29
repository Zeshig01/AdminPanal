import { Modal, TextField, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';

function Salaries({ handleUpdateSalary }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [salary, setSalary] = useState('');
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    // Fetch staffList from localStorage when the component mounts
    const storedStaff = JSON.parse(localStorage.getItem('staffList')) || [];
    setStaffList(storedStaff);
  }, []);

  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };

  const handleEditSalary = (staff) => {
    setSelectedStaff(staff);
    setSalary(staff.salary || ''); // Pre-fill salary if available
    setModalOpen(true);
  };

  const handleSalarySubmit = (e) => {
    e.preventDefault();
    if (selectedStaff) {
      handleUpdateSalary(selectedStaff.id, salary); // Update salary for the selected staff
      setModalOpen(false); // Close the modal after submitting
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Staff Salary Details</h1>

      <div className="space-y-4">
        {staffList.length === 0 ? (
          <p>No staff available.</p>
        ) : (
          staffList.map((staff) => (
            <div key={staff.id} className="flex justify-between items-center p-4 border rounded shadow-md">
              <div className="flex-grow">
                <p><strong>Name:</strong> {staff.name}</p>
                <p><strong>Position:</strong> {staff.position}</p>
                <p><strong>Phone:</strong> {staff.phone}</p>
              </div>

              <div className="text-right">
                <p><strong>Salary:</strong> ${staff.salary}</p>
                {/* <Button
                  onClick={() => handleEditSalary(staff)}
                  variant="contained"
                  color="primary"
                >
                  Edit Salary
                </Button> */}
              </div>
            </div>
          ))
        )}
      </div>

      {/* <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="edit-salary-modal"
        aria-describedby="modal-to-edit-staff-salary"
      >
        <div className="modal-content p-6 bg-white rounded shadow-lg w-full max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4">Edit Staff Salary</h2>

          <form onSubmit={handleSalarySubmit}>
            <TextField
              label="Salary"
              type="number"
              value={salary}
              onChange={handleSalaryChange}
              fullWidth
              variant="outlined"
              required
              className="mb-4"
            />

            <div className="flex justify-end">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="mr-2"
              >
                Save Salary
              </Button>
              <Button
                onClick={() => setModalOpen(false)}
                variant="outlined"
                color="secondary"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </Modal> */}
    </div>
  );
}

export default Salaries;
