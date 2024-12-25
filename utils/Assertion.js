import {test,expect} from '@playwright/test'

  /**
    * @param {import ('@playwright/test').Locator} element
    * @param {string} elementName
    * @param {Boolean} hardAssertinon
  */ 
export const verifyElementVisibile = async(element,elementName,hardAssertinon = true)=>{
    await test.step(`Verify '${elementName}' should be visible.`, async () => {
        switch(hardAssertinon){
            case true:
              await expect(element).toBeVisible();
              break;
            case fasle:
              await expect.soft(element).toBeVisible();
              break;
            default:
                throw new Error(`Please check the arguments`); 
        }
    });
}

  /**
    * @param {import ('@playwright/test').Locator} element
    * @param {string} strExpectedValue
    * @param {Boolean} hardAssertinon
    */ 
  export const verifyElementToHaveText = async(element,strExpectedValue,hardAssertinon = true)=>{
    await test.step(`Validate expected match '${strExpectedValue}'.`, async () => {
        switch(hardAssertinon){
            case true:
              await expect(element).toHaveText(strExpectedValue);
              break;
            case fasle:
              await expect.soft(element).toHaveText(strExpectedValue);
              break;
            default:
                throw new Error(`Please check the arguments`); 
        }
    });
}

  /**
    * @param {import ('@playwright/test').Locator} element
    * @param {string} elementName
    * @param {Boolean} hardAssertinon
    */ 
  export const verifyElementToBeHidden = async(element,elementName,hardAssertinon = true)=>{
    await test.step(`Verify '${elementName}' should be hidden.`, async () => {
        switch(hardAssertinon){
            case true:
              await expect(element).toBeHidden();
              break;
            case fasle:
              await expect.soft(element).toBeHidden();
              break;
            default:
                throw new Error(`Please check the arguments`); 
        }
    });
}

  /**
    * @param {import ('@playwright/test').Locator} element
    * @param {string} strExpectedText
    * @param {Boolean} hardAssertinon
    */ 
  export const verifyElementToContainsText = async(element,strExpectedText,hardAssertinon = true)=>{
    await test.step(`Validate element contains text '${strExpectedText}'.`, async () => {
        switch(hardAssertinon){
            case true:
              await expect(element).toContainText(strExpectedText);
              break;
            case fasle:
              await expect.soft(element).toContainText(strExpectedText);
              break;
            default:
                throw new Error(`Please check the arguments`); 
        }
    });
}