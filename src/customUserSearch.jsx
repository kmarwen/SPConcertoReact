// import React from 'react'

export default class CustomUserSearch extends React.Component {
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
        let location = "Pages/peopleresults.aspx#k=" + queryString;
        window.location.href = _spPageContextInfo.siteAbsoluteUrl + _spPageContextInfo.siteServerRelativeUrl + location;
        return;
    }
    handleSearchInputChange(e) {
        // console.log("l'input a été changé ", e.target.value);
        this.setState({ searchInputValue: e.target.value })
    }


    render() {
        return (

            <div className="customUserSearchInputZone">
                <form onSubmit={this.handleSearchSubmit} className="customUserSearchInputContainer">
                    <input id="search-input" name="search-input" type="text"
                        placeholder="Rechercher dans l'annuaire"
                        onChange={this.handleSearchInputChange}
                        value={this.state.searchInputValue} />
                    <button id="search-btn" ></button>
                </form>
            </div>
        );
    }

}