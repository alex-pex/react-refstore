import React, { ReactNode, useState } from 'react';

interface RefStoreProps {
  children: ReactNode
}

function RefStore(props: RefStoreProps) {
  return <>{props.children}</>
}

export default RefStore;
