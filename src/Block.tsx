import React, { useEffect, useState } from 'react';

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

  if (!isReady) {
    return <h2>Chargement ...</h2>;
  }
  
  return (
    <div>
      <h2>{props.title}</h2>
      <input type="text" placeholder={props.title} />
    </div>
  );
}

export default Block;
