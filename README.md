Description:

The purpose of this project is to automate the steps for Medavie contact web page both in french and english. 

Instruction on How to run the automation. 

User must have the following Tech Stacks.

JavaScript, WebdriverIO v9 and Cucumber installed
IDE that supports JavaScript automation (Visual Studio code etc.)

1. Clone the repository [https://github.com/tray0019/Medavie_Assesment.git]
2. Initialize Node [npm init -y]
3. Install dependencies
[npm install @wdio/cli @wdio/local-runner @wdio/cucumber-framework \
@wdio/spec-reporter @wdio/selenium-standalone-service webdriverio chromedriver]
4. Run WebdriverIO [npx wdio config]
5. Run the Automation [npx wdio run wdio.conf.js]





















--
Notes for me:

Steps taken:

1. Initialize git added to GitHub repo
2. Installed Node.js {npm init -y}
- package.json added
- Node.js - runtime outside of a browser
3. Install WebdriverIO & Cucumer
- {npm install @wdio/cli @wdio/local-runner @wdio/cucumber-framework \
@wdio/spec-reporter @wdio/selenium-standalone-service webdriverio chromedriver
}
- node_modules folder added

4. Generate WDIO config
- {npx wdio config}
- answered prompt questions
- wdio.conf.js added

5. Configured wdio.conf.js
- added baseURL

6. Added contact.feature and added the English steps 
- Used Gherkin language(readable plain english language)

7. Coded English version for Medavie contact steps
- Opens URL -> Contact page -> Confirm the contact and Check Region

8. Coded French version for Medavie contact steps
- instruction step says “https://www.medavie.ca/fn/”
- fn instead of fr, might be typo

9. Run [npx wdio run wdio.conf.js]
- Passed all steps 

WebdriverIO - Node.js library that lets me control the browser
Cucumber - Testing framework to write steps in plain english