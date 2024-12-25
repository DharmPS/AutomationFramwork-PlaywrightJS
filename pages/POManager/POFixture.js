

/**
 * @typedef {import('@playwright/test').PlaywrightTestArgs & 
*           import('@playwright/test').PlaywrightTestOptions & 
*           import('@playwright/test').PlaywrightWorkerArgs & 
*           import('@playwright/test').PlaywrightWorkerOptions} FixtureOptions
*/

export class Fixture{

/**
 * @param {FixtureOptions} opts
*/  

    constructor({browser,page}){
        this.browser=browser;
        this.page = page;
    }           

    async setup(){};//This method is uded for setting up necessary conditions before each test runs.

    async teardown(){}; //this method for cleaning up or closing resources after the test.

    async run(use){
        await this.setup()
        await use(this);
        await this.teardown();
        return this;
    }
}