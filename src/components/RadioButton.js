const RadioButton = ({ onChange, label, value, checked }) => (
  <div class="form-check">
    <input
      onChange={(e) => onChange(e.target.value)}
      class="form-check-input"
      type="checkbox"
      id="flexCheckDefault"
      value={value}
      checked={checked}
    />
    <label class="form-check-label" for="flexCheckDefault">
      {label}
    </label>
  </div>
);

export default RadioButton;
