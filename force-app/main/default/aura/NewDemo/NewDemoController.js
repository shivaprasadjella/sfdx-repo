({
    createDemo : function(cmp, event, helper) {
        
        var action = cmp.get("c.newDemo");
        var recordId = cmp.get("v.recordId");
        console.log('Record Id: ' + recordId)
        action.setParams({ i : recordId });
        action.setCallback(this, function(response) {
            console.log(response);
            var state = response.getState();
            console.log('state: ' + state);
            var url = response.getReturnValue();
            console.log('URL: ' + url);
            console.log('Here');
            if (state === "SUCCESS") {
                if(url === 'Success'){
                    
                    var createRecordEvent = $A.get("e.force:createRecord");
                    console.log('createRecordEvent: ' + createRecordEvent);
                    createRecordEvent.setParams({
                        "entityApiName": "Event",
                        "recordTypeId" : "0124W000001AbNJ",
                        "defaultFieldValues": {
                            "WhatId" : recordId
                        }
                        
                    });
                    createRecordEvent.fire();
                }
                else {
                    alert('Error: The following fields must be updated within the past 180 days: Digital State of Employment Brand, Digital State of Hiring Process, and Reason for Outreach.');
                } 
            } else {
                alert('Error: Please see operations');
            } 
        });
        $A.enqueueAction(action);
    }
    
})