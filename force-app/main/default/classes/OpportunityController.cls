public with sharing class OpportunityController {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOppList(){
        return [
            SELECT Id, Name, StageName, Amount
            FROM Opportunity
            ORDER BY Amount DESC
        ];
    }
}
