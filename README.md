
Instruction to run the application. 

1. 




Description:

The purpose of this project is to automate the steps for Medavie contact web page both in french and english. 


--
Notes for me:

Steps taken:

1. Initialize git added to GitHub repo
2. Installed Node.js {npm init -y}
- package.json added
- Node.js - runtime outside of a browser
3. Install WebdriverIO & Cucumer
- {npm install @wdio/cli @wdio/local-runner @wdio/cucumber-framework @wdio/spec-reporter webdriverio wdio-chromedriver-service chromedriver
}
- node_modules folder added

4. Generate WDIO config
- {npx wdio config}
- answered prompt questions

5. Update wdio.conf.js
- added baseURL

6. Added contact.feature and added the English steps 
- Used Gherkin language(readable plain english language)

7. Coded the steps for Medavie contact steps
- Opens URL -> Contact page -> Confirm the contact and Check Region

8. 


WebdriverIO - Node.js library that lets me control the browser
Cucumber - Testing framework to write steps in plain english