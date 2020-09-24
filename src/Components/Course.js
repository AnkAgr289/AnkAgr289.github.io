import React, { useState, useEffect } from 'react';
import '../Course.css';
import { TextField } from '@material-ui/core';
import { SecondaryButton, PrimaryButton } from 'msteams-ui-components-react';
import * as qs from 'querystring';

import { useHistory } from 'react-router-dom';
import { UserDetailsContext } from '../App';
import Axios from 'axios';

const Course = ((props) => {
    console.log(props);
    const [course, setCourse] = useState([]);
    const [meeting, setMeeting] = useState([]);
    const [meetingTitle, setMeetingTitle] = useState([]);
    const { UserNameContext, EdxTokenContext } = React.useContext(UserDetailsContext);
    const searchQuery = window.location.hash;
    // let course = props && props.location && props.location.state &&
    //     (props.location.state.course !== undefined || props.location.state.course !== null) ?
    //     props.location.state.course :
    //     //Fall back for demo purpose if directly landing on course page
    //     { "blocks_url": "https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AUniversityD%2BAI101%2B2020_T1", "effort": "04:00", "end": "2020-09-30T23:30:00Z", "enrollment_start": "2020-08-15T00:00:00Z", "enrollment_end": "2020-09-15T23:30:00Z", "id": "course-v1:UniversityD+AI101+2020_T1", "media": { "course_image": { "uri": "/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg" }, "course_video": { "uri": null }, "image": { "raw": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg", "small": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg", "large": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg" } }, "name": "Introduction to Artificial Intelligence", "number": "AI101", "org": "UniversityD", "short_description": "Short Description of the course on Artificial Intelligence from UniversityD", "start": "2020-09-01T00:00:00Z", "start_display": "Sept. 1, 2020", "start_type": "timestamp", "pacing": "instructor", "mobile_available": false, "hidden": false, "invitation_only": false, "course_id": "course-v1:UniversityD+AI101+2020_T1" };
    // const [courses, setCourses] = useState([]);
    const [msStreamLink, setMsStreamLink] = useState('');
    let isStaff = false; // TODO - User data to tell
    let isStreamLink = true; // TODO - EDX data to tell
    let history = useHistory();

    // DEMO purpose code
    if (UserNameContext.userName === 'Laxmi') {
        isStaff = true;
        isStreamLink = false;
    }

    const courseId = searchQuery.split('?')[1];
    // console.log(`Bearer ${EdxTokenContext.edxToken}`)

            // https://edxvteam.com/api/discussion/v1/threads/?course_id=course-v1%3AedX%2BDemoX%2BDemo_Course

            // DEMO purpose code
            // if (searchQuery.includes('University')) {
            //     course = { "blocks_url": "https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AUniversityD%2BAI101%2B2020_T1", "effort": "04:00", "end": "2020-09-30T23:30:00Z", "enrollment_start": "2020-08-15T00:00:00Z", "enrollment_end": "2020-09-15T23:30:00Z", "id": "course-v1:UniversityD+AI101+2020_T1", "media": { "course_image": { "uri": "/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg" }, "course_video": { "uri": null }, "image": { "raw": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg", "small": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg", "large": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg" } }, "name": "Introduction to Artificial Intelligence", "number": "AI101", "org": "UniversityD", "short_description": "Short Description of the course on Artificial Intelligence from UniversityD", "start": "2020-09-01T00:00:00Z", "start_display": "Sept. 1, 2020", "start_type": "timestamp", "pacing": "instructor", "mobile_available": false, "hidden": false, "invitation_only": false, "course_id": "course-v1:UniversityD+AI101+2020_T1" };
            // } else {
            //     course = { "blocks_url": "https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AedX%2BDemoX%2BDemo_Course", "effort": null, "end": "2021-06-04T23:30:00Z", "enrollment_start": "2020-06-01T05:00:00Z", "enrollment_end": "2021-06-04T23:30:00Z", "id": "course-v1:edX+DemoX+Demo_Course", "media": { "course_image": { "uri": "/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg" }, "course_video": { "uri": null }, "image": { "raw": "https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg", "small": "https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg", "large": "https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg" } }, "name": "Demonstration Course", "number": "DemoX", "org": "edX", "short_description": "", "start": "2020-06-01T05:00:00Z", "start_display": "June 1, 2020", "start_type": "timestamp", "pacing": "instructor", "mobile_available": false, "hidden": false, "invitation_only": false, "course_id": "course-v1:edX+DemoX+Demo_Course" }
            // }


            useEffect(() => {

                Axios.get(`https://edxvteam.com/api/courses/v1/courses/${courseId}`)
                .then((response) => {
                    let courses = response.data;
                    //const value = courses.filter((course) => courseId === course.id);
                    setCourse(courses);
                })
            console.log(`Bearer ${EdxTokenContext.edxToken}`)

            // https://edxvteam.com/api/discussion/v1/threads/?course_id=course-v1%3AedX%2BDemoX%2BDemo_Course
            Axios.get('https://edxvteam.com/api/discussion/v1/threads/?' + qs.stringify({ course_id: courseId, text_search:"teams.microsoft.com" }),
                {
                    headers: {
                        Authorization: `Bearer ${EdxTokenContext.edxToken}`
                    }
                }).then((response) => {
                    console.log(response);
                    setMeeting(response.data.results[0].rendered_body);
                    setMeetingTitle(response.data.results[0].title);
                    
                }, (error) => { console.log(error) })
          
             }, []);

            const postStream = () => {
                // TODO
            }

            const backToCourseList = () => {
                history.push({
                    pathname: '/courseList'
                })
            }

            return (
                <div>
                    <div className="content-wrapper main-container" id="content" dir="ltr">
                        <main id="main" aria-label="Content">
                            <section className="find-courses">
                                <section className="courses-container">
                                    <header className="App-header">
                                        <p className="header">Course Detail</p>
                                    </header>
                                    <div className="courses no-course-discovery" role="region" aria-label="List of Courses">
                                        <div className="grid-container">
                                            <div className="grid-item">Course organization</div>
                                            <div className="grid-item"> - </div>
                                            <div className="grid-item">{course.org}</div>
                                            <div className="grid-item">Course code</div>
                                            <div className="grid-item"> - </div>
                                            <div className="grid-item">{course.number}</div>
                                            <div className="grid-item">Course title</div>
                                            <div className="grid-item"> - </div>
                                            <div className="grid-item"><a href={`https://edxvteam.com/courses/${course.course_id}/about`}>{course.name}</a></div>
                                            <div className="grid-item">Meeting title</div>
                                            <div className="grid-item"> - </div>
                                            <div className="grid-item">{meetingTitle}</div>
                                            <div className="grid-item">Scheduled meet</div>
                                            <div className="grid-item"> - </div>
                                            <div className="grid-item"><p dangerouslySetInnerHTML={{__html: meeting}} /></div>
                                            <div className="grid-item">Recorded</div>
                                            <div className="grid-item"> - </div>
                                            <div className="grid-item">{isStreamLink ? <a href="#">MS Stream link</a> :
                                                (isStaff ?
                                                    <TextField
                                                        color="white"
                                                        type='text'
                                                        variant='outlined'
                                                        onChange={(event) => {
                                                            setMsStreamLink(event.target.value);
                                                        }}
                                                        inputStyle={{ color: 'white', padding: '0px' }}
                                                        style={{ backgroundColor: 'rgba(255,255,255,0.9)', width: '400px', marginTop: '-15px', borderRadius: 10000, borderWidth: 5, borderColor: 'black' }}
                                                    />
                                                    : 'Not Available')}
                                            </div>
                                        </div>

                                        <div className="HorizontalDivision">
                                            <SecondaryButton onClick={backToCourseList} variant='contained' color='secondary' style={{ margin: 30 }} >Back</SecondaryButton>

                                            {isStaff && !isStreamLink && <PrimaryButton onClick={postStream} variant='contained' color='primary' style={{ margin: 30 }} >Post</PrimaryButton>
                                            }

                                        </div>

                                    </div>
                                </section>
                            </section>
                        </main>
                    </div>
                    <footer> Powered By VTeamLabs Open edX</footer>
                </div>
            )
        })
    export default Course
