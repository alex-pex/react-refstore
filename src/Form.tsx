import React, { useState } from 'react';

interface FormProps {
  onComplete: (v: string) => void;
}

function Form(props: FormProps) {
  const [title, setTitle] = useState<string>("");
  
  return (
    <form onSubmit={event => {
      event.preventDefault();
      props.onComplete(title);
    }}>
      <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
      <button type="submit">Go!</button>
    </form>
  );
}

export default Form;
