(this["webpackJsonpbase-app"]=this["webpackJsonpbase-app"]||[]).push([[0],{117:function(e,t,a){},141:function(e,t,a){e.exports=a(235)},146:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(13),o=a.n(r),i=(a(146),a(11)),c=a(40),l=a(16),m=(a(88),a(31)),d=a.n(m),u=a(19),p=a(283),v=a(286),g=a(76),h=a(55),E=a.n(h),b=a(284),f=a(74),_=a.n(f),N=a(56),y=a(38),T=a(281),k=a(288),D=a(280),x=a(278),A=a(279),C=a(277),j=a(271),S=a(118),O=a.n(S),U=s.a.forwardRef((function(e,t){return s.a.createElement(j.a,Object.assign({direction:"up",ref:t},e))}));var I=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),c=Object(i.a)(o,2),m=c[0],h=c[1],f=Object(n.useState)([]),_=Object(i.a)(f,2),j=_[0],S=_[1],I=Object(n.useState)(""),w=Object(i.a)(I,2),X=w[0],B=w[1],L=Object(n.useState)(E()().toDate()),R=Object(i.a)(L,2),Z=R[0],P=R[1],z=Object(n.useState)(E()().toDate()),F=Object(i.a)(z,2),W=F[0],q=F[1],H=Object(n.useState)(""),G=Object(i.a)(H,2),J=(G[0],G[1],Object(n.useState)({})),Y=Object(i.a)(J,2),K=(Y[0],Y[1],Object(n.useState)(0)),V=Object(i.a)(K,2),Q=V[0],$=V[1],ee=Object(n.useState)(""),te=Object(i.a)(ee,2),ae=(te[0],te[1],s.a.useContext(M)),ne=ae.UserNameContext,se=ae.EdxTokenContext,re=ae.MsAuthTokenContext,oe=Object(n.useState)({}),ie=Object(i.a)(oe,2),ce=(ie[0],ie[1],Object(n.useState)([0])),le=Object(i.a)(ce,2),me=le[0],de=le[1],ue=Object(n.useState)(""),pe=Object(i.a)(ue,2),ve=pe[0],ge=pe[1],he=Object(n.useState)(""),Ee=Object(i.a)(he,2),be=Ee[0],fe=Ee[1],_e=Object(n.useState)(!1),Ne=Object(i.a)(_e,2),ye=Ne[0],Te=Ne[1],ke=(s.a.createRef(),s.a.createRef(),Object(n.useState)([""])),De=Object(i.a)(ke,2),xe=De[0],Ae=De[1],Ce=Object(l.f)();Object(n.useEffect)((function(){ne.userName&&null!==ne.userName&&void 0!==ne.userName&&se.edxToken&&null!==se.edxToken&&void 0!==se.edxToken||Ce.push("/login"),"Laxmi"!==ne.userName&&$(10),d.a.get("https://edxvteam.com/api/courses/v1/courses").then((function(e){Ae(e.data.results)}),(function(e){$(6)}))}),[]);var je=function(){r(""),h(""),fe(""),$(0)};return 6===Q?s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("p",{className:"header"},"Error")),s.a.createElement("div",{className:"main"},s.a.createElement("p",{className:"TextTitle"},"A network error occured, try again"),s.a.createElement("div",{className:"HorizontalDivision"},s.a.createElement(y.PrimaryButton,{onClick:je,variant:"contained",color:"primary",style:{margin:30}},"Try Again")))):10===Q?s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("p",{className:"header"},"Schedule a class")),s.a.createElement("div",{className:"main"},s.a.createElement("p",{className:"TextTitle"},"You are not authorized to schedule the class"),s.a.createElement("div",{className:"HorizontalDivision"},s.a.createElement(y.PrimaryButton,{onClick:function(e){console.log(e),Ce.push("/courseList",{course:e})},variant:"contained",color:"primary",style:{margin:30}},"Navigate to enrolled courses")))):3===Q?s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("p",{className:"header"},"Scheduled Class")),s.a.createElement("div",{className:"main"},s.a.createElement("p",{className:"TextTitle"},"The class for '",a,"' - '",m,"' was successfully scheduled "),s.a.createElement("p",{style:{marginTop:0}},Z.toString()," to ",W.toString()),s.a.createElement("p",null,s.a.createElement("a",{ref:function(e){return e},id:"joinlink",className:"TextTitle",value:ve,onClick:function(e){O()(ve),Te(!0)}},"Team meeting link")),s.a.createElement("div",null,s.a.createElement("p",{className:"TextTitle"},"Following enrolled users have been invited:"),me.map((function(e){return s.a.createElement("p",{key:e.emailAddress},e.emailAddress.name)}))),s.a.createElement("div",{className:"HorizontalDivision"},s.a.createElement(y.PrimaryButton,{onClick:je,variant:"contained",color:"primary",style:{margin:30}},"Schedule another Class"))),s.a.createElement(k.a,{open:ye,TransitionComponent:U,keepMounted:!0,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},s.a.createElement(C.a,{id:"alert-dialog-slide-title"},"Link Copied!"),s.a.createElement(x.a,null,s.a.createElement(A.a,{id:"alert-dialog-slide-description"},"The link has been copied to your clipboard")),s.a.createElement(D.a,null,s.a.createElement(T.a,{onClick:function(){return Te(!1)},color:"primary"},"Okay")))):s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("p",{className:"header"},"Schedule a class")),s.a.createElement("div",{className:"main"},s.a.createElement("div",{className:"Division"},s.a.createElement(b.a,{type:"text",label:"Enter the meeting title",variant:"outlined",onChange:function(e){B(e.target.value)},style:{backgroundColor:"rgba(255,255,255,0.9)",borderRadius:1e4,borderWidth:5,borderColor:"black"}})),s.a.createElement("div",{className:"HorizontalDivision"},s.a.createElement("div",{className:"AnotherDivision"},s.a.createElement("p",{className:"TextTitle"},"From"),s.a.createElement(u.a,{utils:g.a},s.a.createElement(p.a,{variant:"dialog",onChange:function(e){P(e.toDate())},value:Z,disablePast:!0,style:{width:"15vw"}}))),s.a.createElement("div",{className:"AnotherDivision"},s.a.createElement("p",{className:"TextTitle"},"To"),s.a.createElement(u.a,{utils:g.a},s.a.createElement(p.a,{variant:"dialog",minDate:Z,value:W,onChange:function(e){q(e.toDate())},style:{width:"15vw",alignContent:"center"}})))),s.a.createElement("div",{className:"Division"},s.a.createElement(v.a,{options:xe,getOptionLabel:function(e){return e.name},style:{width:"100%",margin:0,alignSelf:"center"},onChange:function(e,t){var a={};r(t.name),d.a.get("https://edxvteam.com/api/enrollment/v1/enrollments?"+N.stringify({course_id:t.course_id}),{headers:{Authorization:"Bearer ".concat(se.edxToken)}}).then((function(e){if(void 0!==e.data.results){var t=e.data.results,a=[];t.forEach((function(e){a.push(e.user)}));var n="";a.forEach((function(e,t,s){t<a.length-1?n=n+e+",":n+=e})),d.a.get("https://edxvteam.com/api/user/v1/accounts?username="+n,{headers:{Authorization:"Bearer ".concat(se.edxToken)}}).then((function(e){var t=e.data,a=[];t.forEach((function(e,t,n){a.push({emailAddress:{address:e.email,name:e.name},type:"required"})})),de(a)}),(function(e){$(6)}))}}),(function(e){$(6)})),d.a.get("https://edxvteam.com/api/courses/v1/blocks/?"+N.stringify({course_id:t.course_id,depth:"all",username:ne.userName,block_types_filter:"discussion"}),{headers:{Authorization:"Bearer ".concat(se.edxToken)}}).then((function(e){if(void 0!==e.data.blocks){var t=[];a=e.data.blocks,Object.entries(a).forEach((function(e){void 0!==e[1].display_name&&""!==e[1].display_name&&t.push(e[1])})),S(t)}}),(function(e){$(6)}))},renderInput:function(e){return s.a.createElement(b.a,Object.assign({},e,{label:"Select the course",variant:"outlined"}))}})),s.a.createElement("div",{className:"Division"},s.a.createElement(v.a,{options:j,getOptionLabel:function(e){return e.display_name},style:{width:"100%",margin:0,alignSelf:"center"},onInputChange:function(e,t){return h(t)},renderInput:function(e){return s.a.createElement(b.a,Object.assign({},e,{label:"Select course unit",variant:"outlined"}))}})),s.a.createElement("div",{className:"Division"},s.a.createElement(b.a,{type:"text",label:"Enter additional description",variant:"outlined",onChange:function(e){fe(e.target.value)},style:{backgroundColor:"rgba(255,255,255,0.9)",borderRadius:1e4,borderWidth:5,borderColor:"black"}})),s.a.createElement("div",{className:"HorizontalDivision"},s.a.createElement(y.SecondaryButton,{onClick:je,variant:"contained",color:"secondary",style:{margin:30}},"Cancel"),s.a.createElement(y.PrimaryButton,{onClick:function(){var e=Z.getFullYear(),t=(Z.getMonth()+1).toString().padStart(2,"0"),n=Z.getDate().toString().padStart(2,"0"),s=Z.getHours().toString().padStart(2,"0"),r=Z.getMinutes().toString().padStart(2,"0"),o=W.getFullYear(),i=(W.getMonth()+1).toString().padStart(2,"0"),c=W.getDate().toString().padStart(2,"0"),l=W.getHours().toString().padStart(2,"0"),u=W.getMinutes().toString().padStart(2,"0");d.a.post("https://graph.microsoft.com/v1.0/groups/48c4a928-f625-4837-90cc-4181c8b9191c/events",{subject:X,body:{contentType:"HTML",content:a+" "+m+"\n"+be},start:{dateTime:"".concat(e,"-").concat(t,"-").concat(n,"T").concat(s,":").concat(r,":00"),timeZone:"India Standard Time"},end:{dateTime:"".concat(o,"-").concat(i,"-").concat(c,"T").concat(l,":").concat(u,":00"),timeZone:"India Standard Time"},location:{displayName:"Microsoft team"},attendees:me,isOnlineMeeting:!0,onlineMeetingProvider:"teamsForBusiness"},{headers:{Authorization:"Bearer ".concat(re.msAuthToken)}}).then((function(e){console.log(e),ge(e.data.onlineMeeting.joinUrl),$(3)}),(function(e){console.log(e),$(6)}))},variant:"contained",color:"primary",style:{margin:30}},"Submit"))),s.a.createElement("footer",null," Powered By VTeamLabs Open edX"))};a(117);var w=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],o=s.a.useContext(M),c=o.UserNameContext,m=o.EdxTokenContext;console.log(c.userName);var u=Object(l.f)();s.a.useEffect((function(){c.userName&&null!==c.userName&&void 0!==c.userName&&m.edxToken&&null!==m.edxToken&&void 0!==m.edxToken||u.push("/login?CourseList",{path:"/CourseList"})}),[]),Object(n.useEffect)((function(){if("Laxmi"===c.userName)d.a.get("https://edxvteam.com/api/courses/v1/courses/").then((function(e){var t=e.data.results;r(t)}),(function(e){r([{blocks_url:"https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AUniversityD%2BAI101%2B2020_T1",effort:"04:00",end:"2020-09-30T23:30:00Z",enrollment_start:"2020-08-15T00:00:00Z",enrollment_end:"2020-09-15T23:30:00Z",id:"course-v1:UniversityD+AI101+2020_T1",media:{course_image:{uri:"/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg"},course_video:{uri:null},image:{raw:"https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg",small:"https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg",large:"https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg"}},name:"Introduction to Artificial Intelligence",number:"AI101",org:"UniversityD",short_description:"Short Description of the course on Artificial Intelligence from UniversityD",start:"2020-09-01T00:00:00Z",start_display:"Sept. 1, 2020",start_type:"timestamp",pacing:"instructor",mobile_available:!1,hidden:!1,invitation_only:!1,course_id:"course-v1:UniversityD+AI101+2020_T1"},{blocks_url:"https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AedX%2BDemoX%2BDemo_Course",effort:null,end:"2021-06-04T23:30:00Z",enrollment_start:"2020-06-01T05:00:00Z",enrollment_end:"2021-06-04T23:30:00Z",id:"course-v1:edX+DemoX+Demo_Course",media:{course_image:{uri:"/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg"},course_video:{uri:null},image:{raw:"https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg",small:"https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg",large:"https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg"}},name:"Demonstration Course",number:"DemoX",org:"edX",short_description:"",start:"2020-06-01T05:00:00Z",start_display:"June 1, 2020",start_type:"timestamp",pacing:"instructor",mobile_available:!1,hidden:!1,invitation_only:!1,course_id:"course-v1:edX+DemoX+Demo_Course"}])}));else if("Cristina"===c.userName){r([{blocks_url:"https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AedX%2BDemoX%2BDemo_Course",effort:null,end:"2021-06-04T23:30:00Z",enrollment_start:"2020-06-01T05:00:00Z",enrollment_end:"2021-06-04T23:30:00Z",id:"course-v1:edX+DemoX+Demo_Course",media:{course_image:{uri:"/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg"},course_video:{uri:null},image:{raw:"https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg",small:"https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg",large:"https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg"}},name:"Demonstration Course",number:"DemoX",org:"edX",short_description:"",start:"2020-06-01T05:00:00Z",start_display:"June 1, 2020",start_type:"timestamp",pacing:"instructor",mobile_available:!1,hidden:!1,invitation_only:!1,course_id:"course-v1:edX+DemoX+Demo_Course"}])}else{r([{blocks_url:"https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AUniversityD%2BAI101%2B2020_T1",effort:"04:00",end:"2020-09-30T23:30:00Z",enrollment_start:"2020-08-15T00:00:00Z",enrollment_end:"2020-09-15T23:30:00Z",id:"course-v1:UniversityD+AI101+2020_T1",media:{course_image:{uri:"/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg"},course_video:{uri:null},image:{raw:"https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg",small:"https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg",large:"https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg"}},name:"Introduction to Artificial Intelligence",number:"AI101",org:"UniversityD",short_description:"Short Description of the course on Artificial Intelligence from UniversityD",start:"2020-09-01T00:00:00Z",start_display:"Sept. 1, 2020",start_type:"timestamp",pacing:"instructor",mobile_available:!1,hidden:!1,invitation_only:!1,course_id:"course-v1:UniversityD+AI101+2020_T1"}])}}),[]);var p=a.map((function(e){return s.a.createElement("li",{key:e.id,className:"courses-listing-item"},s.a.createElement("article",{className:"course",id:"course-v1:UniversityD+AI101+2020_T1",role:"region","aria-label":"Introduction to Artificial Intelligence"},s.a.createElement("div",{onClick:function(){return function(e){console.log(e),u.push("/course",{course:e})}(e)}},s.a.createElement("header",{className:"course-image"},s.a.createElement("div",{className:"cover-image"},s.a.createElement("img",{src:e.media.image.small,alt:e.name}),s.a.createElement("div",{className:"learn-more","aria-hidden":"true"},"LEARN MORE"))),s.a.createElement("div",{className:"course-info","aria-hidden":"true"},s.a.createElement("h2",{className:"course-name"},s.a.createElement("span",{className:"course-organization"},e.org),s.a.createElement("span",{className:"course-code"},e.number),s.a.createElement("span",{className:"course-title"},s.a.createElement("a",{href:"https://edxvteam.com/courses/".concat(e.course_id,"/about")},e.name))),s.a.createElement("div",{className:"course-date localized_datetime","aria-hidden":"true","data-format":"shortDate","data-datetime":"2020-09-01T00:00:00+0000","data-language":"en","data-string":"Starts: {date}"},e.start_display)))))}));return s.a.createElement("div",null,s.a.createElement("div",{className:"content-wrapper main-container",id:"content",dir:"ltr"},s.a.createElement("main",{id:"main","aria-label":"Content"},s.a.createElement("section",{className:"find-courses"},s.a.createElement("section",{className:"courses-container"},s.a.createElement("header",{className:"App-header"},s.a.createElement("p",{className:"header"},"Enrolled Courses")),s.a.createElement("div",{className:"courses no-course-discovery",role:"region","aria-label":"List of Courses"},s.a.createElement("ul",{style:{margin:"0 30vh"},className:"courses-listing courses-list"},p)))))),s.a.createElement("footer",null," Powered By VTeamLabs Open edX"))},X=function(e){console.log(e);var t=e&&e.location&&e.location.state&&(void 0!==e.location.state.course||null!==e.location.state.course)?e.location.state.course:{blocks_url:"https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AUniversityD%2BAI101%2B2020_T1",effort:"04:00",end:"2020-09-30T23:30:00Z",enrollment_start:"2020-08-15T00:00:00Z",enrollment_end:"2020-09-15T23:30:00Z",id:"course-v1:UniversityD+AI101+2020_T1",media:{course_image:{uri:"/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg"},course_video:{uri:null},image:{raw:"https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg",small:"https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg",large:"https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg"}},name:"Introduction to Artificial Intelligence",number:"AI101",org:"UniversityD",short_description:"Short Description of the course on Artificial Intelligence from UniversityD",start:"2020-09-01T00:00:00Z",start_display:"Sept. 1, 2020",start_type:"timestamp",pacing:"instructor",mobile_available:!1,hidden:!1,invitation_only:!1,course_id:"course-v1:UniversityD+AI101+2020_T1"},a=Object(n.useState)(""),r=Object(i.a)(a,2),o=(r[0],r[1],Object(l.f)());Object(n.useEffect)((function(){}),[]);return s.a.createElement("div",null,s.a.createElement("div",{className:"content-wrapper main-container",id:"content",dir:"ltr"},s.a.createElement("main",{id:"main","aria-label":"Content"},s.a.createElement("section",{className:"find-courses"},s.a.createElement("section",{className:"courses-container"},s.a.createElement("header",{className:"App-header"},s.a.createElement("p",{className:"header"},"Course Detail")),s.a.createElement("div",{className:"courses no-course-discovery",role:"region","aria-label":"List of Courses"},s.a.createElement("div",{className:"grid-container"},s.a.createElement("div",{className:"grid-item"},"Course organization"),s.a.createElement("div",{className:"grid-item"}," - "),s.a.createElement("div",{className:"grid-item"},t.org),s.a.createElement("div",{className:"grid-item"},"Course code"),s.a.createElement("div",{className:"grid-item"}," - "),s.a.createElement("div",{className:"grid-item"},t.number),s.a.createElement("div",{className:"grid-item"},"Course title"),s.a.createElement("div",{className:"grid-item"}," - "),s.a.createElement("div",{className:"grid-item"},s.a.createElement("a",{href:"https://edxvteam.com/courses/".concat(t.course_id,"/about")},t.name)),s.a.createElement("div",{className:"grid-item"},"Scheduled meet"),s.a.createElement("div",{className:"grid-item"}," - "),s.a.createElement("div",{className:"grid-item"},s.a.createElement("a",{href:"#"},"Join URL to be fetched")),s.a.createElement("div",{className:"grid-item"},"Recorded"),s.a.createElement("div",{className:"grid-item"}," - "),s.a.createElement("div",{className:"grid-item"},s.a.createElement("a",{href:"#"},"Stream link"))),s.a.createElement("div",{className:"HorizontalDivision"},s.a.createElement(y.SecondaryButton,{onClick:function(){o.push({pathname:"/courseList"})},variant:"contained",color:"secondary",style:{margin:30}},"Back")," ")))))),s.a.createElement("footer",null," Powered By VTeamLabs Open edX"))};var B=function(){var e=s.a.useContext(M),t=e.UserNameContext,a=e.EdxTokenContext,n=(e.MsAuthTokenContext,Object(l.f)());s.a.useEffect((function(){t.userName&&null!==t.userName&&void 0!==t.userName&&a.edxToken&&null!==a.edxToken&&void 0!==a.edxToken||n.push("/login?assessment",{path:"/assessment"})}),[]);var r="Laxmi"===t.userName;console.log(t.userName);var o="Cristina"===t.userName?"Demo":"AI";console.log(o);var i=!1,c="Demo"===o?"https://forms.office.com/Pages/ResponsePage.aspx?id=ULWMLnqAXE6BzmsGdAtt_v8yq2Ma9E5FhW7OrIb03ElUM1pBU0tPQzE3UDgwT1NKSFg3NTNTNEk4WC4u&embed=true":"AI"===o?"https://forms.office.com/Pages/ResponsePage.aspx?id=ULWMLnqAXE6BzmsGdAtt_v8yq2Ma9E5FhW7OrIb03ElUN1dLSUtRR0w0TE9GRFFDWlZSSk9YRDUwQy4u&embed=true":"No assessment",m=function(e){"Demo"===e&&window.open("https://forms.office.com/Pages/DesignPage.aspx?fragment=FormId%3DULWMLnqAXE6BzmsGdAtt_v8yq2Ma9E5FhW7OrIb03ElUM1pBU0tPQzE3UDgwT1NKSFg3NTNTNEk4WC4u%26Token%3D8b8e7de4eefd4cd8bddafb2dc02ccd74","_blank"),"AI"===e?window.open("https://forms.office.com/Pages/DesignPage.aspx?fragment=FormId%3DULWMLnqAXE6BzmsGdAtt_v8yq2Ma9E5FhW7OrIb03ElUN1dLSUtRR0w0TE9GRFFDWlZSSk9YRDUwQy4u%26Token%3Dbbe298a6eb6c4c7fa7990b5fe2be84d3","_blank"):i=!0},d=r?s.a.createElement("div",null,!i&&s.a.createElement("div",null,s.a.createElement("a",{onClick:function(){return m("AI")}},s.a.createElement("p",{className:"assessmentText"},"Artificial Intelligence Assessment")),s.a.createElement("a",{onClick:function(){return m("Demo")}},s.a.createElement("p",{className:"assessmentText"},"Demo Assessment"))),i?s.a.createElement("p",{className:"assessment"},"No assessment"):s.a.createElement("p",{className:"assessment"},"Assessment will be viewed in different tab")):"No assessment"===c?s.a.createElement("p",{className:"assessmentText"},"No assessment"):s.a.createElement("iframe",{title:o,src:c,frameBorder:"0",marginWidth:"0",marginHeight:"0",className:"assessmentFrame",allowFullScreen:!0}," ");return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("p",{className:"header"},"Assessment")),s.a.createElement("div",{className:"main"},d),s.a.createElement("footer",null," Powered By VTeamLabs Open edX"))},L=function(e){var t=window.location.hash,a=Object(n.useState)(""),r=Object(i.a)(a,2),o=r[0],c=r[1],m=s.a.useContext(M),u=m.UserNameContext,p=m.EdxTokenContext,v=m.MsAuthTokenContext,g=Object(l.f)(),h=e&&e.location&&e.location.state&&(void 0!==e.location.state.path||null!==e.location.state.path)?e.location.state.path:"/baseform";h=t.includes("assessment")?"/assessment":t.includes("courseList")?"/CourseList":"/baseform";return s.a.createElement(_.a,{clientId:"c4e63d26-dcf1-4d0a-bac1-ae0bc5afca83",authCallback:function(e,t){try{var a=t.authResponseWithAccessToken,n=a.accessToken,s=a.account;console.log(s.userName),null!==n&&(v.setMsAuthToken(n),function(e){d.a.post("https://edxvteam.com/oauth2/access_token",N.stringify({grant_type:"client_credentials",client_id:"8vD6pKAbjTfgdEtNAKqdUwu0X6Ps574kyBh94Om0",client_secret:"ERRuuGZPMsEy8hjBHjFaMZsmDR3SRhXndOjgoiqEseor1p18kktkHSdUExFNFoKlTdWrmrtz2Oc0NyVa9fNASLuckPPRJY0uCXwkg7yEbRfUg8e0rfGetaGt7tuqUqRo",token_type:"Bearer"}),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(t){p.setEdxToken(t.data.access_token),c(t.data.access_token),console.log(p.edxToken),console.log(o),d.a.get("https://edxvteam.com/api/user/v1/accounts?email="+e.userName,{headers:{Authorization:"Bearer ".concat(t.data.access_token)}}).then((function(t){var a=t.data[0];"Cristina@vteamlabs.com"===e.userName?u.setUserName("Cristina"):"Jones@vteamlabs.com"===e.userName?u.setUserName("Jones"):u.setUserName(a.username),console.log(u.userName),g.push(h)}),(function(e){console.log(e)}))}),(function(e){console.log(e)}))}(s))}catch(r){console.log(r)}},redirectUri:"https://ankagr289.github.io/#/login",graphScopes:["Calendars.ReadWrite","Group.ReadWrite.All"]})},M=s.a.createContext(null);var R=function(){var e=s.a.useState(""),t=Object(i.a)(e,2),a=t[0],n=t[1],r=s.a.useState(""),o=Object(i.a)(r,2),m=o[0],d=o[1],u=s.a.useState(""),p=Object(i.a)(u,2),v={userName:a,setUserName:n},g={edxToken:m,setEdxToken:d},h={msAuthToken:p[0],setMsAuthToken:p[1]};return s.a.createElement(c.a,null,s.a.createElement(M.Provider,{value:{UserNameContext:v,EdxTokenContext:g,MsAuthTokenContext:h}},s.a.createElement(c.b,{basename:"/"},s.a.createElement("div",null,s.a.createElement(l.b,{path:"/login",render:function(e){return s.a.createElement(L,e)}}),s.a.createElement(l.b,{exact:!0,path:"/baseform"},s.a.createElement(I,null)),s.a.createElement(l.b,{path:"/CourseList"},s.a.createElement(w,null)),s.a.createElement(l.b,{path:"/Course",render:function(e){return s.a.createElement(X,e)}}),s.a.createElement(l.b,{path:"/assessment"},s.a.createElement(B,null)),s.a.createElement(l.b,{exact:!0,path:"/"},s.a.createElement(l.a,{to:"/baseform"}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){}},[[141,1,2]]]);
//# sourceMappingURL=main.f920b4b3.chunk.js.map