import React from "react";
import PhotoGrid from "./PhotoGrid";

interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
}

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  return (
    <div className="customer-details">
      <h2>{customer.name} details here</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <PhotoGrid />
    </div>
  );
};

export default CustomerDetails;
