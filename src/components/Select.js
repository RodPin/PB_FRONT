import Form from "react-bootstrap/Form";

const Select = ({ data, labelKey, onChange, name, ...props }) => {
  return (
    <Form.Select {...props} onChange={(e) => onChange(name, e.target.value)}>
      <option selected>Escolha...</option>
      {data?.map((each) => (
        <option value={each[name]}>{each[labelKey]}</option>
      ))}
    </Form.Select>
  );
};

export default Select;
