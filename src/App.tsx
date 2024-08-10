import React, { useState, useEffect } from "react";
import CustomerList from "./components/CustomerList";
import CustomerDetails from "./components/CustomerDetails";
import "./App.css";
import { generateCustomers } from "./generateCustomers";

const App: React.FC = () => {
  const [customers] = useState(generateCustomers());
  const [selectedCustomer, setSelectedCustomer] = useState(customers[0]);

  useEffect(() => {
    setSelectedCustomer(customers[0]);
  }, [customers]);

  return (
    <div className="app-container">
      <CustomerList
        customers={customers}
        onSelectCustomer={setSelectedCustomer}
        selectedCustomer={selectedCustomer}
      />
      {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
    </div>
  );
};

export default App;
