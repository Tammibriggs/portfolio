import React, {useContext} from 'react'

const Context = React.createContext()

export function ContextProvider({children, value}) {
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export function useContextValue(){
  return useContext(Context)
}
