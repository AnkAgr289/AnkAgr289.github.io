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

    if(searchQuery.includes('assessment')){
        path = '/assessment';
    }
    else if (searchQuery.includes('courseList'))
        path = '/CourseList';
    else{
        path = '/baseform';
    }

    const edxTokenGenerator = (account) => {
        return Axios.post('https://edxvteam.com/oauth2/access_token',
            qs.stringify(
                {
                    grant_type: "client_credentials",
                    client_id: "8vD6pKAbjTfgdEtNAKqdUwu0X6Ps574kyBh94Om0",
                    client_secret: "ERRuuGZPMsEy8hjBHjFaMZsmDR3SRhXndOjgoiqEseor1p18kktkHSdUExFNFoKlTdWrmrtz2Oc0NyVa9fNASLuckPPRJY0uCXwkg7yEbRfUg8e0rfGetaGt7tuqUqRo",
                    token_type: "Bearer"
                }
            ),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((response) => {
                EdxTokenContext.setEdxToken(response.data.access_token)
                setEdxToken(response.data.access_token);
                console.log(EdxTokenContext.edxToken);
                console.log(edxToken);
                Axios.get('https://edxvteam.com/api/user/v1/accounts?email=' + account.userName,
                    {
                        headers: {
                            Authorization: `Bearer ${response.data.access_token}`
                        }
                    })
                    .then((response) => {
                        let edxUser = response.data[0];

                        if (account.userName === "Cristina@vteamlabs.com") {
                            UserNameContext.setUserName("Cristina");
                        }
                        else if (account.userName === "Jones@vteamlabs.com") {
                            UserNameContext.setUserName("Jones");
                        }
                        else {
                            UserNameContext.setUserName(edxUser.username);
                        }
                        console.log(UserNameContext.userName)
                        history.push(path)
                    }, (error) => {
                        console.log(error)
                    })
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