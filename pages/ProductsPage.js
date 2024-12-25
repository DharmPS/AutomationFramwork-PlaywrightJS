import { Fixture } from "./POManager/POFixture";
import {test} from '@playwright/test'

export class ProductsPage extends Fixture {
    // The setup method is where we initialize and define the elements that we will interact with on the ProductsPage
    setup(){
        this.inputBoxSearchProduct = this.page.getByPlaceholder(`Search Product`);
        this.btnSubmit = this.page.locator(`button[id='submit_search']`);
        this.resultProductName = (strProductName)=> this.page.getByText(strProductName).last();
        this.txtPrice = this.page.locator('h2', { hasText: /^Rs\.\s*\d+$/ }).first();
        this.lnkAddToCart = this.page.locator(`a[class*='add-to-cart']`).first();
        this.lnkViewCart = this.page.getByRole(`link`,{name:`View Cart`});      
    }   

        // Method to get the price text
        getPriceText = async () => {
            let priceText ="";
            await test.step('Get the price text', async () => {    
                try{
                    priceText = await this.txtPrice.textContent();  
                } catch (error) {
                    console.error('Error while getting price:', error);
                    throw new Error(`Price retrieval failed: ${error.message}`);
                }                        
            });
            return priceText.trim(); 
        };
}