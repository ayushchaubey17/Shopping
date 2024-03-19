import React from "react";
import { UserContext, UserContext2 } from "./componrnt/UseContext";

export default function Component3() {
  return (
    <div>
      <UserContext.Consumer>
        {
        (user1) => {

            return (

                <UserContext2.Consumer>

                    {
                        name=>{
                            return <div>{name} and  {user1} {user1}</div>
                        }
                    }

                </UserContext2.Consumer>
            )
        }
        
        }
        </UserContext.Consumer>
    </div>
  );
}
