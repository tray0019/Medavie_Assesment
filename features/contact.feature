Feature: Medavie Contact Numbers

@en
Scenario: Verify English contact Numbers
Given I open "https://www.medavie.ca/en/"
When I click the "Contact" menu
Then the Contact page is displayed
Then I see the Medavie Blue Cross numbers:
  | region                | number
  | Atlantic Region       | 1-888-227-3400
  | Quebec                | 1-888-588-1212
  | Ontario               | 1-800-355-9133
  | Elsewhere in Canada   | 1-800-667-4511



