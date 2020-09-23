import React, { useState, useEffect } from 'react';
import '../App.css';
import Axios from 'axios';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import { Autocomplete } from '@material-ui/lab'
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import { TextField } from '@material-ui/core';
import MicrosoftLogin from 'react-microsoft-login';
import * as qs from 'querystring';
import { SecondaryButton, PrimaryButton } from 'msteams-ui-components-react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import copy from 'copy-to-clipboard';
import { UserDetailsContext } from '../App';
import { useHistory } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ClassSchedule() {
    const [course, setCourse] = useState('');
    const [dourse, setDourse] = useState('');
    const [units, setUnits] = useState([]);
    const [title, setTitle] = useState('');
    const [startDateState, setStartDate] = useState(moment().toDate());
    const [endDate, setEndDate] = useState(moment().toDate())
    const [token, setToken] = useState('');
    const [account, setAccount] = useState({});
    const [login, setLogin] = useState(0);
    const [edxToken, setEdxToken] = useState('');
    const { UserNameContext, EdxTokenContext, MsAuthTokenContext } = React.useContext(UserDetailsContext);
    const [user, setUser] = useState({});
    const [userEmails, setUserEmails] = useState([0]);
    const [joinUrl, setJoinUrl] = useState('');
    const [description, setDescription] = useState('');
    const [open, setOpen] = useState(false);
    let linkRef = React.createRef();
    let loginRef = React.createRef();
    const [course_id,setCourseId]=useState('');
    const [courses, setCourses] = useState(['']);
    let history = useHistory();

    useEffect(() => {
        if (!UserNameContext.userName
            || UserNameContext.userName === null
            || UserNameContext.userName === undefined
            || !EdxTokenContext.edxToken
            || EdxTokenContext.edxToken === null
            || EdxTokenContext.edxToken === undefined) {
            history.push('/login');
        }

        if(UserNameContext.userName !== "Laxmi"){
            setLogin(10);
        }

        Axios.get(`https://edxvteam.com/api/courses/v1/courses`)
            .then((response) => {
                setCourses(response.data.results);
            }, (error) => {
                setLogin(6);
            })

        // Axios.get(`https://edxvteam.com/api/enrollment/v1/enrollments?username=${UserNameContext.userName}`, {
        //     headers: {
        //         Authorization: `Bearer ${EdxTokenContext.edxToken}`
        //     }
        // }).then((response) => {
        //     console.log(response.data.results)
        //     let userEnrolledCourses = response.data.results;
        //     let enrolledCourseId = userEnrolledCourses.map((course) => course.course_id);
        //     let enrolledCourses = [];
        //     enrolledCourseId.forEach((id) => {
        //         Axios.get(`https://edxvteam.com/api/courseware/course/${id}`, {
        //             headers: {
        //                 Authorization: `Bearer ${EdxTokenContext.edxToken}`
        //             }
        //         }).then((response) => { 
        //             enrolledCourses.push(response.data.results)
        //         })
        //     })
        //     setCourses(enrolledCourses);
        // });

    }, []);

    const addEvent = () => {
        const syear = startDateState.getFullYear();
        const smonth = (startDateState.getMonth() + 1).toString().padStart(2, "0");
        const sday = startDateState.getDate().toString().padStart(2, "0");
        const shours = startDateState.getHours().toString().padStart(2, "0");
        const sminutes = startDateState.getMinutes().toString().padStart(2, "0")
        const eyear = endDate.getFullYear();
        const emonth = (endDate.getMonth() + 1).toString().padStart(2, "0");
        const eday = endDate.getDate().toString().padStart(2, "0");
        const ehours = endDate.getHours().toString().padStart(2, "0");
        const eminutes = endDate.getMinutes().toString().padStart(2, "0")

        Axios.post('https://graph.microsoft.com/v1.0/groups/48c4a928-f625-4837-90cc-4181c8b9191c/events'
            ,
            {
                subject: title,
                body: {
                    contentType: "HTML",
                    content: course + ' ' + dourse + '\n' + description
                },
                start: {
                    dateTime: `${syear}-${smonth}-${sday}T${shours}:${sminutes}:00`,
                    timeZone: "India Standard Time"
                },
                end: {
                    dateTime: `${eyear}-${emonth}-${eday}T${ehours}:${eminutes}:00`,
                    timeZone: "India Standard Time"
                },
                location: {
                    displayName: "Microsoft team"
                },
                attendees: userEmails,
                isOnlineMeeting: true,
                onlineMeetingProvider: "teamsForBusiness"
            },
            {
                headers: { Authorization: `Bearer ${MsAuthTokenContext.msAuthToken}` }
            }).then((response) => {
                console.log(response);
                setJoinUrl(response.data.onlineMeeting.joinUrl);
                setLogin(3);
                let tempUrl=response.data.onlineMeeting.joinUrl;
                Axios.post('https://edxvteam.com/api/discussion/v1/threads/',{
                    course_id: course_id,
                    raw_body: `The class for ${course} titled ${title} for ${dourse} was successfully scheduled from ${startDateState.toString()} to ${endDate.toString()} at \n ${tempUrl} \n Additional Description: ${description}`,
                    type: "discussion",
                    title: title,
                    topic_id: "course"
                  },
                  {
                    headers:{
                      Authorization: `Bearer ${EdxTokenContext.edxToken}`
                    }
                  }).then((response)=>{
                    console.log(response);
                  },(error)=>{console.log(error)})
            }, (error) => {
                console.log(error);
                setLogin(6);
            })
    }

    const courseChanged = (event, newValue) => {
        var unitBlocks = {};
        setCourse(newValue.name);
        setCourseId(newValue.course_id);

        //parallely
        Axios.get('https://edxvteam.com/api/enrollment/v1/enrollments?' + qs.stringify({ course_id: newValue.course_id }), {
            headers: {
                Authorization: `Bearer ${EdxTokenContext.edxToken}`
            }
        }).then((response) => {

            if (response.data.results !== undefined) {
                let usersResponse = response.data.results;
                let usernames = [];
                usersResponse.forEach((item) => {
                    usernames.push(item.user);
                })

                let usernameslist = '';
                usernames.forEach((item, index, arr) => {
                    if (index < usernames.length - 1)
                        usernameslist = usernameslist + item + ',';
                    else
                        usernameslist = usernameslist + item;
                });

                Axios.get('https://edxvteam.com/api/user/v1/accounts?username=' + usernameslist,
                    {
                        headers: {
                            Authorization: `Bearer ${EdxTokenContext.edxToken}`
                        }
                    }).then((response) => {
                        var responseEmails = response.data;
                        var enrolledUsersEmail = [];
                        responseEmails.forEach((item, index, responseEmails) => {
                            enrolledUsersEmail.push({
                                emailAddress: {
                                    address: item.email,
                                    name: item.name
                                },
                                type: "required"
                            });
                        });
                        // //FOR TESTING Pushing the test email remove later
                        // enrolledUsersEmail.push({
                        //     emailAddress: {
                        //         address: 'ankur@brickredsystems.ca',
                        //         name: 'Ankur Agrawal'
                        //     },
                        //     type: "required"
                        // });
                        setUserEmails(enrolledUsersEmail);
                    }, (error) => {
                        setLogin(6);
                    })
            }
        }, (error) => {
            setLogin(6);
        });
        //parallely
        Axios.get('https://edxvteam.com/api/courses/v1/blocks/?' + qs.stringify({
            course_id: newValue.course_id,
            depth: 'all',
            username: UserNameContext.userName,
            block_types_filter: 'discussion'
        }), {
            headers: {
                Authorization: `Bearer ${EdxTokenContext.edxToken}`
            }
        }).then((response) => {

            if (response.data.blocks !== undefined) {
                var units = [];
                unitBlocks = response.data.blocks;
                let unitBlocksArray = Object.entries(unitBlocks);
                unitBlocksArray.forEach((unit) => {
                    //For demo purpose only using the index  
                    if (unit[1].display_name !== undefined && unit[1].display_name !== "") {
                        units.push(unit[1]);
                    }
                })
                setUnits(units);
            }
        }, (error) => {
            setLogin(6);
        });
    }

    const clearFields = () => {
        setCourse('');
        setDourse('');
        setDescription('');
        setLogin(0)
    }

    if (login === 6)
        return (<div className="App">
            <header className="App-header">
                <p className="header">Error</p>
            </header>
            <div className="main">
                <p className="TextTitle">A network error occured, try again</p>
                <div className="HorizontalDivision">
                    <PrimaryButton onClick={clearFields} variant='contained' color='primary' style={{ margin: 30 }} >Try Again</PrimaryButton>
                </div>
            </div>
        </div>
        )

        const navigateToEnrolledCourse = ((course) => {
            console.log(course);
            history.push('/courseList', { course })
        })

        if (login === 10)
        return (<div className="App">
            <header className="App-header">
                <p className="header">Schedule a class</p>
            </header>
            <div className="main">
                <p className="TextTitle">You are not authorized to schedule the class</p>
                <div className="HorizontalDivision">
                    <PrimaryButton onClick={navigateToEnrolledCourse} variant='contained' color='primary' style={{ margin: 30 }} >Navigate to enrolled courses</PrimaryButton>
                </div>
            </div>
        </div>
        )

    const copyLink = (e) => {
        copy(joinUrl);
        setOpen(true);
    }

    if (login === 3)
        return (<div className="App">
            <header className="App-header">
                <p className="header">Scheduled Class</p>
            </header>
            <div className="main">
                <p className="TextTitle">
                    The class for '{course}' - '{dourse}' was successfully scheduled </p>
                <p style={{ marginTop: 0 }}>{startDateState.toString()} to {endDate.toString()}</p>
                <p><a ref={(ref) => linkRef = ref} id='joinlink' className="TextTitle" value={joinUrl}
                    onClick={copyLink}>Team meeting link</a></p>

                <div>
                    <p className="TextTitle">Following enrolled users have been invited:</p>
                    {
                        userEmails.map((item) => {
                            return (
                                <p key={item.emailAddress}>{item.emailAddress.name}</p>
                            )
                        })
                    }
                </div>
                <div className="HorizontalDivision">
                    <PrimaryButton onClick={clearFields} variant='contained' color='primary' style={{ margin: 30 }} >Schedule another Class</PrimaryButton>
                </div>
            </div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Link Copied!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        The link has been copied to your clipboard
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">
                        Okay
          </Button>
                </DialogActions>
            </Dialog>

        </div>
        )

    return (
        <div className="App">
                <header className="App-header">
                    <p className="header">Schedule a class</p>
                </header>
                <div className="main">

                    <div className="Division">
                        <TextField
                            type='text'
                            label='Enter the meeting title'
                            variant='outlined'
                            onChange={(event) => {
                                setTitle(event.target.value);
                            }}
                            style={{ backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 10000, borderWidth: 5, borderColor: 'black' }}
                        />
                    </div>
                    <div className="HorizontalDivision">
                        <div className="AnotherDivision">
                            <p className="TextTitle">From</p>
                            <MuiPickersUtilsProvider utils={MomentUtils}  >
                                <DateTimePicker
                                    variant='dialog'
                                    onChange={(date) => {
                                        setStartDate(date.toDate())
                                    }}
                                    value={startDateState}
                                    disablePast
                                    style={{ width: '15vw' }}
                                />
                            </MuiPickersUtilsProvider>
                        </div>
                        <div className="AnotherDivision">
                            <p className="TextTitle">To</p>
                            <MuiPickersUtilsProvider utils={MomentUtils} >
                                <DateTimePicker
                                    variant='dialog'
                                    minDate={startDateState}
                                    value={endDate}
                                    onChange={(date) => { setEndDate(date.toDate()) }}
                                    style={{ width: '15vw', alignContent: 'center' }}
                                />
                            </MuiPickersUtilsProvider>
                        </div>
                    </div>
                    <div className='Division'>
                        <Autocomplete options={courses}
                            getOptionLabel={(option) => option.name}
                            style={{ width: '100%', margin: 0, alignSelf: 'center' }}
                            //onInputChange={courseChanged}
                            onChange={courseChanged}
                            renderInput={(params) => <TextField {...params} label="Select the course" variant="outlined" />} />

                    </div>
                    <div className='Division'>
                        <Autocomplete options={units}
                            getOptionLabel={(option) => option.display_name}
                            style={{ width: '100%', margin: 0, alignSelf: 'center' }}
                            onInputChange={(event, newValue) => setDourse(newValue)}
                            renderInput={(params) => <TextField {...params} label="Select course unit" variant="outlined" />} />
                    </div>
                    <div className="Division">
                        <TextField
                            type='text'
                            label='Enter additional description'
                            variant='outlined'
                            onChange={(event) => {
                                setDescription(event.target.value);
                            }}
                            style={{ backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 10000, borderWidth: 5, borderColor: 'black' }}
                        />
                    </div>
                    <div className="HorizontalDivision">
                        <SecondaryButton onClick={clearFields} variant='contained' color='secondary' style={{ margin: 30 }} >Cancel</SecondaryButton>
                        <PrimaryButton onClick={addEvent} variant='contained' color='primary' style={{ margin: 30 }} >Submit</PrimaryButton>
                    </div>
                </div>
        <footer> Powered By VTeamLabs Open edX</footer>
        </div>
    );
}

export default ClassSchedule;
