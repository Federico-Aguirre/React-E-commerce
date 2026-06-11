import { signOut } from "firebase/auth"
import { auth } from "../firebaseConfig/firebase";

export const LogOut = async () => {

    try {
        await signOut(auth);
    } catch (error) {
        console.log(error)
    }

    alert("Logout sucessfully")
}