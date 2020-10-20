// import React from 'react'

import CustomUserSearch from './customUserSearch.jsx'

export default class AgendaApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoaded: false, agendaItems: [] };
    }
    componentDidMount() {
        let formattedToday = new Date().toISOString().split('T')[0] + 'T00:00:00.000Z'
        let siteURL = _spPageContextInfo.siteAbsoluteUrl;
        let apiPath = siteURL + "/_api/web/lists/getbytitle('L''Agenda')/items?"
            + "&$select=Title,EventDate"
            + "&$Top=3&$orderby=EventDate asc"
            + "&$filter=EventDate ge datetime'" + formattedToday + "'";

        //console.log("api path ==> " + apiPath);
        let headers = {
            method: 'GET',
            credentials: 'include',
            headers: {
                Accept: "application/json;odata=verbose"
            },
            mode: 'cors',
            cache: 'default'
        };
        fetch(apiPath, headers)
            .then(
                res => res.json()
            ).then(
                (d) => {
                    // console.log('fetched data = ', d)
                    let agendaItemsResult = d.d.results;
                    // console.log('agendaItemsResult = ', agendaItemsResult)
                    this.setState({
                        isLoaded: true,
                        agendaItems: agendaItemsResult,
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: false,
                        error
                    });
                }
            )
    }
    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error(error, errorInfo);
    }
    render() {
        if (this.state.isLoaded) {
            return (
                <div className="containerItem agendaContainer">

                    <CustomUserSearch />

                    <div className="agendaApp agendaZone">
                        <h2 className="titreAgenda">Rendez-Vous</h2>
                        <ul className="agenda">
                            {this.state.agendaItems.map(rdv => <AgendaEvent key={rdv.__metadata.id} eventItem={rdv} />)}
                        </ul>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="agendaApp agendaZone containerItem">
                    <ul className="agenda">
                        <li className="rdv">chargement des rdv</li>
                    </ul>
                </div>
            )
        }
    }
}
function datetoISODate(dateObj) {
    var datetoformat = new Date(dateObj)
    return datetoformat.toLocaleDateString();
}

function AgendaEvent({ eventItem }) {

    return (
        <li className="rdv">
            <div className="innerRDV">
                <div className="dateRDV">{datetoISODate(eventItem.EventDate)}</div>
                <div className="titleRDV">{eventItem.Title}</div>
            </div>
        </li>
    );

}



// const domContainer = document.getElementById('agendaApp');
// ReactDOM.render(<AgendaApp title={'Rendez-Vous'} />, domContainer);