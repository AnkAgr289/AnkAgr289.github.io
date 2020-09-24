import React, { useState, useEffect } from 'react';
import MicrosoftLogin from "react-microsoft-login";
import Axios from 'axios';
import * as qs from 'querystring';
import { useHistory } from 'react-router-dom';
import { UserDetailsContext } from '../App';

const UserAuth = (props) => {
    const searchQuery = window.location.hash;
    const [edxToken, setEdxToken] = useState('');
    const { UserNameContext, EdxTokenContext, MsAuthTokenContext } = React.useContext(UserDetailsContext);
    let history = useHistory();

    let path = props && props.location && props.location.state &&
        (props.location.state.path !== undefined || props.location.state.path !== null) ?
        props.location.state.path : '/baseform';

    // DEMO purpose code
    if (searchQuery.includes('assessment')) {
        path = '/assessment';
    }
    else if (searchQuery.includes('course'))
        path = '/CourseList';
    else {
        path = '/baseform';
    }

    const edxTokenGenerator = (account) => {
        let userName = ""
        let password = ""
        if (account.userName === "Laxmi@vteamlabs.com") {
            userName ="Laxmi"
            UserNameContext.setUserName(userName);
            password = "Vteam1234"
        }
        else if (account.userName === "Cristina@vteamlabs.com" ) {
            userName = "CristinaStudent"
            UserNameContext.setUserName(userName);
            password = "Team@123"
        }
        else if(account.userName === "Jonas@vteamlabs.com"){
            userName = "Jonas"
            UserNameContext.setUserName(userName);
            password = "Team@123"
        } else {

        }
    

        return Axios.post('https://edxvteam.com/oauth2/access_token',
            qs.stringify({
                grant_type: "password",
                client_id: "eSIp6KMW0CIMEDrjwDSJ3IhL5zcujcNF0aFoE0YY",
                client_secret: "vTUI81eTQbD8Vt7ZM7fVNEgH1VL5r4sEVqy76cwXrdEaI49D8IMpRy4HgJhbJhQA2AbPRhwwvxHvsVWRfTJZnoIgacBp1870ZvdqSm5yqDD8eXb8JTuUfDoy3fh1AlK4",
                token_type: "Bearer",
                username: userName,
                password: password
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((response) => {
                EdxTokenContext.setEdxToken(response.data.access_token)
                setEdxToken(response.data.access_token);
                console.log(EdxTokenContext.edxToken);
                console.log(edxToken);
                history.push(path);
                // Axios.get('https://edxvteam.com/api/user/v1/accounts',
                //     {
                //         headers: {
                //             Authorization: `Bearer ${response.data.access_token}`
                //         }
                //     })
                //     .then((response) => {
                //         let edxUser = response.data[0];

                //         if (account.userName === "Cristina@vteamlabs.com") {
                //             UserNameContext.setUserName("Cristina");
                //         }
                //         else if (account.userName === "Jones@vteamlabs.com") {
                //             UserNameContext.setUserName("Jones");
                //         }
                //         else {
                //             UserNameContext.setUserName(edxUser.username);
                //         }
                //         console.log(UserNameContext.userName)
                //         history.push(path)
                //     }, (error) => {
                //         console.log(error)
                //     })
            }, (error) => {
                console.log(error)
            })
    }

    const authHandler = (err, data) => {
        try {
            const { accessToken, account } = data.authResponseWithAccessToken;
            console.log(account.userName)
            if (accessToken !== null) {
                MsAuthTokenContext.setMsAuthToken(accessToken);
                edxTokenGenerator(account);
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (<MicrosoftLogin
        clientId={'c4e63d26-dcf1-4d0a-bac1-ae0bc5afca83'}
        authCallback={authHandler} redirectUri={'https://ankagr289.github.io/#/login'}
        graphScopes={['Calendars.ReadWrite', 'Group.ReadWrite.All']} />)
};

export default UserAuth