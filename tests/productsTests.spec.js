import { test } from '../utils/CustomFixture'
import {Utils} from '../utils/test-utils';
import * as Assert from '../utils/Assertion';

test('ValidateProductSearchAndAddToCart', async ({ page,homePage,productsPage,viewCartPage,productsTestData}) => {
  const testData = productsTestData.ValidateProductSearchAndAddToCart;
  let expectedPrice;

  await Utils.navigateTo(page);

   await test.step(`Search specific product '${testData.productName}' & verify results.`, async () => {    
    await Utils.clickElement(homePage.lnkProducts,`Products link`);
    await Utils.enterText(productsPage.inputBoxSearchProduct,testData.productName,`Search product`);
    await Utils.clickElement(productsPage.btnSubmit,`Submit`);
    await Assert.verifyElementVisibile(productsPage.resultProductName(testData.productName),testData.productName);  
    expectedPrice = await productsPage.getPriceText();                             
  });

  await test.step(`Click on a product '${testData.productName}' and add it to the cart.`, async () => {    
    await Utils.clickElement(productsPage.lnkAddToCart,`Add To cart`);                
  });

  await test.step(`Verify product '${testData.productName}' details on cart page.`, async () => {    
    await Utils.clickElement(productsPage.lnkViewCart,`View Cart`);
    await Assert.verifyElementToHaveText(viewCartPage.cartDescription,testData.productName);
    await Assert.verifyElementToHaveText(viewCartPage.cartPrice,expectedPrice);
    await Assert.verifyElementToHaveText(viewCartPage.cartQuantity,testData.productQuantity);
    await Assert.verifyElementToHaveText(viewCartPage.cartTotal,expectedPrice);             
  });
});

