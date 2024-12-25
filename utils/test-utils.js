import { test } from '@playwright/test';


export class Utils {
  /**
    * @param {import ('@playwright/test').Page} page
  */ 
  static navigateTo = async (page) => {
    await test.step('Navigate to the homepage', async () => {
      await page.goto('/');
    });
  }

  /**
    * @param {import ('@playwright/test').Locator} element
    * @param {string} elementName
    */ 
  static clickElement = async (element,elementName) => {
    await test.step(`Click on element ${elementName} `, async () => {
      await element.click();
    });
  }

    /**
    * @param {import ('@playwright/test').Locator} element
    * @param {string} value
    * @param {string} elementName
    */ 
    static enterText = async (element, value, elementName) => {
      await test.step(`Enter text '${value}' on element '${elementName}' `, async () => {
        await element.fill(value);
      });
    }
}

