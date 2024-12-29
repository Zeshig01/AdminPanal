import React, { useState } from 'react';

function PayHeads() {
  const [payHeads, setPayHeads] = useState([
    { name: 'Basic Salary', value: 5000 },
    { name: 'Allowance', value: 1000 },
  ]);
  const [newPayHead, setNewPayHead] = useState({ name: '', value: 0 });

  const handleAddPayHead = () => {
    setPayHeads([...payHeads, newPayHead]);
    setNewPayHead({ name: '', value: 0 });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Pay Heads</h1>
      <div className="p-4 bg-white shadow rounded">
        <ul>
          {payHeads.map((head, index) => (
            <li key={index} className="text-gray-700">
              {head.name}: ${head.value}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Pay Head Name"
            className="p-2 border rounded mr-2"
            value={newPayHead.name}
            onChange={(e) => setNewPayHead({ ...newPayHead, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Value"
            className="p-2 border rounded mr-2"
            value={newPayHead.value}
            onChange={(e) => setNewPayHead({ ...newPayHead, value: parseFloat(e.target.value) })}
          />
          <button
            onClick={handleAddPayHead}
            className="px-4 py-2 bg-gradient-to-tr from-fuchsia-700 to-pink-500 text-white rounded-lg"
          >
            Add Pay Head
          </button>
        </div>
      </div>
    </div>
  );
}

export default PayHeads;
