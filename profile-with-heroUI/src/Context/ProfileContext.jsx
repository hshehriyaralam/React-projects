import { useState } from "react";
import { createContext } from "react";

const ProfileContext = createContext()
const ProfileProvider = ({children}) => {
 
    const [user, setUser] = useState( {
        Name : "Sherry Khan",
        Stack : "MEAN Stack Developer",
        SpecialRole : "BackEnd"
    })
    const UpdateName = (newName) => {
        setUser((prevUser) => ({
            ...prevUser,
            Name : newName
        }))
    }
    const UpdateStack = (newStack) => {
        setUser((prevStack) => ({
            ...prevStack,
            Stack: newStack
        }))
    }
    const UpdateRole = (newRole) => {
        setUser((prevRole) => ({
            ...prevRole,
            SpecialRole: newRole
        }))
    }
    return(
        <ProfileContext.Provider value={{user,UpdateName,UpdateStack, UpdateRole}} >
            {children}
        </ProfileContext.Provider>
    )
}

export {ProfileContext, ProfileProvider}