import { Fixture } from "./POManager/POFixture";
import {test} from '@playwright/test'

export class SignupPage extends Fixture {
    // The setup method is where we initialize and define the elements that we will interact with on the SignupPage
    setup(){
        this.radioTitle= this.page.getByText(`Mr.`);
        this.inputBoxPassword= this.page.getByRole(`textbox`,{name:'Password'})
        this.lstDays= this.page.locator(`select[id='days']`);
        this.lstMonths= this.page.locator(`select[id='months']`);
        this.lstYears = this.page.locator(`select[id='years']`);
        this.inputBoxFirstName= this.page.getByRole(`textbox`,{name:'First name'});
        this.inputBoxLastName= this.page.getByRole(`textbox`,{name:'Last name'});
        this.inputBoxAddress= this.page.locator(`input[id='address1']`);
        this.lstCountry= this.page.locator(`select[id='country']`);
        this.inputBoxState= this.page.getByRole(`textbox`,{name:'State'});      
        this.inputBoxCity= this.page.getByRole(`textbox`,{name:'City'});
        this.inputBoxZipcode= this.page.locator(`input[id='zipcode']`);
        this.inputBoxMobileNo= this.page.getByRole(`textbox`,{name:'Mobile Number'});
        this.btnCreateAccount = this.page.getByRole(`button`,{name:`Create Account`});     
        this.msgAccountCreated = this.page.getByText(`Account Created!`);
    }   

    /**
     * Fills in the account information section.
     * 
     * @param {Object} testData - The data to fill in the account information.
     * @param {string} testData.password - The password to be entered.
     * @param {string} testData.day - The day of birth to select.
     * @param {string} testData.month - The month of birth to select.
     * @param {string} testData.year - The year of birth to select.
     * 
     * @throws Will throw an error if the account information's filling process fails.
     */
    fillAccountInformation = async (testData) => {
        try {
            await test.step('Fill in account information form', async () => {
                await this.radioTitle.click();   
                await this.inputBoxPassword.fill(testData.password);  
                await this.lstDays.selectOption(testData.day);
                await this.lstMonths.selectOption(testData.month);  
                await this.lstYears.selectOption(testData.year);
            });
        } catch (error) {
            console.error('Error during the account information entry process:', error);
            throw new Error(`Account information entry failed: ${error.message}`);
        }
    };

 /**
     * Fills in the address information section of address information.
     * 
     * @param {Object} testData - The data to fill in the address fields.
     * @param {string} testData.firstName - The first name of the user.
     * @param {string} testData.lastName - The last name of the user.
     * @param {string} testData.address - The address of the user.
     * @param {string} testData.country - The country of the user.
     * @param {string} testData.state - The state of the user.
     * @param {string} testData.city - The city of the user.
     * @param {string} testData.zipcode - The zipcode of the user.
     * @param {string} testData.mobileNumber - The mobile number of the user.
     * 
     * @throws Will throw an error if the address information's filling process fails.
     */
    fillAddressInformation = async (testData) => {
        try {
            await test.step('Fill in address information form', async () => {
               await this.inputBoxFirstName.fill(testData.firstName);
               await this.inputBoxLastName.fill(testData.lastName);
               await this.inputBoxAddress.fill(testData.address);
               await this.lstCountry.selectOption(testData.country);
               await this.inputBoxState.fill(testData.state);
               await this.inputBoxCity.fill(testData.city);
               await this.inputBoxZipcode.fill(testData.zipcode);
               await this.inputBoxMobileNo.fill(testData.mobileNumber);
               await this.btnCreateAccount.click();
            });
        } catch (error) {
            console.error('Error during the address information entry process:', error);
            throw new Error(`Address information entry failed: ${error.message}`);
        }
    };
}