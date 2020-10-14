(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["footer"],{

/***/ "./src/footer.jsx":
/*!************************!*\
  !*** ./src/footer.jsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
// import ReactDOM from 'react-dom'
//let footerItemsResult = [];//[{ "__metadata": { "id": "cdb6e170 - f38d - 48b7 - bf1d - 67e57f105147", "uri": "http://srvsp16/_api/Web/Lists(guid'e7081327-e380-400a-9f23-28b325500546')/Items(1)", "etag": "\"1\"", "type": "SP.Data.LinksFooterListItem" }, "Title": "GP", "RMNGP_LinkFooterContent": "<a>Grand Palais</a>", "RMNGP_LinkFooterColonne": "Institutions", "RMNGP_LinkFooterPosCol": "1" }, { "__metadata": { "id": "b156b7e0-ca22-42f8-98a8-8fc2fca6b097", "uri": "http://srvsp16/_api/Web/Lists(guid'e7081327-e380-400a-9f23-28b325500546')/Items(2)", "etag": "\"1\"", "type": "SP.Data.LinksFooterListItem" }, "Title": "RMNGP", "RMNGP_LinkFooterContent": "<a>RMNGP</a>", "RMNGP_LinkFooterColonne": "Institutions", "RMNGP_LinkFooterPosCol": "2" }, { "__metadata": { "id": "1ea37ee8-727d-4ee1-92d9-8d349182bf1d", "uri": "http://srvsp16/_api/Web/Lists(guid'e7081327-e380-400a-9f23-28b325500546')/Items(3)", "etag": "\"1\"", "type": "SP.Data.LinksFooterListItem" }, "Title": "Billetterie", "RMNGP_LinkFooterContent": "<a>Billetterie</a>", "RMNGP_LinkFooterColonne": "Institutions", "RMNGP_LinkFooterPosCol": "3" }, { "__metadata": { "id": "dc2f5974-d872-4a46-8399-760b1053ee40", "uri": "http://srvsp16/_api/Web/Lists(guid'e7081327-e380-400a-9f23-28b325500546')/Items(4)", "etag": "\"1\"", "type": "SP.Data.LinksFooterListItem" }, "Title": "Cours histoire d'art", "RMNGP_LinkFooterContent": "<a>Cours histoire d'art</a>", "RMNGP_LinkFooterColonne": "éducation", "RMNGP_LinkFooterPosCol": "1" }, { "__metadata": { "id": "77defb64-2f6f-4cd5-a7ca-41f33ac9c591", "uri": "http://srvsp16/_api/Web/Lists(guid'e7081327-e380-400a-9f23-28b325500546')/Items(5)", "etag": "\"1\"", "type": "SP.Data.LinksFooterListItem" }, "Title": "Panorama de l'art", "RMNGP_LinkFooterContent": "<a>Panorama de l'art</a>", "RMNGP_LinkFooterColonne": "éducation", "RMNGP_LinkFooterPosCol": "2" }, { "__metadata": { "id": "508817f5-cfe8-46b6-a7a9-35eb1d32a9f6", "uri": "http://srvsp16/_api/Web/Lists(guid'e7081327-e380-400a-9f23-28b325500546')/Items(6)", "etag": "\"1\"", "type": "SP.Data.LinksFooterListItem" }, "Title": "Boutique en ligne", "RMNGP_LinkFooterContent": "<a>boutique en ligne</a>", "RMNGP_LinkFooterColonne": "sites commerciaux", "RMNGP_LinkFooterPosCol": "1" }, { "__metadata": { "id": "e8a0e349-2f0c-4027-b769-6d48efc49cf0", "uri": "http://srvsp16/_api/Web/Lists(guid'e7081327-e380-400a-9f23-28b325500546')/Items(7)", "etag": "\"1\"", "type": "SP.Data.LinksFooterListItem" }, "Title": "Agence photographique", "RMNGP_LinkFooterContent": "<a>Agence photographique</a>", "RMNGP_LinkFooterColonne": "sites commerciaux", "RMNGP_LinkFooterPosCol": "2" }];
//let categories = []; // footerItemsResult.map(item => item.RMNGP_LinkFooterColonne).filter(function (v, i, a) {
//     return a.indexOf(v) === i
// });
// categories = ['Institutions', 'éducation', 'sites commerciaux'];
var FooterApp = /*#__PURE__*/function (_React$Component) {
  _inherits(FooterApp, _React$Component);

  var _super = _createSuper(FooterApp);

  function FooterApp(props) {
    var _this;

    _classCallCheck(this, FooterApp);

    _this = _super.call(this, props);

    _this.GetItemsForCategory = function (cat) {
      return _this.state.footerItems.filter(function (item) {
        return item.RMNGP_LinkFooterColonne == cat;
      });
    };

    _this.state = {
      isLoaded: false,
      footerItems: [],
      categories: []
    };
    return _this;
  }

  _createClass(FooterApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var headers = {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: "application/json;odata=verbose"
        },
        mode: 'cors',
        cache: 'default'
      };
      var siteURL = _spPageContextInfo.siteAbsoluteUrl;
      var apiPath = siteURL + "/_api/web/lists/getbytitle('linksfooter')/items?$select=Title,RMNGP_LinkFooterColonne,RMNGP_LinkFooterContent,RMNGP_LinkFooterPosCol";
      fetch(apiPath, headers).then(function (res) {
        return res.json();
      }).then(function (d) {
        // console.log('fetched data = ', d)
        var footerItemsResult = d.d.results;
        var categories = footerItemsResult.map(function (item) {
          return item.RMNGP_LinkFooterColonne;
        }).filter(function (v, i, a) {
          return a.indexOf(v) === i;
        }); // console.log('footerItemsResult = ', footerItemsResult)

        _this2.setState({
          isLoaded: true,
          footerItems: footerItemsResult,
          categories: categories
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
      var _this3 = this;

      if (this.state.isLoaded) {
        return /*#__PURE__*/React.createElement("div", {
          className: "footer_top"
        }, this.state.categories.map(function (cat) {
          return /*#__PURE__*/React.createElement(FooterCategory, {
            key: cat,
            title: cat,
            items: _this3.GetItemsForCategory(cat)
          });
        }));
      } else {
        return /*#__PURE__*/React.createElement("div", {
          className: "footer_top"
        }, /*#__PURE__*/React.createElement("div", {
          className: "footer_category"
        }, "Chargement ..."));
      }
    }
  }]);

  return FooterApp;
}(React.Component);

var FooterCategory = /*#__PURE__*/function (_React$Component2) {
  _inherits(FooterCategory, _React$Component2);

  var _super2 = _createSuper(FooterCategory);

  function FooterCategory(props) {
    var _this4;

    _classCallCheck(this, FooterCategory);

    _this4 = _super2.call(this, props);
    _this4.state = {
      categoryItems: _this4.props.items
    };
    return _this4;
  }

  _createClass(FooterCategory, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "footer_category"
      }, /*#__PURE__*/React.createElement("h3", null, this.props.title), /*#__PURE__*/React.createElement("ul", null, this.state.categoryItems.map(function (item) {
        return /*#__PURE__*/React.createElement(LinkFooter, {
          key: item.__metadata.id,
          content: item.RMNGP_LinkFooterContent
        });
      })));
    }
  }]);

  return FooterCategory;
}(React.Component);

var LinkFooter = /*#__PURE__*/function (_React$Component3) {
  _inherits(LinkFooter, _React$Component3);

  var _super3 = _createSuper(LinkFooter);

  function LinkFooter(props) {
    _classCallCheck(this, LinkFooter);

    return _super3.call(this, props); // this.state = {
    //     content: this.props.content
    // };
  }

  _createClass(LinkFooter, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("li", {
        dangerouslySetInnerHTML: {
          __html: this.props.content
        }
      });
    }
  }]);

  return LinkFooter;
}(React.Component);

var domContainer = document.getElementById('footerApp');
ReactDOM.render( /*#__PURE__*/React.createElement(FooterApp, {
  title: 'React Footer'
}), domContainer);

/***/ })

},[["./src/footer.jsx","single-webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZm9vdGVyLmpzeCJdLCJuYW1lcyI6WyJGb290ZXJBcHAiLCJwcm9wcyIsIkdldEl0ZW1zRm9yQ2F0ZWdvcnkiLCJjYXQiLCJzdGF0ZSIsImZvb3Rlckl0ZW1zIiwiZmlsdGVyIiwiaXRlbSIsIlJNTkdQX0xpbmtGb290ZXJDb2xvbm5lIiwiaXNMb2FkZWQiLCJjYXRlZ29yaWVzIiwiaGVhZGVycyIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiQWNjZXB0IiwibW9kZSIsImNhY2hlIiwic2l0ZVVSTCIsIl9zcFBhZ2VDb250ZXh0SW5mbyIsInNpdGVBYnNvbHV0ZVVybCIsImFwaVBhdGgiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZCIsImZvb3Rlckl0ZW1zUmVzdWx0IiwicmVzdWx0cyIsIm1hcCIsInYiLCJpIiwiYSIsImluZGV4T2YiLCJzZXRTdGF0ZSIsImVycm9yIiwiZXJyb3JJbmZvIiwiY29uc29sZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9vdGVyQ2F0ZWdvcnkiLCJjYXRlZ29yeUl0ZW1zIiwiaXRlbXMiLCJ0aXRsZSIsIl9fbWV0YWRhdGEiLCJpZCIsIlJNTkdQX0xpbmtGb290ZXJDb250ZW50IiwiTGlua0Zvb3RlciIsIl9faHRtbCIsImNvbnRlbnQiLCJkb21Db250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RET00iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtJQUVNQSxTOzs7OztBQUNGLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsVUFrRG5CQyxtQkFsRG1CLEdBa0RHLFVBQUNDLEdBQUQsRUFBUztBQUMzQixhQUFPLE1BQUtDLEtBQUwsQ0FBV0MsV0FBWCxDQUF1QkMsTUFBdkIsQ0FBOEIsVUFBQUMs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ZixzQkFDSSxnQ0FBSyxLQUFLeEMsS0FBTCxDQUFXeUMsS0FBaEIsQ0FESixlQUVJLGdDQUNLLEtBQUt0QyxLQUFMLENBQVdvQyxhQUFYLENBQXlCWixHQUF6QixDQUE2QixVQUFBckIsSUFBSTtBQUFBLDRCQUFJLG9CQUFDLFVBQUQ7QUFBWSxhQUFHLEVBQUVBLElBQUksQ0FBQ29DLFVBQUwsQ0FBZ0JDLEVBQWpDO0FBQXFDLGlCQUFPLEVBQUVyQyxJQUFJLENBQUNzQztBQUFuRCxVQUFKO0FBQUEsT0FBakMsQ0FETCxDQUZKLENBREo7QUFRSDs7OztFQWpCd0JSLEtBQUssQ0FBQ0MsUzs7SUFtQjdCUSxVOzs7OztBQUNGLHNCQUFZN0MsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhCQUNUQSxLQURTLEdBRWY7QUFDQTtBQUNBO0FBQ0g7Ozs7NkJBQ1E7QUFDTCwwQkFDSTtBQUFJLCtCQUF1QixFQUFFO0FBQUU4QyxnQkFBTSxFQUFFLEtBQUs5QyxLQUFMLENBQVcrQztBQUFyQjtBQUE3QixRQURKO0FBR0g7Ozs7RUFYb0JYLEtBQUssQ0FBQ0MsUzs7QUFjL0IsSUFBTVcsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBckI7QUFDQUMsUUFBUSxDQUFDQyxNQUFULGVBQWdCLG9CQUFDLFNBQUQ7QUFBVyxPQUFLLEVBQUU7QUFBbEIsRUFBaEIsRUFBc0RKLFlBQXRELEUiLCJmaWxlIjoiZm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcclxuXHJcblxyXG4vL2xldCBmb290ZXJJdGVtc1Jlc3VsdCA9IFtdOy8vW3sgXCJfX21ldGFkYXRhXCI6IHsgXCJpZFwiOiBcImNkYjZlMTcwIC0gZjM4ZCAtIDQ4YjcgLSBiZjFkIC0gNjdlNTdmMTA1MTQ3XCIsIFwidXJpXCI6IFwiaHR0cDovL3NydnNwMTYvX2FwaS9XZWIvTGlzdHMoZ3VpZCdlNzA4MTMyNy1lMzgwLTQwMGEtOWYyMy0yOGIzMjU1MDA1NDYnKS9JdGVtcygxKVwiLCBcImV0YWdcIjogXCJcXFwiMVxcXCJcIiwgXCJ0eXBlXCI6IFwiU1AuRGF0YS5MaW5rc0Zvb3Rlckxpc3RJdGVtXCIgfSwgXCJUaXRsZVwiOiBcIkdQXCIsIFwiUk1OR1BfTGlua0Zvb3RlckNvbnRlbnRcIjogXCI8YT5HcmFuZCBQYWxhaXM8L2E+XCIsIFwiUk1OR1BfTGlua0Zvb3RlckNvbG9ubmVcIjogXCJJbnN0aXR1dGlvbnNcIiwgXCJSTU5HUF9MaW5rRm9vdGVyUG9zQ29sXCI6IFwiMVwiIH0sIHsgXCJfX21ldGFkYXRhXCI6IHsgXCJpZFwiOiBcImIxNTZiN2UwLWNhMjItNDJmOC05OGE4LThmYzJmY2E2YjA5N1wiLCBcInVyaVwiOiBcImh0dHA6Ly9zcnZzcDE2L19hcGkvV2ViL0xpc3RzKGd1aWQnZTcwODEzMjctZTM4MC00MDBhLTlmMjMtMjhiMzI1NTAwNTQ2JykvSXRlbXMoMilcIiwgXCJldGFnXCI6IFwiXFxcIjFcXFwiXCIsIFwidHlwZVwiOiBcIlNQLkRhdGEuTGlua3NGb290ZXJMaXN0SXRlbVwiIH0sIFwiVGl0bGVcIjogXCJSTU5HUFwiLCBcIlJNTkdQX0xpbmtGb290ZXJDb250ZW50XCI6IFwiPGE+Uk1OR1A8L2E+XCIsIFwiUk1OR1BfTGlua0Zvb3RlckNvbG9ubmVcIjogXCJJbnN0aXR1dGlvbnNcIiwgXCJSTU5HUF9MaW5rRm9vdGVyUG9zQ29sXCI6IFwiMlwiIH0sIHsgXCJfX21ldGFkYXRhXCI6IHsgXCJpZFwiOiBcIjFlYTM3ZWU4LTcyN2QtNGVlMS05MmQ5LThkMzQ5MTgyYmYxZFwiLCBcInVyaVwiOiBcImh0dHA6Ly9zcnZzcDE2L19hcGkvV2ViL0xpc3RzKGd1aWQnZTcwODEzMjctZTM4MC00MDBhLTlmMjMtMjhiMzI1NTAwNTQ2JykvSXRlbXMoMylcIiwgXCJldGFnXCI6IFwiXFxcIjFcXFwiXCIsIFwidHlwZVwiOiBcIlNQLkRhdGEuTGlua3NGb290ZXJMaXN0SXRlbVwiIH0sIFwiVGl0bGVcIjogXCJCaWxsZXR0ZXJpZVwiLCBcIlJNTkdQX0xpbmtGb290ZXJDb250ZW50XCI6IFwiPGE+QmlsbGV0dGVyaWU8L2E+XCIsIFwiUk1OR1BfTGlua0Zvb3RlckNvbG9ubmVcIjogXCJJbnN0aXR1dGlvbnNcIiwgXCJSTU5HUF9MaW5rRm9vdGVyUG9zQ29sXCI6IFwiM1wiIH0sIHsgXCJfX21ldGFkYXRhXCI6IHsgXCJpZFwiOiBcImRjMmY1OTc0LWQ4NzItNGE0Ni04Mzk5LTc2MGIxMDUzZWU0MFwiLCBcInVyaVwiOiBcImh0dHA6Ly9zcnZzcDE2L19hcGkvV2ViL0xpc3RzKGd1aWQnZTcwODEzMjctZTM4MC00MDBhLTlmMjMtMjhiMzI1NTAwNTQ2JykvSXRlbXMoNClcIiwgXCJldGFnXCI6IFwiXFxcIjFcXFwiXCIsIFwidHlwZVwiOiBcIlNQLkRhdGEuTGlua3NGb290ZXJMaXN0SXRlbVwiIH0sIFwiVGl0bGVcIjogXCJDb3VycyBoaXN0b2lyZSBkJ2FydFwiLCBcIlJNTkdQX0xpbmtGb290ZXJDb250ZW50XCI6IFwiPGE+Q291cnMgaGlzdG9pcmUgZCdhcnQ8L2E+XCIsIFwiUk1OR1BfTGlua0Zvb3RlckNvbG9ubmVcIjogXCLDqWR1Y2F0aW9uXCIsIFwiUk1OR1BfTGlua0Zvb3RlclBvc0NvbFwiOiBcIjFcIiB9LCB7IFwiX19tZXRhZGF0YVwiOiB7IFwiaWRcIjogXCI3N2RlZmI2NC0yZjZmLTRjZDUtYTdjYS00MWYzM2FjOWM1OTFcIiwgXCJ1cmlcIjogXCJodHRwOi8vc3J2c3AxNi9fYXBpL1dlYi9MaXN0cyhndWlkJ2U3MDgxMzI3LWUzODAtNDAwYS05ZjIzLTI4YjMyNTUwMDU0NicpL0l0ZW1zKDUpXCIsIFwiZXRhZ1wiOiBcIlxcXCIxXFxcIlwiLCBcInR5cGVcIjogXCJTUC5EYXRhLkxpbmtzRm9vdGVyTGlzdEl0ZW1cIiB9LCBcIlRpdGxlXCI6IFwiUGFub3JhbWEgZGUgbCdhcnRcIiwgXCJSTU5HUF9MaW5rRm9vdGVyQ29udGVudFwiOiBcIjxhPlBhbm9yYW1hIGRlIGwnYXJ0PC9hPlwiLCBcIlJNTkdQX0xpbmtGb290ZXJDb2xvbm5lXCI6IFwiw6lkdWNhdGlvblwiLCBcIlJNTkdQX0xpbmtGb290ZXJQb3NDb2xcIjogXCIyXCIgfSwgeyBcIl9fbWV0YWRhdGFcIjogeyBcImlkXCI6IFwiNTA4ODE3ZjUtY2ZlOC00NmI2LWE3YTktMzVlYjFkMzJhOWY2XCIsIFwidXJpXCI6IFwiaHR0cDovL3NydnNwMTYvX2FwaS9XZWIvTGlzdHMoZ3VpZCdlNzA4MTMyNy1lMzgwLTQwMGEtOWYyMy0yOGIzMjU1MDA1NDYnKS9JdGVtcyg2KVwiLCBcImV0YWdcIjogXCJcXFwiMVxcXCJcIiwgXCJ0eXBlXCI6IFwiU1AuRGF0YS5MaW5rc0Zvb3Rlckxpc3RJdGVtXCIgfSwgXCJUaXRsZVwiOiBcIkJvdXRpcXVlIGVuIGxpZ25lXCIsIFwiUk1OR1BfTGlua0Zvb3RlckNvbnRlbnRcIjogXCI8YT5ib3V0aXF1ZSBlbiBsaWduZTwvYT5cIiwgXCJSTU5HUF9MaW5rRm9vdGVyQ29sb25uZVwiOiBcInNpdGVzIGNvbW1lcmNpYXV4XCIsIFwiUk1OR1BfTGlua0Zvb3RlclBvc0NvbFwiOiBcIjFcIiB9LCB7IFwiX19tZXRhZGF0YVwiOiB7IFwiaWRcIjogXCJlOGEwZTM0OS0yZjBjLTQwMjctYjc2OS02ZDQ4ZWZjNDljZjBcIiwgXCJ1cmlcIjogXCJodHRwOi8vc3J2c3AxNi9fYXBpL1dlYi9MaXN0cyhndWlkJ2U3MDgxMzI3LWUzODAtNDAwYS05ZjIzLTI4YjMyNTUwMDU0NicpL0l0ZW1zKDcpXCIsIFwiZXRhZ1wiOiBcIlxcXCIxXFxcIlwiLCBcInR5cGVcIjogXCJTUC5EYXRhLkxpbmtzRm9vdGVyTGlzdEl0ZW1cIiB9LCBcIlRpdGxlXCI6IFwiQWdlbmNlIHBob3RvZ3JhcGhpcXVlXCIsIFwiUk1OR1BfTGlua0Zvb3RlckNvbnRlbnRcIjogXCI8YT5BZ2VuY2UgcGhvdG9ncmFwaGlxdWU8L2E+XCIsIFwiUk1OR1BfTGlua0Zvb3RlckNvbG9ubmVcIjogXCJzaXRlcyBjb21tZXJjaWF1eFwiLCBcIlJNTkdQX0xpbmtGb290ZXJQb3NDb2xcIjogXCIyXCIgfV07XHJcblxyXG4vL2xldCBjYXRlZ29yaWVzID0gW107IC8vIGZvb3Rlckl0ZW1zUmVzdWx0Lm1hcChpdGVtID0+IGl0ZW0uUk1OR1BfTGlua0Zvb3RlckNvbG9ubmUpLmZpbHRlcihmdW5jdGlvbiAodiwgaSwgYSkge1xyXG4vLyAgICAgcmV0dXJuIGEuaW5kZXhPZih2KSA9PT0gaVxyXG4vLyB9KTtcclxuXHJcbi8vIGNhdGVnb3JpZXMgPSBbJ0luc3RpdHV0aW9ucycsICfDqWR1Y2F0aW9uJywgJ3NpdGVzIGNvbW1lcmNpYXV4J107XHJcblxyXG5jbGFzcyBGb290ZXJBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgaXNMb2FkZWQ6IGZhbHNlLCBmb290ZXJJdGVtczogW10sIGNhdGVnb3JpZXM6IFtdIH07XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHJcblxyXG4gICAgICAgIGxldCBoZWFkZXJzID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbjtvZGF0YT12ZXJib3NlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxyXG4gICAgICAgICAgICBjYWNoZTogJ2RlZmF1bHQnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IHNpdGVVUkwgPSBfc3BQYWdlQ29udGV4dEluZm8uc2l0ZUFic29sdXRlVXJsO1xyXG4gICAgICAgIGxldCBhcGlQYXRoID0gc2l0ZVVSTCArIFwiL19hcGkvd2ViL2xpc3RzL2dldGJ5dGl0bGUoJ2xpbmtzZm9vdGVyJykvaXRlbXM/JHNlbGVjdD1UaXRsZSxSTU5HUF9MaW5rRm9vdGVyQ29sb25uZSxSTU5HUF9MaW5rRm9vdGVyQ29udGVudCxSTU5HUF9MaW5rRm9vdGVyUG9zQ29sXCI7XHJcblxyXG5cclxuXHJcbiAgICAgICAgZmV0Y2goYXBpUGF0aCwgaGVhZGVycylcclxuICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICByZXMgPT4gcmVzLmpzb24oKVxyXG4gICAgICAgICAgICApLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmZXRjaGVkIGRhdGEgPSAnLCBkKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmb290ZXJJdGVtc1Jlc3VsdCA9IGQuZC5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yaWVzID0gZm9vdGVySXRlbXNSZXN1bHQubWFwKGl0ZW0gPT4gaXRlbS5STU5HUF9MaW5rRm9vdGVyQ29sb25uZSkuZmlsdGVyKGZ1bmN0aW9uICh2LCBpLCBhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmluZGV4T2YodikgPT09IGlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmb290ZXJJdGVtc1Jlc3VsdCA9ICcsIGZvb3Rlckl0ZW1zUmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVySXRlbXM6IGZvb3Rlckl0ZW1zUmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBjYXRlZ29yaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgdG8gaGFuZGxlIGVycm9ycyBoZXJlXHJcbiAgICAgICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIGEgY2F0Y2goKSBibG9jayBzbyB0aGF0IHdlIGRvbid0IHN3YWxsb3dcclxuICAgICAgICAgICAgICAgIC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgR2V0SXRlbXNGb3JDYXRlZ29yeSA9IChjYXQpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5mb290ZXJJdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLlJNTkdQX0xpbmtGb290ZXJDb2xvbm5lID09IGNhdCk7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvKSB7XHJcbiAgICAgICAgLy8gWW91IGNhbiBhbHNvIGxvZyB0aGUgZXJyb3IgdG8gYW4gZXJyb3IgcmVwb3J0aW5nIHNlcnZpY2VcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLCBlcnJvckluZm8pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlzTG9hZGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlcl90b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcChjYXQgPT4gPEZvb3RlckNhdGVnb3J5IGtleT17Y2F0fSB0aXRsZT17Y2F0fSBpdGVtcz17dGhpcy5HZXRJdGVtc0ZvckNhdGVnb3J5KGNhdCl9IC8+KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX3RvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX2NhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENoYXJnZW1lbnQgLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5jbGFzcyBGb290ZXJDYXRlZ29yeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjYXRlZ29yeUl0ZW1zOiB0aGlzLnByb3BzLml0ZW1zXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNhdGVnb3J5SXRlbXMubWFwKGl0ZW0gPT4gPExpbmtGb290ZXIga2V5PXtpdGVtLl9fbWV0YWRhdGEuaWR9IGNvbnRlbnQ9e2l0ZW0uUk1OR1BfTGlua0Zvb3RlckNvbnRlbnR9PjwvTGlua0Zvb3Rlcj4pfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBMaW5rRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnRlbnQ6IHRoaXMucHJvcHMuY29udGVudFxyXG4gICAgICAgIC8vIH07XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhpcy5wcm9wcy5jb250ZW50IH19PjwvbGk+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZG9tQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlckFwcCcpO1xyXG5SZWFjdERPTS5yZW5kZXIoPEZvb3RlckFwcCB0aXRsZT17J1JlYWN0IEZvb3Rlcid9IC8+LCBkb21Db250YWluZXIpOyJdLCJzb3VyY2VSb290IjoiIn0=