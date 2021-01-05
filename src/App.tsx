import React, { useState } from 'react';
import Block from './Block';
import Form from './Form';
import RefStore from './RefStore';

interface AppProps {}

function App({}: AppProps) {
  const [title, setTitle] = useState<string | undefined>(undefined)
  
  return (
    <RefStore>
      <Form onComplete={setTitle} />
      {title !== undefined && <Block title={title} />}
    </RefStore>
  );
}

export default App;
