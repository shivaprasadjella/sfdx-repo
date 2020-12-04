global class New_Demo_Controller {
    
    @AuraEnabled
    public static string newDemo(string i){
        return 'Success';
        /*
        id p = userinfo.getProfileId();
        System.debug('p: ' + p);
        if(p == '00e0B000000RzbH' || p == '00e0B000000RzbM'){
            account a = [Select id, Digital_State_of_Employment_Brand__c, Digital_State_of_Hiring_Process__c, Reason_for_Outreach__c, Reason_for_Outreach_Date__c, Digital_State_of_Employment_Brand_Date__c, Digital_State_of_Hiring_Process_Date__c from Account where id =: i limit 1];
            System.debug('InsideA');
            If(a.Digital_State_of_Employment_Brand__c == null || a.Digital_State_of_Hiring_Process__c == null || a.Reason_for_Outreach__c == null){
                return 'Error';
            }
            else if((a.Digital_State_of_Employment_Brand_Date__c.addDays(180) < date.today()) || (a.Reason_for_Outreach_Date__c.addDays(180) < date.today()) || (a.Digital_State_of_Hiring_Process_Date__c.addDays(180) < date.today())){
                return 'Error';
            }
            return 'Success';
        }
        else{
            SYstem.debug('Else');
            return 'Success';
        }
*/
    }

}