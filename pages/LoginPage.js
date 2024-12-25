import { Fixture } from "./POManager/POFixture";
import {test} from '@playwright/test'
import { faker } from '@faker-js/faker';

export class LoginPage extends Fixture {
    // The setup method is where we initialize and define the elements that we will interact with on the LoginPage
    setup(){
        this.inputName = this.page.getByRole(`textbox`,{name:' name'});
        this.inputEmailAddress = this.page.locator(`input[data-qa='signup-email']`);
        this.btnSignup = this.page.getByRole(`button`,{name:' Signup'});    
        this.formLogin = this.page.locator(` form[action*='login']`);   
        this.inputLoginEmailId = this.page.locator(`input[data-qa='login-email']`);
        this.inputLoginPassword = this.page.locator(`input[data-qa='login-password']`);
        this.btnLogin = this.page.getByRole(`button`,{name:' Login'});  
        this.loggedInUser = this.page.locator(`[class='nav navbar-nav'] li`).filter({hasText:`Logged in as`})
    }

    /**
     * Enter user details for sign-up using random name and email.
     * 
     * @throws Will throw an error if the sign-up process fails.
     */
    enterSignUpUser = async () => { 
        let timestamp;
        let randomName;
        let randomEmail;
        try {
            await test.step('Enter name and email id', async () => {
                timestamp = new Date().toISOString().replace(/[-:T.]/g, ''); // Remove special characters from timestamp
                randomName = faker.person.firstName();  // Generates a random first name
                randomEmail = faker.internet.email();   // Generates a random email

                await this.inputName.fill(`${randomName} ${timestamp}`);
                await this.inputEmailAddress.fill(randomEmail);  
                await this.btnSignup.click();
            });
            return { randomName, randomEmail };
        } catch (error) {
            console.error('Error during sign-up process:', error);
            throw new Error(`Sign-up failed: ${error.message}`);
        }
    };

    /**
     * This method used for valid login.
     * 
     * @param {string} emailID - The email ID for login.
     * @param {string} password - The password for login.
     * 
     * @throws Will throw an error if the login failed.
     */
    validLogin = async (emailID, password) => {
        try {
            await test.step('Perform valid login', async () => {
                await this.inputLoginEmailId.fill(emailID);
                await this.inputLoginPassword.fill(password);
                await this.btnLogin.click();
            });
        } catch (error) {
            console.error('Error during login:', error);
            throw new Error(`Login failed: ${error.message}`);
        }
    };
}