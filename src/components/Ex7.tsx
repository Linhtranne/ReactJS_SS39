import React from 'react';

const Ex7 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-3 gap-4 bg-white p-4 rounded-lg shadow-lg">
        {Array.from({ length: 9 }, (_, i) => (
          <div key={i} className="bg-pink-500 text-white text-center py-4 rounded-md shadow">
            0{i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ex7;