// import React from 'react'

export default class CustomSiteSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchInputValue: "" };
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleSearchSubmit(e) {
        e.preventDefault();
        let queryString = this.state.searchInputValue
        // Make sure this location matches your site structure
        let location = "Pages/results.aspx#k=" + queryString;
        window.location.href = _spPageContextInfo.siteAbsoluteUrl + _spPageContextInfo.siteServerRelativeUrl + location;
        return;
    }
    handleSearchInputChange(e) {
        // console.log("l'input a été changé ", e.target.value);
        this.setState({ searchInputValue: e.target.value })
    }


    render() {
        return (
            <div className="customSiteSearchInputContainer">
                <form onSubmit={this.handleSearchSubmit} className="customSiteSearchForm">
                    <input id="siteSearchInputBox" name="siteSearchInputBox" type="text"
                        placeholder="Rechercher sur le site"
                        onChange={this.handleSearchInputChange}
                        value={this.state.searchInputValue} />
                    <button id="site-search-btn" ></button>
                </form>
            </div>
        );
    }

}