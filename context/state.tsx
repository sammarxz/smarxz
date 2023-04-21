import { createContext, useState } from "react";

const AppContext = createContext({})

const AppContextProvider = (
  { children } : { children: React.ReactElement }
) => {
  const [totalCount, setTotalCount] = useState(0)
  const [counter, setCounter] = useState(0)

  const value = {
    state: {
      totalCount,
      counter
    },
    setTotalCount,
    setCounter
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }