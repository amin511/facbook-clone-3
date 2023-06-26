import React, { useState } from "react";
import { GoogleAuthProvider, signInWithRedirect, signOut, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase/config";

const SignIn = () => {

    const [user] = useAuthState(auth)
    const [isLoading, setIsLoading] = useState(user ? true : false);
    async function SignInWithGoogle() {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithRedirect(auth, provider)
            setIsLoading(false)
        } catch (e) {
            console.log(e.message)
            setIsLoading(false)
        }
    }

    return (
        <div className="h-[100vh] flex justify-center items-center">
            {!isLoading ? <button disabled={isLoading} onClick={() => {
                setIsLoading(true);
                SignInWithGoogle();
            }} className="bg-fb-btnBlue py-10 px-40 rounded-2xl text-2xl font-bold text-white">
                signIn
            </button>
                : <div className="w-40 h-40 rounded-full animate-bounce bg-blue-600 "></div>}
        </div>
    )
}



export default SignIn


export function SignOut() {
    const out = async () => {
        try {
            await signOut(auth)
        }
        catch (e) {
            console.log(e.message)
        }

    }
    return (
        <>
            <button onClick={out}>Sign Out </button>
        </>
    )


}