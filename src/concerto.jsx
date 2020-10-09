(() => {

    // document.getElementById("divWelcomeLogin2").style.display = 'none';
    // debugger

    // encapsuler la logique après le chargement de sp.js
    // checking user permissions to show login control

    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', () => {

        let login = document.querySelector('#O365_TopMenu > div > span > div:nth-child(6)')

        document.querySelector('span.login').appendChild(login)
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
})()