({
    
    gotoURL : function (component) {
        var urlEvent = $A.get("e.force:navigateToObjectHome");
        urlEvent.setParams({
          "scope": "Account"
        });
        urlEvent.fire();
    } 
    
    
    /*navHome : function (component, event, helper) {
        var homeEvent = $A.get("e.force:navigateToObjectHome");
        homeEvent.setParams({
            "scope": "Account"
        });
    	homeEvent.fire();
	}*/
    /******
    gotoURL : function (component) {
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
          //"url": "/006/o"
          "url": "/lightning/o/Opportunity/list"
        });
        urlEvent.fire();
    } 
    *****/
})