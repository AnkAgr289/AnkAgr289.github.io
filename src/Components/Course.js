import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { SecondaryButton, PrimaryButton } from 'msteams-ui-components-react';
import * as qs from 'querystring';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import { useHistory } from 'react-router-dom';
import { UserDetailsContext } from '../App';
import Axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Course = ((props) => {
    console.log(props);

    const [course, setCourse] = useState([]);
    const [view, setView] = useState('');
    const [open, setOpen] = useState(false);
    const [isRecordingLink, setIsRecordingLink] = useState(false);
    const [meetDetail, setMeetDetail] = useState([]);
    const { UserNameContext, EdxTokenContext } = React.useContext(UserDetailsContext);
    const [recordDetail, setRecordDetail] = useState([]);
    const searchQuery = window.location.hash;
    // let course = props && props.location && props.location.state &&
    //     (props.location.state.course !== undefined || props.location.state.course !== null) ?
    //     props.location.state.course :
    //     //Fall back for demo purpose if directly landing on course page
    //     { "blocks_url": "https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AUniversityD%2BAI101%2B2020_T1", "effort": "04:00", "end": "2020-09-30T23:30:00Z", "enrollment_start": "2020-08-15T00:00:00Z", "enrollment_end": "2020-09-15T23:30:00Z", "id": "course-v1:UniversityD+AI101+2020_T1", "media": { "course_image": { "uri": "/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg" }, "course_video": { "uri": null }, "image": { "raw": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg", "small": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg", "large": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg" } }, "name": "Introduction to Artificial Intelligence", "number": "AI101", "org": "UniversityD", "short_description": "Short Description of the course on Artificial Intelligence from UniversityD", "start": "2020-09-01T00:00:00Z", "start_display": "Sept. 1, 2020", "start_type": "timestamp", "pacing": "instructor", "mobile_available": false, "hidden": false, "invitation_only": false, "course_id": "course-v1:UniversityD+AI101+2020_T1" };
    // const [courses, setCourses] = useState([]);
    const [msStreamLink, setMsStreamLink] = useState('');
    let isStaff = false; // TODO - User data to tell
    let history = useHistory();

    // DEMO purpose code
    if (UserNameContext.userName === 'Laxmi') {
        isStaff = true;
    }

    const courseId = searchQuery.split('?')[1];

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

        Axios.get('https://edxvteam.com/api/discussion/v1/threads/?' + qs.stringify({ course_id: courseId, text_search: "teams.microsoft.com" }),
            {
                headers: {
                    Authorization: `Bearer ${EdxTokenContext.edxToken}`
                }
            }).then((response) => {
                console.log(response);
                const meet = response.data.results[0] ? response.data.results[0] : "No meeting scheduled";
                setMeetDetail(meet);
                if (meet.id) {
                    Axios.get('https://edxvteam.com/api/discussion/v1/comments/?thread_id=' + meet.id,
                        {
                            headers: {
                                Authorization: `Bearer ${EdxTokenContext.edxToken}`
                            }
                        }).then((response) => {
                            const record = response.data.results[0] ? response.data.results[0] : "No meeting scheduled";
                            setRecordDetail(record);
                            setIsRecordingLink(record && record.id ? true : false)
                        })
                }
            }, (error) => {
                console.log(error)
            })

    }, []);

    const postStream = () => {
        // TODO 
        Axios.post('https://edxvteam.com/api/discussion/v1/comments/',
            {
                thread_id: meetDetail.id,
                raw_body: `[MS Stream recording][1] \n\n [1]:${msStreamLink}`
            },
            {
                headers: {
                    Authorization: `Bearer ${EdxTokenContext.edxToken}`
                }
            }).then((response) => {
                console.log(response);
                const record = response.data ? response.data : "No meeting scheduled";
                setRecordDetail(record);
                setIsRecordingLink(record && record.id ? true : false)
                setOpen(true);
            }, (error) => { console.log(error) })

    }

    const backToCourseList = () => {
        history.push({
            pathname: '/courseList'
        })
    }

    return (
        <div>
            <div className="main-content">
                <div className="content-part">
                    <div className="container-fluid">
                        <h3 className="heading-strip"> Course Detail</h3>
                        <div className="course-info-content">
                            <div className="course-header">
                                <div className="course-header-left">
                                    <h3>{course.name} </h3>
                                    <p>Understand how the FDA regulates pharmaceuticals and explore debates on prescription drug costs,
marketing, and testing. </p>
                                </div>
                                <div className="course-header-right">
                                <img src="images/info-right.jpg"/>

                                {/* {isStaff && !isRecordingLink  ?
                                            <TextField
                                                color="white"
                                                type='text'
                                                variant='outlined'
                                                onChange={(event) => {
                                                    setMsStreamLink(event.target.value);
                                                }}
                                                inputStyle={{ color: 'white', padding: '0px' }}
                                                style={{ backgroundColor: 'rgba(255,255,255,0.9)', width: '400px', marginTop: '-15px', borderRadius: 10000, borderWidth: 5, borderColor: 'black' }}
                                            />: ""} */}
                                    {/* <img src={course.media.image.small} alt={course.name} /> */}
                                {/* <a onClick={backToCourseList}>Back to enrolled courses</a> */}
                                </div>
                            </div>
                            <div className="course-middle">
                                <ul>
                                    <li>
                                        <p><img src="images/ico_time.jpg" />
                                            Length: <strong>8 Weeks </strong>
                                        </p>
                                    </li>
                                    <li>
                                        <p><img src="images/ico_meter.jpg" />
                                                Effort: <strong>2-5 Hours per week </strong>
                                        </p>
                                    </li>

                                    <li>
                                        <p><img src="images/ico_level.jpg" />
                                                    Level: <strong>Beginner </strong>
                                        </p>
                                    </li>

                                    <li>
                                        <p><img src="images/ico_price.jpg" />
                                            <strong>Enrolled</strong>
                                        </p>
                                    </li>

                                </ul>


                            </div>

                            <div class="course-bottom">
                                <div class="course-bottom-left">
                                    <h4>About this course </h4>
                                    <p>Prescription drugs are among the most common health care interventions and have turnedsome once-fatal diseases into manageable conditions — but they have also been a growing source of controversy. Patients in the US struggle with increasing costs and express concerns about whymany conditions,such as Alzheimer’s disease, remain without adequate therapeutic options. </p>

                                    <p>At the center of these debates lies the US Food and Drug Administration (FDA), a federal agency responsible for monitoring the prescription drug marketplace and enforcing basic rules and laws that affect how prescription drugs are discovered, developed, and sold. </p>

                                    <p>This course investigates the major issues affecting the regulatory approval and evidence-based use of prescription drugs. You willlearn the rules and regulationsg  </p>
                                    
                                    <div className="grid-item">{
                                        (isStaff && !isRecordingLink ?
                                            <TextField
                                                color="white"
                                                type='text'
                                                variant='outlined'
                                                onChange={(event) => {
                                                    setMsStreamLink(event.target.value);
                                                }}
                                                inputStyle={{ color: 'white', padding: '0px' }}
                                                style={{ backgroundColor: 'rgba(255,255,255,0.9)', width: '400px', marginTop: '28px', borderRadius: 10000, borderWidth: 5, borderColor: 'black' }}
                                            />
                                            : '')}
                                            {isStaff && !isRecordingLink && <PrimaryButton onClick={postStream} variant='contained' color='primary' style={{ margin: 30 }} >Post recording link</PrimaryButton>}

                                    </div>
                                    <h4>What you'll learn </h4>
                                    <ul>
                                        <li>Key controversies over how prescription drugs are developed and marketed, and why those controversies exist </li>
                                        <li> The FDA — its history, public health role, and rules affecting prescription drugs in the US </li>
                                        <li> The process of discovering, testing, and approving innovative drugs, including various perspectives on the criteria used for drug approval </li>
                                        <li> The cost of prescription drugs, including the factors affecting a drug’s market exclusivity period and the availability and use of affordable generic drugs </li>
                                        <li>Safety evaluation of prescription drugs using “real world” data </li>
                                        <li> Current topics stirring debate over the scope of FDA regulation, such as dietary supplements, special classes of prescription drugs, and “right to try” lawsthat allow patients to obtain drugs prior to FDA </li>
                                    </ul>
                                    <a href="#" className="more-button"><img src="images/more-icon.jpg" />More </a>

                                    <h4>Syllabus </h4>
                                    <ul>
                                        <li> <strong>Module 1:</strong> Overview and history of the FDA </li>
                                        <li><strong>Module 2: </strong> Drug development and approval </li>
                                        <li><strong> Module 3: </strong> Drug pricing in the United States </li>
                                        <li><strong>Module 4: </strong>Marketing strategies </li>
                                        <li><strong>Module 5: </strong> Post-approval evaluation  </li>
                                        <li><strong> Module 6: </strong> Emerging medical technologies </li>
                                    </ul>
                                    <a href="#" className="more-button"><img src="images/more-icon.jpg" />More </a>
                                    <h4>Meet your instructors </h4>
                                    <ul className="meet-ul">
                                        <li><div className="meet-img"><img src="images/default_avatarpic.png" /></div>
                                            <div className="meet-text"> <a href="#">Aaron Kesselheim </a>
                                                <p>Professor of Medicine, Director of the Program On Regulation, Therapeutics, And Law, Brigham and Women's Hospital </p>
                                                <span>Harvard University </span>

                                            </div>

                                        </li>

                                        <li><div className="meet-img"><img src="images/default_avatarpic.png" /></div>
                                            <div className="meet-text"> <a href="#">Aaron Kesselheim </a>
                                                <p>Professor of Medicine, Director of the Program On Regulation, Therapeutics, And Law, Brigham and Women's Hospital </p>
                                                <span>Harvard University </span>

                                            </div>

                                        </li>

                                        <li><div className="meet-img"><img src="images/default_avatarpic.png" /></div>
                                            <div className="meet-text"> <a href="#">Aaron Kesselheim </a>
                                                <p>Professor of Medicine, Director of the Program On Regulation, Therapeutics, And Law, Brigham and Women's Hospital </p>
                                                <span>Harvard University </span>

                                            </div>

                                        </li>

                                        <li><div className="meet-img"><img src="images/default_avatarpic.png" /></div>
                                            <div className="meet-text"> <a href="#">Aaron Kesselheim </a>
                                                <p>Professor of Medicine, Director of the Program On Regulation, Therapeutics, And Law, Brigham and Women's Hospital </p>
                                                <span>Harvard University </span>

                                            </div>

                                        </li>
                                    </ul>

                                </div>

                                <div className="course-bottom-right">
                                    <ul className="list-group">
                                        <li>
                                            <p><img src="images/ico_institute.jpg" />Meeting <span dangerouslySetInnerHTML={{ __html: meetDetail !== "No meeting scheduled" ? meetDetail.rendered_body : meetDetail }} /> </p>
                                        </li>

                                        <li>
                                            <p><img src="images/ico_subject.jpg" />
                                            Recorded
                                            <span>{isRecordingLink ?
                                                    <span dangerouslySetInnerHTML={{ __html: recordDetail !== "No meeting scheduled" ? recordDetail.rendered_body : meetDetail }} /> : "-"}</span> </p>
                                        </li>

                                        <li>
                                            <p><img src="images/ico_institute.jpg" />Language:<span>English</span> </p>
                                        </li>

                                        <li>
                                            <p><img src="images/ico_institute.jpg" />Video Transcript:<span>English</span> </p>
                                        </li>

                                        <li>
                                            <p><img src="images/ico_video.jpg" />Course Type:<span>Self-paced on your time</span> </p>
                                        </li>
                                    </ul>

                                    <h4>Share this course </h4>
                                    <img src="images/ico_share.jpg" />

                                    <h4>Prerequisites </h4>
                                    <p>None </p>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <footer> Powered By VTeamLabs Open edX</footer> */}
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">Post is successfull</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Recording is posted in the comments
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
})
export default Course
