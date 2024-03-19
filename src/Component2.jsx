import React,{useContext} from 'react'
import Component3 from './Component3'
import { UserContext,UserContext2 } from './componrnt/UseContext'

export default function Component2() {
let user = useContext(UserContext);
let name = useContext(UserContext2);


  return (
    <div>
      {user} loves {name}
    </div>
  )
}
