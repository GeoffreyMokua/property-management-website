import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const InvoiceDetails = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch invoice details for the given ID
    // Replace 'your_backend_endpoint' with your API endpoint
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {invoice ? (
        <div>
          <h2>Invoice Details</h2>
          <p>Invoice Number: {invoice.invoiceNumber}</p>
          <p>Due Date: {invoice.dueDate}</p>
          <p>Total Amount: {invoice.totalAmount}</p>
          {/* Display other invoice details here */}
        </div>
      ) : (
        <div>Invoice not found.</div>
      )}
    </div>
  );
};

export default InvoiceDetails;
