const axios = require("axios");
const formData = require("../src/form.json");

exports.handler = async function (event, context) {
  try {
    // Parse the incoming data from the form
    const formPayload = JSON.parse(event.body);

    // Log the form payload
    console.log("Form Payload:", formPayload);

    // Construct the data payload for the Google Form using the mapping
    const mappedFormPayload = {};
    console.log("formData.mapping:", formData.mapping);
    Object.keys(formData.mapping).forEach((fieldName) => {
      const fieldId = formData.mapping[fieldName];
      const fieldValue = formPayload[fieldName];
      console.log("Field ID:", fieldId, "Field Value:", fieldValue);
      if (fieldValue !== undefined) {
        mappedFormPayload[fieldId] = fieldValue;
      }
    });

    // Log the mapped form payload
    console.log("Mapped Form Payload:", mappedFormPayload);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Form submitted successfully",
        data: mappedFormPayload,
      }),
    };
  } catch (error) {
    // Log and return an error response to the client
    console.error("Error submitting form:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
