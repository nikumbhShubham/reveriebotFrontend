import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle, faDatabase, faUserShield, faUserFriends, faClipboard, faCalendarAlt, faFileExport
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import "tailwindcss/tailwind.css";

const AccountConfiguration = () => {
  const [isNewAccountVisible, setIsNewAccountVisible] = useState(false);
  const [selectedBroker, setSelectedBroker] = useState("Angle Broking");
  const [selectedTab, setSelectedTab] = useState("All");

  const tableData = [
    { clientId: "123", openingBalance: "5000", autoLogin: "Yes", lastLogin: "2024-09-25" },
    { clientId: "456", openingBalance: "3000", autoLogin: "No", lastLogin: "2024-09-23" },
  ];

  const toggleAccountSection = () => {
    setIsNewAccountVisible(!isNewAccountVisible);
  };

  const renderTable = () => (
    <motion.table
      layout
      className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <thead className="bg-blue-100">
        <tr>
          <th className="py-3 px-4 text-left">Client ID</th>
          <th className="py-3 px-4 text-left">Opening Balance</th>
          <th className="py-3 px-4 text-left">Auto-login</th>
          <th className="py-3 px-4 text-left">Last Login Time</th>
          <th className="py-3 px-4 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => (
          <motion.tr
            key={index}
            className="hover:bg-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <td className="py-3 px-4 border-b">{data.clientId}</td>
            <td className="py-3 px-4 border-b">{data.openingBalance}</td>
            <td className="py-3 px-4 border-b">{data.autoLogin}</td>
            <td className="py-3 px-4 border-b">{data.lastLogin}</td>
            <td className="py-3 px-4 border-b">
              <button className="bg-blue-500 text-white px-3 py-1 rounded-lg">Action</button>
            </td>
          </motion.tr>
        ))}
      </tbody>
    </motion.table>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-md">
        <motion.h2
          className="text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Account Configuration
        </motion.h2>
        <motion.button
          onClick={toggleAccountSection}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center shadow-lg hover:shadow-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
          Add New Account
        </motion.button>
      </div>

      {/* Capacity Section as animated cards */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, staggerChildren: 0.2 }}
      >
        <Card icon={faDatabase} label="Total Capacity" value="10" />
        <Card icon={faUserShield} label="Master Capacity" value="1" />
        <Card icon={faUserFriends} label="Children Capacity" value="9" />
        <Card icon={faClipboard} label="Plan Name" value="Professional" />
        <Card icon={faCalendarAlt} label="Validity" value="29 Sep 2024" />
      </motion.div>

      
      <div className="p-4 bg-white rounded-lg shadow-md">
        <motion.div className="flex space-x-4 mb-4">
          {["All", "Success", "Failed"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedTab === tab ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>
        {renderTable()}
        <motion.button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faFileExport} className="mr-2" />
          Export
        </motion.button>
      </div>

      {/* New Account Form with Animation */}
      <AnimatePresence>
        {isNewAccountVisible && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex space-x-4 mb-4">
              {["Angle Broking", "Zerodha", "Dhan"].map((broker) => (
                <motion.button
                  key={broker}
                  onClick={() => setSelectedBroker(broker)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedBroker === broker ? "bg-blue-500 text-white" : "bg-gray-300"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {broker}
                </motion.button>
              ))}
            </div>
            <FormComponent broker={selectedBroker} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Card = ({ icon, label, value }) => (
  <motion.div
    layout
    className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <FontAwesomeIcon icon={icon} className="text-gray-500 text-2xl" />
    <div>
      <h3 className="text-lg font-semibold">{label}</h3>
      <p className="text-gray-700">{value}</p>
    </div>
  </motion.div>
);

const FormComponent = ({ broker }) => {
  const formFields = {
    "Angle Broking": [
      "Angle One Client ID", "API Key", "MPIN", "Secret Key", "TOTP Key", "Email ID (Optional)", "Mobile No (Optional)"
    ],
    Zerodha: [
      "Zerodha Client ID", "Password", "API Key", "API Secret", "TOTP Key", "Email ID (Optional)", "Mobile No (Optional)"
    ],
    Dhan: [
      "Dhan Client ID", "Access Token", "Client Name", "Email ID (Optional)", "Mobile No (Optional)"
    ]
  };

  return (
    <motion.form
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="space-y-4"
  >
    {formFields[broker].map((field, index) => (
      <motion.div
        key={index}
        className="flex flex-col"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <label className="text-gray-700 font-semibold">{field}</label>
        <input
          type="text"
          placeholder={field}
          className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </motion.div>
    ))}
    <div className="flex space-x-4">
      <motion.button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Add Account
      </motion.button>
      <motion.button
        type="button"
        onClick={() => console.log("Close Form")}
        className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Close
      </motion.button>
    </div>
  </motion.form>
);
};

export default AccountConfiguration;

