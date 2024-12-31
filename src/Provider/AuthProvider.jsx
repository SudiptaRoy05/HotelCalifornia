import { createContext, useEffect, useState } from "react"; // Added useState import
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider()

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = async () => {
        setLoading(true)
        return signOut(auth)
    }


    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        });
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async currentUser => {
            console.log('CurrentUser', currentUser)
            if (currentUser?.email) {
                setUser(currentUser)
                // generateToken
                const { data } = await axios.post(`${import.meta.env.
                    VITE_API_URL}/jwt`, { email: currentUser?.email }, { withCredentials: true })
                console.log(data)
            } else {

                setUser(currentUser)
                await axios.get(`${import.meta.env.
                    VITE_API_URL}/logout`, { withCredentials: true })

            }
            setLoading(false)

        })

        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        updateUserProfile,
        signIn,
        signInWithGoogle,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
}
