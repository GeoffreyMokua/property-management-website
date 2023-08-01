import React from "react";

const InvoiceList = ({ invoices, onDelete }) => {
  return (
    <div>
      <h2>Invoice List</h2>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            {invoice.title} - ${invoice.amount}
            <button onClick={() => onDelete(invoice.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;
