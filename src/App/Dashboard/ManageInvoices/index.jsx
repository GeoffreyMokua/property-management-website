import React from "react";
import {
  Container,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
// import InvoiceDetails from "./InvoiceDetails";
// import InvoiceList from "./InvoiceList";
// import NewInvoice from "./NewInvoice";

const ManageInvoices = ({ invoiceData }) => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Invoice
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Unit Price</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Loop through your items */}
              <TableRow>
                <TableCell>Item 1</TableCell>
                <TableCell align="right">2</TableCell>
                <TableCell align="right">$10.00</TableCell>
                <TableCell align="right">$20.00</TableCell>
              </TableRow>
              {/* Add more rows for other items */}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="h6" align="right" style={{ marginTop: "20px" }}>
          Total: $20.00
        </Typography>
      </Paper>
    </Container>
  );
};

export default ManageInvoices;
