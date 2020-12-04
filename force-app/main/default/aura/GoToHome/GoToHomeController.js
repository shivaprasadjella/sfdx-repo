({
	init : function(component, event, helper) {
        var homeEvent = $A.get("e.force:navigateToObjectHome");
        //var homeEvent = $A.get("e.force:navigateToList")
        homeEvent.setParams({
            "scope": "Contact"
        });
    	homeEvent.fire();
		
	}
})