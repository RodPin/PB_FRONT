import Form from "react-bootstrap/Form";

const Select = ({ data, labelKey, onChange, name, value, ...props }) => {
  return (
    <Form.Select {...props} onChange={(e) => onChange(name, e.target.value)} value={value}>
      <option selected>Escolha...</option>
      {data?.map((each) => (
        <option value={each[name]}>{each[labelKey]}</option>
      ))}
    </Form.Select>
  );
};

export default Select;
