
import React from 'react'
import ReactDOM from 'react-dom'


export default class AppsMetierTopApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoaded: false, appsMetierItems: [] };
    }
    componentDidMount() {
        let siteURL = _spPageContextInfo.siteAbsoluteUrl;
        let apiPath = siteURL + "/_api/web/lists/getbytitle('AppsMetier')/items?$select=Title,RMNGP_AppUrl,RMNGP_AppIco,RMNGP_AppOrder&$OrderBy=RMNGP_AppOrder&$Top=3";

        //console.log("api path ==> " + apiPath);
        let headers = {
            method: 'GET',
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
                    let appsMetierItemsResult = d.d.results;

                    // console.log('appsMetierItemsResult = ', appsMetierItemsResult)
                    this.setState({
                        isLoaded: true,
                        appsMetierItems: appsMetierItemsResult,
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.error(error)
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
                <div className="appMetierApp containerItem">
                    <ul className="cbs-List">
                        {this.state.appsMetierItems.map(app => <AppMetierTop key={app.__metadata.id} title={app.Title} appUrl={app.RMNGP_AppUrl.Url} imageUrl={app.RMNGP_AppIco.Url} />)}
                    </ul>
                </div>
            )
        } else {
            return (
                <div className="appMetierApp containerItem">
                    <ul className="cbs-List">
                        <li className="app_top">app1</li>
                        <li className="app_top">app2</li>
                        <li className="app_top">app3</li>
                    </ul>
                </div>
            )
        }
    }
}

function AppMetierTop(props) {
    return (
        <li className={props.title}>
            <div className="cbs-AppPictureContainer">
                <div className="cbs-AppPictureImageContainer">
                    <a className="cbs-pictureImgLink" target="_blank" href={props.appUrl}>
                        <img className="actuImage" src={props.imageUrl} alt={props.title} />
                    </a>
                </div>
            </div>
        </li>
    );
}

// const domContainer = document.getElementById('appsMetierTopApp');
// ReactDOM.render(<AppsMetierApp title={'Apps Metiers Top'} />, domContainer);