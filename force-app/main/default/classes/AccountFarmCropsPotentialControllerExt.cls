public class AccountFarmCropsPotentialControllerExt {
    public String accountId { get; set; }
    public Account a { get; set; }
    public String fiscalYear { get; set; }
    public String planned { get; set; }
    public Boolean shouldReload { get; set; }
    public String potentialChemMargin { get; set; }
    public String potentialChemSales { get; set; }
    public String potentialFertMargin { get; set; }
    public String potentialFertSales { get; set; }
    public String potentialGrainMargin { get; set; }
    public String potentialGrainSales { get; set; }
    public String potentialSeedMargin { get; set; }
    public String potentialSeedSales { get; set; }
    public Boolean canEditAccount { get; set; }

    public AccountFarmCropsPotentialControllerExt(ApexPages.StandardController controller) {
        accountId = ApexPages.currentpage().getParameters().get( 'id' );
        loadAccount();
        
       
        
        loadData();
        shouldReload = false;
    }
    
    public void loadAccount() {
        if (accountId != null) {
            
            
            System.debug('TEST 1');
        }
    }
    
    public void loadData() {
        
        if (accountId != null) {
            System.debug('TEST 2');
        }
    }
    
    public void startPlanning() {
        update a;
        Integer currentFiscalYear;
        
        loadAccount();
        shouldReload = true;
    }
    
    public void stopPlanning() {
//        a.Plan__c = 'No';
        update a;
        loadAccount();
    }

    public Integer nullToZero(Integer i) {
        if (i == null)
            return 0;
        else
            return i;
    }
}