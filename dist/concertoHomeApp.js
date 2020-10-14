(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["concertoHomeApp"],{

/***/ "./src/actuTop.jsx":
/*!*************************!*\
  !*** ./src/actuTop.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActuTopApp; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// import React from 'react'
var ActuTopApp = /*#__PURE__*/function (_React$Component) {
  _inherits(ActuTopApp, _React$Component);

  var _super = _createSuper(ActuTopApp);

  function ActuTopApp(props) {
    var _this;

    _classCallCheck(this, ActuTopApp);

    _this = _super.call(this, props);
    _this.state = {
      isLoaded: false,
      actuTopItems: []
    };
    return _this;
  }

  _createClass(ActuTopApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.SearchArticles();
    }
  }, {
    key: "SearchArticles",
    value: function SearchArticles() {
      var _this2 = this;

      // SharePoint Search Query avec site ID
      var searchQuery = {
        request: {
          Querytext: "*",
          QueryTemplate: "RMNGPActuPublieeOWSCHCS=Oui RefinableString20=1 RefinableString20=2 RefinableString20=3 SPSiteURL:{" + _spPageContextInfo.siteAbsoluteUrl + "} ContentTypeId:0x010100C568DB52D9D0A14D9B2FDCC96666E9F2007948130EC3DB064584E219954237AF39007483F22811764DF48BDCDCB47DA0AE7F*'",
          RowLimit: 3,
          TrimDuplicates: false,
          SelectProperties: ['Path', 'Url', 'Title', 'SPSiteURL', 'UniqueId', 'Author', 'SiteID', 'PublishingImageCaptionOWSHTML', 'RMNGPActuSousTitreOWSMTXT', 'PublishingImage', 'PublishingRollupImage', 'ArticleStartDate'],
          SortList: [{
            Property: 'RefinableString20',
            // 1,2 ou 3
            Direction: 0
          }, {
            Property: 'ArticleStartDate',
            Direction: 1
          }]
        }
      }; // console.log(searchQuery)
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
      }; // req 2 recherche des actualités avec le bon site ID

      fetch(postQuery.url, postQuery).then(function (res) {
        return res.json();
      }).then(function (d) {
        // console.log('fetched data = ', d)
        var actuTopItemsResult = d.PrimaryQueryResult.RelevantResults.Table.Rows; // console.log('actuTopItemsResult = ', actuTopItemsResult)

        _this2.setState({
          actuTopItems: actuTopItemsResult,
          isLoaded: true
        });
      }, // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      function (error) {
        _this2.setState({
          // isLoaded: false,
          error: error
        });
      });
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.error(error, errorInfo);
    }
  }, {
    key: "handleRedirectToAllActu",
    value: function handleRedirectToAllActu(e) {
      e.preventDefault(); // Make sure this location matches your site structure

      var location = "actualites/Pages/actualites.aspx";
      window.location.href = _spPageContextInfo.siteAbsoluteUrl + _spPageContextInfo.siteServerRelativeUrl + location;
      return;
    }
  }, {
    key: "render",
    value: function render() {
      function getValueByKey(actuItem, key) {
        var cell = actuItem.Cells.find(function (actu) {
          return actu.Key === key;
        });
        if (cell) return cell.Value;
      }

      if (this.state.isLoaded) {
        return /*#__PURE__*/React.createElement("div", {
          className: "actuTopApp"
        }, /*#__PURE__*/React.createElement("div", {
          className: "containerItem actuTopContainer"
        }, this.state.actuTopItems.map(function (topActu) {
          return /*#__PURE__*/React.createElement(ActuTop, {
            key: getValueByKey(topActu, "UniqueId"),
            titre: getValueByKey(topActu, "Title"),
            soustitre: getValueByKey(topActu, "RMNGPActuSousTitreOWSMTXT"),
            path: getValueByKey(topActu, "Path"),
            publishingImage: getValueByKey(topActu, "PublishingImage"),
            publishingRollupImage: getValueByKey(topActu, "PublishingRollupImage"),
            legende: getValueByKey(topActu, "PublishingImageCaptionOWSHTML")
          });
        })), /*#__PURE__*/React.createElement("div", {
          className: "seeMoreActus"
        }, /*#__PURE__*/React.createElement("button", {
          onClick: this.handleRedirectToAllActu.bind(this)
        }, "Plus d'actualit\xE9s")));
      } else {
        return /*#__PURE__*/React.createElement("div", {
          className: ""
        }, "chargement des actualit\xE9s");
      }
    }
  }]);

  return ActuTopApp;
}(React.Component);



function ActuTop(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "actu cbs-pictureOnTopContainer"
  }, /*#__PURE__*/React.createElement("a", {
    href: props.path
  }, /*#__PURE__*/React.createElement("div", {
    className: "actuImage",
    dangerouslySetInnerHTML: {
      __html: props.publishingRollupImage
    }
  }), /*#__PURE__*/React.createElement("h2", {
    className: "cbs-articleOnTopLine1"
  }, props.titre), /*#__PURE__*/React.createElement("h3", {
    className: "cbs-articleLine2"
  }, props.soustitre)));
}

function datetoISODate(dateObj) {
  var datetoformat = new Date(dateObj);
  return datetoformat.toLocaleDateString();
} // const domContainer = document.getElementById('actuTopApp');
// ReactDOM.render(<ActuTopApp title={'Top Actualités'} />, domContainer);

/***/ }),

/***/ "./src/agenda.jsx":
/*!************************!*\
  !*** ./src/agenda.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AgendaApp; });
/* harmony import */ var _customUserSearch_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customUserSearch.jsx */ "./src/customUserSearch.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// import React from 'react'


var AgendaApp = /*#__PURE__*/function (_React$Component) {
  _inherits(AgendaApp, _React$Component);

  var _super = _createSuper(AgendaApp);

  function AgendaApp(props) {
    var _this;

    _classCallCheck(this, AgendaApp);

    _this = _super.call(this, props);
    _this.state = {
      isLoaded: false,
      agendaItems: []
    };
    return _this;
  }

  _createClass(AgendaApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var formattedToday = new Date().toISOString().split('T')[0] + 'T00:00:00.000Z';
      var siteURL = _spPageContextInfo.siteAbsoluteUrl;
      var apiPath = siteURL + "/_api/web/lists/getbytitle('L''Agenda')/items?" + "&$select=Title,EventDate" + "&$Top=3&$orderby=EventDate asc" + "&$filter=EventDate ge datetime'" + formattedToday + "'"; //console.log("api path ==> " + apiPath);

      var headers = {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: "application/json;odata=verbose"
        },
        mode: 'cors',
        cache: 'default'
      };
      fetch(apiPath, headers).then(function (res) {
        return res.json();
      }).then(function (d) {
        // console.log('fetched data = ', d)
        var agendaItemsResult = d.d.results; // console.log('agendaItemsResult = ', agendaItemsResult)

        _this2.setState({
          isLoaded: true,
          agendaItems: agendaItemsResult
        });
      }, // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      function (error) {
        _this2.setState({
          isLoaded: false,
          error: error
        });
      });
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.error(error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.isLoaded) {
        return /*#__PURE__*/React.createElement("div", {
          className: "containerItem"
        }, /*#__PURE__*/React.createElement(_customUserSearch_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null), /*#__PURE__*/React.createElement("div", {
          className: "agendaApp agendaZone"
        }, /*#__PURE__*/React.createElement("h2", {
          className: "titreAgenda"
        }, "Rendez-Vous"), /*#__PURE__*/React.createElement("ul", {
          className: "agenda"
        }, this.state.agendaItems.map(function (rdv) {
          return /*#__PURE__*/React.createElement(AgendaEvent, {
            key: rdv.__metadata.id,
            eventItem: rdv
          });
        }))));
      } else {
        return /*#__PURE__*/React.createElement("div", {
          className: "agendaApp agendaZone containerItem"
        }, /*#__PURE__*/React.createElement("ul", {
          className: "agenda"
        }, /*#__PURE__*/React.createElement("li", {
          className: "rdv"
        }, "chargement des rdv")));
      }
    }
  }]);

  return AgendaApp;
}(React.Component);



function datetoISODate(dateObj) {
  var datetoformat = new Date(dateObj);
  return datetoformat.toLocaleDateString();
}

function AgendaEvent(_ref) {
  var eventItem = _ref.eventItem;
  return /*#__PURE__*/React.createElement("li", {
    className: "rdv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "innerRDV"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dateRDV"
  }, datetoISODate(eventItem.EventDate)), /*#__PURE__*/React.createElement("div", {
    className: "titleRDV"
  }, eventItem.Title)));
} // const domContainer = document.getElementById('agendaApp');
// ReactDOM.render(<AgendaApp title={'Rendez-Vous'} />, domContainer);

/***/ }),

/***/ "./src/appsMetierTop.jsx":
/*!*******************************!*\
  !*** ./src/appsMetierTop.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppsMetierTopApp; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// import React from 'react'
var AppsMetierTopApp = /*#__PURE__*/function (_React$Component) {
  _inherits(AppsMetierTopApp, _React$Component);

  var _super = _createSuper(AppsMetierTopApp);

  function AppsMetierTopApp(props) {
    var _this;

    _classCallCheck(this, AppsMetierTopApp);

    _this = _super.call(this, props);
    _this.state = {
      isLoaded: false,
      appsMetierItems: []
    };
    return _this;
  }

  _createClass(AppsMetierTopApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var siteURL = _spPageContextInfo.siteAbsoluteUrl;
      var apiPath = siteURL + "/_api/web/lists/getbytitle('AppsMetier')/items?$select=Title,RMNGP_AppUrl,RMNGP_AppIco,RMNGP_AppOrder&$OrderBy=RMNGP_AppOrder"; //&$Top=3
      //console.log("api path ==> " + apiPath);

      var headers = {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: "application/json;odata=verbose"
        },
        mode: 'cors',
        cache: 'default'
      };
      fetch(apiPath, headers).then(function (res) {
        return res.json();
      }).then(function (d) {
        // console.log('fetched data = ', d)
        var appsMetierItemsResult = d.d.results; // console.log('appsMetierItemsResult = ', appsMetierItemsResult)

        _this2.setState({
          isLoaded: true,
          appsMetierItems: appsMetierItemsResult
        });
      }, // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      function (error) {
        console.error(error);

        _this2.setState({
          isLoaded: false,
          error: error
        });
      });
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.error(error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.isLoaded) {
        return /*#__PURE__*/React.createElement("div", {
          className: "appMetierApp containerItem"
        }, /*#__PURE__*/React.createElement("ul", {
          className: "cbs-List"
        }, this.state.appsMetierItems.map(function (app) {
          return /*#__PURE__*/React.createElement(AppMetierTop, {
            key: app.__metadata.id,
            title: app.Title,
            appUrl: app.RMNGP_AppUrl.Url,
            imageUrl: app.RMNGP_AppIco.Url
          });
        })));
      } else {
        return /*#__PURE__*/React.createElement("div", {
          className: "appMetierApp containerItem"
        }, /*#__PURE__*/React.createElement("ul", {
          className: "cbs-List"
        }, /*#__PURE__*/React.createElement("li", {
          className: "app_top"
        }, "Chargement des app")));
      }
    }
  }]);

  return AppsMetierTopApp;
}(React.Component);



function AppMetierTop(props) {
  return /*#__PURE__*/React.createElement("li", {
    className: props.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "cbs-AppPictureContainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cbs-AppPictureImageContainer"
  }, /*#__PURE__*/React.createElement("a", {
    className: "cbs-pictureImgLink",
    target: "_blank",
    href: props.appUrl
  }, /*#__PURE__*/React.createElement("img", {
    className: "actuImage",
    src: props.imageUrl,
    alt: props.title
  })))));
} // const domContainer = document.getElementById('appsMetierTopApp');
// ReactDOM.render(<AppsMetierApp title={'Apps Metiers Top'} />, domContainer);

/***/ }),

/***/ "./src/concertoHomeApp.jsx":
/*!*********************************!*\
  !*** ./src/concertoHomeApp.jsx ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appsMetierTop_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appsMetierTop.jsx */ "./src/appsMetierTop.jsx");
/* harmony import */ var _agenda_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agenda.jsx */ "./src/agenda.jsx");
/* harmony import */ var _actuTop_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actuTop.jsx */ "./src/actuTop.jsx");
// import React from 'react'
// import ReactDOM from 'react-dom'




function ConcertoHomeApp() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_appsMetierTop_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null), /*#__PURE__*/React.createElement(_agenda_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_actuTop_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

var domContainer = document.getElementById('homeContainer');
ReactDOM.render( /*#__PURE__*/React.createElement(ConcertoHomeApp, {
  title: 'Concerto Home App'
}), domContainer);

/***/ }),

/***/ "./src/customUserSearch.jsx":
/*!**********************************!*\
  !*** ./src/customUserSearch.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomUserSearch; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// import React from 'react'
var CustomUserSearch = /*#__PURE__*/function (_React$Component) {
  _inherits(CustomUserSearch, _React$Component);

  var _super = _createSuper(CustomUserSearch);

  function CustomUserSearch(props) {
    var _this;

    _classCallCheck(this, CustomUserSearch);

    _this = _super.call(this, props);
    _this.state = {
      searchInputValue: ""
    };
    _this.handleSearchInputChange = _this.handleSearchInputChange.bind(_assertThisInitialized(_this));
    _this.handleSearchSubmit = _this.handleSearchSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CustomUserSearch, [{
    key: "handleSearchSubmit",
    value: function handleSearchSubmit(e) {
      e.preventDefault();
      var queryString = this.state.searchInputValue; // Make sure this location matches your site structure

      var location = "Pages/peopleresults.aspx#k=" + queryString;
      window.location.href = _spPageContextInfo.siteAbsoluteUrl + _spPageContextInfo.siteServerRelativeUrl + location;
      return;
    }
  }, {
    key: "handleSearchInputChange",
    value: function handleSearchInputChange(e) {
      // console.log("l'input a été changé ", e.target.value);
      this.setState({
        searchInputValue: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "customUserSearchInputZone"
      }, /*#__PURE__*/React.createElement("form", {
        onSubmit: this.handleSearchSubmit,
        className: "customUserSearchInputContainer"
      }, /*#__PURE__*/React.createElement("input", {
        id: "search-input",
        name: "search-input",
        type: "text",
        placeholder: "Rechercher dans l'annuaire",
        onChange: this.handleSearchInputChange,
        value: this.state.searchInputValue
      }), /*#__PURE__*/React.createElement("button", {
        id: "search-btn"
      })));
    }
  }]);

  return CustomUserSearch;
}(React.Component);



/***/ })

},[["./src/concertoHomeApp.jsx","single-webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0dVRvcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FnZW5kYS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcHNNZXRpZXJUb3AuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb25jZXJ0b0hvbWVBcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9jdXN0b21Vc2VyU2VhcmNoLmpzeCJdLCJuYW1lcyI6WyJBY3R1VG9wQXBwIiwicHJvcHMiLCJzdGF0ZSIsImlzTG9hZGVkIiwiYWN0dVRvcEl0ZW1zIiwiU2VhcmNoQXJ0aWNsZXMiLCJzZWFyY2hRdWVyeSIsInJlcXVlc3QiLCJRdWVyeXRleHQiLCJRdWVyeVRlbXBsYXRlIiwiX3NwUGFnZUNvbnRleHRJbmZvIiwic2l0ZUFic29sdXRlVXJsIiwiUm93TGltaXQiLCJUcmltRHVwbGljYXRlcyIsIlNlbGVjdFByb3BlcnRpZXMiLCJTb3J0TGlzdCIsIlByb3BlcnR5IiwiRGlyZWN0aW9uIiwicG9zdFF1ZXJ5IiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJ1cmwiLCJoZWFkZXJzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZCIsImFjdHVUb3BJdGVtc1Jlc3VsdCIsIlByaW1hcnlRdWVyeVJlc3VsdCIsIlJlbGV2YW50UmVzdWx0cyIsIlRhYmxlIiwiUm93cyIsInNldFN0YXRlIiwiZXJyb3IiLCJlcnJvckluZm8iLCJjb25zb2xlIiwiZSIsInByZXZlbnREZWZhdWx0IiwibG9jYXRpb24iLCJ3aW5kb3ciLCJocmVmIiwic2l0ZVNlcnZlclJlbGF0aXZlVXJsIiwiZ2V0VmFsdWVCeUtleSIsImFjdHVJdGVtIiwia2V5IiwiY2VsbCIsIkNlbGxzIiwiZmluZCIsImFjdHUiLCJLZXkiLCJWYWx1ZSIsIm1hcCIsInRvcEFjdHUiLCJoYW5kbGVSZWRpcmVjdFRvQWxsQWN0dSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkFjdHVUb3AiLCJwYXRoIiwiX19odG1sIiwicHVibGlzaGluZ1JvbGx1cEltYWdlIiwidGl0cmUiLCJzb3VzdGl0cmUiLCJkYXRldG9JU09EYXRlIiwiZGF0ZU9iaiIsImRhdGV0b2Zvcm1hdCIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJBZ2VuZGFBcHAiLCJhZ2VuZGFJdGVtcyIsImZvcm1hdHRlZFRvZGF5IiwidG9JU09TdHJpbmciLCJzcGxpdCIsInNpdGVVUkwiLCJhcGlQYXRoIiwiQWNjZXB0IiwibW9kZSIsImNhY2hlIiwiYWdlbmRhSXRlbXNSZXN1bHQiLCJyZXN1bHRzIiwicmR2IiwiX19tZXRhZGF0YSIsImlkIiwiQWdlbmRhRXZlbnQiLCJldmVudEl0ZW0iLCJFdmVudERhdGUiLCJUaXRsZSIsIkFwcHNNZXRpZXJUb3BBcHAiLCJhcHBzTWV0aWVySXRlbXMiLCJhcHBzTWV0aWVySXRlbXNSZXN1bHQiLCJhcHAiLCJSTU5HUF9BcHBVcmwiLCJVcmwiLCJSTU5HUF9BcHBJY28iLCJBcHBNZXRpZXJUb3AiLCJ0aXRsZSIsImFwcFVybCIsImltYWdlVXJsIiwiQ29uY2VydG9Ib21lQXBwIiwiZG9tQ29udGFpbmVyIiwiUmVhY3RET00iLCJyZW5kZXIiLCJDdXN0b21Vc2VyU2VhcmNoIiwic2VhcmNoSW5wdXRWYWx1ZSIsImhhbmRsZVNlYXJjaElucHV0Q2hhbmdlIiwiaGFuZGxlU2VhcmNoU3VibWl0IiwicXVlcnlTdHJpbmciLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUdxQkEsVTs7Ozs7QUFDakIsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUFFQyxjQUFRLEVBQUUsS0FBWjtBQUFtQkMsa0JBQVksRUFBRTtBQUFqQyxLQUFiO0FBRmU7QUFHbEI7Ozs7d0NBQ21CO0FB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WUFBSSxFQUFDLE1BQWxEO0FBQ0ksbUJBQVcsRUFBQyw0QkFEaEI7QUFFSSxnQkFBUSxFQUFFLEtBQUtELHVCQUZuQjtBQUdJLGFBQUssRUFBRSxLQUFLN0csS0FBTCxDQUFXNEc7QUFIdEIsUUFESixlQUtJO0FBQVEsVUFBRSxFQUFDO0FBQVgsUUFMSixDQURKLENBRko7QUFZSDs7OztFQW5DeUNoRCxLQUFLLENBQUNDLFMiLCJmaWxlIjoiY29uY2VydG9Ib21lQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3R1VG9wQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGlzTG9hZGVkOiBmYWxzZSwgYWN0dVRvcEl0ZW1zOiBbXSB9O1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5TZWFyY2hBcnRpY2xlcygpXHJcbiAgICB9XHJcblxyXG4gICAgU2VhcmNoQXJ0aWNsZXMoKSB7XHJcblxyXG4gICAgICAgIC8vIFNoYXJlUG9pbnQgU2VhcmNoIFF1ZXJ5IGF2ZWMgc2l0ZSBJRFxyXG4gICAgICAgIHZhciBzZWFyY2hRdWVyeSA9IHtcclxuICAgICAgICAgICAgcmVxdWVzdDoge1xyXG4gICAgICAgICAgICAgICAgUXVlcnl0ZXh0OiBcIipcIixcclxuICAgICAgICAgICAgICAgIFF1ZXJ5VGVtcGxhdGU6IFwiUk1OR1BBY3R1UHVibGllZU9XU0NIQ1M9T3VpIFJlZmluYWJsZVN0cmluZzIwPTEgUmVmaW5hYmxlU3RyaW5nMjA9MiBSZWZpbmFibGVTdHJpbmcyMD0zIFNQU2l0ZVVSTDp7XCIgKyBfc3BQYWdlQ29udGV4dEluZm8uc2l0ZUFic29sdXRlVXJsICsgXCJ9IENvbnRlbnRUeXBlSWQ6MHgwMTAxMDBDNTY4REI1MkQ5RDBBMTREOUIyRkRDQzk2NjY2RTlGMjAwNzk0ODEzMEVDM0RCMDY0NTg0RTIxOTk1NDIzN0FGMzkwMDc0ODNGMjI4MTE3NjRERjQ4QkRDRENCNDdEQTBBRTdGKidcIixcclxuICAgICAgICAgICAgICAgIFJvd0xpbWl0OiAzLFxyXG4gICAgICAgICAgICAgICAgVHJpbUR1cGxpY2F0ZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgU2VsZWN0UHJvcGVydGllczogWydQYXRoJywgJ1VybCcsICdUaXRsZScsICdTUFNpdGVVUkwnLCAnVW5pcXVlSWQnLCAnQXV0aG9yJywgJ1NpdGVJRCcsICdQdWJsaXNoaW5nSW1hZ2VDYXB0aW9uT1dTSFRNTCcsICdSTU5HUEFjdHVTb3VzVGl0cmVPV1NNVFhUJywgJ1B1Ymxpc2hpbmdJbWFnZScsICdQdWJsaXNoaW5nUm9sbHVwSW1hZ2UnLCAnQXJ0aWNsZVN0YXJ0RGF0ZSddLFxyXG4gICAgICAgICAgICAgICAgU29ydExpc3Q6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgUHJvcGVydHk6ICdSZWZpbmFibGVTdHJpbmcyMCcsIC8vIDEsMiBvdSAzXHJcbiAgICAgICAgICAgICAgICAgICAgRGlyZWN0aW9uOiAwXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgUHJvcGVydHk6ICdBcnRpY2xlU3RhcnREYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBEaXJlY3Rpb246IDFcclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2VhcmNoUXVlcnkpXHJcbiAgICAgICAgLy8gUmVxdWVzdCBCb2R5XHJcbiAgICAgICAgdmFyIHBvc3RRdWVyeSA9IHtcclxuICAgICAgICAgICAgLyogc3RhdGljIHBhcnQgb2YgdGhlIHF1ZXJ5Ki9cclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgICAgICAgIHVybDogXCIvX2FwaS9zZWFyY2gvcG9zdHF1ZXJ5XCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICBcIlgtUmVxdWVzdERpZ2VzdFwiOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIl9fUkVRVUVTVERJR0VTVFwiKS52YWx1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvKiAvc3RhdGljIHBhcnQgb2YgdGhlIHF1ZXJ5Ki9cclxuXHJcbiAgICAgICAgICAgIC8vIHNlYXJjaCBxdWVyeVxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzZWFyY2hRdWVyeSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyByZXEgMiByZWNoZXJjaGUgZGVzIGFjdHVhbGl0w6lzIGF2ZWMgbGUgYm9uIHNpdGUgSURcclxuICAgICAgICBmZXRjaChwb3N0UXVlcnkudXJsLCBwb3N0UXVlcnkpXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgcmVzID0+IHJlcy5qc29uKClcclxuICAgICAgICAgICAgKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZmV0Y2hlZCBkYXRhID0gJywgZClcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWN0dVRvcEl0ZW1zUmVzdWx0ID0gZC5QcmltYXJ5UXVlcnlSZXN1bHQuUmVsZXZhbnRSZXN1bHRzLlRhYmxlLlJvd3M7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhY3R1VG9wSXRlbXNSZXN1bHQgPSAnLCBhY3R1VG9wSXRlbXNSZXN1bHQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVUb3BJdGVtczogYWN0dVRvcEl0ZW1zUmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IHRvIGhhbmRsZSBlcnJvcnMgaGVyZVxyXG4gICAgICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XHJcbiAgICAgICAgICAgICAgICAvLyBleGNlcHRpb25zIGZyb20gYWN0dWFsIGJ1Z3MgaW4gY29tcG9uZW50cy5cclxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpc0xvYWRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbykge1xyXG4gICAgICAgIC8vIFlvdSBjYW4gYWxzbyBsb2cgdGhlIGVycm9yIHRvIGFuIGVycm9yIHJlcG9ydGluZyBzZXJ2aWNlXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvciwgZXJyb3JJbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSZWRpcmVjdFRvQWxsQWN0dShlKSB7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhpcyBsb2NhdGlvbiBtYXRjaGVzIHlvdXIgc2l0ZSBzdHJ1Y3R1cmVcclxuICAgICAgICBsZXQgbG9jYXRpb24gPSBcImFjdHVhbGl0ZXMvUGFnZXMvYWN0dWFsaXRlcy5hc3B4XCI7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBfc3BQYWdlQ29udGV4dEluZm8uc2l0ZUFic29sdXRlVXJsICsgX3NwUGFnZUNvbnRleHRJbmZvLnNpdGVTZXJ2ZXJSZWxhdGl2ZVVybCArIGxvY2F0aW9uO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBmdW5jdGlvbiBnZXRWYWx1ZUJ5S2V5KGFjdHVJdGVtLCBrZXkpIHtcclxuICAgICAgICAgICAgbGV0IGNlbGwgPSBhY3R1SXRlbS5DZWxscy5maW5kKGFjdHUgPT4gYWN0dS5LZXkgPT09IGtleSlcclxuICAgICAgICAgICAgaWYgKGNlbGwpIHJldHVybiBjZWxsLlZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0xvYWRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3R1VG9wQXBwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJJdGVtIGFjdHVUb3BDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYWN0dVRvcEl0ZW1zLm1hcCh0b3BBY3R1ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWN0dVRvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Z2V0VmFsdWVCeUtleSh0b3BBY3R1LCBcIlVuaXF1ZUlkXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdHJlPXtnZXRWYWx1ZUJ5S2V5KHRvcEFjdHUsIFwiVGl0bGVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291c3RpdHJlPXtnZXRWYWx1ZUJ5S2V5KHRvcEFjdHUsIFwiUk1OR1BBY3R1U291c1RpdHJlT1dTTVRYVFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPXtnZXRWYWx1ZUJ5S2V5KHRvcEFjdHUsIFwiUGF0aFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJsaXNoaW5nSW1hZ2U9e2dldFZhbHVlQnlLZXkodG9wQWN0dSwgXCJQdWJsaXNoaW5nSW1hZ2VcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGlzaGluZ1JvbGx1cEltYWdlPXtnZXRWYWx1ZUJ5S2V5KHRvcEFjdHUsIFwiUHVibGlzaGluZ1JvbGx1cEltYWdlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZGU9e2dldFZhbHVlQnlLZXkodG9wQWN0dSwgXCJQdWJsaXNoaW5nSW1hZ2VDYXB0aW9uT1dTSFRNTFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWVNb3JlQWN0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlZGlyZWN0VG9BbGxBY3R1LmJpbmQodGhpcyl9PlBsdXMgZCdhY3R1YWxpdMOpczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIlwiPmNoYXJnZW1lbnQgZGVzIGFjdHVhbGl0w6lzPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBBY3R1VG9wKHByb3BzKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdHUgY2JzLXBpY3R1cmVPblRvcENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPXtwcm9wcy5wYXRofT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0dUltYWdlXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9wcy5wdWJsaXNoaW5nUm9sbHVwSW1hZ2UgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjYnMtYXJ0aWNsZU9uVG9wTGluZTFcIj57cHJvcHMudGl0cmV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYnMtYXJ0aWNsZUxpbmUyXCI+e3Byb3BzLnNvdXN0aXRyZX08L2gzPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZGF0ZXRvSVNPRGF0ZShkYXRlT2JqKSB7XHJcbiAgICB2YXIgZGF0ZXRvZm9ybWF0ID0gbmV3IERhdGUoZGF0ZU9iailcclxuICAgIHJldHVybiBkYXRldG9mb3JtYXQudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XHJcbn1cclxuXHJcblxyXG4vLyBjb25zdCBkb21Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0dVRvcEFwcCcpO1xyXG4vLyBSZWFjdERPTS5yZW5kZXIoPEFjdHVUb3BBcHAgdGl0bGU9eydUb3AgQWN0dWFsaXTDqXMnfSAvPiwgZG9tQ29udGFpbmVyKTsiLCIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgQ3VzdG9tVXNlclNlYXJjaCBmcm9tICcuL2N1c3RvbVVzZXJTZWFyY2guanN4J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWdlbmRhQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGlzTG9hZGVkOiBmYWxzZSwgYWdlbmRhSXRlbXM6IFtdIH07XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBsZXQgZm9ybWF0dGVkVG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXSArICdUMDA6MDA6MDAuMDAwWidcclxuICAgICAgICBsZXQgc2l0ZVVSTCA9IF9zcFBhZ2VDb250ZXh0SW5mby5zaXRlQWJzb2x1dGVVcmw7XHJcbiAgICAgICAgbGV0IGFwaVBhdGggPSBzaXRlVVJMICsgXCIvX2FwaS93ZWIvbGlzdHMvZ2V0Ynl0aXRsZSgnTCcnQWdlbmRhJykvaXRlbXM/XCJcclxuICAgICAgICAgICAgKyBcIiYkc2VsZWN0PVRpdGxlLEV2ZW50RGF0ZVwiXHJcbiAgICAgICAgICAgICsgXCImJFRvcD0zJiRvcmRlcmJ5PUV2ZW50RGF0ZSBhc2NcIlxyXG4gICAgICAgICAgICArIFwiJiRmaWx0ZXI9RXZlbnREYXRlIGdlIGRhdGV0aW1lJ1wiICsgZm9ybWF0dGVkVG9kYXkgKyBcIidcIjtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImFwaSBwYXRoID09PiBcIiArIGFwaVBhdGgpO1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbjtvZGF0YT12ZXJib3NlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgICAgICBjYWNoZTogJ2RlZmF1bHQnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBmZXRjaChhcGlQYXRoLCBoZWFkZXJzKVxyXG4gICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgIHJlcyA9PiByZXMuanNvbigpXHJcbiAgICAgICAgICAgICkudGhlbihcclxuICAgICAgICAgICAgICAgIChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZldGNoZWQgZGF0YSA9ICcsIGQpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFnZW5kYUl0ZW1zUmVzdWx0ID0gZC5kLnJlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FnZW5kYUl0ZW1zUmVzdWx0ID0gJywgYWdlbmRhSXRlbXNSZXN1bHQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZ2VuZGFJdGVtczogYWdlbmRhSXRlbXNSZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcbiAgICAgICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuICAgICAgICAgICAgICAgIC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbykge1xyXG4gICAgICAgIC8vIFlvdSBjYW4gYWxzbyBsb2cgdGhlIGVycm9yIHRvIGFuIGVycm9yIHJlcG9ydGluZyBzZXJ2aWNlXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvciwgZXJyb3JJbmZvKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0xvYWRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJJdGVtXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDdXN0b21Vc2VyU2VhcmNoIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdlbmRhQXBwIGFnZW5kYVpvbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdHJlQWdlbmRhXCI+UmVuZGV6LVZvdXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYWdlbmRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hZ2VuZGFJdGVtcy5tYXAocmR2ID0+IDxBZ2VuZGFFdmVudCBrZXk9e3Jkdi5fX21ldGFkYXRhLmlkfSBldmVudEl0ZW09e3Jkdn0gLz4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ2VuZGFBcHAgYWdlbmRhWm9uZSBjb250YWluZXJJdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImFnZW5kYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicmR2XCI+Y2hhcmdlbWVudCBkZXMgcmR2PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZGF0ZXRvSVNPRGF0ZShkYXRlT2JqKSB7XHJcbiAgICB2YXIgZGF0ZXRvZm9ybWF0ID0gbmV3IERhdGUoZGF0ZU9iailcclxuICAgIHJldHVybiBkYXRldG9mb3JtYXQudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFnZW5kYUV2ZW50KHsgZXZlbnRJdGVtIH0pIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJyZHZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclJEVlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlUkRWXCI+e2RhdGV0b0lTT0RhdGUoZXZlbnRJdGVtLkV2ZW50RGF0ZSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlUkRWXCI+e2V2ZW50SXRlbS5UaXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vIGNvbnN0IGRvbUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZ2VuZGFBcHAnKTtcclxuLy8gUmVhY3RET00ucmVuZGVyKDxBZ2VuZGFBcHAgdGl0bGU9eydSZW5kZXotVm91cyd9IC8+LCBkb21Db250YWluZXIpOyIsIlxyXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwc01ldGllclRvcEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0geyBpc0xvYWRlZDogZmFsc2UsIGFwcHNNZXRpZXJJdGVtczogW10gfTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGxldCBzaXRlVVJMID0gX3NwUGFnZUNvbnRleHRJbmZvLnNpdGVBYnNvbHV0ZVVybDtcclxuICAgICAgICBsZXQgYXBpUGF0aCA9IHNpdGVVUkwgKyBcIi9fYXBpL3dlYi9saXN0cy9nZXRieXRpdGxlKCdBcHBzTWV0aWVyJykvaXRlbXM/JHNlbGVjdD1UaXRsZSxSTU5HUF9BcHBVcmwsUk1OR1BfQXBwSWNvLFJNTkdQX0FwcE9yZGVyJiRPcmRlckJ5PVJNTkdQX0FwcE9yZGVyXCI7IC8vJiRUb3A9M1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiYXBpIHBhdGggPT0+IFwiICsgYXBpUGF0aCk7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uO29kYXRhPXZlcmJvc2VcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgICAgIGNhY2hlOiAnZGVmYXVsdCdcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZldGNoKGFwaVBhdGgsIGhlYWRlcnMpXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgcmVzID0+IHJlcy5qc29uKClcclxuICAgICAgICAgICAgKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgKGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZmV0Y2hlZCBkYXRhID0gJywgZClcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYXBwc01ldGllckl0ZW1zUmVzdWx0ID0gZC5kLnJlc3VsdHM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhcHBzTWV0aWVySXRlbXNSZXN1bHQgPSAnLCBhcHBzTWV0aWVySXRlbXNSZXN1bHQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBzTWV0aWVySXRlbXM6IGFwcHNNZXRpZXJJdGVtc1Jlc3VsdCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcclxuICAgICAgICAgICAgICAgIC8vIGluc3RlYWQgb2YgYSBjYXRjaCgpIGJsb2NrIHNvIHRoYXQgd2UgZG9uJ3Qgc3dhbGxvd1xyXG4gICAgICAgICAgICAgICAgLy8gZXhjZXB0aW9ucyBmcm9tIGFjdHVhbCBidWdzIGluIGNvbXBvbmVudHMuXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8pIHtcclxuICAgICAgICAvLyBZb3UgY2FuIGFsc28gbG9nIHRoZSBlcnJvciB0byBhbiBlcnJvciByZXBvcnRpbmcgc2VydmljZVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IsIGVycm9ySW5mbyk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNMb2FkZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwTWV0aWVyQXBwIGNvbnRhaW5lckl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2JzLUxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYXBwc01ldGllckl0ZW1zLm1hcChhcHAgPT4gPEFwcE1ldGllclRvcCBrZXk9e2FwcC5fX21ldGFkYXRhLmlkfSB0aXRsZT17YXBwLlRpdGxlfSBhcHBVcmw9e2FwcC5STU5HUF9BcHBVcmwuVXJsfSBpbWFnZVVybD17YXBwLlJNTkdQX0FwcEljby5Vcmx9IC8+KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBNZXRpZXJBcHAgY29udGFpbmVySXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjYnMtTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYXBwX3RvcFwiPkNoYXJnZW1lbnQgZGVzIGFwcDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBBcHBNZXRpZXJUb3AocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17cHJvcHMudGl0bGV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNicy1BcHBQaWN0dXJlQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNicy1BcHBQaWN0dXJlSW1hZ2VDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYnMtcGljdHVyZUltZ0xpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtwcm9wcy5hcHBVcmx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImFjdHVJbWFnZVwiIHNyYz17cHJvcHMuaW1hZ2VVcmx9IGFsdD17cHJvcHMudGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApO1xyXG59XHJcblxyXG4vLyBjb25zdCBkb21Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwc01ldGllclRvcEFwcCcpO1xyXG4vLyBSZWFjdERPTS5yZW5kZXIoPEFwcHNNZXRpZXJBcHAgdGl0bGU9eydBcHBzIE1ldGllcnMgVG9wJ30gLz4sIGRvbUNvbnRhaW5lcik7IiwiXHJcbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcclxuXHJcbmltcG9ydCBBcHBzTWV0aWVyVG9wQXBwIGZyb20gJy4vYXBwc01ldGllclRvcC5qc3gnXHJcbmltcG9ydCBBZ2VuZGFBcHAgZnJvbSAnLi9hZ2VuZGEuanN4J1xyXG5pbXBvcnQgQWN0dVRvcEFwcCBmcm9tICcuL2FjdHVUb3AuanN4J1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBDb25jZXJ0b0hvbWVBcHAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPEFwcHNNZXRpZXJUb3BBcHAgLz5cclxuXHJcblxyXG4gICAgICAgICAgICA8QWdlbmRhQXBwIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgPEFjdHVUb3BBcHAgLz5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgZG9tQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVDb250YWluZXInKTtcclxuUmVhY3RET00ucmVuZGVyKDxDb25jZXJ0b0hvbWVBcHAgdGl0bGU9eydDb25jZXJ0byBIb21lIEFwcCd9IC8+LCBkb21Db250YWluZXIpO1xyXG4iLCIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b21Vc2VyU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IHNlYXJjaElucHV0VmFsdWU6IFwiXCIgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNlYXJjaElucHV0Q2hhbmdlID0gdGhpcy5oYW5kbGVTZWFyY2hJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2VhcmNoU3VibWl0ID0gdGhpcy5oYW5kbGVTZWFyY2hTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZWFyY2hTdWJtaXQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgcXVlcnlTdHJpbmcgPSB0aGlzLnN0YXRlLnNlYXJjaElucHV0VmFsdWVcclxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhpcyBsb2NhdGlvbiBtYXRjaGVzIHlvdXIgc2l0ZSBzdHJ1Y3R1cmVcclxuICAgICAgICBsZXQgbG9jYXRpb24gPSBcIlBhZ2VzL3Blb3BsZXJlc3VsdHMuYXNweCNrPVwiICsgcXVlcnlTdHJpbmc7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBfc3BQYWdlQ29udGV4dEluZm8uc2l0ZUFic29sdXRlVXJsICsgX3NwUGFnZUNvbnRleHRJbmZvLnNpdGVTZXJ2ZXJSZWxhdGl2ZVVybCArIGxvY2F0aW9uO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGhhbmRsZVNlYXJjaElucHV0Q2hhbmdlKGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImwnaW5wdXQgYSDDqXTDqSBjaGFuZ8OpIFwiLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaElucHV0VmFsdWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b21Vc2VyU2VhcmNoSW5wdXRab25lXCI+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTZWFyY2hTdWJtaXR9IGNsYXNzTmFtZT1cImN1c3RvbVVzZXJTZWFyY2hJbnB1dENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInNlYXJjaC1pbnB1dFwiIG5hbWU9XCJzZWFyY2gtaW5wdXRcIiB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmVjaGVyY2hlciBkYW5zIGwnYW5udWFpcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2hJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoSW5wdXRWYWx1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2VhcmNoLWJ0blwiID48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9