(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["concerto"],{

/***/ "./src/concerto.jsx":
/*!**************************!*\
  !*** ./src/concerto.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  // document.getElementById("divWelcomeLogin2").style.display = 'none';
  // debugger
  // encapsuler la logique après le chargement de sp.js
  // checking user permissions to show login control
  SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
    var inDesignMode = document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value;

    if (inDesignMode == "1") {
      console.log('page is in edit mode'); //suppression de l'icone user

      document.getElementById('divWelcomeLogin2').style.display = 'none';
    } else {
      console.log('page is in browse mode');
      var userdiv = document.querySelector('#O365_TopMenu > div > span > div:nth-child(6)'); // déplacement de la div user welcome

      var login = document.querySelector('span.login');
      login.appendChild(userdiv); //correction padding left

      document.querySelector('.ms-pub-logon span.login .o365cs-me-tile-nophoto-username-container > .o365cs-me-tile-nophoto-username').style.paddingLeft = '0px !important';
    }
    /*
            let headers = {
                    method: 'GET',
                    headers: {
                        Accept: "application/json;odata=verbose"
                    },
                    mode: 'cors',
                    cache: 'default'
                };
        
                var groupsUserUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/Web/effectiveBasePermissions";
                fetch(groupsUserUrl, headers)
                    .then(res => res.json())
                    .then(data => {
                        // console.log('fetched data = ', data)
                        var manageListsPerms = new SP.BasePermissions();
                        // debugger;
                        manageListsPerms.initPropertiesFromJson(data.d.EffectiveBasePermissions);
        
                        var hasManageListsPermission = manageListsPerms.has(SP.PermissionKind.addAndCustomizePages);
                        if (hasManageListsPermission) {
                            // document.getElementById("ms-designer-ribbon").style.display = 'block';
                            // document.getElementById("divWelcomeLogin2").style.display = 'flex';
                        }
                    });
        */

  });
})();

/***/ })

},[["./src/concerto.jsx","single-webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uY2VydG8uanN4Il0sIm5hbWVzIjpbIlNQIiwiU09EIiwiZXhlY3V0ZUZ1bmMiLCJpbkRlc2lnbk1vZGUiLCJkb2N1bWVudCIsImZvcm1zIiwiTVNPV2ViUGFydFBhZ2VGb3JtTmFtZSIsIk1TT0xheW91dF9JbkRlc2lnbk1vZGUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsInVzZXJkaXYiLCJxdWVyeVNlbGVjdG9yIiwibG9naW4iLCJhcHBlbmRDaGlsZCIsInBhZGRpbmdMZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxDQUFDLFlBQU07QUFFSDtBQUNBO0FBRUE7QUFDQTtBQUVBQSxJQUFFLENBQUNDLEdBQUgsQ0FBT0MsV0FBUCxDQUFtQixPQUFuQixFQUE0QixrQkFBNUIsRUFBZ0QsWUFBTTtBQUVsRCxRQUFJQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsS0FBVCxDQUFlQyxzQkFBZixFQUF1Q0Msc0JBQXZDLENBQThEQyxLQUFqRjs7QUFDQSxRQUFJTCxZQUFZLElBQUksR0FBcEIsRUFBeUI7QUFDckJNLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaLEVBRHFCLENBRXJCOztBQUNBTixjQUFRLENBQUNPLGNBQVQsQ0FBd0Isa0JBQXhCLEVBQTRDQyxLQUE1QyxDQUFrREMsT0FBbEQsR0FBNEQsTUFBNUQ7QUFDSCxLQUpELE1BS0s7QUFDREosYUFBTyxDQUFDQyxHQUFSLENBQVksd0JBQVo7QUFDQSxVQUFJSSxPQUFPLEdBQUdWLFFBQVEsQ0FBQ1csYUFBVCxDQUF1QiwrQ0FBdkIsQ0FBZCxDQUZDLENBR0Q7O0FBQ0EsVUFBSUMsS0FBSyxHQUFHWixRQUFRLENBQUNXLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBWjtBQUNBQyxXQUFLLENBQUNDLFdBQU4sQ0FBa0JILE9BQWxCLEVBTEMsQ0FPRDs7QUFDQVYsY0FBUSxDQUFDVyxhQUFULENBQXVCLHdHQUF2QixFQUFpSUgsS0FBakksQ0FBdUlNLFdBQXZJLEdBQXFKLGdCQUFySjtBQUVIO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCSCxHQTdDRDtBQThDSCxDQXRERCxJIiwiZmlsZSI6ImNvbmNlcnRvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcclxuXHJcbiAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpdldlbGNvbWVMb2dpbjJcIikuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIC8vIGRlYnVnZ2VyXHJcblxyXG4gICAgLy8gZW5jYXBzdWxlciBsYSBsb2dpcXVlIGFwcsOocyBsZSBjaGFyZ2VtZW50IGRlIHNwLmpzXHJcbiAgICAvLyBjaGVja2luZyB1c2VyIHBlcm1pc3Npb25zIHRvIHNob3cgbG9naW4gY29udHJvbFxyXG5cclxuICAgIFNQLlNPRC5leGVjdXRlRnVuYygnc3AuanMnLCAnU1AuQ2xpZW50Q29udGV4dCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgdmFyIGluRGVzaWduTW9kZSA9IGRvY3VtZW50LmZvcm1zW01TT1dlYlBhcnRQYWdlRm9ybU5hbWVdLk1TT0xheW91dF9JbkRlc2lnbk1vZGUudmFsdWU7XHJcbiAgICAgICAgaWYgKGluRGVzaWduTW9kZSA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncGFnZSBpcyBpbiBlZGl0IG1vZGUnKVxyXG4gICAgICAgICAgICAvL3N1cHByZXNzaW9uIGRlIGwnaWNvbmUgdXNlclxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2V2VsY29tZUxvZ2luMicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYWdlIGlzIGluIGJyb3dzZSBtb2RlJylcclxuICAgICAgICAgICAgbGV0IHVzZXJkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjTzM2NV9Ub3BNZW51ID4gZGl2ID4gc3BhbiA+IGRpdjpudGgtY2hpbGQoNiknKVxyXG4gICAgICAgICAgICAvLyBkw6lwbGFjZW1lbnQgZGUgbGEgZGl2IHVzZXIgd2VsY29tZVxyXG4gICAgICAgICAgICBsZXQgbG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzcGFuLmxvZ2luJylcclxuICAgICAgICAgICAgbG9naW4uYXBwZW5kQ2hpbGQodXNlcmRpdilcclxuXHJcbiAgICAgICAgICAgIC8vY29ycmVjdGlvbiBwYWRkaW5nIGxlZnRcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1zLXB1Yi1sb2dvbiBzcGFuLmxvZ2luIC5vMzY1Y3MtbWUtdGlsZS1ub3Bob3RvLXVzZXJuYW1lLWNvbnRhaW5lciA+IC5vMzY1Y3MtbWUtdGlsZS1ub3Bob3RvLXVzZXJuYW1lJykuc3R5bGUucGFkZGluZ0xlZnQgPSAnMHB4ICFpbXBvcnRhbnQnXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgbGV0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uO29kYXRhPXZlcmJvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlOiAnZGVmYXVsdCdcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZ3JvdXBzVXNlclVybCA9IF9zcFBhZ2VDb250ZXh0SW5mby53ZWJBYnNvbHV0ZVVybCArIFwiL19hcGkvV2ViL2VmZmVjdGl2ZUJhc2VQZXJtaXNzaW9uc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoKGdyb3Vwc1VzZXJVcmwsIGhlYWRlcnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmZXRjaGVkIGRhdGEgPSAnLCBkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hbmFnZUxpc3RzUGVybXMgPSBuZXcgU1AuQmFzZVBlcm1pc3Npb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZUxpc3RzUGVybXMuaW5pdFByb3BlcnRpZXNGcm9tSnNvbihkYXRhLmQuRWZmZWN0aXZlQmFzZVBlcm1pc3Npb25zKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFzTWFuYWdlTGlzdHNQZXJtaXNzaW9uID0gbWFuYWdlTGlzdHNQZXJtcy5oYXMoU1AuUGVybWlzc2lvbktpbmQuYWRkQW5kQ3VzdG9taXplUGFnZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc01hbmFnZUxpc3RzUGVybWlzc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXMtZGVzaWduZXItcmliYm9uXCIpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGl2V2VsY29tZUxvZ2luMlwiKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgKi9cclxuICAgIH0pO1xyXG59KSgpIl0sInNvdXJjZVJvb3QiOiIifQ==