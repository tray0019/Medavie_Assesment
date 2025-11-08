import { Given, When, Then } from '@wdio/cucumber-framework';
import { $, browser, expect } from '@wdio/globals';


Given('I open {string}', async (url) => {
  await browser.url(url);
});


When('I click the {string} menu', async (_label) => {
  await browser.url('/en/contact/');
});

Then('the Contact page is displayed', async () => {
  await browser.waitUntil(
    async () => (await browser.getUrl()).includes('/en/contact'),
  );

});

Then('I see the Medavie Blue Cross numbers:', async (dataTable) => {
  const text = await $('main').getText(); 
  for (const { region } of dataTable.hashes()) {
    expect(text.toLowerCase()).toContain(region.toLowerCase());
  }
});
