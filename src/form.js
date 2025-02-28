import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    citizenship: "",
    applyingFrom: "",
    destination: "",
    selectedDoc: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/submit", formData);
      alert("Form submitted successfully!");
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Citizenship"
        value={formData.citizenship}
        onChange={(e) => setFormData({ ...formData, citizenship: e.target.value })}
      />
      <input
        type="text"
        placeholder="Applying From"
        value={formData.applyingFrom}
        onChange={(e) => setFormData({ ...formData, applyingFrom: e.target.value })}
      />
      <input
        type="text"
        placeholder="Destination"
        value={formData.destination}
        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
      />
      <input
        type="text"
        placeholder="Selected Document"
        value={formData.selectedDoc}
        onChange={(e) => setFormData({ ...formData, selectedDoc: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;