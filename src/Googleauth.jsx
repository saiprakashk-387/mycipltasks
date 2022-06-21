import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "569468101090-nn48ph1fka3775cj2oamprkn051f7sk6.apps.googleusercontent.com";

export function Googleauth() {
    const [userData, setuserData] = useState()
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        if (res) {
            setuserData(res.profileObj)
        } else {
            setuserData("Try Again")
        }
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);

    };
    console.log(userData);
    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        console.clear();
        setuserData('')
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <>
            <div>
                <h4>login with Gmail</h4>
                {showloginButton ?
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Sign In"
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    /> : null}

                {showlogoutButton ?
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="Sign Out"
                        onLogoutSuccess={onSignoutSuccess}
                    >
                    </GoogleLogout> : null
                }
            </div>
            {userData &&
                <div>
                  <li>{userData.givenName}</li>
                  {/* <li><img src="https://lh3.googleusercontent.com/a/AATXAJwpcJ72Kxafa-Wcwc8NuivKEh2YsBDUTPTjspvP=s96-c" alt="" /></li> */}
                </div>
            }
        </>
    );
}
export default Googleauth;