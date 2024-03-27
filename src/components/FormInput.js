import React from "react";
import { Form } from "react-bootstrap";

export default function FormInput({
  type,
  label,
  values,
  disabled,
  required,
  name,
  pattern,
  onchange,
}) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>
        <strong>{label}</strong>
      </Form.Label>
      <Form.Control
        type={type}
        disabled={disabled}
        defaultValue={values?.[name]}
        name={name}
        required={required}
        pattern={pattern}
        onChange={(e) => onchange(name, e.target.value)}
      />
    </Form.Group>
  );
}
