import CustomSiteSearch from './customSiteSearch.jsx'
import FooterApp from './footer.jsx'

const domFooterContainer = document.getElementById('footerApp');
ReactDOM.render(<FooterApp title={'React Footer'} />, domFooterContainer);

const domCustomSiteSearchContainer = document.getElementById('siteSearchBox');
ReactDOM.render(<CustomSiteSearch title={'React Custom Site Search'} />, domCustomSiteSearchContainer);
    
(() => {

    

    // document.getElementById("divWelcomeLogin2").style.display = 'none';
    // debugger

    // encapsuler la logique après le chargement de sp.js
    // checking user permissions to show login control

    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', () => {

        // correction cssen fonction de la page
        var inDesignMode = document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value;
        if (inDesignMode == "1") {
            //console.log('page is in edit mode')
            //suppression de l'icone user
            document.getElementById('divWelcomeLogin2').style.display = 'none'
        }
        else {
            //console.log('page is in browse mode')
            let userdiv = document.querySelector('#O365_TopMenu > div > span > div:nth-child(6)')
            // déplacement de la div user welcome
            let loginSpan = document.querySelector('#divWelcomeLogin2 > span.login')
            loginSpan.appendChild(userdiv)

            //correction padding left
            document.querySelector('.o365cs-me-tile-nophoto-username-container > .o365cs-me-tile-nophoto-username').style.paddingLeft = '0'
        }

        // correction du clic des liens
        document.querySelectorAll('.ms-core-listMenu-horizontalBox li.static > a.dynamic-children')
		.forEach(aElement => {					
					const eLis = getEventListeners(aElement);
					//console.log(eLis);
					if (Object.keys(eLis).length !== 0) 
					{
						aElement.addEventListener('click', function(e){
							e.preventDefault(); 
						});						
					}

					const eve = getEventListeners(aElement); 
					if (Object.keys(eve).length !== 0) 
					{   
						console.log(eve);
					}
            })

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