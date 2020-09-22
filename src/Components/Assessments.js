import React from 'react'
import '../App.css';

function Assessment() {
    const isStaff = false; // TODO - EDX API
    const assessementType = 'AI';
    let noAssessment = false;
    // NOTE - Hardcoded links for Demo Perspective
    const studentAssessmentLink = assessementType === 'Demo' ? 'https://forms.office.com/Pages/ResponsePage.aspx?id=ULWMLnqAXE6BzmsGdAtt_v8yq2Ma9E5FhW7OrIb03ElUM1pBU0tPQzE3UDgwT1NKSFg3NTNTNEk4WC4u&embed=true'
        : (assessementType === 'AI' ? 'https://forms.office.com/Pages/ResponsePage.aspx?id=ULWMLnqAXE6BzmsGdAtt_v8yq2Ma9E5FhW7OrIb03ElUN1dLSUtRR0w0TE9GRFFDWlZSSk9YRDUwQy4u&embed=true' : "No assessment");

    const redirectToFormsView = ((type) => {
        if (type.assessementType === 'Demo') {
            window.open('https://forms.office.com/Pages/DesignPage.aspx?fragment=FormId%3DULWMLnqAXE6BzmsGdAtt_v8yq2Ma9E5FhW7OrIb03ElUM1pBU0tPQzE3UDgwT1NKSFg3NTNTNEk4WC4u%26Token%3D8b8e7de4eefd4cd8bddafb2dc02ccd74', "_blank");
        }
        if (type.assessementType === 'AI') {
            window.open('https://forms.office.com/Pages/DesignPage.aspx?fragment=FormId%3DULWMLnqAXE6BzmsGdAtt_v8yq2Ma9E5FhW7OrIb03ElUN1dLSUtRR0w0TE9GRFFDWlZSSk9YRDUwQy4u%26Token%3Dbbe298a6eb6c4c7fa7990b5fe2be84d3', "_blank");
        }
        else {
            noAssessment = true;
        }
    })

    const assessement = isStaff ?
        <div>
            {!noAssessment && <a onClick={() => redirectToFormsView({ assessementType })}><p className="assessmentText">{"View Assessment"}</p></a>}
            {noAssessment ? <p className="assessmentText">{"No assessment"}</p> : <p>{"Assessment will be viewed in different tab"}</p>}
        </div>
        : studentAssessmentLink === "No assessment" ? <p className="assessmentText">{"No assessment"}</p> :
            <iframe title={assessementType} src={studentAssessmentLink} frameBorder="0" marginWidth="0" marginHeight="0" className="assessmentFrame" allowFullScreen> </iframe>

    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <p className="header">Assessment</p>
                </header>
                <div className="main">
                    {assessement}
                </div>
            </div>
        </div>
    )
}

export default Assessment
