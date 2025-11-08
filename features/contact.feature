Feature: Medavie Contact Numbers

@en
Scenario: Verify English contact information
Given I open "https://www.medavie.ca/en/"
When I click the "Contact" menu
Then the Contact page is displayed
Then I see the Medavie Blue Cross information:
  | region                | number
  | Atlantic Region       | 1-888-227-3400
  | Quebec                | 1-888-588-1212
  | Ontario               | 1-800-355-9133
  | Elsewhere in Canada   | 1-800-667-4511

@fr 
Scenario: Verify French contact information
Given I open "https://www.medavie.ca/fr/"
When I click the "Coordonnées" menu
Then the Coordonnées page is displayed
Then I see the Medavie Blue Croix Bleue Medavie:
  | region                   | number
  | Région de l’Atlantique   | 1-888-227-3400
  | Québec                   | 1-888-588-1212
  | Ontario                  | 1-800-355-9133
  | Ailleurs au Canada       | 1-800-667-4511