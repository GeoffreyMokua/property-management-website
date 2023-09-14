import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Invoice.css";
import Container from "react-bootstrap/Container";
import InvoiceForm from "./InvoiceForm";

class ManageInvoices extends Component {
  render() {
    return (
      <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        <Container>
          <InvoiceForm />
        </Container>
      </div>
    );
  }
}

export default ManageInvoices;
