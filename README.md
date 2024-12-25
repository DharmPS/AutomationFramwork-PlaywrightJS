Playwright Automation Framework
-------------------------------

This repository contains an automation framework built using Playwright & JS. Below is explanation of the folder structure.

Folder Structure:-
-----------------
1.node_modules/         # It contains dependencies installed via npm.
2.pages/                # Page Object Models (POM) for application pages.
 a.)POManager & Fixture  # It contains fixtures for pages and setting up & cleaning up fixtures after test.
 b.)HomePage.js       # Home page locators & functions.
 c.)LoginPage.js      # Login page locators & functions.
 d.)ProductsPage.js   # Products page locators & functions.
 e.)SignupPage.js     # Signup page locators & functions.
 f.)ViewCartPage.js   # View Cart locators & functions.
3.test-results/         # Test execution reports.
 a.)html/             # HTML (index.html) formatted test reports.
 b.)output/           # It contains video report.
3.testData/             # Test data for test cases.
 a.)loginTestData.json          # Test data for login tests.
 b.)productsTestData.json       # Test data for product's related tests.
 c.)registrationTestData.json   # Test data for registration tests.
4.tests/                # Spec files containing test cases.
 a.)login.spec.js              # Test cases for login functionalities.
 b.)productsTests.spec.js      # Test cases for product functionalities.
 c.)registrationTests.spec.js  # Test cases for registration functionalities.
5.utils/                # Utility files for reusable functions and custom assertions.
 a.)Assertion.js      # Custom assertion methods.
 b.)CustomFixture.js  # Custom fixtures to merge all the fixtures.
 c.)test-utils.js     # Utility functions for common tasks.
6. gitignore            # Files and folders to ignore in version control in github.
7.package-lock.json     # Auto-generated file for npm dependency tree.
8.package.json          # Project configuration and dependencies.
9.playwright.config.js  # Playwright configuration file.


Description of some imp files:-
------------------------------

1. "pages/"
This folder contains Page Object Model (POM) files. Each file.

2. "test-results/"
This folder stores the output of test execution report.

3. "testData/"
This folder contains JSON files that store test data for different test scenarios.

4. "tests/"
This folder contains the spec files for writing test cases. Each file corresponds to a specific module/feature of the application.

5. "utils/"
The utilities folder contains helper files for common tasks like assertions etc.

6. "playwright.config.js"
This is the central configuration file for Playwright. It contains settings like browser configurations, base URL, timeouts, and other global settings for the framework.

7. Getting Started:-

Prerequisites:-
- Latest Node.js installed on your system.
- Playwright installed in your project.

Installation:-
1. Clone the repository:
   git clone <repository_url>
   
2. Install dependencies:
   npm install

Running Tests:-
npx playwright test
