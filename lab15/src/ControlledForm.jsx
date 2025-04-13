import React, { useState } from 'react';

const ControlledForm = () => {
  const [info, setInfo] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', info);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={info.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={info.email} onChange={handleChange} placeholder="Email" />
      <p>{info.name} - {info.email}</p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
