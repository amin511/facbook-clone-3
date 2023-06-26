import React from "react";
import Navbar from "./assets/components/navbar/Navbar";
import Middle from "./assets/components/middle_section/middle"
import Left from "./assets/components/left-section/left"
import userImage from "../public/images/userImage.png"
import SignIn from "./assets/components/signInSignOut/SignInSignOut";
import { createContext } from "react";
import { auth } from "./assets/components/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Timestamp } from "firebase/firestore";
export const userCurrent = createContext()

const App = () => {
  const [user] = useAuthState(auth)

  const userCurrentData = {
    username: user ? user.displayName : "",
    userImage: user ? user.photoURL : "",
    uid: user ? user.uid : ""
  }

  return (
    <>
      {!user ? <SignIn /> :
        <userCurrent.Provider value={userCurrentData} >
          <Navbar />
          <div className="grid sm:grid-cols-[auto_700px_auto]  grid-cols-1 mt-20  ">
            <Left />
            <Middle />
            <Left />
          </div>
        </userCurrent.Provider>}
    </>
  )
}
export default App