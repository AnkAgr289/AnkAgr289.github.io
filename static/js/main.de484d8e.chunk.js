(this["webpackJsonpbase-app"]=this["webpackJsonpbase-app"]||[]).push([[0],{143:function(e,t,a){e.exports=a(238)},148:function(e,t,a){},236:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),l=a.n(s),o=(a(148),a(8)),c=a(39),i=a(16),m=(a(87),a(20)),u=a.n(m),d=a(19),p=a(283),g=a(286),E=a(78),h=a(55),f=a.n(h),v=a(284),b=a(56),y=a(281),T=a(288),x=a(280),k=a(278),_=a(279),j=a(277),S=a(271),O=a(116),A=a.n(O),N=a(48),C=r.a.forwardRef((function(e,t){return r.a.createElement(S.a,Object.assign({direction:"up",ref:t},e))}));var w=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)(""),c=Object(o.a)(l,2),m=c[0],h=c[1],S=Object(n.useState)([]),O=Object(o.a)(S,2),w=O[0],D=O[1],M=Object(n.useState)([]),U=Object(o.a)(M,2),B=U[0],L=U[1],I=Object(n.useState)([]),P=Object(o.a)(I,2),R=P[0],W=P[1],z=Object(n.useState)([]),X=Object(o.a)(z,2),H=X[0],q=X[1],Z=Object(n.useState)(""),K=Object(o.a)(Z,2),G=K[0],Y=K[1],J=Object(n.useState)(f()().toDate()),Q=Object(o.a)(J,2),V=Q[0],$=Q[1],ee=Object(n.useState)(f()().toDate()),te=Object(o.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)(0),se=Object(o.a)(re,2),le=se[0],oe=se[1],ce=r.a.useContext(F),ie=ce.UserNameContext,me=ce.EdxTokenContext,ue=ce.MsAuthTokenContext,de=Object(n.useState)({}),pe=Object(o.a)(de,2),ge=(pe[0],pe[1],Object(n.useState)([0])),Ee=Object(o.a)(ge,2),he=Ee[0],fe=Ee[1],ve=Object(n.useState)(""),be=Object(o.a)(ve,2),ye=be[0],Te=be[1],xe=Object(n.useState)(""),ke=Object(o.a)(xe,2),_e=ke[0],je=ke[1],Se=Object(n.useState)(!1),Oe=Object(o.a)(Se,2),Ae=Oe[0],Ne=Oe[1],Ce=(r.a.createRef(),r.a.createRef(),Object(n.useState)("")),we=Object(o.a)(Ce,2),De=we[0],Me=we[1],Ue=Object(n.useState)([""]),Be=Object(o.a)(Ue,2),Le=Be[0],Ie=Be[1],Pe=Object(i.f)();Object(n.useEffect)((function(){ie.userName&&null!==ie.userName&&void 0!==ie.userName&&me.edxToken&&null!==me.edxToken&&void 0!==me.edxToken||Pe.push("/login"),"Laxmi"!==ie.userName&&oe(10),u.a.get("https://edxvteam.com/api/enrollment/v1/enrollment",{headers:{Authorization:"Bearer ".concat(me.edxToken)}}).then((function(e){console.log(e.data);var t=e.data;Ie(t)}))}),[]);var Fe=function(){s(""),h(""),je(""),oe(0)};return 6===le?r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",{className:"header"},"Error")),r.a.createElement("div",{className:"main"},r.a.createElement("p",{className:"TextTitle"},"A network error occured, try again"),r.a.createElement("div",{className:"HorizontalDivision"},r.a.createElement(b.PrimaryButton,{onClick:Fe,variant:"contained",color:"primary",style:{margin:30}},"Try Again")))):10===le?r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",{className:"header"},"Schedule a class")),r.a.createElement("div",{className:"main"},r.a.createElement("p",{className:"TextTitle"},"You are not authorized to schedule the class"),r.a.createElement("div",{className:"HorizontalDivision"},r.a.createElement(b.PrimaryButton,{onClick:function(e){console.log(e),Pe.push("/courseList",{course:e})},variant:"contained",color:"primary",style:{margin:30}},"Navigate to enrolled courses")))):3===le?r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",{className:"header"},"Scheduled Class")),r.a.createElement("div",{className:"main"},r.a.createElement("p",{className:"TextTitle"},"The class for '",a," - ",m," - ",R,"' was successfully scheduled "),r.a.createElement("p",{style:{marginTop:0}},V.toString()," to ",ae.toString()),r.a.createElement("p",null,r.a.createElement("a",{ref:function(e){return e},id:"joinlink",className:"TextTitle",value:ye,onClick:function(e){A()(ye),Ne(!0)}},"Team meeting link")),r.a.createElement("div",null,r.a.createElement("p",{className:"TextTitle"},"Following enrolled users have been invited:"),he.map((function(e){return r.a.createElement("p",{key:e.emailAddress},e.emailAddress.name)}))),r.a.createElement("div",{className:"HorizontalDivision"},r.a.createElement(b.PrimaryButton,{onClick:Fe,variant:"contained",color:"primary",style:{margin:30}},"Schedule another Class"))),r.a.createElement(T.a,{open:Ae,TransitionComponent:C,keepMounted:!0,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(j.a,{id:"alert-dialog-slide-title"},"Link Copied!"),r.a.createElement(k.a,null,r.a.createElement(_.a,{id:"alert-dialog-slide-description"},"The link has been copied to your clipboard")),r.a.createElement(x.a,null,r.a.createElement(y.a,{onClick:function(){return Ne(!1)},color:"primary"},"Okay")))):r.a.createElement("div",{class:"main-content"},r.a.createElement("div",{class:"content-part"},r.a.createElement("div",{class:"container-fluid"},r.a.createElement("h3",{class:"heading-strip"}," Schedule a Class"),r.a.createElement("div",{class:"class-form"},r.a.createElement("form",null,r.a.createElement("div",{class:"form-group"},r.a.createElement(v.a,{type:"text",label:"Enter the meeting title",variant:"outlined",onChange:function(e){Y(e.target.value)},style:{backgroundColor:"rgba(255,255,255,0.9)",borderRadius:1e4,borderWidth:5,borderColor:"black"}}),"      "),r.a.createElement("div",{class:"form-group"},r.a.createElement("div",{class:"form-left"}," ",r.a.createElement("label",null,"From: "),"  ",r.a.createElement(d.a,{utils:E.a},r.a.createElement(p.a,{variant:"dialog",onChange:function(e){$(e.toDate())},value:V,disablePast:!0,style:{width:"15vw"}}))," "),r.a.createElement("div",{class:"form-right"}," ",r.a.createElement("label",null,"To: "),"   ",r.a.createElement(d.a,{utils:E.a},r.a.createElement(p.a,{variant:"dialog",minDate:V,value:ae,onChange:function(e){ne(e.toDate())},style:{width:"15vw",alignContent:"center"}}))," ")),r.a.createElement("div",{class:"form-group"},r.a.createElement(g.a,{options:Le,getOptionLabel:function(e){return e.course_details.course_name},style:{width:"100%",margin:0,alignSelf:"center"},onChange:function(e,t){s(t.course_details.course_name),Me(t.course_details.course_id),h(""),u.a.get("https://edxvteam.com/api/enrollment/v1/enrollments?"+N.stringify({course_id:t.course_details.course_id}),{headers:{Authorization:"Bearer ".concat(me.edxToken)}}).then((function(e){if(void 0!==e.data.results){var t=e.data.results,a=[];t.forEach((function(e){a.push(e.user)}));var n="";a.forEach((function(e,t,r){t<a.length-1?n=n+e+",":n+=e})),u.a.get("https://edxvteam.com/api/user/v1/accounts?username="+n,{headers:{Authorization:"Bearer ".concat(me.edxToken)}}).then((function(e){var t=e.data,a=[];t.forEach((function(e,t,n){a.push({emailAddress:{address:e.email,name:e.name},type:"required"})})),fe(a)}),(function(e){oe(6)}))}}),(function(e){oe(6)})),u.a.get("https://edxvteam.com/api/discussion/v1/course_topics/"+encodeURI(t.course_details.course_id),{headers:{Authorization:"Bearer ".concat(me.edxToken)}}).then((function(e){D(e.data.courseware_topics)}),(function(e){oe(6)}))},renderInput:function(e){return r.a.createElement(v.a,Object.assign({},e,{label:"Select the course",variant:"outlined"}))}})),r.a.createElement("div",{class:"form-group"},r.a.createElement(g.a,{options:w,getOptionLabel:function(e){return e.name},style:{width:"100%",margin:0,alignSelf:"center"},onChange:function(e,t){q(t.children)},onInputChange:function(e,t){return h(t)},renderInput:function(e){return r.a.createElement(v.a,Object.assign({},e,{label:"Select course section",variant:"outlined"}))}})),r.a.createElement("div",{class:"form-group"},r.a.createElement(g.a,{options:H,getOptionLabel:function(e){return e.name},style:{width:"100%",margin:0,alignSelf:"center"},onChange:function(e,t){L(t.id)},onInputChange:function(e,t){return W(t)},renderInput:function(e){return r.a.createElement(v.a,Object.assign({},e,{label:"Select course unit",variant:"outlined"}))}})),r.a.createElement("div",{class:"form-group"},r.a.createElement(v.a,{type:"text",label:"Enter additional description",variant:"outlined",onChange:function(e){je(e.target.value)},style:{backgroundColor:"rgba(255,255,255,0.9)",borderRadius:1e4,borderWidth:5,borderColor:"black"}})),r.a.createElement("button",{type:"submit",onClick:function(){var e=V.getFullYear(),t=(V.getMonth()+1).toString().padStart(2,"0"),n=V.getDate().toString().padStart(2,"0"),r=V.getHours().toString().padStart(2,"0"),s=V.getMinutes().toString().padStart(2,"0"),l=ae.getFullYear(),o=(ae.getMonth()+1).toString().padStart(2,"0"),c=ae.getDate().toString().padStart(2,"0"),i=ae.getHours().toString().padStart(2,"0"),d=ae.getMinutes().toString().padStart(2,"0");u.a.post("https://graph.microsoft.com/v1.0/groups/48c4a928-f625-4837-90cc-4181c8b9191c/events",{subject:G,body:{contentType:"HTML",content:a+" "+m+"\n"+_e},start:{dateTime:"".concat(e,"-").concat(t,"-").concat(n,"T").concat(r,":").concat(s,":00"),timeZone:"India Standard Time"},end:{dateTime:"".concat(l,"-").concat(o,"-").concat(c,"T").concat(i,":").concat(d,":00"),timeZone:"India Standard Time"},location:{displayName:"Microsoft team"},attendees:he,isOnlineMeeting:!0,onlineMeetingProvider:"teamsForBusiness"},{headers:{Authorization:"Bearer ".concat(ue.msAuthToken)}}).then((function(e){console.log(e),Te(e.data.onlineMeeting.joinUrl),oe(3);var t=e.data.onlineMeeting.joinUrl;u.a.post("https://edxvteam.com/api/discussion/v1/threads/",{course_id:De,raw_body:"[Team meeting][1] ".concat(V.toLocaleString()," - ").concat(ae.toLocaleTimeString()," \n\n [1]:").concat(t),type:"discussion",title:G,topic_id:B},{headers:{Authorization:"Bearer ".concat(me.edxToken)}}).then((function(e){console.log(e)}),(function(e){console.log(e)}))}),(function(e){console.log(e),oe(6)}))},class:"btn btn-default primary-button"},"Submit"),r.a.createElement("button",{type:"submit",onClick:Fe,class:"btn btn-default secondary-button"},"Cancel"))))))};var D=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],s=t[1],l=r.a.useContext(F),c=l.UserNameContext,m=l.EdxTokenContext;console.log(c.userName);var d=Object(i.f)();r.a.useEffect((function(){c.userName&&null!==c.userName&&void 0!==c.userName&&m.edxToken&&null!==m.edxToken&&void 0!==m.edxToken||d.push("/login?course",{path:"/CourseList"})}),[]),Object(n.useEffect)((function(){u.a.get("https://edxvteam.com/api/enrollment/v1/enrollment",{headers:{Authorization:"Bearer ".concat(m.edxToken)}}).then((function(e){console.log(e.data);var t=e.data;u.a.get("https://edxvteam.com/api/courses/v1/courses/").then((function(e){var a=e.data.results,n=[];a.map((function(e){t.forEach((function(t){e.id===t.course_details.course_id&&n.push(e)}))})),s(n)}),(function(e){s([{blocks_url:"https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AUniversityD%2BAI101%2B2020_T1",effort:"04:00",end:"2020-09-30T23:30:00Z",enrollment_start:"2020-08-15T00:00:00Z",enrollment_end:"2020-09-15T23:30:00Z",id:"course-v1:UniversityD+AI101+2020_T1",media:{course_image:{uri:"/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg"},course_video:{uri:null},image:{raw:"https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg",small:"https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg",large:"https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg"}},name:"Introduction to Artificial Intelligence",number:"AI101",org:"UniversityD",short_description:"Short Description of the course on Artificial Intelligence from UniversityD",start:"2020-09-01T00:00:00Z",start_display:"Sept. 1, 2020",start_type:"timestamp",pacing:"instructor",mobile_available:!1,hidden:!1,invitation_only:!1,course_id:"course-v1:UniversityD+AI101+2020_T1"},{blocks_url:"https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AedX%2BDemoX%2BDemo_Course",effort:null,end:"2021-06-04T23:30:00Z",enrollment_start:"2020-06-01T05:00:00Z",enrollment_end:"2021-06-04T23:30:00Z",id:"course-v1:edX+DemoX+Demo_Course",media:{course_image:{uri:"/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg"},course_video:{uri:null},image:{raw:"https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg",small:"https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg",large:"https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg"}},name:"Demonstration Course",number:"DemoX",org:"edX",short_description:"",start:"2020-06-01T05:00:00Z",start_display:"June 1, 2020",start_type:"timestamp",pacing:"instructor",mobile_available:!1,hidden:!1,invitation_only:!1,course_id:"course-v1:edX+DemoX+Demo_Course"}])}))}))}),[]);var p=a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("div",{class:"box-detail"},r.a.createElement("div",{class:"box-detail-top"},r.a.createElement("figure",null,r.a.createElement("img",{src:e.media.image.small,alt:e.name})),r.a.createElement("h4",null,e.org)),r.a.createElement("div",{class:"box-detail-bottom"},r.a.createElement("h5",null,e.name," "),r.a.createElement("span",{class:"space"}),r.a.createElement("p",{class:"name"},e.number," "),r.a.createElement("p",{class:"date"},e.start_display," ")),r.a.createElement("a",{onClick:function(){return function(e){console.log(e),d.push("/course?".concat(e.id),{course:e})}(e)},class:"button"},"View Course  ",r.a.createElement("i",{class:"fa fa-angle-right","aria-hidden":"true"}))))}));return r.a.createElement("div",null,r.a.createElement("div",{class:"main-content"},r.a.createElement("div",{class:"content-part"},r.a.createElement("div",{class:"container-fluid"},r.a.createElement("h3",{class:"heading-strip"}," Enrolled Courses"),r.a.createElement("div",{class:"box-1"},r.a.createElement("ul",null,p))))))},M=r.a.forwardRef((function(e,t){return r.a.createElement(S.a,Object.assign({direction:"up",ref:t},e))})),U=function(e){console.log(e);var t=Object(n.useState)([]),a=Object(o.a)(t,2),s=a[0],l=a[1],c=Object(n.useState)(""),m=Object(o.a)(c,2),d=(m[0],m[1],Object(n.useState)(!1)),p=Object(o.a)(d,2),g=p[0],E=p[1],h=Object(n.useState)(!1),f=Object(o.a)(h,2),v=f[0],b=f[1],S=Object(n.useState)([]),O=Object(o.a)(S,2),A=O[0],C=O[1],w=r.a.useContext(F),D=w.UserNameContext,U=w.EdxTokenContext,B=Object(n.useState)([]),L=Object(o.a)(B,2),I=L[0],P=L[1],R=window.location.hash,W=Object(n.useState)(""),z=Object(o.a)(W,2);z[0],z[1],Object(i.f)();D.userName;var X=R.split("?")[1];Object(n.useEffect)((function(){u.a.get("https://edxvteam.com/api/courses/v1/courses/".concat(X)).then((function(e){var t=e.data;l(t)})),console.log("Bearer ".concat(U.edxToken)),u.a.get("https://edxvteam.com/api/discussion/v1/threads/?"+N.stringify({course_id:X,text_search:"teams.microsoft.com"}),{headers:{Authorization:"Bearer ".concat(U.edxToken)}}).then((function(e){console.log(e);var t=e.data.results[0]?e.data.results[0]:"No meeting scheduled";C(t),t.id&&u.a.get("https://edxvteam.com/api/discussion/v1/comments/?thread_id="+t.id,{headers:{Authorization:"Bearer ".concat(U.edxToken)}}).then((function(e){var t=e.data.results[0]?e.data.results[0]:"No meeting scheduled";P(t),b(!(!t||!t.id))}))}),(function(e){console.log(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("div",{class:"main-content"},r.a.createElement("div",{class:"content-part"},r.a.createElement("div",{class:"container-fluid"},r.a.createElement("h3",{class:"heading-strip"}," Course Detail"),r.a.createElement("div",{class:"course-info-content"},r.a.createElement("div",{class:"course-header"},r.a.createElement("div",{class:"course-header-left"},r.a.createElement("h3",null,s.name," "),r.a.createElement("p",null,"Understand how the FDA regulates pharmaceuticals and explore debates on prescription drug costs, marketing, and testing. ")),r.a.createElement("div",{class:"course-header-right"})),r.a.createElement("div",{class:"course-middle"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("i",{className:"far fa-clock"}),"Length: ",r.a.createElement("strong",null,"8 Weeks "))),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("img",{src:"images/ico_meter.jpg"}),"Effort: ",r.a.createElement("strong",null,"2-5 Hours per week "))),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("img",{src:"images/ico_level.jpg"}),"Level: ",r.a.createElement("strong",null,"Beginner "))),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("img",{src:"images/ico_price.jpg"}),r.a.createElement("strong",null,"Enrolled"))))),r.a.createElement("div",{class:"course-bottom"},r.a.createElement("div",{class:"course-bottom-left"},r.a.createElement("h4",null,"About this course "),r.a.createElement("p",null,"Prescription drugs are among the most common health care interventions and have turnedsome once-fatal diseases into manageable conditions \u2014 but they have also been a growing source of controversy. Patients in the US struggle with increasing costs and express concerns about whymany conditions,such as Alzheimer\u2019s disease, remain without adequate therapeutic options. "),r.a.createElement("p",null,"At the center of these debates lies the US Food and Drug Administration (FDA), a federal agency responsible for monitoring the prescription drug marketplace and enforcing basic rules and laws that affect how prescription drugs are discovered, developed, and sold. "),r.a.createElement("p",null,"This course investigates the major issues affecting the regulatory approval and evidence-based use of prescription drugs. You willlearn the rules and regulationsg  "),r.a.createElement("a",{href:"#",class:"more-button"},r.a.createElement("img",{src:"images/more-icon.jpg"}),"More "),r.a.createElement("h4",null,"What you'll learn "),r.a.createElement("ul",null,r.a.createElement("li",null,"Key controversies over how prescription drugs are developed and marketed, and why those controversies exist "),r.a.createElement("li",null," The FDA \u2014 its history, public health role, and rules affecting prescription drugs in the US "),r.a.createElement("li",null," The process of discovering, testing, and approving innovative drugs, including various perspectives on the criteria used for drug approval "),r.a.createElement("li",null," The cost of prescription drugs, including the factors affecting a drug\u2019s market exclusivity period and the availability and use of affordable generic drugs "),r.a.createElement("li",null,"Safety evaluation of prescription drugs using \u201creal world\u201d data "),r.a.createElement("li",null," Current topics stirring debate over the scope of FDA regulation, such as dietary supplements, special classes of prescription drugs, and \u201cright to try\u201d lawsthat allow patients to obtain drugs prior to FDA ")),r.a.createElement("a",{href:"#",class:"more-button"},r.a.createElement("img",{src:"images/more-icon.jpg"}),"More "),r.a.createElement("h4",null,"Syllabus "),r.a.createElement("ul",null,r.a.createElement("li",null," ",r.a.createElement("strong",null,"Module 1:")," Overview and history of the FDA "),r.a.createElement("li",null,r.a.createElement("strong",null,"Module 2: ")," Drug development and approval "),r.a.createElement("li",null,r.a.createElement("strong",null," Module 3: ")," Drug pricing in the United States "),r.a.createElement("li",null,r.a.createElement("strong",null,"Module 4: "),"Marketing strategies "),r.a.createElement("li",null,r.a.createElement("strong",null,"Module 5: ")," Post-approval evaluation  "),r.a.createElement("li",null,r.a.createElement("strong",null," Module 6: ")," Emerging medical technologies ")),r.a.createElement("a",{href:"#",class:"more-button"},r.a.createElement("img",{src:"images/more-icon.jpg"}),"More "),r.a.createElement("h4",null,"Meet your instructors "),r.a.createElement("ul",{class:"meet-ul"},r.a.createElement("li",null,r.a.createElement("div",{class:"meet-img"},r.a.createElement("img",{src:"images/default_avatarpic.png"})),r.a.createElement("div",{class:"meet-text"}," ",r.a.createElement("a",{href:"#"},"Aaron Kesselheim "),r.a.createElement("p",null,"Professor of Medicine, Director of the Program On Regulation, Therapeutics, And Law, Brigham and Women's Hospital "),r.a.createElement("span",null,"Harvard University "))),r.a.createElement("li",null,r.a.createElement("div",{class:"meet-img"},r.a.createElement("img",{src:"images/default_avatarpic.png"})),r.a.createElement("div",{class:"meet-text"}," ",r.a.createElement("a",{href:"#"},"Aaron Kesselheim "),r.a.createElement("p",null,"Professor of Medicine, Director of the Program On Regulation, Therapeutics, And Law, Brigham and Women's Hospital "),r.a.createElement("span",null,"Harvard University "))),r.a.createElement("li",null,r.a.createElement("div",{class:"meet-img"},r.a.createElement("img",{src:"images/default_avatarpic.png"})),r.a.createElement("div",{class:"meet-text"}," ",r.a.createElement("a",{href:"#"},"Aaron Kesselheim "),r.a.createElement("p",null,"Professor of Medicine, Director of the Program On Regulation, Therapeutics, And Law, Brigham and Women's Hospital "),r.a.createElement("span",null,"Harvard University "))),r.a.createElement("li",null,r.a.createElement("div",{class:"meet-img"},r.a.createElement("img",{src:"images/default_avatarpic.png"})),r.a.createElement("div",{class:"meet-text"}," ",r.a.createElement("a",{href:"#"},"Aaron Kesselheim "),r.a.createElement("p",null,"Professor of Medicine, Director of the Program On Regulation, Therapeutics, And Law, Brigham and Women's Hospital "),r.a.createElement("span",null,"Harvard University "))))),r.a.createElement("div",{class:"course-bottom-right"},r.a.createElement("ul",{class:"list-group"},r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("img",{src:"images/ico_institute.jpg"}),"Meeting ",r.a.createElement("span",{dangerouslySetInnerHTML:{__html:"No meeting scheduled"!==A?A.rendered_body:A}})," ")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("img",{src:"images/ico_subject.jpg"}),"Recorded",r.a.createElement("span",null,v?r.a.createElement("span",{dangerouslySetInnerHTML:{__html:"No meeting scheduled"!==I?I.rendered_body:A}}):"-")," ")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("img",{src:"images/ico_institute.jpg"}),"Language:",r.a.createElement("span",null,"English")," ")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("img",{src:"images/ico_institute.jpg"}),"Video Transcript:",r.a.createElement("span",null,"English")," ")),r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("img",{src:"images/ico_video.jpg"}),"Course Type:",r.a.createElement("span",null,"Self-paced on your time")," "))),r.a.createElement("h4",null,"Share this course "),r.a.createElement("img",{src:"images/ico_share.jpg"}),r.a.createElement("h4",null,"Prerequisites "),r.a.createElement("p",null,"None "))))))),r.a.createElement(T.a,{open:g,TransitionComponent:M,keepMounted:!0,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(j.a,{id:"alert-dialog-slide-title"},"Post is successfull"),r.a.createElement(k.a,null,r.a.createElement(_.a,{id:"alert-dialog-slide-description"},"Recording is posted in the comments")),r.a.createElement(x.a,null,r.a.createElement(y.a,{onClick:function(){return E(!1)},color:"primary"},"Okay"))))};var B=function(){var e=r.a.useContext(F),t=e.UserNameContext,a=e.EdxTokenContext,n=(e.MsAuthTokenContext,Object(i.f)());r.a.useEffect((function(){t.userName&&null!==t.userName&&void 0!==t.userName&&a.edxToken&&null!==a.edxToken&&void 0!==a.edxToken||n.push("/login?assessment",{path:"/assessment"})}),[]);var s="Laxmi"===t.userName,l="Cristina"===t.userName?"Demo":"AI",o=!1,c="Demo"===l?"https://forms.office.com/Pages/ResponsePage.aspx?id=ULWMLnqAXE6BzmsGdAtt_v8yq2Ma9E5FhW7OrIb03ElUM1pBU0tPQzE3UDgwT1NKSFg3NTNTNEk4WC4u&embed=true":"AI"===l?"https://forms.office.com/Pages/ResponsePage.aspx?id=ULWMLnqAXE6BzmsGdAtt_v8yq2Ma9E5FhW7OrIb03ElUN1dLSUtRR0w0TE9GRFFDWlZSSk9YRDUwQy4u&embed=true":"No assessment",m=function(e){"Demo"===e&&window.open("https://forms.office.com/Pages/DesignPage.aspx?fragment=FormId%3DULWMLnqAXE6BzmsGdAtt_v8yq2Ma9E5FhW7OrIb03ElUM1pBU0tPQzE3UDgwT1NKSFg3NTNTNEk4WC4u%26Token%3D8b8e7de4eefd4cd8bddafb2dc02ccd74","_blank"),"AI"===e?window.open("https://forms.office.com/Pages/DesignPage.aspx?fragment=FormId%3DULWMLnqAXE6BzmsGdAtt_v8yq2Ma9E5FhW7OrIb03ElUN1dLSUtRR0w0TE9GRFFDWlZSSk9YRDUwQy4u%26Token%3Dbbe298a6eb6c4c7fa7990b5fe2be84d3","_blank"):o=!0},u=s?r.a.createElement("div",null,!o&&r.a.createElement("div",null,r.a.createElement("a",{onClick:function(){return m("AI")}},r.a.createElement("p",{className:"assessmentText"},"Artificial Intelligence Assessment")),r.a.createElement("a",{onClick:function(){return m("Demo")}},r.a.createElement("p",{className:"assessmentText"},"Demo Assessment"))),o?r.a.createElement("p",{className:"assessment"},"No assessment"):r.a.createElement("p",{className:"assessment"},"Assessment will be viewed in different tab")):"No assessment"===c?r.a.createElement("p",{className:"assessmentText"},"No assessment"):r.a.createElement("iframe",{title:l,src:c,frameBorder:"0",marginWidth:"0",marginHeight:"0",className:"assessmentFrame",allowFullScreen:!0}," ");return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",{className:"header"},"Assessment")),r.a.createElement("div",{className:"main"},u),r.a.createElement("footer",null," Powered By VTeamLabs Open edX"))},L=a(122),I=a.n(L),P=function(e){var t=window.location.hash,a=r.a.useContext(F),n=a.UserNameContext,s=a.EdxTokenContext,l=a.MsAuthTokenContext,o=Object(i.f)(),c=e&&e.location&&e.location.state&&(void 0!==e.location.state.path||null!==e.location.state.path)?e.location.state.path:"/baseform";c=t.includes("assessment")?"/assessment":t.includes("course")?"/CourseList":"/baseform";var m=function(e){u.a.get("https://edxvteam.com/api/user/v1/me",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){var t=e.data;n.setUserName(t.username),o.push(c)}),(function(e){console.log(e)}))};return r.a.createElement(I.a,{clientId:"c4e63d26-dcf1-4d0a-bac1-ae0bc5afca83",authCallback:function(e,t){try{var a=t.authResponseWithAccessToken,n=a.accessToken,r=a.account;console.log(r.userName),null!==n&&(l.setMsAuthToken(n),function(e,t){u.a.post("https://edxvteam.com/oauth2/exchange_access_token/azuread-oauth2/",N.stringify({client_id:"fJeK3hLJ93ldqFwyBZ2MhqXTTBO5dgNRwxLxN5T9",access_token:t}),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){s.setEdxToken(e.data.access_token),m(e.data.access_token)}),(function(e){console.log(e)}))}(0,n))}catch(o){console.log(o)}},redirectUri:"https://ankagr289.github.io/#/login",graphScopes:["Calendars.ReadWrite","Group.ReadWrite.All","user.read"]})},F=(a(236),r.a.createContext(null));var R=function(){var e=r.a.useState(""),t=Object(o.a)(e,2),a=t[0],n=t[1],s=r.a.useState(""),l=Object(o.a)(s,2),m=l[0],u=l[1],d=r.a.useState(""),p=Object(o.a)(d,2),g={userName:a,setUserName:n},E={edxToken:m,setEdxToken:u},h={msAuthToken:p[0],setMsAuthToken:p[1]};return r.a.createElement(c.a,null,r.a.createElement(F.Provider,{value:{UserNameContext:g,EdxTokenContext:E,MsAuthTokenContext:h}},r.a.createElement(c.b,{basename:"/"},r.a.createElement("div",null,r.a.createElement(i.b,{path:"/login",render:function(e){return r.a.createElement(P,e)}}),r.a.createElement(i.b,{exact:!0,path:"/baseform"},r.a.createElement(w,null)),r.a.createElement(i.b,{path:"/CourseList"},r.a.createElement(D,null)),r.a.createElement(i.b,{path:"/Course",render:function(e){return r.a.createElement(U,e)}}),r.a.createElement(i.b,{path:"/assessment"},r.a.createElement(B,null)),r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(i.a,{to:"/baseform"}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e,t,a){}},[[143,1,2]]]);
//# sourceMappingURL=main.de484d8e.chunk.js.map