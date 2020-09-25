import React, { useState, useEffect } from 'react';
import '../App.css';
import Axios from 'axios';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import { Autocomplete } from '@material-ui/lab'
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import { TextField } from '@material-ui/core';
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
import * as qs from 'querystring';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ClassSchedule() {
    const [course, setCourse] = useState('');
    const [unit, setUnit] = useState('');
    const [units, setUnits] = useState([]);
    const [topicId, setTopicId] = useState([]);
    const [topic, setTopic] = useState([]);
    const [topics, setTopics] = useState([]);
    const [title, setTitle] = useState('');
    const [startDateState, setStartDate] = useState(moment().toDate());
    const [endDate, setEndDate] = useState(moment().toDate())
    const [login, setLogin] = useState(0);
    const { UserNameContext, EdxTokenContext, MsAuthTokenContext } = React.useContext(UserDetailsContext);
    const [user, setUser] = useState({});
    const [userEmails, setUserEmails] = useState([0]);
    const [joinUrl, setJoinUrl] = useState('');
    const [description, setDescription] = useState('');
    const [open, setOpen] = useState(false);
    let linkRef = React.createRef();
    let loginRef = React.createRef();
    const [course_id, setCourseId] = useState('');
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

        if (UserNameContext.userName !== "Laxmi") {
            setLogin(10);
        }

        // Axios.get(`https://edxvteam.com/api/courses/v1/courses`)
        //     .then((response) => {
        //         setCourses(response.data.results);
        //     }, (error) => {
        //         setLogin(6);
        //     })

        Axios.get(`https://edxvteam.com/api/enrollment/v1/enrollment`, {
            headers: {
                Authorization: `Bearer ${EdxTokenContext.edxToken}`
            }
        }).then((response) => {
            console.log(response.data)
            let userEnrolledCourses = response.data; // Object.assign({}, );
            // let enrolledCourseId = userEnrolledCourses.map((course) => course.course_id);
            // let enrolledCourses = [];
            // enrolledCourseId.forEach((id) => {
            //     Axios.get(`https://edxvteam.com/api/courseware/course/${id}`, {
            //         headers: {
            //             Authorization: `Bearer ${EdxTokenContext.edxToken}`
            //         }
            //     }).then((response) => { 
            //         enrolledCourses.push(response.data.results)
            //     })
            // })

            setCourses(userEnrolledCourses);
        });

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
                    content: course + ' ' + unit + '\n' + description
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
                let tempUrl = response.data.onlineMeeting.joinUrl;
                Axios.post('https://edxvteam.com/api/discussion/v1/threads/', {
                    course_id: course_id,
                    raw_body: `[Team meeting][1] ${startDateState.toLocaleString()} - ${endDate.toLocaleTimeString()} \n\n [1]:${tempUrl}`,
                    type: "discussion",
                    title: title,
                    topic_id: topicId
                },
                    {
                        headers: {
                            Authorization: `Bearer ${EdxTokenContext.edxToken}`
                        }
                    }).then((response) => {
                        console.log(response);
                    }, (error) => { console.log(error) })
            }, (error) => {
                console.log(error);
                setLogin(6);
            })
    }

    const courseChanged = (event, newValue) => {
        var unitBlocks = {};
        setCourse(newValue.course_details.course_name);
        setCourseId(newValue.course_details.course_id);
        setUnit('');

        //parallely
        Axios.get('https://edxvteam.com/api/enrollment/v1/enrollments?' + qs.stringify({ course_id: newValue.course_details.course_id }), {
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
        Axios.get('https://edxvteam.com/api/discussion/v1/course_topics/' + encodeURI(newValue.course_details.course_id)
            , {
                headers: {
                    Authorization: `Bearer ${EdxTokenContext.edxToken}`
                }
            }).then((response) => {
                setUnits(response.data.courseware_topics);

            }, (error) => {
                setLogin(6);
            });
    }

    const unitChanged = (event, newValue) => {
        setTopics(newValue.children);
    }

    const topicChanged = (event, newValue) => {
        setTopicId(newValue.id);
    }

    const clearFields = () => {
        setCourse('');
        setUnit('');
        setDescription('');
        setLogin(0)
    }

    if (login === 6)
        return (<div className="main-content">


        <div className="content-part">
            <div className="container-fluid">
        
                <h3 className="heading-strip"> Schedule a Class</h3>
                <div className="class-form">
                    <form>
                        <div className="form-group">
                <p className="TextTitle">A network error occured, try again</p>
                </div>
                <div className="HorizontalDivision">
                    <PrimaryButton onClick={clearFields} variant='contained' color='primary' style={{ margin: 30 }} >Try Again</PrimaryButton>
                    </div>
                    </form>
                    </div> 
            </div>
        </div>
        {/* <footer> Powered By VTeamLabs Open edX</footer> */}
        </div>
        )

    const navigateToEnrolledCourse = ((course) => {
        console.log(course);
        history.push('/courseList', { course })
    })

    //if (login === 10)
        // return (<div className="App">
        //     <header className="App-header">
        //         <p className="header">Schedule a class</p>
        //     </header>
        //     <div className="main">
        //         <p className="TextTitle">You are not authorized to schedule the class</p>
        //         <div className="HorizontalDivision">
        //             <PrimaryButton onClick={navigateToEnrolledCourse} variant='contained' color='primary' style={{ margin: 30 }} >Navigate to enrolled courses</PrimaryButton>
        //         </div>
        //     </div>
        // </div>
        // )

        if (login === 10)
        return (<div className="main-content">


        <div className="content-part">
            <div className="container-fluid">
        
                <h3 className="heading-strip"> Schedule a Class</h3>
                <div className="class-form">
                    <form>
                        <div className="form-group">
                        You are not authorized to schedule the class
                        </div>
                        <PrimaryButton onClick={navigateToEnrolledCourse} variant='contained' color='primary' className="btn btn-default primary-button" >Navigate to enrolled courses</PrimaryButton>
        
                    </form>
                </div>
            </div>
        </div>
        {/* <footer> Powered By VTeamLabs Open edX</footer> */}
        </div>
        )

        

    const copyLink = (e) => {
        copy(joinUrl);
        setOpen(true);
    }

    // if (login === 3)
    //     return (<div className="App">
    //         <header className="App-header">
    //             <p className="header">Scheduled Class</p>
    //         </header>
    //         <div className="main">
    //             <p className="TextTitle">
    //                 The class for '{course} - {unit} - {topic}' was successfully scheduled </p>
    //             <p style={{ marginTop: 0 }}>{startDateState.toString()} to {endDate.toString()}</p>
    //             <p><a ref={(ref) => linkRef = ref} id='joinlink' className="TextTitle" value={joinUrl}
    //                 onClick={copyLink}>Team meeting link</a></p>
    //             <div>
    //                 <p className="TextTitle">Following enrolled users have been invited:</p>
    //                 {
    //                     userEmails.map((item) => {
    //                         return (
    //                             <p key={item.emailAddress}>{item.emailAddress.name}</p>
    //                         )
    //                     })
    //                 }
    //             </div>
    //             <div className="HorizontalDivision">
    //                 <PrimaryButton onClick={clearFields} variant='contained' color='primary' style={{ margin: 30 }} >Schedule another Class</PrimaryButton>
    //             </div>
    //         </div>
    //         <Dialog
    //             open={open}
    //             TransitionComponent={Transition}
    //             keepMounted
    //             aria-labelledby="alert-dialog-slide-title"
    //             aria-describedby="alert-dialog-slide-description"
    //         >
    //             <DialogTitle id="alert-dialog-slide-title">{"Link Copied!"}</DialogTitle>
    //             <DialogContent>
    //                 <DialogContentText id="alert-dialog-slide-description">
    //                     The link has been copied to your clipboard
    //       </DialogContentText>
    //             </DialogContent>
    //             <DialogActions>
    //                 <Button onClick={() => setOpen(false)} color="primary">
    //                     Okay
    //       </Button>
    //             </DialogActions>
    //         </Dialog>

    //     </div>
    //     )
    if (login === 3)
    return (<div className="App">
        <div className="main-content">


<div className="content-part">
<div className="container-fluid">

    <h3 className="heading-strip"> Scheduled Class</h3>
    <div className="class-form">
    <p className="TextTitle">
                The class for '{course} - {unit} - {topic}' was successfully scheduled </p>
            <p style={{ marginTop: 0 }}>{startDateState.toString()} to {endDate.toString()}</p>
            <p><a ref={(ref) => linkRef = ref} style={{color:'rgb(169,39,109)'}} id='joinlink' className="TextTitle" value={joinUrl}
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
                <PrimaryButton onClick={clearFields}  variant='contained' color='primary' className="btn btn-default primary-button" style={{ margin: 30, width: '400px' }} >Schedule another Class</PrimaryButton>
            </div>
    </div>
</div>
</div>
{/* <footer> Powered By VTeamLabs Open edX</footer> */}
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
        <div className="main-content">


            <div className="content-part">
                <div className="container-fluid">

                    <h3 className="heading-strip"> Schedule a Class</h3>
                    <div className="class-form">
                        <form>
                            <div className="form-group">
                                <TextField
                                
                                    type='text'
                                    label='Enter the meeting title'
                                    variant='outlined'
                                    onChange={(event) => {
                                        setTitle(event.target.value);
                                    }}
                                    style={{ backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 10000, borderWidth: 5, borderColor: 'black' }}
                                />      </div>
                            <div className="form-group">
                                <div className="form-left"> <label>From: </label>  <MuiPickersUtilsProvider utils={MomentUtils}  >
                                    <DateTimePicker
                                        variant='dialog'
                                        onChange={(date) => {
                                            setStartDate(date.toDate())
                                        }}
                                        value={startDateState}
                                        disablePast
                                        style={{ width: '15vw' }}
                                    />
                                </MuiPickersUtilsProvider> </div>
                                <div className="form-right"> <label>To: </label>   <MuiPickersUtilsProvider utils={MomentUtils} >
                                    <DateTimePicker
                                        variant='dialog'
                                        minDate={startDateState}
                                        value={endDate}
                                        onChange={(date) => { setEndDate(date.toDate()) }}
                                        style={{ width: '15vw', alignContent: 'center' }}
                                    />
                                </MuiPickersUtilsProvider> </div>
                            </div>
                            <div className="form-group">

                                <Autocomplete options={courses}
                                    getOptionLabel={(option) => option.course_details.course_name}
                                    style={{ width: '100%', margin: 0, alignSelf: 'center' }}
                                    //onInputChange={courseChanged}
                                    onChange={courseChanged}
                                    renderInput={(params) => <TextField {...params} label="Select the course" variant="outlined" />} />
                            </div>

                            <div className="form-group">

                                <Autocomplete options={units}
                                    getOptionLabel={(option) => option.name}
                                    style={{ width: '100%', margin: 0, alignSelf: 'center' }}
                                    onChange={unitChanged}
                                    onInputChange={(event, newValue) => setUnit(newValue)}
                                    renderInput={(params) => <TextField {...params} label="Select course section" variant="outlined" />} />
                            </div>

                            <div className="form-group">

                                <Autocomplete options={topics}
                                    getOptionLabel={(option) => option.name}
                                    style={{ width: '100%', margin: 0, alignSelf: 'center' }}
                                    onChange={topicChanged}
                                    onInputChange={(event, newValue) => setTopic(newValue)}
                                    renderInput={(params) => <TextField {...params} label="Select course unit" variant="outlined" />} />
                            </div>

                            <div className="form-group">
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


                            {/* <button onClick={addEvent} className="btn btn-default primary-button">Submit</button>
                            <button onClick={clearFields} className="btn btn-default secondary-button">Cancel</button> */}
{/* <SecondaryButton onClick={clearFields} variant='contained' color='secondary' className="btn btn-default secondary-button" style={{ margin: 30 }} >Cancel</SecondaryButton> */}
                    <PrimaryButton onClick={addEvent} className="btn btn-default primary-button" variant='contained' color='primary'  >Submit</PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
            {/* <footer> Powered By VTeamLabs Open edX</footer> */}
        </div>
    );
}

export default ClassSchedule;
