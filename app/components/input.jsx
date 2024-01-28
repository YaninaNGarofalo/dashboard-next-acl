"use client";
const Input = ({ icon, type, placeholder, name, id, form, setForm, withLabel }) => {
  const handleChange = ({ target: { value, id } }) =>
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));

  return (
    <div className="relative flex-col items-center w-2/4 self-center">
      {icon}
      {withLabel&&<label className="text-xs" for={id}>{placeholder}</label>}
      <input
        type={type}
        className={
          "p-4 mb-2"
        }
        placeholder={placeholder}
        name={name}
        id={id}
        value={form[id] || ""}
        onChange={handleChange}
      />
    </div>
  );
};
export default Input;