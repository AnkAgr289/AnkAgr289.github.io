import React, { useState, useEffect } from 'react';
import '../Course.css';
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
            history.push('/login', { path : "/CourseList" });
        }
    }, []);

    const navigateToCourseDetail = ((course) => {
        console.log(course);
        history.push('/course', { course })
    })

    useEffect(() => {
        if(UserNameContext.userName === "Laxmi"){
        Axios.get('https://edxvteam.com/api/courses/v1/courses/')
            .then((response) => {
                let arr = response.data.results;
                setCourses(arr);
            }, (error) => {
                // TODO - Remove once API works
                let arr = [{ "blocks_url": "https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AUniversityD%2BAI101%2B2020_T1", "effort": "04:00", "end": "2020-09-30T23:30:00Z", "enrollment_start": "2020-08-15T00:00:00Z", "enrollment_end": "2020-09-15T23:30:00Z", "id": "course-v1:UniversityD+AI101+2020_T1", "media": { "course_image": { "uri": "/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg" }, "course_video": { "uri": null }, "image": { "raw": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg", "small": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg", "large": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg" } }, "name": "Introduction to Artificial Intelligence", "number": "AI101", "org": "UniversityD", "short_description": "Short Description of the course on Artificial Intelligence from UniversityD", "start": "2020-09-01T00:00:00Z", "start_display": "Sept. 1, 2020", "start_type": "timestamp", "pacing": "instructor", "mobile_available": false, "hidden": false, "invitation_only": false, "course_id": "course-v1:UniversityD+AI101+2020_T1" }, { "blocks_url": "https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AedX%2BDemoX%2BDemo_Course", "effort": null, "end": "2021-06-04T23:30:00Z", "enrollment_start": "2020-06-01T05:00:00Z", "enrollment_end": "2021-06-04T23:30:00Z", "id": "course-v1:edX+DemoX+Demo_Course", "media": { "course_image": { "uri": "/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg" }, "course_video": { "uri": null }, "image": { "raw": "https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg", "small": "https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg", "large": "https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg" } }, "name": "Demonstration Course", "number": "DemoX", "org": "edX", "short_description": "", "start": "2020-06-01T05:00:00Z", "start_display": "June 1, 2020", "start_type": "timestamp", "pacing": "instructor", "mobile_available": false, "hidden": false, "invitation_only": false, "course_id": "course-v1:edX+DemoX+Demo_Course" }];
                setCourses(arr);
            })}
            else if(UserNameContext.userName === "Cristina"){
                let arr = [{ "blocks_url": "https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AedX%2BDemoX%2BDemo_Course", "effort": null, "end": "2021-06-04T23:30:00Z", "enrollment_start": "2020-06-01T05:00:00Z", "enrollment_end": "2021-06-04T23:30:00Z", "id": "course-v1:edX+DemoX+Demo_Course", "media": { "course_image": { "uri": "/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg" }, "course_video": { "uri": null }, "image": { "raw": "https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg", "small": "https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg", "large": "https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg" } }, "name": "Demonstration Course", "number": "DemoX", "org": "edX", "short_description": "", "start": "2020-06-01T05:00:00Z", "start_display": "June 1, 2020", "start_type": "timestamp", "pacing": "instructor", "mobile_available": false, "hidden": false, "invitation_only": false, "course_id": "course-v1:edX+DemoX+Demo_Course" }];
                setCourses(arr);
            }
            else{
                let arr = [{"blocks_url": "https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AUniversityD%2BAI101%2B2020_T1", "effort": "04:00", "end": "2020-09-30T23:30:00Z", "enrollment_start": "2020-08-15T00:00:00Z", "enrollment_end": "2020-09-15T23:30:00Z", "id": "course-v1:UniversityD+AI101+2020_T1", "media": { "course_image": { "uri": "/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg" }, "course_video": { "uri": null }, "image": { "raw": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg", "small": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg", "large": "https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg" } }, "name": "Introduction to Artificial Intelligence", "number": "AI101", "org": "UniversityD", "short_description": "Short Description of the course on Artificial Intelligence from UniversityD", "start": "2020-09-01T00:00:00Z", "start_display": "Sept. 1, 2020", "start_type": "timestamp", "pacing": "instructor", "mobile_available": false, "hidden": false, "invitation_only": false, "course_id": "course-v1:UniversityD+AI101+2020_T1"}];
                setCourses(arr);
            }
    }, []);

    let course = courses.map((course) => {
        return (
            <li key={course.id} className="courses-listing-item">
                <article className="course" id="course-v1:UniversityD+AI101+2020_T1" role="region" aria-label="Introduction to Artificial Intelligence">
                    <div onClick={() => navigateToCourseDetail(course)}>
                        <header className="course-image">
                            <div className="cover-image">
                                <img src={course.media.image.small} alt={course.name} />
                                <div className="learn-more" aria-hidden="true">LEARN MORE</div>
                            </div>
                        </header>
                        <div className="course-info" aria-hidden="true">
                            <h2 className="course-name">
                                <span className="course-organization">{course.org}</span>
                                <span className="course-code">{course.number}</span>
                                <span className="course-title"><a href={`https://edxvteam.com/courses/${course.course_id}/about`}>{course.name}</a></span>
                            </h2>

                            <div className="course-date localized_datetime"
                                aria-hidden="true" data-format="shortDate"
                                data-datetime="2020-09-01T00:00:00+0000"
                                data-language="en"
                                data-string="Starts: {date}">{course.start_display}</div>
                        </div>
                    </div>
                </article>
            </li>
        )
    })

    return (
        <div>
            <div className="content-wrapper main-container" id="content" dir="ltr">
                <main id="main" aria-label="Content">
                    <section className="find-courses">
                        <section className="courses-container">
                            <header className="App-header">
                                <p className="header">Enrolled Courses</p>
                            </header>
                            <div className="courses no-course-discovery" role="region" aria-label="List of Courses">

                                <ul style={{ margin: '0 30vh' }} className="courses-listing courses-list">
                                    {course}
                                </ul>
                            </div>
                        </section>
                    </section>
                </main>
            </div>
            <footer> Powered By VTeamLabs Open edX</footer>
        </div>
    )
}

export default CourseList