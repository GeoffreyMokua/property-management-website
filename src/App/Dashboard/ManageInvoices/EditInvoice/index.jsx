import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const EditInvoice = () => {
  const { id } = useParams();
  const history = useHistory();
  const [invoice, setInvoice] = useState({
    invoiceNumber: "",
    dueDate: "",
    totalAmount: "",
    // Add more fields here as needed
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch invoice details for the given ID
    // Replace the URL with your API endpoint
    axios
      .get(`/api/invoices/${id}`)
      .then((response) => {
        setInvoice(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("An error occurred while fetching invoice details.");
        setLoading(false);
      });
  }, [id]);

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
    // Replace the URL with your API endpoint for updating invoices
    axios
      .put(`/api/invoices/${id}`, invoice)
      .then((response) => {
        // Handle success response
        setLoading(false);
        alert("Invoice updated successfully!");
        history.push("/invoices");
      })
      .catch((error) => {
        // Handle error response
        setLoading(false);
        setError(
          "An error occurred while updating the invoice. Please try again."
        );
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Invoice</h2>
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
          <button type="submit">Update Invoice</button>
        </div>
      </form>
    </div>
  );
};

export default EditInvoice;
