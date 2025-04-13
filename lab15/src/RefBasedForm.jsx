import React, { useRef, useState } from 'react';

const RefBasedForm = () => {
  const nameInput = useRef();
  const emailInput = useRef();
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted({
      name: nameInput.current.value,
      email: emailInput.current.value
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameInput} type="text" placeholder="Name" />
        <input ref={emailInput} type="email" placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Submitted: {submitted.name} - {submitted.email}</p>}
    </div>
  );
};

export default RefBasedForm;
