
import React from 'react'
import ReactDOM from 'react-dom'
import AppsMetierTopApp from './appsMetierTop.jsx'
import AgendaApp from './agenda.jsx'
import ActuTopApp from './actuTop.jsx'



function ConcertoHomeApp() {
    return (
        <React.Fragment>
            <AppsMetierTopApp />


            <AgendaApp />


            <ActuTopApp />
        </React.Fragment>
    );
}

const domContainer = document.getElementById('homeContainer');
ReactDOM.render(<ConcertoHomeApp title={'Concerto Home App'} />, domContainer);
