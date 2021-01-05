import React, {
  createContext,
  ReactNode,
  useContext,
} from 'react';

// type RefStoreValue = Record<string, HTMLElement>;
// const RefStoreContext = createContext<React.MutableRefObject<RefStoreValue>>({ current: {} });

// type RefStoreProps = PropsWithChildren<{}>;
// export function RefStore({ children }: RefStoreProps) {
//   const store = useRef<RefStoreValue>({});

//   return <RefStoreContext.Provider value={store}>{children}</RefStoreContext.Provider>;
// }

// const useRefStore = useContext(RefStoreContext);
// export default useRefStore;

interface RefStore {
  register: (name: string) => (value: HTMLElement|null) => void;
  get: (name: string) => HTMLElement | undefined;
  find: (name: string) => Promise<HTMLElement>;
}

function createRefStore(): RefStore {
  const entries: Record<string, HTMLElement> = {};

  return {
    register(name) {
      return (ref: HTMLElement|null) => {
        if (ref === null) {
          delete entries[name];
        } else {
          entries[name] = ref;
        }
        console.log(entries);
      }
    },
    get(name) {
      return entries[name];
    },
    find(name) {
      return entries[name] ? Promise.resolve(entries[name]) : Promise.reject();
    },
  };
}

const RefStoreContext = createContext(createRefStore());

interface RefStoreProps {
  children: ReactNode;
}

function RefStoreProvider(props: RefStoreProps) {
  //const [refStore] = useState(() => ({ current: createRefStore() }));
  return <>{props.children}</>;
}

export const useRefStore = () => useContext(RefStoreContext);

export default RefStoreProvider;
