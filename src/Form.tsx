import React, { useState } from 'react';
import { useRefStore } from './RefStore';

interface FormProps {
  onComplete: (v: string) => void;
}

function Form(props: FormProps) {
  const [title, setTitle] = useState<string>('');
  const refStore = useRefStore();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.onComplete(title);
        refStore.find('block').then((ref) => {
          ref.querySelector('input')?.focus();
        });
      }}
    >
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="submit" disabled={!title}>Go!</button>
    </form>
  );
}

export default Form;
