import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
import getOppList from '@salesforce/apex/OpportunityController.getOppList';

export default class ApexWireMethodToProperty extends LightningElement {
    @wire(getContactList) contacts;
    @wire(getOppList) opportunities;
}