
// import React from 'react'


export default class ActuTopApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoaded: false, actuTopItems: [] };
    }
    componentDidMount() {
        this.SearchArticles()
    }

    SearchArticles() {

        // SharePoint Search Query avec site ID
        var searchQuery = {
            request: {
                Querytext: "*",
                QueryTemplate: "RMNGPActuPublieeOWSCHCS=Oui RefinableString20=1 RefinableString20=2 RefinableString20=3 SPSiteURL:{" + _spPageContextInfo.siteAbsoluteUrl + "} ContentTypeId:0x010100C568DB52D9D0A14D9B2FDCC96666E9F2007948130EC3DB064584E219954237AF39007483F22811764DF48BDCDCB47DA0AE7F*'",
                RowLimit: 3,
                TrimDuplicates: false,
                SelectProperties: ['Path', 'Url', 'Title', 'SPSiteURL', 'UniqueId', 'Author', 'SiteID', 'PublishingImageCaptionOWSHTML', 'RMNGPActuSousTitreOWSMTXT', 'PublishingImage', 'PublishingRollupImage', 'ArticleStartDate'],
                SortList: [{
                    Property: 'RefinableString20', // 1,2 ou 3
                    Direction: 0
                }, {
                    Property: 'ArticleStartDate',
                    Direction: 1
                }]
            }
        }
        // console.log(searchQuery)
        // Request Body
        var postQuery = {
            /* static part of the query*/
            method: 'POST',
            credentials: 'include',
            url: "/_api/search/postquery",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "X-RequestDigest": document.getElementById("__REQUESTDIGEST").value
            },
            /* /static part of the query*/

            // search query
            body: JSON.stringify(searchQuery)
        }


        // req 2 recherche des actualités avec le bon site ID
        fetch(postQuery.url, postQuery)
            .then(
                res => res.json()
            ).then(
                (d) => {
                    // console.log('fetched data = ', d)
                    let actuTopItemsResult = d.PrimaryQueryResult.RelevantResults.Table.Rows;

                    // console.log('actuTopItemsResult = ', actuTopItemsResult)
                    this.setState({
                        actuTopItems: actuTopItemsResult,
                        isLoaded: true
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        // isLoaded: false,
                        error
                    });
                }
            )
    }


    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error(error, errorInfo);
    }

    handleRedirectToAllActu(e) {

        e.preventDefault();
        // Make sure this location matches your site structure
        let location = "actualites/Pages/actualites.aspx";
        window.location.href = _spPageContextInfo.siteAbsoluteUrl + _spPageContextInfo.siteServerRelativeUrl + location;
        return;
    }
    render() {
        function getValueByKey(actuItem, key) {
            let cell = actuItem.Cells.find(actu => actu.Key === key)
            if (cell) return cell.Value;
        }
        if (this.state.isLoaded) {
            return (
                <div className="actuTopApp">
                    <div className="containerItem actuTopContainer">
                        {this.state.actuTopItems.map(topActu =>
                            <ActuTop
                                key={getValueByKey(topActu, "UniqueId")}
                                titre={getValueByKey(topActu, "Title")}
                                soustitre={getValueByKey(topActu, "RMNGPActuSousTitreOWSMTXT")}
                                path={getValueByKey(topActu, "Path")}
                                publishingImage={getValueByKey(topActu, "PublishingImage")}
                                publishingRollupImage={getValueByKey(topActu, "PublishingRollupImage")}
                                legende={getValueByKey(topActu, "PublishingImageCaptionOWSHTML")}
                            />
                        )}
                    </div>
                    <div className="seeMoreActus">
                        <button onClick={this.handleRedirectToAllActu.bind(this)}>Plus d'actualités</button>
                    </div>
                </div>
            )
        }
        else {
            return <div className="">chargement des actualités</div>
        }
    }
}

function ActuTop(props) {

    return (
        <div className="actu cbs-pictureOnTopContainer">
            <a href={props.path}>
                <div className="actuImage" dangerouslySetInnerHTML={{ __html: props.publishingRollupImage }} />
                <h2 className="cbs-articleOnTopLine1">{props.titre}</h2>
                <h3 className="cbs-articleLine2">{props.soustitre}</h3>
            </a>
        </div>
    );

}

function datetoISODate(dateObj) {
    var datetoformat = new Date(dateObj)
    return datetoformat.toLocaleDateString();
}


// const domContainer = document.getElementById('actuTopApp');
// ReactDOM.render(<ActuTopApp title={'Top Actualités'} />, domContainer);