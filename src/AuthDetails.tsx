/*Documentation(used chatGPT to help write): 
The AuthDetails component is a React functional component designed to manage user authentication details within a Firebase-powered application. 
It utilizes Firebase authentication features to track and respond to changes in the user's authentication state. 
The component takes callback functions for login (onLogin), logout (onLogout), and page navigation (flipPage). 
Upon user authentication, it updates the authUser state and triggers the provided callbacks, facilitating dynamic user interface changes. 
The component also includes a method (handleUserSignOut) for initiating the sign-out process, updating the state accordingly, and logging any potential errors. 
The user interface displays the user's email when authenticated, along with a "Sign Out" button to log the user out, providing a seamless and interactive authentication experience.
*/

/* eslint-disable no-extra-parens */
import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { db } from "./firebase";

interface AuthDetailsProps {
    onLogin: () => void;
    onLogout: () => void;
    flipPage: () => void;
}

const AuthDetails: React.FC<AuthDetailsProps> = ({
    onLogin,
    onLogout,
    flipPage
}) => {
    const [authUser, setAuthUser] = useState<User | null>(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
                onLogin(); // Call onLogin callback when user is logged in
                flipPage();
            } else {
                setAuthUser(null);
                onLogout(); // Call onLogout callback when user is logged out
            }
        });

        return () => {
            listen();
        };
    }, [onLogin, onLogout]);

    useEffect(() => {
        console.log(db);
    });

    const handleUserSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("Sign Out was Successful");
                onLogout();
                flipPage();
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            {authUser ? (
                <>
                    <p>{`Signed In as ${authUser.email}`}</p>
                    <button onClick={handleUserSignOut}>Sign Out</button>
                </>
            ) : (
                <p></p>
            )}
        </div>
    );
};

export default AuthDetails;
