import React, { useState, useEffect } from "react";
import axios from "axios";

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch rent payment data from the backend API
    // Replace 'your_backend_endpoint' with the actual API endpoint
    axios
      .get("/api/rent_payments")
      .then((response) => {
        setPayments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("An error occurred while fetching rent payment data.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const calculateBalance = (property) => {
    const totalPaid = property.payments.reduce(
      (acc, payment) => acc + payment.amount,
      0
    );
    return property.rent - totalPaid;
  };

  return (
    <div>
      <h2>Property Payments</h2>
      <table>
        <thead>
          <tr>
            <th>Property Name</th>
            <th>Rent Paid</th>
            <th>Total Paid</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((property) => (
            <tr key={property.id}>
              <td>{property.name}</td>
              <td>Rent: ${property.rent}</td>
              <td>
                Total Paid: $
                {property.payments.reduce(
                  (acc, payment) => acc + payment.amount,
                  0
                )}
              </td>
              <td>Balance: ${calculateBalance(property)}</td>
              {/* Add other property information or components here */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payments;
