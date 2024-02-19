import React from "react";
import ShortAnswerInput from "./ShortAnswerInput";
import LongAnswerInput from "./LongAnswerInput";
import RadioInput from "./RadioInput";
import { Form, Button } from "react-bootstrap";

const RSVPForm = () => {
  const [submit, setSubmit] = React.useState(false);
  const [formData, setFormData] = React.useState({
    "entry.333303370": "",
    "entry.1127163260": "",
    "entry.1275419724": "",
    "entry.307198994": "",
    "entry.1958551877": "",
    "entry.524278036": "",
    "entry.109089657": "",
    "entry.1263490465": "",
  });

  const handleInputData = (input) => (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);

    const formDataEntries = Object.entries(formData);
    console.log("formDataEntries", formDataEntries);

    try {
      const response = await fetch("/.netlify/functions/submitFormProxy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Change this to application/json
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        console.log(formData);
      } else {
        console.error("Failed to submit the form:", response.statusText);
        console.log(formData);
      }
    } catch (error) {
      console.error("Failed to submit the form:", error);
      console.log(formData);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <ShortAnswerInput
          id="entry.333303370"
          handleInputData={handleInputData}
        />
        <ShortAnswerInput
          id="entry.1127163260"
          handleInputData={handleInputData}
        />
        <RadioInput id="entry.1275419724" handleInputData={handleInputData} />
        <RadioInput id="entry.307198994" handleInputData={handleInputData} />
        <RadioInput id="entry.1958551877" handleInputData={handleInputData} />
        <RadioInput id="entry.524278036" handleInputData={handleInputData} />
        <LongAnswerInput
          id="entry.109089657"
          handleInputData={handleInputData}
        />
        <LongAnswerInput
          id="entry.1263490465"
          handleInputData={handleInputData}
        />

        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default RSVPForm;
