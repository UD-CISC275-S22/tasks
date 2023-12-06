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
                <p>Signed Out</p>
            )}
        </div>
    );
};

export default AuthDetails;
