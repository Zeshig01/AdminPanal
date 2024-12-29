import React from 'react';

function Modal({ modalopen, setmodalopen, handleInputChange, newStaff, handleAddStaff, title }) {
  return (
    <>
      {modalopen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
            <div className='flex justify-between'>
              <h2 className="text-xl font-semibold text-gray-600 mb-4">{title}</h2>
              <button
                onClick={() => setmodalopen(false)}
                className="bg-gradient-to-tr from-fuchsia-700 to-pink-500 px-3 text-white rounded hover:underline"
              >
                X
              </button>
            </div>

            <form onSubmit={handleAddStaff} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Salary</label>
                <input
                  type="number"
                  name="salary"
                  value={newStaff.salary}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter staff salary"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-tr from-fuchsia-700 to-pink-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Save Salary
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
