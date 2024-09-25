import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CopyTrading = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Copy Trading</h1>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Master Account */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Master Account</h2>
          <div className="w-32 h-32">
            <CircularProgressbar value={100} maxValue={1} text={`0/1`} />
          </div>
        </div>

        {/* Child Account */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Child Account</h2>
          <div className="w-32 h-32">
            <CircularProgressbar value={90} maxValue={9} text={`0/9`} />
          </div>
        </div>
      </div>

      <button
        className="bg-blue-600 text-white py-2 px-4 rounded-lg"
        onClick={openModal}
      >
        Add New Master Account
      </button>

      {/* Modal */}
      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
            <Dialog.Title className="text-xl font-semibold mb-4">Add Master Account</Dialog.Title>
            <form>
              <label className="block mb-2">Master Account Name:</label>
              <input
                type="text"
                className="w-full p-2 border rounded mb-4"
                placeholder="Enter Master Account Name"
              />

              <label className="block mb-2">API Key:</label>
              <input
                type="text"
                className="w-full p-2 border rounded mb-4"
                placeholder="Enter API Key"
              />

              {/* Add more form inputs as needed */}
              <div className="flex justify-end">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg" type="submit">
                  Add Account
                </button>
                <button
                  className="ml-2 bg-gray-600 text-white py-2 px-4 rounded-lg"
                  onClick={closeModal}
                  type="button"
                >
                  Close
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default CopyTrading;
