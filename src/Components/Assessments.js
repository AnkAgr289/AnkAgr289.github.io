import React from 'react'
import '../App.css';
import { UserDetailsContext } from '../App';
import { useHistory } from 'react-router-dom';

function Assessment() {
    const { UserNameContext, EdxTokenContext, MsAuthTokenContext } = React.useContext(UserDetailsContext);
    let history = useHistory();
    React.useEffect(() => {
        if (!UserNameContext.userName
            || UserNameContext.userName === null
            || UserNameContext.userName === undefined
            || !EdxTokenContext.edxToken
            || EdxTokenContext.edxToken === null
            || EdxTokenContext.edxToken === undefined) {
            history.push('/login', {path: '/assessment'});
        }
    }, []);

    const isStaff = UserNameContext.userName === "Laxmi" ? true : false; // TODO - EDX API
    console.log(UserNameContext.userName)
    const assessementType = UserNameContext.userName === "Cristina" ? 'Demo' : 'AI';
    console.log(assessementType)
    let noAssessment = false;
    // NOTE - Hardcoded links for Demo Perspective
    const studentAssessmentLink = assessementType === 'Demo' ? 'https://forms.office.com/Pages/ResponsePage.aspx?id=ULWMLnqAXE6BzmsGdAtt_v8yq2Ma9E5FhW7OrIb03ElUM1pBU0tPQzE3UDgwT1NKSFg3NTNTNEk4WC4u&embed=true'
        : (assessementType === 'AI' ? 'https://forms.office.com/Pages/ResponsePage.aspx?id=ULWMLnqAXE6BzmsGdAtt_v8yq2Ma9E5FhW7OrIb03ElUN1dLSUtRR0w0TE9GRFFDWlZSSk9YRDUwQy4u&embed=true' : "No assessment");

    const redirectToFormsView = ((type) => {
        if (type === 'Demo') {
            window.open('https://forms.office.com/Pages/DesignPage.aspx?fragment=FormId%3DULWMLnqAXE6BzmsGdAtt_v8yq2Ma9E5FhW7OrIb03ElUM1pBU0tPQzE3UDgwT1NKSFg3NTNTNEk4WC4u%26Token%3D8b8e7de4eefd4cd8bddafb2dc02ccd74', "_blank");
        }
        if (type === 'AI') {
            window.open('https://forms.office.com/Pages/DesignPage.aspx?fragment=FormId%3DULWMLnqAXE6BzmsGdAtt_v8yq2Ma9E5FhW7OrIb03ElUN1dLSUtRR0w0TE9GRFFDWlZSSk9YRDUwQy4u%26Token%3Dbbe298a6eb6c4c7fa7990b5fe2be84d3', "_blank");
        }
        else {
            noAssessment = true;
        }
    })

    const assessement = isStaff ?
        <div>
            {!noAssessment && 
            <div>
            <a onClick={() => redirectToFormsView("AI" )}><p className="assessmentText">{"Artificial Intelligence Assessment"}</p></a>
            <a onClick={() => redirectToFormsView("Demo")}><p className="assessmentText">{"Demo Assessment"}</p></a>
            </div>}
            {noAssessment ? <p className="assessment">{"No assessment"}</p> : <p className="assessment">{"Assessment will be viewed in different tab"}</p>}
        </div>
        : studentAssessmentLink === "No assessment" ? <p className="assessmentText">{"No assessment"}</p> :
            <iframe title={assessementType} src={studentAssessmentLink} frameBorder="0" marginWidth="0" marginHeight="0" className="assessmentFrame" allowFullScreen> </iframe>

    return (
        <div className="App">
            <header className="App-header">
                <p className="header">Assessment</p>
            </header>
            <div className="main">
                {assessement}
            </div>
            <footer> Powered By VTeamLabs Open edX</footer>
        </div>
    )
}

export default Assessment
