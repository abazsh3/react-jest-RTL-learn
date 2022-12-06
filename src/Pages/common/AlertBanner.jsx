import React from "react";
import { Alert } from "react-bootstrap";

export default function AlertBanner({
  message = "An unexpected error occured",
  variant = "danger",
}) {
  return (
    <Alert variant={variant} style={{ backgroundColor: "red" }}>
      {message}
    </Alert>
  );
}
