import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext({});

export const useAppCtx = () => useContext(AppContext);

export default function AppProvider(props) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }
    return (
        <AppContext.Provider value={({ theme, toggleTheme })}>
            {props.children}
        </AppContext.Provider>
    )
}