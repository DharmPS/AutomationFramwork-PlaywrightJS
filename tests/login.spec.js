import { test } from '../utils/CustomFixture'
import {Utils} from '../utils/test-utils';
import * as Assert from './../utils/Assertion';

test('ValidateLoginAndLogoutFunctionality', async ({ page,homePage,loginPage,loginTestData}) => {
  const testData = loginTestData.ValidateLoginAndLogoutFunctionality;
  await Utils.navigateTo(page);

  await test.step(`Click on the 'Signup / Login' link.`, async () => {    
    await Utils.clickElement(homePage.lnkSignupLogin,`signup-login link`);                
  });

  await test.step(`Enter login credentials & validate user is logged in successfully`, async () => {    
    await loginPage.validLogin(testData.emailID,testData.password);    
    await Assert.verifyElementToBeHidden(homePage.lnkSignupLogin,`signup-login link`); 
    await Assert.verifyElementToContainsText(loginPage.loggedInUser,testData.userName);        
  });

  await test.step(`Click on the 'Logout' link & & validate user is logged out successfully`, async () => {    
    await Utils.clickElement(homePage.lnkLogout,`Logout link`);      
    await Assert.verifyElementVisibile(homePage.lnkSignupLogin,`signup-login link`);      
  });
});