import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewInvoice = () => {
  const navigate = useNavigate();
  const [invoice, setInvoice] = useState({
    invoiceNumber: "",
    dueDate: "",
    totalAmount: "",
    // Add more fields here as needed
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    // Implement form submission logic here
    // Replace the URL with your API endpoint for creating new invoices
    axios
      .post("/api/invoices", invoice)
      .then((response) => {
        // Handle success response
        setLoading(false);
        alert("Invoice created successfully!");
        navigate("/invoices");
      })
      .catch((error) => {
        // Handle error response
        setLoading(false);
        setError(
          "An error occurred while creating the invoice. Please try again."
        );
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Create New Invoice</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Invoice Number:</label>
          <input
            type="text"
            name="invoiceNumber"
            value={invoice.invoiceNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={invoice.dueDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Total Amount:</label>
          <input
            type="number"
            name="totalAmount"
            value={invoice.totalAmount}
            onChange={handleChange}
          />
        </div>
        {/* Add more form fields here as needed */}
        <div>
          <button type="submit">Create Invoice</button>
        </div>
      </form>
    </div>
  );
};

export default NewInvoice;
