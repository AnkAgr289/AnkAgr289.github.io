(this["webpackJsonpbase-app"]=this["webpackJsonpbase-app"]||[]).push([[0],{117:function(e,t,a){},141:function(e,t,a){e.exports=a(235)},146:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),c=a.n(s),o=(a(146),a(9)),i=a(45),l=a(16),m=(a(88),a(31)),d=a.n(m),u=a(19),p=a(283),v=a(286),g=a(76),h=a(55),E=a.n(h),b=a(284),f=a(74),y=a.n(f),N=a(56),_=a(42),k=a(281),T=a(288),j=a(280),S=a(278),O=a(279),x=a(277),A=a(271),C=a(118),D=a.n(C),U=r.a.forwardRef((function(e,t){return r.a.createElement(A.a,Object.assign({direction:"up",ref:t},e))}));var w=function(){var e=r.a.useState(!1),t=Object(o.a)(e,2),a=(t[0],t[1]),s=Object(n.useState)(""),c=Object(o.a)(s,2),i=c[0],m=c[1],h=Object(n.useState)(""),f=Object(o.a)(h,2),y=f[0],A=f[1],C=Object(n.useState)([]),w=Object(o.a)(C,2),I=w[0],B=w[1],R=Object(n.useState)(""),X=Object(o.a)(R,2),L=X[0],Z=X[1],P=Object(n.useState)(E()().toDate()),z=Object(o.a)(P,2),F=z[0],W=z[1],H=Object(n.useState)(E()().toDate()),q=Object(o.a)(H,2),G=q[0],J=q[1],V=Object(n.useState)(""),Y=Object(o.a)(V,2),K=(Y[0],Y[1],Object(n.useState)({})),Q=Object(o.a)(K,2),$=(Q[0],Q[1],Object(n.useState)(0)),ee=Object(o.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(""),re=Object(o.a)(ne,2),se=(re[0],re[1],r.a.useContext(M)),ce=se.UserNameContext,oe=se.EdxTokenContext,ie=se.MsAuthTokenContext,le=Object(n.useState)({}),me=Object(o.a)(le,2),de=(me[0],me[1],Object(n.useState)([0])),ue=Object(o.a)(de,2),pe=ue[0],ve=ue[1],ge=Object(n.useState)(""),he=Object(o.a)(ge,2),Ee=he[0],be=he[1],fe=Object(n.useState)(""),ye=Object(o.a)(fe,2),Ne=ye[0],_e=ye[1],ke=Object(n.useState)(!1),Te=Object(o.a)(ke,2),je=Te[0],Se=Te[1],Oe=(r.a.createRef(),r.a.createRef(),Object(n.useState)([""])),xe=Object(o.a)(Oe,2),Ae=xe[0],Ce=xe[1],De=Object(l.f)();Object(n.useEffect)((function(){ce.userName&&null!==ce.userName&&void 0!==ce.userName&&oe.edxToken&&null!==oe.edxToken&&void 0!==oe.edxToken||De.push("/login"),d.a.get("https://edxvteam.com/api/courses/v1/courses").then((function(e){Ce(e.data.results)}),(function(e){ae(6)}))}),[]);var Ue=function(){m(""),A(""),_e(""),ae(0)};return 6===te?r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",{className:"header"},"Error")),r.a.createElement("div",{className:"main"},r.a.createElement("p",{className:"TextTitle"},"A network error occured, try again"),r.a.createElement("div",{className:"HorizontalDivision"},r.a.createElement(_.PrimaryButton,{onClick:Ue,variant:"contained",color:"primary",style:{margin:30}},"Try Again")))):3===te?r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",{className:"header"},"Scheduled Class")),r.a.createElement("div",{className:"main"},r.a.createElement("p",{className:"TextTitle"},"The class for '",i,"' - '",y,"' was successfully scheduled "),r.a.createElement("p",{style:{marginTop:0}},F.toString()," to ",G.toString()),r.a.createElement("p",null,r.a.createElement("a",{ref:function(e){return e},id:"joinlink",className:"TextTitle",value:Ee,onClick:function(e){D()(Ee),Se(!0)}},"Team meeting link")),r.a.createElement("div",null,r.a.createElement("p",{className:"TextTitle"},"Following enrolled users have been invited:"),pe.map((function(e){return r.a.createElement("p",{key:e.emailAddress},e.emailAddress.name)}))),r.a.createElement("div",{className:"HorizontalDivision"},r.a.createElement(_.PrimaryButton,{onClick:Ue,variant:"contained",color:"primary",style:{margin:30}},"Schedule another Class"))),r.a.createElement(T.a,{open:je,TransitionComponent:U,keepMounted:!0,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(x.a,{id:"alert-dialog-slide-title"},"Link Copied!"),r.a.createElement(S.a,null,r.a.createElement(O.a,{id:"alert-dialog-slide-description"},"The link has been copied to your clipboard")),r.a.createElement(j.a,null,r.a.createElement(k.a,{onClick:function(){return Se(!1)},color:"primary"},"Okay")))):r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",{className:"header"},"Schedule a class")),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"Division"},r.a.createElement(b.a,{type:"text",label:"Enter the meeting title",variant:"outlined",onChange:function(e){Z(e.target.value)},style:{backgroundColor:"rgba(255,255,255,0.9)",borderRadius:1e4,borderWidth:5,borderColor:"black"}})),r.a.createElement("div",{className:"HorizontalDivision"},r.a.createElement("div",{className:"AnotherDivision"},r.a.createElement("p",{className:"TextTitle"},"From"),r.a.createElement(u.a,{utils:g.a},r.a.createElement(p.a,{variant:"dialog",onChange:function(e){W(e.toDate())},value:F,disablePast:!0,style:{width:"15vw"}}))),r.a.createElement("div",{className:"AnotherDivision"},r.a.createElement("p",{className:"TextTitle"},"To"),r.a.createElement(u.a,{utils:g.a},r.a.createElement(p.a,{variant:"dialog",minDate:F,value:G,onChange:function(e){J(e.toDate())},style:{width:"15vw",alignContent:"center"}})))),r.a.createElement("div",{className:"Division"},r.a.createElement(v.a,{options:Ae,getOptionLabel:function(e){return e.name},style:{width:"100%",margin:0,alignSelf:"center"},onChange:function(e,t){var a={};m(t.name),d.a.get("https://edxvteam.com/api/enrollment/v1/enrollments?"+N.stringify({course_id:t.course_id}),{headers:{Authorization:"Bearer ".concat(oe.edxToken)}}).then((function(e){if(void 0!==e.data.results){var t=e.data.results,a=[];t.forEach((function(e){a.push(e.user)}));var n="";a.forEach((function(e,t,r){t<a.length-1?n=n+e+",":n+=e})),d.a.get("https://edxvteam.com/api/user/v1/accounts?username="+n,{headers:{Authorization:"Bearer ".concat(oe.edxToken)}}).then((function(e){var t=e.data,a=[];t.forEach((function(e,t,n){a.push({emailAddress:{address:e.email,name:e.name},type:"required"})})),ve(a)}),(function(e){ae(6)}))}}),(function(e){ae(6)})),d.a.get("https://edxvteam.com/api/courses/v1/blocks/?"+N.stringify({course_id:t.course_id,depth:"all",username:ce.userName,block_types_filter:"discussion"}),{headers:{Authorization:"Bearer ".concat(oe.edxToken)}}).then((function(e){if(void 0!==e.data.blocks){var t=[];a=e.data.blocks,Object.entries(a).forEach((function(e){void 0!==e[1].display_name&&""!==e[1].display_name&&t.push(e[1])})),B(t)}}),(function(e){ae(6)}))},renderInput:function(e){return r.a.createElement(b.a,Object.assign({},e,{label:"Select the course",variant:"outlined"}))}})),r.a.createElement("div",{className:"Division"},r.a.createElement(v.a,{options:I,getOptionLabel:function(e){return e.display_name},style:{width:"100%",margin:0,alignSelf:"center"},onInputChange:function(e,t){return A(t)},renderInput:function(e){return r.a.createElement(b.a,Object.assign({},e,{label:"Select course unit",variant:"outlined"}))}})),r.a.createElement("div",{className:"Division"},r.a.createElement(b.a,{type:"text",label:"Enter additional description",variant:"outlined",onChange:function(e){_e(e.target.value)},style:{backgroundColor:"rgba(255,255,255,0.9)",borderRadius:1e4,borderWidth:5,borderColor:"black"}})),r.a.createElement("div",{className:"HorizontalDivision"},r.a.createElement(_.SecondaryButton,{onClick:Ue,variant:"contained",color:"secondary",style:{margin:30}},"Cancel"),r.a.createElement(_.PrimaryButton,{onClick:function(){a(!0);var e=F.getFullYear(),t=(F.getMonth()+1).toString().padStart(2,"0"),n=F.getDate().toString().padStart(2,"0"),r=F.getHours().toString().padStart(2,"0"),s=F.getMinutes().toString().padStart(2,"0"),c=G.getFullYear(),o=(G.getMonth()+1).toString().padStart(2,"0"),l=G.getDate().toString().padStart(2,"0"),m=G.getHours().toString().padStart(2,"0"),u=G.getMinutes().toString().padStart(2,"0");d.a.post("https://graph.microsoft.com/v1.0/groups/48c4a928-f625-4837-90cc-4181c8b9191c/events",{subject:L,body:{contentType:"HTML",content:i+" "+y+"\n"+Ne},start:{dateTime:"".concat(e,"-").concat(t,"-").concat(n,"T").concat(r,":").concat(s,":00"),timeZone:"India Standard Time"},end:{dateTime:"".concat(c,"-").concat(o,"-").concat(l,"T").concat(m,":").concat(u,":00"),timeZone:"India Standard Time"},location:{displayName:"Microsoft team"},attendees:pe,isOnlineMeeting:!0,onlineMeetingProvider:"teamsForBusiness"},{headers:{Authorization:"Bearer ".concat(ie.msAuthToken)}}).then((function(e){a(!1),console.log(e),be(e.data.onlineMeeting.joinUrl),ae(3)}),(function(e){console.log(e),ae(6)}))},variant:"contained",color:"primary",style:{margin:30}},"Submit"))),r.a.createElement("footer",null," Powered By VTeamLabs Open edX"))};a(117);var I=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],s=t[1],c=r.a.useContext(M),i=(c.UserNameContext,c.ExpiryContext,Object(l.f)());Object(n.useEffect)((function(){d.a.get("https://edxvteam.com/api/courses/v1/courses/").then((function(e){var t=e.data.results;s(t)}),(function(e){s([{blocks_url:"https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AUniversityD%2BAI101%2B2020_T1",effort:"04:00",end:"2020-09-30T23:30:00Z",enrollment_start:"2020-08-15T00:00:00Z",enrollment_end:"2020-09-15T23:30:00Z",id:"course-v1:UniversityD+AI101+2020_T1",media:{course_image:{uri:"/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg"},course_video:{uri:null},image:{raw:"https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg",small:"https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg",large:"https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg"}},name:"Introduction to Artificial Intelligence",number:"AI101",org:"UniversityD",short_description:"Short Description of the course on Artificial Intelligence from UniversityD",start:"2020-09-01T00:00:00Z",start_display:"Sept. 1, 2020",start_type:"timestamp",pacing:"instructor",mobile_available:!1,hidden:!1,invitation_only:!1,course_id:"course-v1:UniversityD+AI101+2020_T1"},{blocks_url:"https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AedX%2BDemoX%2BDemo_Course",effort:null,end:"2021-06-04T23:30:00Z",enrollment_start:"2020-06-01T05:00:00Z",enrollment_end:"2021-06-04T23:30:00Z",id:"course-v1:edX+DemoX+Demo_Course",media:{course_image:{uri:"/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg"},course_video:{uri:null},image:{raw:"https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg",small:"https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg",large:"https://edxvteam.com/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg"}},name:"Demonstration Course",number:"DemoX",org:"edX",short_description:"",start:"2020-06-01T05:00:00Z",start_display:"June 1, 2020",start_type:"timestamp",pacing:"instructor",mobile_available:!1,hidden:!1,invitation_only:!1,course_id:"course-v1:edX+DemoX+Demo_Course"}])}))}),[]);var m=a.map((function(e){return r.a.createElement("li",{key:e.id,className:"courses-listing-item"},r.a.createElement("article",{className:"course",id:"course-v1:UniversityD+AI101+2020_T1",role:"region","aria-label":"Introduction to Artificial Intelligence"},r.a.createElement("div",{onClick:function(){return function(e){console.log(e),i.push("/course",{course:e})}(e)}},r.a.createElement("header",{className:"course-image"},r.a.createElement("div",{className:"cover-image"},r.a.createElement("img",{src:e.media.image.small,alt:e.name}),r.a.createElement("div",{className:"learn-more","aria-hidden":"true"},"LEARN MORE"))),r.a.createElement("div",{className:"course-info","aria-hidden":"true"},r.a.createElement("h2",{className:"course-name"},r.a.createElement("span",{className:"course-organization"},e.org),r.a.createElement("span",{className:"course-code"},e.number),r.a.createElement("span",{className:"course-title"},r.a.createElement("a",{href:"https://edxvteam.com/courses/".concat(e.course_id,"/about")},e.name))),r.a.createElement("div",{className:"course-date localized_datetime","aria-hidden":"true","data-format":"shortDate","data-datetime":"2020-09-01T00:00:00+0000","data-language":"en","data-string":"Starts: {date}"},e.start_display)))))}));return r.a.createElement("div",null,r.a.createElement("div",{className:"content-wrapper main-container",id:"content",dir:"ltr"},r.a.createElement("main",{id:"main","aria-label":"Content"},r.a.createElement("section",{className:"find-courses"},r.a.createElement("section",{className:"courses-container"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",{className:"header"},"Enrolled Courses")),r.a.createElement("div",{className:"courses no-course-discovery",role:"region","aria-label":"List of Courses"},r.a.createElement("ul",{style:{margin:"0 30vh"},className:"courses-listing courses-list"},m)))))),r.a.createElement("footer",null," Powered By VTeamLabs Open edX"))},B=function(e){console.log(e);var t=e&&e.location&&e.location.state&&(void 0!==e.location.state.course||null!==e.location.state.course)?e.location.state.course:{blocks_url:"https://edxvteam.com/api/courses/v1/blocks/?course_id=course-v1%3AUniversityD%2BAI101%2B2020_T1",effort:"04:00",end:"2020-09-30T23:30:00Z",enrollment_start:"2020-08-15T00:00:00Z",enrollment_end:"2020-09-15T23:30:00Z",id:"course-v1:UniversityD+AI101+2020_T1",media:{course_image:{uri:"/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg"},course_video:{uri:null},image:{raw:"https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg",small:"https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg",large:"https://edxvteam.com/asset-v1:UniversityD+AI101+2020_T1+type@asset+block@11276.jpg"}},name:"Introduction to Artificial Intelligence",number:"AI101",org:"UniversityD",short_description:"Short Description of the course on Artificial Intelligence from UniversityD",start:"2020-09-01T00:00:00Z",start_display:"Sept. 1, 2020",start_type:"timestamp",pacing:"instructor",mobile_available:!1,hidden:!1,invitation_only:!1,course_id:"course-v1:UniversityD+AI101+2020_T1"},a=Object(n.useState)(""),s=Object(o.a)(a,2),c=(s[0],s[1],Object(l.f)());Object(n.useEffect)((function(){}),[]);return r.a.createElement("div",null,r.a.createElement("div",{className:"content-wrapper main-container",id:"content",dir:"ltr"},r.a.createElement("main",{id:"main","aria-label":"Content"},r.a.createElement("section",{className:"find-courses"},r.a.createElement("section",{className:"courses-container"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",{className:"header"},"Course Detail")),r.a.createElement("div",{className:"courses no-course-discovery",role:"region","aria-label":"List of Courses"},r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"grid-item"},"Course organization"),r.a.createElement("div",{className:"grid-item"}," - "),r.a.createElement("div",{className:"grid-item"},t.org),r.a.createElement("div",{className:"grid-item"},"Course code"),r.a.createElement("div",{className:"grid-item"}," - "),r.a.createElement("div",{className:"grid-item"},t.number),r.a.createElement("div",{className:"grid-item"},"Course title"),r.a.createElement("div",{className:"grid-item"}," - "),r.a.createElement("div",{className:"grid-item"},r.a.createElement("a",{href:"https://edxvteam.com/courses/".concat(t.course_id,"/about")},t.name)),r.a.createElement("div",{className:"grid-item"},"Scheduled meet"),r.a.createElement("div",{className:"grid-item"}," - "),r.a.createElement("div",{className:"grid-item"},r.a.createElement("a",{href:"#"},"Join URL to be fetched")),r.a.createElement("div",{className:"grid-item"},"Recorded"),r.a.createElement("div",{className:"grid-item"}," - "),r.a.createElement("div",{className:"grid-item"},r.a.createElement("a",{href:"#"},"Stream link"))),r.a.createElement("div",{className:"HorizontalDivision"},r.a.createElement(_.SecondaryButton,{onClick:function(){c.push({pathname:"/courseList"})},variant:"contained",color:"secondary",style:{margin:30}},"Back")," ")))))),r.a.createElement("footer",null," Powered By VTeamLabs Open edX"))};var R=function(){var e="https://forms.office.com/Pages/ResponsePage.aspx?id=ULWMLnqAXE6BzmsGdAtt_v8yq2Ma9E5FhW7OrIb03ElUN1dLSUtRR0w0TE9GRFFDWlZSSk9YRDUwQy4u&embed=true",t=r.a.createElement("iframe",{title:"AI",src:e,frameBorder:"0",marginWidth:"0",marginHeight:"0",className:"assessmentFrame",allowFullScreen:!0}," ");return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",{className:"header"},"Assessment")),r.a.createElement("div",{className:"main"},t),r.a.createElement("footer",null," Powered By VTeamLabs Open edX"))},X=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),s=a[0],c=a[1],i=r.a.useContext(M),m=i.UserNameContext,u=i.EdxTokenContext,p=i.MsAuthTokenContext,v=Object(l.f)();return r.a.createElement(y.a,{clientId:"c4e63d26-dcf1-4d0a-bac1-ae0bc5afca83",authCallback:function(e,t){try{var a=t.authResponseWithAccessToken,n=a.accessToken,r=a.account;console.log(r.userName),null!==n&&(p.setMsAuthToken(n),function(e){d.a.post("https://edxvteam.com/oauth2/access_token",N.stringify({grant_type:"client_credentials",client_id:"8vD6pKAbjTfgdEtNAKqdUwu0X6Ps574kyBh94Om0",client_secret:"ERRuuGZPMsEy8hjBHjFaMZsmDR3SRhXndOjgoiqEseor1p18kktkHSdUExFNFoKlTdWrmrtz2Oc0NyVa9fNASLuckPPRJY0uCXwkg7yEbRfUg8e0rfGetaGt7tuqUqRo",token_type:"Bearer"}),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(t){u.setEdxToken(t.data.access_token),c(t.data.access_token),console.log(s),d.a.get("https://edxvteam.com/api/user/v1/accounts?email="+e.userName,{headers:{Authorization:"Bearer ".concat(t.data.access_token)}}).then((function(e){var t=e.data[0];m.setUserName(t.username),v.push("/baseform")}),(function(e){console.log(e)}))}),(function(e){console.log(e)}))}(r))}catch(o){console.log(o)}},redirectUri:"http://ankagr289.github.io/baseform",graphScopes:["Calendars.ReadWrite","Group.ReadWrite.All"]})},M=r.a.createContext(null);var L=function(){var e=r.a.useState(""),t=Object(o.a)(e,2),a=t[0],n=t[1],s=r.a.useState(""),c=Object(o.a)(s,2),m=c[0],d=c[1],u=r.a.useState(""),p=Object(o.a)(u,2),v={userName:a,setUserName:n},g={edxToken:m,setEdxToken:d},h={msAuthToken:p[0],setMsAuthToken:p[1]};return r.a.createElement(i.a,null,r.a.createElement(M.Provider,{value:{UserNameContext:v,EdxTokenContext:g,MsAuthTokenContext:h}},r.a.createElement(i.b,{basename:"/"},r.a.createElement(l.b,{exact:!0,path:"/login"},r.a.createElement(X,null)),r.a.createElement(l.b,{exact:!0,path:"/baseform"},r.a.createElement(w,null)),r.a.createElement(l.b,{path:"/CourseList"},r.a.createElement(I,null)),r.a.createElement(l.b,{path:"/Course",render:function(e){return r.a.createElement(B,e)}}),r.a.createElement(l.b,{path:"/assessment"},r.a.createElement(R,null)),r.a.createElement(l.b,{exact:!0,path:"/"},r.a.createElement(l.a,{to:"/baseform"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){}},[[141,1,2]]]);
//# sourceMappingURL=main.48376a3e.chunk.js.map