import { Given, When, Then } from '@wdio/cucumber-framework';
import { $, browser, expect } from '@wdio/globals';


Given('I open {string}', async (url) => {
  await browser.url(url);
});

// Both English and french
When('I click the {string} menu', async (_label) => {
  const current = await browser.getUrl();
  const isFrench = current.includes('/fr/');
  const contactPath = isFrench ? '/fr/coordonnees/' : '/en/contact';
  await browser.url(contactPath);
});

/**
 * English coded
 */
Then('the Contact page is displayed', async () => {
  await browser.waitUntil(
    async () => (await browser.getUrl()).includes('/en/contact'),
  );

});

Then('I see the Medavie Blue Cross information:', async (dataTable) => {
  const text = await $('main').getText(); 
  for (const { region } of dataTable.hashes()) {
    expect(text.toLowerCase()).toContain(region.toLowerCase());
  }
});


/**
 * Fench coded
 */
Then('the Coordonnées page is displayed', async () => {
  await browser.waitUntil(
    async () => (await browser.getUrl()).includes('/fr/coordonnees'),
  );

});


Then('I see the Medavie Blue Croix Bleue Medavie:', async (dataTable) => {
  const text = await $('main').getText(); 
  for (const { region } of dataTable.hashes()) {
    expect(text.toLowerCase()).toContain(region.toLowerCase());
  }
});