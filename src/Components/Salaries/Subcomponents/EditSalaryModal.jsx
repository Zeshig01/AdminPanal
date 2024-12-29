import React from 'react';

function EditSalaryModal({ isOpen, onClose, onEditSalary, salaryData, handleChange }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">Edit Salary</h2>
          <button
            onClick={onClose}
            className="bg-gradient-to-tr from-fuchsia-700 to-pink-500 px-3 text-white rounded hover:underline"
          >
            X
          </button>
        </div>
        <form onSubmit={onEditSalary} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="number"
              name="amount"
              value={salaryData.amount || ''}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter updated salary amount"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-tr from-fuchsia-700 to-pink-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Edit Salary
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditSalaryModal;
