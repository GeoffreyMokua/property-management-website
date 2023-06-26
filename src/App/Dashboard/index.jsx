import React from "react";

export default function Dashboard() {
  const token = localStorage.getItem("token");
  const tenant_id = localStorage.getItem("tenant_id");

  if (token) {
  return <div>Dashboard{tenant_id}</div>;
  } else {
    return <div>unauthorised access</div>;
  }
}