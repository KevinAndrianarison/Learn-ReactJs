import {createContext, useState} from "react"

export const ThemeContexte = createContext({
    theme : 'light',
    changeTheme : ()=>{
    }
})

export function ThemeContexteProvider ({children}){
    const [theme, setTheme] = useState('light')

    const changeTheme = ()=>{
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return <ThemeContexte.Provider value={{
        theme,
        changeTheme
    }}>
        {children}
    </ThemeContexte.Provider>
}