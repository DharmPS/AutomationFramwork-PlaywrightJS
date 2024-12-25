import { test } from '../utils/CustomFixture'
import {Utils} from '../utils/test-utils';
import * as Assert from './../utils/Assertion';

test('ValidateUserRegistration', async ({ page,homePage,loginPage,signupPage,registrationTestData}) => {
  let userData;
  const testData = registrationTestData.ValidateUserRegistration;
  await Utils.navigateTo(page);

  await test.step(`Click on the "Signup / Login" link.`, async () => {    
    await Utils.clickElement(homePage.lnkSignupLogin,`signup-login link`);                
  });

  await test.step(`Enter a new email address and a name in the registration form.`, async () => {    
    userData = await loginPage.enterSignUpUser();            
  }); 

  await test.step(`Enter all required fields in the registration form.`, async () => {    
    await signupPage.fillAccountInformation(testData);
    await signupPage.fillAddressInformation(testData);             
  }); 

  await test.step(`Validate Account is Created.`, async () => {    
    await Assert.verifyElementVisibile(signupPage.msgAccountCreated,`Account Created message`);              
  })

  await test.step(`Validate user is registered successfully.`, async () => {  
    await Utils.clickElement(homePage.lnkSignupLogin,`signup-login link`);    
    await Assert.verifyElementToBeHidden(homePage.lnkSignupLogin,`signup-login link`);
    await Assert.verifyElementToContainsText(loginPage.loggedInUser,userData.randomName);    
  })
});

