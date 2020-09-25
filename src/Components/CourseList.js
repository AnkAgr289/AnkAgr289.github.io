import React, { useState, useEffect } from 'react';

import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserDetailsContext } from '../App';

function CourseList() {
    const [courses, setCourses] = useState([]);
    const { UserNameContext, EdxTokenContext } = React.useContext(UserDetailsContext);
    console.log(UserNameContext.userName)
    let history = useHistory();
    React.useEffect(() => {
        if (!UserNameContext.userName
            || UserNameContext.userName === null
            || UserNameContext.userName === undefined
            || !EdxTokenContext.edxToken
            || EdxTokenContext.edxToken === null
            || EdxTokenContext.edxToken === undefined) {
            history.push('/login?course', { path: "/CourseList" });
        }
    }, []);

    const navigateToCourseDetail = ((course) => {
        console.log(course);
        history.push(`/course?${course.id}`, { course })
    })

    useEffect(() => {
        // if(UserNameContext.userName === "Laxmi"){
        // Axios.get('https://edxvteam.com/api/courses/v1/courses/')
        //     .then((response) => {
        //         let arr = response.data.results;
        //         setCourses(arr);
        //     }, (error) => {
        //         // TODO - Remove once API works
        //         let arr = [{ "blocks_url": "https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AUniversityD%2BAI101%2B2020_T1", "effort": "04:00", "end": "2020-09-30T23:30:00Z", "enrollment_start": "2020-08-15T00:00:00Z", "enrollment_end": "2020-09-15T23:30:00Z", "id": "course-v1:UniversityD+AI101+2020_T1", "media": { "course_image": { "uri": "/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg" }, "course_video": { "uri": null }, "image": { "raw": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg", "small": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg", "large": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg" } }, "name": "Introduction to Artificial Intelligence", "number": "AI101", "org": "UniversityD", "short_description": "Short Description of the course on Artificial Intelligence from UniversityD", "start": "2020-09-01T00:00:00Z", "start_display": "Sept. 1, 2020", "start_type": "timestamp", "pacing": "instructor", "mobile_available": false, "hidden": false, "invitation_only": false, "course_id": "course-v1:UniversityD+AI101+2020_T1" }, { "blocks_url": "https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AedX%2BDemoX%2BDemo_Course", "effort": null, "end": "2021-06-04T23:30:00Z", "enrollment_start": "2020-06-01T05:00:00Z", "enrollment_end": "2021-06-04T23:30:00Z", "id": "course-v1:edX+DemoX+Demo_Course", "media": { "course_image": { "uri": "/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg" }, "course_video": { "uri": null }, "image": { "raw": "https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg", "small": "https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg", "large": "https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg" } }, "name": "Demonstration Course", "number": "DemoX", "org": "edX", "short_description": "", "start": "2020-06-01T05:00:00Z", "start_display": "June 1, 2020", "start_type": "timestamp", "pacing": "instructor", "mobile_available": false, "hidden": false, "invitation_only": false, "course_id": "course-v1:edX+DemoX+Demo_Course" }];
        //         setCourses(arr);
        //     })}
        //     else if(UserNameContext.userName === "Cristina"){
        //         let arr = [{ "blocks_url": "https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AedX%2BDemoX%2BDemo_Course", "effort": null, "end": "2021-06-04T23:30:00Z", "enrollment_start": "2020-06-01T05:00:00Z", "enrollment_end": "2021-06-04T23:30:00Z", "id": "course-v1:edX+DemoX+Demo_Course", "media": { "course_image": { "uri": "/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg" }, "course_video": { "uri": null }, "image": { "raw": "https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg", "small": "https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg", "large": "https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg" } }, "name": "Demonstration Course", "number": "DemoX", "org": "edX", "short_description": "", "start": "2020-06-01T05:00:00Z", "start_display": "June 1, 2020", "start_type": "timestamp", "pacing": "instructor", "mobile_available": false, "hidden": false, "invitation_only": false, "course_id": "course-v1:edX+DemoX+Demo_Course" }];
        //         setCourses(arr);
        //     }
        //     else{
        //         let arr = [{"blocks_url": "https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AUniversityD%2BAI101%2B2020_T1", "effort": "04:00", "end": "2020-09-30T23:30:00Z", "enrollment_start": "2020-08-15T00:00:00Z", "enrollment_end": "2020-09-15T23:30:00Z", "id": "course-v1:UniversityD+AI101+2020_T1", "media": { "course_image": { "uri": "/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg" }, "course_video": { "uri": null }, "image": { "raw": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg", "small": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg", "large": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg" } }, "name": "Introduction to Artificial Intelligence", "number": "AI101", "org": "UniversityD", "short_description": "Short Description of the course on Artificial Intelligence from UniversityD", "start": "2020-09-01T00:00:00Z", "start_display": "Sept. 1, 2020", "start_type": "timestamp", "pacing": "instructor", "mobile_available": false, "hidden": false, "invitation_only": false, "course_id": "course-v1:UniversityD+AI101+2020_T1"}];
        //         setCourses(arr);
        //     }

        Axios.get(`https://edxvteam.com/api/enrollment/v1/enrollment`, {
            headers: {
                Authorization: `Bearer ${EdxTokenContext.edxToken}`
            }
        }).then((response) => {
            console.log(response.data)
            let userEnrolledCourses = response.data;
            Axios.get('https://edxvteam.com/api/courses/v1/courses/')
                .then((response) => {
                    let courses = response.data.results;
                    let enrolledCourseDetails = [];
                    courses.map((course) => {
                        userEnrolledCourses.forEach((enrolledcourse) => {
                            if (course.id === enrolledcourse.course_details.course_id) {
                                enrolledCourseDetails.push(course);
                            }
                        }

                        )
                    });
                    setCourses(enrolledCourseDetails);
                }, (error) => {
                    // TODO - Remove once API works
                    let arr = [{ "blocks_url": "https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AUniversityD%2BAI101%2B2020_T1", "effort": "04:00", "end": "2020-09-30T23:30:00Z", "enrollment_start": "2020-08-15T00:00:00Z", "enrollment_end": "2020-09-15T23:30:00Z", "id": "course-v1:UniversityD+AI101+2020_T1", "media": { "course_image": { "uri": "/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg" }, "course_video": { "uri": null }, "image": { "raw": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg", "small": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg", "large": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg" } }, "name": "Introduction to Artificial Intelligence", "number": "AI101", "org": "UniversityD", "short_description": "Short Description of the course on Artificial Intelligence from UniversityD", "start": "2020-09-01T00:00:00Z", "start_display": "Sept. 1, 2020", "start_type": "timestamp", "pacing": "instructor", "mobile_available": false, "hidden": false, "invitation_only": false, "course_id": "course-v1:UniversityD+AI101+2020_T1" }, { "blocks_url": "https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AedX%2BDemoX%2BDemo_Course", "effort": null, "end": "2021-06-04T23:30:00Z", "enrollment_start": "2020-06-01T05:00:00Z", "enrollment_end": "2021-06-04T23:30:00Z", "id": "course-v1:edX+DemoX+Demo_Course", "media": { "course_image": { "uri": "/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg" }, "course_video": { "uri": null }, "image": { "raw": "https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg", "small": "https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg", "large": "https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg" } }, "name": "Demonstration Course", "number": "DemoX", "org": "edX", "short_description": "", "start": "2020-06-01T05:00:00Z", "start_display": "June 1, 2020", "start_type": "timestamp", "pacing": "instructor", "mobile_available": false, "hidden": false, "invitation_only": false, "course_id": "course-v1:edX+DemoX+Demo_Course" }];
                    setCourses(arr);
                })
        });

    }, []);

    let course = courses.map((course) => {
        return (
            <li key={course.id}>
                <div class="box-detail">
                    <div class="box-detail-top">
                        <figure>
                            <img src={course.media.image.small} alt={course.name} />
                        </figure>
                        <h4>
                            {course.org}
                        </h4>
                    </div>
                    <div class="box-detail-bottom">
                        <h5>{course.name} </h5>
                        <span class="space"></span>
                        <p class="name">{course.number} </p>
                        <p class="date">{course.start_display} </p>
                    </div>
                    <a onClick={() => navigateToCourseDetail(course)} class="button">View Course  <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
            </li>
        )
    })
    return (
        <div>
            <div class="main-content">
                <div class="content-part">
                    <div class="container-fluid">
                        <h3 class="heading-strip"> Enrolled Courses</h3>
                        <div class="box-1">
                            <ul>{course}</ul>
                        </div>
                    </div></div></div>
            {/* <footer> Powered By VTeamLabs Open edX</footer> */}
        </div>
    )
}

export default CourseList
