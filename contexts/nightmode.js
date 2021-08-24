import { createContext, useState } from 'react';

const NightContext = createContext(0);

export const NightProvider = ({children}) => {

    const [isDark, setIsDark] = useState(false)
    const toggleChecked = () => {setIsDark(value => !value);
    console.log("Global context enabled,", isDark);
  }

  return (
    <NightContext.Provider value={[isDark, toggleChecked]}>
        {children}
    </NightContext.Provider>
  );
};

export default NightContext;