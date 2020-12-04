({
    invoke : function(cmp, event, helper) {
        var navService = cmp.find("navService");
        // Sets the route to /lightning/o/Account/home
        var pageReference = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            },
            state: {
                filterName: 'RecentlyViewedAccounts'
            }
        };
        cmp.set("v.pageReference", pageReference);
        // Set the URL on the link or use the default if there's an error
        // var defaultUrl = "#"
        var defaultUrl = "https://sjella-dev-ed.my.salesforce.com/lightning/o/Account/list?filterName=00B4W00000B30AYUAZ";
        navService.generateUrl(pageReference)
            .then($A.getCallback(function(url) {
                cmp.set("v.url", url ? url : defaultUrl);
            }), $A.getCallback(function(error) {
                cmp.set("v.url", defaultUrl);
            }));
    }
})