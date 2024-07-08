import { createContext, useState } from "react";

export const ProfileContext = createContext({
    // Context for when we want to use this info in other files.
    profileUsername: '',
    profilePhoto: '',
    setUsernameTo: (newUsername) => {},
    setPhotoTo: (newPhoto) => {}
})

function ProfileContextProvider({children}) {
    // These values store the current values of the profile class.
    const [username, setUsername] = useState("nobody")
    const [photo, setPhoto] = useState([])

    function setUsernameTo(newUsername){
        // Call this to set the username to "newUsername"
        setUsername(newUsername)
    }
    function setPhotoTo(newPhoto){
        // Call this to set the user photo to "newPhoto"
        setPhoto(newPhoto)
    }

    const value = {
        profileUsername: username,
        profilePhoto: photo,
        setUsernameTo: setUsernameTo,
        setPhotoTo: setPhotoTo
    }

    return <ProfileContext.Provider value={value}>
        {children}
    </ProfileContext.Provider>
}

export default ProfileContextProvider