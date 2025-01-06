  import React from 'react';

  function Modal({ modalopen, setmodalopen, handleInputChange, newStaff, handleAddStaff }) {
    if (!modalopen) return null;
    return (
      <>
        {modalopen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">

              <div className='flex justify-between'>
                <h2 className="text-xl font-semibold text-gray-600 mb-4">Add New Staff</h2>
                <button
                  onClick={() => setmodalopen(false)}
                  className="bg-gradient-to-tr from-fuchsia-700 to-pink-500 px-3 text-white rounded hover:underline"
                >
                  X
                </button>
              </div>

              <form onSubmit={handleAddStaff} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={newStaff.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter staff name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Father Name</label>
                  <input
                    type="text"
                    name="fname"
                    value={newStaff.fname}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter father name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Position</label>
                  <input
                    type="text"
                    name="position"
                    value={newStaff.position}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter position"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    value={newStaff.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter Phone No."
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Salary</label>
                  <input
                    type="number"
                    name="salary"
                    value={newStaff.salary}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter Salary"
                    required
                  />
                </div>
                <button
                // onClick={()=>{setmodalopen(false)}}
                  type="submit"
                  className="w-full bg-gradient-to-tr from-fuchsia-700 to-pink-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                  Add Staff
                </button>
              </form>

            </div>
          </div>
        )}
      </>
    );
  }

  export default Modal;
