import React,{createContext} from 'react'
import Component1 from '../Component1'

export let UserContext =createContext();
export let UserContext2 = createContext();

export default function UseContext() {
  return (
    <div>
        <UserContext.Provider value={"ayush"}>
          <UserContext2.Provider value={"m.."}>
              <Component1/>
          </UserContext2.Provider>

        </UserContext.Provider>
   
    </div>
  )
}
