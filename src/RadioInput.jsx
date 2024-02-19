import React from "react";
import userform from "./form.json";

export default function RadioInput({ id, handleInputData }) {
  const field = userform.fields.find(
    (field) => field.id.toString() === id.toString()
  );

  if (!field || field.type !== "RADIO") {
    console.error("not a RADIO field.");
    console.log(id);
    console.log(field);
    console.log(userform.fields);
    return null;
  }
  return (
    <div key={field.id}>
      <p>{field.label}</p>
      {field.options.map((o) => (
        <div key={o.id}>
          <input
            type="radio"
            id={o.id}
            value={o.label}
            onChange={handleInputData(field.id)}
          />
          <label htmlFor={o.id}>&nbsp;{o.label}</label>
        </div>
      ))}
    </div>
  );
}
