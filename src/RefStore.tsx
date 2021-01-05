import React, { createContext, ReactNode, useContext, useState } from 'react';

interface RefStore {
  register: (name: string) => (value: HTMLElement | null) => void;
  get: (name: string) => HTMLElement | undefined;
  find: (name: string) => Promise<HTMLElement>;
}

function createRefStore(): RefStore {
  const entries: Record<string, HTMLElement> = {};

  return {
    register(name) {
      return (ref: HTMLElement | null) => {
        if (ref === null) {
          delete entries[name];
        } else {
          entries[name] = ref;
        }
      };
    },
    get(name) {
      return entries[name];
    },
    find(name) {
      return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
          if (entries[name]) {
            clearInterval(interval);
            resolve(entries[name]);
          }
        }, 0);
        setTimeout(() => {
          clearInterval(interval);
          reject();
        }, 60000);
      });
    },
  };
}

const globalRefStore = createRefStore();
const RefStoreContext = createContext(globalRefStore);

interface RefStoreProps {
  children: ReactNode;
}

function RefStoreProvider(props: RefStoreProps) {
  const [{ current: refStore }] = useState(() => ({ current: createRefStore() }));

  return <RefStoreContext.Provider value={refStore}>{props.children}</RefStoreContext.Provider>;
}

export const useRefStore = () => useContext(RefStoreContext);

export default RefStoreProvider;
