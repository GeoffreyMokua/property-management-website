import React from "react";
import { CssBaseline, ThemeProvider, Container, Paper } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { PaymentsTable } from "./PaymentsTable";
import { RentSummary } from "./RentSummary";

const theme = createTheme();

function ManagePayments() {
  const properties = [
    {
      name: "Property A",
      payments: [
        { tenant: "Tenant 1", amount: 1000, date: "2023-08-01" },
        { tenant: "Tenant 2", amount: 800, date: "2023-08-05" },
      ],
    },
    {
      name: "Property B",
      payments: [
        { tenant: "Tenant 3", amount: 1200, date: "2023-08-02" },
        { tenant: "Tenant 1", amount: 1100, date: "2023-08-10" },
      ],
    },
    // Add more properties and payments
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
          <PaymentsTable
            payments={properties.flatMap((property) => property.payments)}
          />
        </Paper>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <RentSummary properties={properties} />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default ManagePayments;
