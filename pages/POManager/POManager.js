import {expect,test as base} from '@playwright/test';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { SignupPage } from '../SignupPage';
import { ProductsPage } from '../ProductsPage';
import { ViewCartPage } from '../ViewCartPage';

export const test = base.extend({
    homePage: 
    /**
    * @param {*} - This represents the parameters passed by Playwright (like `browser`, `page`)
    * @param {function(HomePage):void} use - The use callback is expected to take the `HomePage` instance
    */ 
    async({browser,page},use)=> await new HomePage({browser,page}).run(use),

    loginPage: 
    /**
    * @param {*} - This represents the parameters passed by Playwright (like `browser`, `page`)
    * @param {function(LoginPage):void} use - The use callback is expected to take the `LoginPage` instance
    */ 
    async({browser,page},use)=> await new LoginPage({browser,page}).run(use),

    signupPage: 
    /**
    * @param {*} - This represents the parameters passed by Playwright (like `browser`, `page`)
    * @param {function(SignupPage):void} use - The use callback is expected to take the `SignupPage` instance
    */ 
    async({browser,page},use)=> await new SignupPage({browser,page}).run(use),

    productsPage: 
    /**
    * @param {*} - This represents the parameters passed by Playwright (like `browser`, `page`)
    * @param {function(ProductsPage):void} use - The use callback is expected to take the `ProductsPage` instance
    */ 
    async({browser,page},use)=> await new ProductsPage({browser,page}).run(use),

    viewCartPage: 
    /**
    * @param {*} - This represents the parameters passed by Playwright (like `browser`, `page`)
    * @param {function(ViewCartPage):void} use - The use callback is expected to take the `ViewCartPage` instance
    */ 
    async({browser,page},use)=> await new ViewCartPage({browser,page}).run(use),

})

export {expect};