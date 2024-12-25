import RegistrationTestDataJSON  from './../registrationTestData.json' assert {type: 'json'};
import ProductsTestDataJSON  from './../productsTestData.json' assert {type: 'json'};
import LoginTestDataJSON  from './../loginTestData.json' assert {type: 'json'};
import {test as base} from '@playwright/test';

export const test = base.extend({
    registrationTestData: 
    /**
    * @param {function(RegistrationTestDataJSON):void} use
    */ 
    async({},use)=> use (RegistrationTestDataJSON),

    productsTestData: 
    /**
    * @param {function(ProductsTestDataJSON):void} use
    */ 
    async({},use)=> use (ProductsTestDataJSON),

    loginTestData: 
    /**
    * @param {function(LoginTestDataJSON):void} use
    */ 
    async({},use)=> use (LoginTestDataJSON),
});