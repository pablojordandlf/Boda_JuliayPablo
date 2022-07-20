import { useState } from "react";
import {
  //createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../../firebase/config";
import Art_upload from "../../components/upload_form"

function Login() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    
    const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
          console.log(user);
        } catch (error) {
          console.log("Error: ", error.message);
        }
    };
    
    const logout = async () => {
        await signOut(auth);
    };

    return(
        <div className="App">
            <div>
                <h3> Login </h3>
                <input
                    placeholder="Email..."
                    onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }}
                />
                <input
                    placeholder="Password..."
                    onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }}
                />
                <button onClick={login}> Login</button>
            </div>

            <text> User Logged In: </text>
            {user?.email}
            <br />
            <br />
            <button onClick={logout}> Sign Out </button>
            <br />
            <br />

            {user?.email &&
                <div><Art_upload /> </div>
            }
                        
        </div>
    )
}
export default Login;