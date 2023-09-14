import React, { useState } from "react";

const AlertMessage = ({ message }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-gray-900 opacity-50"></div>

      {/* Alert */}
      {isOpen && (
        <div className="bg-white rounded-md p-8">
          <p className="text-lg font-semibold mb-4">{message}</p>
          <div className="flex justify-end">
            <button
              className="bg-primary text-white px-4 py-2 rounded"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertMessage;
