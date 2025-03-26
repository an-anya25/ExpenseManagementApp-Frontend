interface Props {
  options: string[];
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  error?: string;
  touched?: boolean;
}

const Dropdown = ({
  options,
  id,
  name,
  value,
  onChange,
  onBlur,
  label,
  error,
  touched,
}: Props) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <select
        name={name}
        id={id}
        value={value}
        className="form-control"
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value="" disabled label="Select Category" />
        {options.map((option) => (
          <option key={option} value={option} label={option} />
        ))}
      </select>
      {touched && error ? (
        <div className="text-danger fst-italic">{error}</div>
      ) : null}
    </div>
  );
};

export default Dropdown;
