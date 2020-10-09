
import React from 'react'
import ReactDOM from 'react-dom'


//let footerItemsResult = [];//[{ "__metadata": { "id": "cdb6e170 - f38d - 48b7 - bf1d - 67e57f105147", "uri": "http://srvsp16/_api/Web/Lists(guid'e7081327-e380-400a-9f23-28b325500546')/Items(1)", "etag": "\"1\"", "type": "SP.Data.LinksFooterListItem" }, "Title": "GP", "RMNGP_LinkFooterContent": "<a>Grand Palais</a>", "RMNGP_LinkFooterColonne": "Institutions", "RMNGP_LinkFooterPosCol": "1" }, { "__metadata": { "id": "b156b7e0-ca22-42f8-98a8-8fc2fca6b097", "uri": "http://srvsp16/_api/Web/Lists(guid'e7081327-e380-400a-9f23-28b325500546')/Items(2)", "etag": "\"1\"", "type": "SP.Data.LinksFooterListItem" }, "Title": "RMNGP", "RMNGP_LinkFooterContent": "<a>RMNGP</a>", "RMNGP_LinkFooterColonne": "Institutions", "RMNGP_LinkFooterPosCol": "2" }, { "__metadata": { "id": "1ea37ee8-727d-4ee1-92d9-8d349182bf1d", "uri": "http://srvsp16/_api/Web/Lists(guid'e7081327-e380-400a-9f23-28b325500546')/Items(3)", "etag": "\"1\"", "type": "SP.Data.LinksFooterListItem" }, "Title": "Billetterie", "RMNGP_LinkFooterContent": "<a>Billetterie</a>", "RMNGP_LinkFooterColonne": "Institutions", "RMNGP_LinkFooterPosCol": "3" }, { "__metadata": { "id": "dc2f5974-d872-4a46-8399-760b1053ee40", "uri": "http://srvsp16/_api/Web/Lists(guid'e7081327-e380-400a-9f23-28b325500546')/Items(4)", "etag": "\"1\"", "type": "SP.Data.LinksFooterListItem" }, "Title": "Cours histoire d'art", "RMNGP_LinkFooterContent": "<a>Cours histoire d'art</a>", "RMNGP_LinkFooterColonne": "éducation", "RMNGP_LinkFooterPosCol": "1" }, { "__metadata": { "id": "77defb64-2f6f-4cd5-a7ca-41f33ac9c591", "uri": "http://srvsp16/_api/Web/Lists(guid'e7081327-e380-400a-9f23-28b325500546')/Items(5)", "etag": "\"1\"", "type": "SP.Data.LinksFooterListItem" }, "Title": "Panorama de l'art", "RMNGP_LinkFooterContent": "<a>Panorama de l'art</a>", "RMNGP_LinkFooterColonne": "éducation", "RMNGP_LinkFooterPosCol": "2" }, { "__metadata": { "id": "508817f5-cfe8-46b6-a7a9-35eb1d32a9f6", "uri": "http://srvsp16/_api/Web/Lists(guid'e7081327-e380-400a-9f23-28b325500546')/Items(6)", "etag": "\"1\"", "type": "SP.Data.LinksFooterListItem" }, "Title": "Boutique en ligne", "RMNGP_LinkFooterContent": "<a>boutique en ligne</a>", "RMNGP_LinkFooterColonne": "sites commerciaux", "RMNGP_LinkFooterPosCol": "1" }, { "__metadata": { "id": "e8a0e349-2f0c-4027-b769-6d48efc49cf0", "uri": "http://srvsp16/_api/Web/Lists(guid'e7081327-e380-400a-9f23-28b325500546')/Items(7)", "etag": "\"1\"", "type": "SP.Data.LinksFooterListItem" }, "Title": "Agence photographique", "RMNGP_LinkFooterContent": "<a>Agence photographique</a>", "RMNGP_LinkFooterColonne": "sites commerciaux", "RMNGP_LinkFooterPosCol": "2" }];

//let categories = []; // footerItemsResult.map(item => item.RMNGP_LinkFooterColonne).filter(function (v, i, a) {
//     return a.indexOf(v) === i
// });

// categories = ['Institutions', 'éducation', 'sites commerciaux'];

class FooterApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoaded: false, footerItems: [], categories: [] };
    }
    componentDidMount() {

        let headers = {
            method: 'GET',
            headers: {
                Accept: "application/json;odata=verbose"
            },
            mode: 'cors',
            cache: 'default'
        };

        let siteURL = _spPageContextInfo.siteAbsoluteUrl;
        let apiPath = siteURL + "/_api/web/lists/getbytitle('linksfooter')/items?$select=Title,RMNGP_LinkFooterColonne,RMNGP_LinkFooterContent,RMNGP_LinkFooterPosCol";

        fetch(apiPath, headers)
            .then(
                res => res.json()
            ).then(
                (d) => {
                    // console.log('fetched data = ', d)
                    let footerItemsResult = d.d.results;
                    let categories = footerItemsResult.map(item => item.RMNGP_LinkFooterColonne).filter(function (v, i, a) {
                        return a.indexOf(v) === i
                    })
                    // console.log('footerItemsResult = ', footerItemsResult)
                    this.setState({
                        isLoaded: true,
                        footerItems: footerItemsResult,
                        categories: categories
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
    GetItemsForCategory = (cat) => {
        return this.state.footerItems.filter(item => item.RMNGP_LinkFooterColonne == cat);
    }
    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error(error, errorInfo);
    }
    render() {
        if (this.state.isLoaded) {
            return (
                <div className="footer_top">
                    {this.state.categories.map(cat => <FooterCategory key={cat} title={cat} items={this.GetItemsForCategory(cat)} />)}
                </div>
            )
        } else {
            return (
                <div className="footer_top">
                    <div className="footer_category">

                    </div>
                </div>
            )
        }
    }
}
class FooterCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryItems: this.props.items
        };
    }

    render() {
        return (
            <div className="footer_category">
                <h3>{this.props.title}</h3>
                <ul>
                    {this.state.categoryItems.map(item => <LinkFooter key={item.__metadata.id} content={item.RMNGP_LinkFooterContent}></LinkFooter>)}
                </ul>
            </div>
        );
    }
}
class LinkFooter extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     content: this.props.content
        // };
    }
    render() {
        return (
            <li dangerouslySetInnerHTML={{ __html: this.props.content }}></li>
        );
    }
}

const domContainer = document.getElementById('footerApp');
ReactDOM.render(<FooterApp title={'React Footer'} />, domContainer);