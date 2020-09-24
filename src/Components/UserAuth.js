import React, { useState, useEffect } from 'react';
import MicrosoftLogin from "react-microsoft-login";
import Axios from 'axios';
import * as qs from 'querystring';
import { useHistory } from 'react-router-dom';
import { UserDetailsContext } from '../App';

const UserAuth = (props) => {
    const searchQuery = window.location.hash;
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

    const edxTokenGenerator = (account, accessToken) => {
        // let userName = ""
        // let password = ""
        // if (account.userName === "Laxmi@vteamlabs.com") {
        //     userName ="Laxmi"
        //     UserNameContext.setUserName(userName);
        //     password = "Vteam1234"
        // }
        // else if (account.userName === "Cristina@vteamlabs.com" ) {
        //     userName = "CristinaStudent"
        //     UserNameContext.setUserName(userName);
        //     password = "Team@123"
        // }
        // else if(account.userName === "Jonas@vteamlabs.com"){
        //     userName = "Jonas"
        //     UserNameContext.setUserName(userName);
        //     password = "Team@123"
        // } else {

        // }


        return Axios.post('https://edxvteam.com/oauth2/exchange_access_token/azuread-oauth2/',
            qs.stringify({
                // grant_type: "password",
                // client_id: "eSIp6KMW0CIMEDrjwDSJ3IhL5zcujcNF0aFoE0YY",
                // client_secret: "vTUI81eTQbD8Vt7ZM7fVNEgH1VL5r4sEVqy76cwXrdEaI49D8IMpRy4HgJhbJhQA2AbPRhwwvxHvsVWRfTJZnoIgacBp1870ZvdqSm5yqDD8eXb8JTuUfDoy3fh1AlK4",
                // token_type: "Bearer",
                // username: userName,
                // password: password
                client_id: "fJeK3hLJ93ldqFwyBZ2MhqXTTBO5dgNRwxLxN5T9",
                access_token: accessToken
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((response) => {
                EdxTokenContext.setEdxToken(response.data.access_token)
                userDetails(response.data.access_token)
                // Axios.get('https://edxvteam.com/api/user/v1/accounts?email=' + account.userName,
                //     {
                //         headers: {
                //             Authorization: `Bearer ${response.data.access_token}`
                //         }
                //     })
                //     .then((response) => {
                //         let edxUser = response.data[0];
                //         UserNameContext.setUserName(edxUser.username);
                //         // if (account.userName === "Cristina@vteamlabs.com") {
                //         //     UserNameContext.setUserName("Cristina");
                //         // }
                //         // else if (account.userName === "Jones@vteamlabs.com") {
                //         //     UserNameContext.setUserName("Jones");
                //         // }
                //         // else {
                //         //     UserNameContext.setUserName(edxUser.username);
                //         // }
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
                edxTokenGenerator(account, accessToken);
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const userDetails = (access_token) => {
        Axios.get('https://edxvteam.com/api/user/v1/me',
            {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            }).then((response) => {
                let edxUser = response.data;
                UserNameContext.setUserName(edxUser.username);
                history.push(path)
            }, (error) => {
                console.log(error)
            })
    }

    return (<MicrosoftLogin
        clientId={'c4e63d26-dcf1-4d0a-bac1-ae0bc5afca83'}
        authCallback={authHandler} redirectUri={'http://localhost:3000/baseform'}
        graphScopes={['Calendars.ReadWrite', 'Group.ReadWrite.All', 'user.read']} />)
};

export default UserAuth