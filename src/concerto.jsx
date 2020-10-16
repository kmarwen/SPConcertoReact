(() => {

    // document.getElementById("divWelcomeLogin2").style.display = 'none';
    // debugger

    // encapsuler la logique après le chargement de sp.js
    // checking user permissions to show login control

    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', () => {

        var inDesignMode = document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value;
        if (inDesignMode == "1") {
            console.log('page is in edit mode')
            //suppression de l'icone user
            document.getElementById('divWelcomeLogin2').style.display = 'none'
        }
        else {
            console.log('page is in browse mode')
            let userdiv = document.querySelector('#O365_TopMenu > div > span > div:nth-child(6)')
            // déplacement de la div user welcome
            let loginSpan = document.querySelector('#divWelcomeLogin2 > span.login')
            loginSpan.appendChild(userdiv)

            //correction padding left
            document.querySelector('.o365cs-me-tile-nophoto-username-container > .o365cs-me-tile-nophoto-username').style.paddingLeft = '0'

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
})()