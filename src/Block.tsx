import React, { useEffect, useState } from 'react';
import { useRefStore } from './RefStore';

interface BlockProps {
  title: string;
}

function Block(props: BlockProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(false);
    const timeout = setTimeout(() => setIsReady(true), 1000);
    return () => clearTimeout(timeout);
  }, [props.title]);

  const refStore = useRefStore();

  if (!isReady) {
    return <h2>Chargement ...</h2>;
  }

  return (
    <div ref={refStore.register('block')}>
      <h2>{props.title}</h2>
      <input type="text" placeholder={props.title} />
    </div>
  );
}

export default Block;
