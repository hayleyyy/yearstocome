import React from "react";
import userform from "./form.json";

export default function ShortAnswerInput({ id, handleInputData }) {
  const field = userform.fields.find(
    (field) => field.id.toString() === id.toString()
  );

  if (!field || field.type !== "SHORT_ANSWER") {
    console.error("not a SHORT_ANSWER field.");
    console.log(id);
    console.log(field);
    console.log(userform.fields);
    return null;
  }

  return (
    <div>
      <p>{field.label}</p>
      <input type="text" onChange={handleInputData(field.id)} />
    </div>
  );
}
