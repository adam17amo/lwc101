# lwc101
Code for Lightning Components 101: An Apex Developer's Guide

1. sfdx force:user:permset:assign --permsetname LWC101 --targetusername <scratch-org-username>@example.com
2. Run import commands in data/initDataSetup.txt
sfdx force:data:tree:import --sobjecttreefiles data/Contact.json
sfdx force:data:tree:import --sobjecttreefiles data/Opportunity.json