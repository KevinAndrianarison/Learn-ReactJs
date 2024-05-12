import {createContext, useState} from "react"

export const NameContexte = createContext({
    name : 'Steeve',
    changeName : ()=>{
    }
})

export function NameContexteProvider ({children}){
    const [name, setName] = useState('Steeve')

    const changeName = ()=>{
        setName(name === 'Steeve' ? 'Kevin' : 'Steeve')
    }

    return <NameContexte.Provider value={{
        name,
        changeName
    }}>
        {children}
    </NameContexte.Provider>
}