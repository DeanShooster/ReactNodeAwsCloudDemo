import { ReactNode, useState } from "react";
import { User, userContext } from "./UserContext";

type Props = { children: ReactNode };

const UserContextProvider = ( {children}: Props )=>{

    const [ user,setUser ] = useState< User | null>(null);
    const updateUser=( user:User | null)=> setUser(user);

    return (
        <userContext.Provider value={{user,updateUser}}>
            { children }
        </userContext.Provider>
    );
};

export default UserContextProvider;




