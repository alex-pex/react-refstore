import React, { useState } from 'react';
import Block from './Block';
import Form from './Form';
import RefStoreProvider from './RefStore';

interface AppProps {}

function App({}: AppProps) {
  const [title, setTitle] = useState<string | undefined>(undefined);

  return (
    <RefStoreProvider>
      <Form onComplete={setTitle} />
      {title !== undefined && <Block title={title} />}
    </RefStoreProvider>
  );
}

export default App;
